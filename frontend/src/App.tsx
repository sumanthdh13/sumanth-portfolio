import { useState } from 'react'
import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileBadge,
  FileText,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Server,
  Workflow,
  X,
  Zap,
  GitBranch,
  Gauge,
  Package,
  Plug,
  RefreshCw,
  Blocks,
} from 'lucide-react'

type IconComponent = ComponentType<{ size?: number; className?: string }>

const technologyLogos: Record<string, string> = {
  Java: 'https://cdn.simpleicons.org/openjdk',
  Python: 'https://cdn.simpleicons.org/python',
  'Spring Boot': 'https://cdn.simpleicons.org/springboot',
  Spring: 'https://cdn.simpleicons.org/spring',
  MySQL: 'https://cdn.simpleicons.org/mysql',
  Redis: 'https://cdn.simpleicons.org/redis',
  'Apache Kafka': 'https://cdn.simpleicons.org/apachekafka',
  Kafka: 'https://cdn.simpleicons.org/apachekafka',
  Docker: 'https://cdn.simpleicons.org/docker',
  AWS: 'https://cdn.simpleicons.org/amazonaws',
  Maven: 'https://cdn.simpleicons.org/apachemaven',
  Git: 'https://cdn.simpleicons.org/git',
  GitHub: 'https://cdn.simpleicons.org/github',
  Hibernate: 'https://cdn.simpleicons.org/hibernate',
  'React.js': 'https://cdn.simpleicons.org/react',
  TypeScript: 'https://cdn.simpleicons.org/typescript',
}

const genericIcons: Record<string, IconComponent> = {
  SQL: Database,
  'REST APIs': Plug,
  Microservices: Workflow,
  JPA: Layers,
  'Quarkus (Fundamentals)': Server,
  'Stored Procedures': FileText,
  'Query Optimization': Gauge,
  Multithreading: Workflow,
  Concurrency: GitBranch,
  Caching: Zap,
  'System Design': Blocks,
  'Root Cause Analysis': Search,
  'CI/CD': RefreshCw,
  'AWS Basics': Server,
  'IntelliJ IDEA': Code2,
  Postman: Plug,
  DBeaver: Database,
  'MySQL Workbench': Database,
  'VS Code': Code2,
  Jira: CheckCircle2,
  Basecamp: BriefcaseBusiness,
}

function TechIcon({ name }: { name: string }) {
  const logo = technologyLogos[name]
  const GenericIcon = genericIcons[name]

  if (logo) {
    return (
        <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="tech-icon-image"
            loading="lazy"
        />
    )
  }

  if (GenericIcon) {
    return <GenericIcon size={15} className="tech-icon-generic" />
  }

  return <Code2 size={15} className="tech-icon-generic" />
}

function TechTag({ name }: { name: string }) {
  return (
      <span className="tech-tag">
      <TechIcon name={name} />
      <span>{name}</span>
    </span>
  )
}

function SectionHeading({
                          eyebrow,
                          title,
                          description,
                        }: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
      <div className="section-heading">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
  )
}

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

const skillGroups = [
  {
    title: 'Programming Languages',
    description: 'Languages I use for backend development and data operations.',
    icon: Code2,
    skills: ['Java', 'Python', 'SQL'],
  },
  {
    title: 'Backend Technologies',
    description: 'Frameworks and API technologies for building backend services.',
    icon: Server,
    skills: [
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'Hibernate',
      'JPA',
      'Quarkus (Fundamentals)',
    ],
  },
  {
    title: 'Database & Messaging',
    description: 'Data persistence, query performance and asynchronous messaging.',
    icon: Database,
    skills: [
      'MySQL',
      'Stored Procedures',
      'Query Optimization',
      'Redis',
      'Apache Kafka',
    ],
  },
  {
    title: 'Engineering Concepts',
    description: 'Core engineering practices used to build reliable applications.',
    icon: Workflow,
    skills: [
      'Multithreading',
      'Concurrency',
      'Caching',
      'System Design',
      'Root Cause Analysis',
    ],
  },
  {
    title: 'DevOps & Cloud',
    description: 'Build, delivery, containerization and cloud fundamentals.',
    icon: Package,
    skills: ['CI/CD', 'Docker', 'AWS Basics', 'Maven'],
  },
  {
    title: 'Tools & Platforms',
    description: 'Tools used for development, debugging, collaboration and testing.',
    icon: Layers,
    skills: [
      'Git',
      'GitHub',
      'IntelliJ IDEA',
      'Postman',
      'DBeaver',
      'MySQL Workbench',
      'VS Code',
      'Jira',
      'Basecamp',
    ],
  },
]

const achievements = [
  {
    value: '10+',
    title: 'Microservices & APIs',
    description: 'Developed backend services and REST APIs.',
    icon: Server,
  },
  {
    value: '30%',
    title: 'Database Performance',
    description: 'Improved performance through SQL and logic optimization.',
    icon: Database,
  },
  {
    value: '30–50%',
    title: 'API Response Time',
    description: 'Contributed to faster API processing with Kafka and Redis.',
    icon: Gauge,
  },
  {
    value: '50+',
    title: 'Production Issues',
    description: 'Resolved issues through debugging and root cause analysis.',
    icon: CheckCircle2,
  },
]

const experienceHighlights = [
  'Developed 10+ Spring Boot microservices and REST APIs using Java for stock management, billing, loan processing, and payment workflows.',
  'Optimized MySQL queries and business logic, improving system throughput by approximately 30%.',
  'Integrated Kafka and Redis, contributing to API response time improvements of 30–50%.',
  'Resolved 50+ production issues through debugging and root cause analysis, improving application reliability and performance.',
]

const experienceTechnologies = [
  'Java',
  'Spring Boot',
  'Microservices',
  'REST APIs',
  'MySQL',
  'Kafka',
  'Redis',
  'Hibernate',
]

const projects = [
  {
    number: '01',
    title: 'GrainBank Farmer',
    category: 'Farmer Operations & Warehouse Management',
    description:
        'Backend systems supporting farmer grain storage, inventory tracking, warehouse operations, stock movement, billing, and financial reconciliation.',
    highlights: [
      'Engineered backend functionality for farmer grain storage, inventory tracking, and warehouse operations serving 5,000+ farmers.',
      'Implemented stock flows covering procurement, release, and withdrawal, helping reduce manual reconciliation by 80%.',
      'Automated billing and rent calculations with invoice generation to support accurate financial operations.',
      'Developed a moisture-based deduction engine, achieving 95%+ pricing accuracy and reducing disputes by 60%.',
      'Implemented Statement of Account APIs for loans, billing, and stock history.',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'REST APIs'],
  },
  {
    number: '02',
    title: 'GrainBank Buyer',
    category: 'Trading & Negotiation Platform',
    description:
        'Buyer-facing trading platform supporting vendor onboarding, inventory visibility, dynamic pricing, negotiation, and transaction workflows.',
    highlights: [
      'Contributed to a buyer platform enabling real-time trading with dynamic pricing and inventory visibility.',
      'Developed backend functionality for the Insta Trade module, including vendor onboarding, verification, and transaction lifecycle workflows.',
      'Engineered negotiation workflows supporting 1,000+ pricing interactions per cycle, contributing to a 35% increase in deal conversion.',
      'Integrated billing, rent, and moisture deduction logic to support accurate financial transactions.',
      'Optimized Statement of Account APIs processing 100K+ records per month, improving performance by 40%.',
    ],
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'MySQL', 'Redis'],
  },
  {
    number: '03',
    title: 'GrainBank Web Platform',
    category: 'Enterprise Financial & Operations Platform',
    description:
        'Backend services supporting loan processing, warehouse requests, stock releases, financial operations, and unified reporting across modules.',
    highlights: [
      'Developed backend services for loan processing, warehouse requests, stock releases, and financial operations.',
      'Worked on role-based access control, audit trails, and real-time notification workflows.',
      'Contributed to Statement of Account reporting services for unified financial visibility across modules.',
      'Enhanced API response times by up to 50% through caching and SQL query tuning.',
    ],
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Redis', 'SQL'],
  },
]

const certificates = [
  {
    title: 'Java Full Stack Development Certification',
    issuer: 'Pentagon Space · Microsoft & Quantum Learnings',
    file: '/certificates/java-full-stack-pentagon.pdf',
    type: 'Certification',
  },
  {
    title: 'Java Full Stack Web Development Certification',
    issuer: 'Knowledge Solution India',
    file: '/certificates/java-full-stack-knowledge-solutions.pdf',
    type: 'Certification',
  },
  {
    title: 'Software Development Internship',
    issuer: 'Cyphy Signals India Pvt. Ltd.',
    file: '/certificates/internship-cyphy-signals.pdf',
    type: 'Internship',
  },
  {
    title: 'Software Development Internship',
    issuer: 'Knowledge Solution India · Microsoft Partner',
    file: '/certificates/internship-knowledge-solutions.pdf',
    type: 'Internship',
  },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
      <div className="portfolio-shell">
        <header className="site-header">
          <nav className="navigation container">
            <a className="brand" href="#home" onClick={closeMobileMenu}>
              <span className="brand-mark">SH</span>
              <span>Sumanth Hegde</span>
            </a>

            <div className="desktop-nav">
              {navigation.map(([label, id]) => (
                  <a key={id} href={`#${id}`}>
                    {label}
                  </a>
              ))}
            </div>

            <a className="nav-contact" href="#contact">
              Let's Connect <ArrowUpRight size={15} />
            </a>

            <button
                className="mobile-menu-button"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {mobileMenuOpen && (
              <div className="mobile-nav">
                {navigation.map(([label, id]) => (
                    <a key={id} href={`#${id}`} onClick={closeMobileMenu}>
                      {label}
                      <ArrowUpRight size={15} />
                    </a>
                ))}
              </div>
          )}
        </header>

        <main>
          {/* HERO */}
          <section className="hero-section section-anchor" id="home">
            <div className="container hero-grid">
              <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65 }}
              >
                <div className="availability">
                  <span className="availability-dot" />
                  Available for opportunities
                </div>

                <p className="hero-role">JAVA BACKEND ENGINEER</p>

                <h1>
                  Building scalable
                  <span>backend systems.</span>
                </h1>

                <p className="hero-intro">
                  Hi, I'm <strong>Sumanth Hegde</strong>, a Backend Software
                  Developer with <strong>2.9 years of professional experience</strong>{' '}
                  building enterprise applications using Java, Spring Boot,
                  Microservices, and REST APIs. I enjoy solving engineering
                  challenges and building reliable software.
                </p>

                <div className="hero-actions">
                  <a className="button button-primary" href="#projects">
                    Explore My Work <ArrowRight size={17} />
                  </a>
                  <a
                      className="button button-secondary"
                      href="/Sumanth_Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      download
                  >
                    <Download size={17} /> Download Resume
                  </a>
                </div>

                <div className="hero-socials">
                  <a href="mailto:sumanthdh13@gmail.com">
                    <Mail size={17} /> Email
                  </a>
                  <a
                      href="https://linkedin.com/in/sumanth-hegde-50b020237/"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <ArrowUpRight size={17} /> LinkedIn
                  </a>
                  <a
                      href="https://github.com/sumanthdh13"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <Code2 size={17} /> GitHub
                  </a>
                </div>

                <div className="hero-location">
                  <MapPin size={16} />
                  BENGALURU, INDIA
                </div>
              </motion.div>

              <motion.div
                  className="hero-visual"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.12 }}
              >
                <div className="portrait-card">
                  <div className="portrait-frame">
                    <img
                        src="/Sumanth_Image.jpeg"
                        alt="Professional portrait of Sumanth Hegde"
                        className="profile-photo"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none'
                        }}
                    />
                    <div className="portrait-fallback">
                      <span>SH</span>
                      <small>Add your professional photo</small>
                    </div>
                  </div>
                  <div className="portrait-caption">
                    <div>
                      <strong>Sumanth Hegde</strong>
                      <span>Backend Software Developer</span>
                    </div>
                    <span className="portrait-status">
                    <span className="availability-dot" />
                    Open to work
                  </span>
                  </div>
                </div>

                <div className="code-card">
                  <div className="code-card-top">
                    <div className="window-dots">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span>developer.java</span>
                    <Code2 size={16} />
                  </div>
                  <pre>
                  <code>
                    <span className="code-purple">public class</span>{' '}
                    <span className="code-yellow">Developer</span> {'{\n'}
                    {'  '}String name = <span className="code-green">"Sumanth"</span>;
                    {'\n'}
                    {'  '}String role = <span className="code-green">"Backend"</span>;
                    {'\n'}
                    {'  '}String language = <span className="code-green">"Java"</span>;
                    {'\n'}
                    {'  '}String framework ={' '}
                    <span className="code-green">"Spring Boot"</span>;
                    {'\n'}
                    {'  '}String architecture ={' '}
                    <span className="code-green">"Microservices"</span>;
                    {'\n'}
                    {'  '}double experience ={' '}
                    <span className="code-orange">2.9</span>;
                    {'\n\n'}
                    {'  '}<span className="code-comment">
                      // Always learning. Always building.
                    </span>
                    {'\n'}
                    {'}'}
                  </code>
                </pre>
                </div>

                <div className="exploring-card">
                  <span className="exploring-label">CURRENTLY EXPLORING</span>
                  <div className="exploring-tags">
                    {['Java 21', 'System Design', 'Cloud Technologies', 'React.js', 'TypeScript'].map(
                        (item) => (
                            <span key={item}>{item}</span>
                        ),
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
            <a href="#about" className="scroll-indicator" aria-label="Scroll to About">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={15} />
            </a>
          </section>

          {/* ACHIEVEMENTS */}
          <section className="achievement-section">
            <div className="container">
              <div className="achievement-grid">
                {achievements.map((item, index) => {
                  const Icon = item.icon
                  return (
                      <motion.div
                          className="achievement-card"
                          key={item.title}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                      >
                        <div className="achievement-icon">
                          <Icon size={21} />
                        </div>
                        <strong>{item.value}</strong>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </motion.div>
                  )
                })}
              </div>
            </div>
          </section>


          {/* ABOUT SECTION */}
          <section className="section about-section" id="about">
            <div className="container">
              <div className="section-heading">
                <span className="section-label">ABOUT ME</span>
                <h2>A little about my journey.</h2>
                <p>
                  Building backend applications with a focus on reliability,
                  performance and practical engineering.
                </p>
              </div>

              <div className="about-content">
                <p>
                  I'm a Backend Software Developer with 2.9 years of professional
                  experience at <strong>ERGOS Business Solutions</strong>, Bengaluru.
                  I have worked on enterprise applications in agriculture, warehouse
                  management and trading domains.
                </p>

                <p>
                  My work has involved developing Java and Spring Boot microservices,
                  building REST APIs, integrating Kafka and Redis, optimizing MySQL
                  queries, and supporting production applications through debugging
                  and root cause analysis.
                </p>

                <p>
                  I'm currently looking for Java Backend Developer and Backend
                  Software Engineer opportunities where I can contribute to reliable
                  systems and continue growing as an engineer.
                </p>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="content-section skills-section section-anchor" id="skills">
            <div className="container">
              <SectionHeading
                  eyebrow="TECHNICAL EXPERTISE"
                  title="Technologies I work with."
                  description="My technical toolkit across backend development, databases, architecture, and engineering tools."
              />

              <div className="skills-grid">
                {skillGroups.map((group, index) => {
                  const Icon = group.icon
                  return (
                      <motion.article
                          className="skill-card"
                          key={group.title}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.06 }}
                      >
                        <div className="skill-card-heading">
                      <span className="skill-category-icon">
                        <Icon size={20} />
                      </span>
                          <h3>{group.title}</h3>
                        </div>
                        <p className="skill-description">{group.description}</p>
                        <div className="skill-tags">
                          {group.skills.map((skill) => (
                              <TechTag key={skill} name={skill} />
                          ))}
                        </div>
                      </motion.article>
                  )
                })}
              </div>
            </div>
          </section>


          {/* EXPERIENCE */}
          <section
              className="content-section section-anchor"
              id="experience"
          >
            <div className="container">
              <SectionHeading
                  eyebrow="PROFESSIONAL EXPERIENCE"
                  title="Where I've worked."
                  description="My professional experience building and maintaining backend applications."
              />

              <motion.article
                  className="experience-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
              >
                <div className="experience-top">
                  <div className="experience-company-icon">
                    <BriefcaseBusiness size={25} />
                  </div>

                  <div className="experience-company">
                    <h3>Software Developer</h3>
                    <p>ERGOS Business Solutions · Bengaluru, India</p>
                  </div>

                  <span className="experience-date">
          Sep 2023 – May 2026
        </span>
                </div>

                <div className="experience-divider" />

                <h4>Key Contributions</h4>

                <ul className="experience-list">
                  {experienceHighlights.map((item) => (
                      <li key={item}>
            <span className="bullet-check">
              <CheckCircle2 size={17} />
            </span>
                        <p>{item}</p>
                      </li>
                  ))}
                </ul>

                <div className="experience-tech">
                  <span className="subsection-label">TECHNOLOGIES</span>

                  <div className="tech-tags">
                    {experienceTechnologies.map((tech) => (
                        <TechTag key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                {/* EMPLOYMENT DOCUMENT */}
                <div className="employment-documents">
                  <div className="employment-document-info">
                    <div className="employment-document-icon">
                      <FileText size={20} />
                    </div>

                    <div>
                      <h4>Employment Verification</h4>
                      <p>Experience & Relieving Letter · PDF</p>
                    </div>
                  </div>

                  <a
                      href="/ergos-experience-relieving-letter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="employment-document-link"
                  >
                    View Document
                    <ExternalLink size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </section>

          {/* PROJECTS */}
          <section
              className="content-section projects-section section-anchor"
              id="projects"
          >
            <div className="container">
              <SectionHeading
                  eyebrow="SELECTED WORK"
                  title="Projects I've contributed to."
                  description="Enterprise backend systems and business workflows I worked on during my professional experience."
              />

              <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.article
                        className="project-card"
                        key={project.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                    >
                      <div className="project-card-top">
                        <span className="project-number">{project.number}</span>
                        <span className="project-type">BACKEND DEVELOPMENT</span>
                      </div>
                      <h3>{project.title}</h3>
                      <h4>{project.category}</h4>
                      <p className="project-description">{project.description}</p>

                      <div className="project-highlights">
                        <span className="subsection-label">KEY CONTRIBUTIONS</span>
                        <ul>
                          {project.highlights.map((highlight) => (
                              <li key={highlight}>
                                <span className="project-bullet" />
                                <p>{highlight}</p>
                              </li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-tech">
                        <span className="subsection-label">TECH STACK</span>
                        <div className="tech-tags">
                          {project.technologies.map((tech) => (
                              <TechTag key={tech} name={tech} />
                          ))}
                        </div>
                      </div>
                    </motion.article>
                ))}
              </div>

              <p className="project-disclaimer">
                These descriptions summarize my professional contributions and
                do not represent public ERGOS source code or independent
                ownership of the production platforms.
              </p>
            </div>
          </section>

          {/* EDUCATION */}
          <section
              className="content-section education-section section-anchor"
              id="education"
          >
            <div className="container">
              <SectionHeading
                  eyebrow="EDUCATION"
                  title="Academic background."
              />

              <div className="education-card">
                <div className="education-icon">
                  <GraduationCap size={25} />
                </div>

                <div className="education-details">
                  <h3>B.E. – Computer Science & Engineering</h3>
                  <p>Rajiv Gandhi Institute of Technology · Bengaluru</p>

                  <div className="education-meta">
                    <span>2019 – 2023</span>
                    <span>CGPA: 8.22</span>
                  </div>

                  <a
                      href="/Degree_Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education-document-link"
                  >
                    <FileText size={15} />
                    View Degree Certificate
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section
              className="content-section certificates-section section-anchor"
              id="certifications"
          >
            <div className="container">
              <SectionHeading
                  eyebrow="CERTIFICATIONS & ACHIEVEMENTS"
                  title="Learning, training & recognition."
                  description="A collection of my professional certifications, internships and achievements. Open a document to view it or download a copy."
              />

              <div className="certificate-grid">
                {certificates.map((certificate, index) => (
                    <motion.article
                        className="certificate-card"
                        key={certificate.file}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                      <div className="certificate-card-top">
                        <div className="certificate-icon">
                          {certificate.type === 'Achievement' ? (
                              <Award size={22} />
                          ) : (
                              <FileBadge size={22} />
                          )}
                        </div>
                        <span className="certificate-type">{certificate.type}</span>
                      </div>
                      <h3>{certificate.title}</h3>
                      <p>{certificate.issuer}</p>
                      <div className="certificate-actions">
                        <a
                            href={certificate.file}
                            target="_blank"
                            rel="noreferrer"
                            className="certificate-view"
                        >
                          <ExternalLink size={15} /> View PDF
                        </a>
                        <a
                            href={certificate.file}
                            download
                            className="certificate-download"
                        >
                          <Download size={15} /> Download
                        </a>
                      </div>
                    </motion.article>
                ))}
              </div>

              <p className="certificate-note">
                All certificates and internship documents displayed here are authentic
                and valid. They do not have an expiry date and remain valid as proof
                of the qualifications and experience earned.
              </p>
            </div>
          </section>

          {/* CONTACT */}
          <section
              className="content-section contact-section section-anchor"
              id="contact"
          >
            <div className="container">
              <div className="contact-card">
                <div className="contact-content">
                  <p className="section-eyebrow">GET IN TOUCH</p>
                  <h2>Let's build something meaningful.</h2>
                  <p>
                    I'm immediately available for Java Backend Developer and
                    Backend Software Engineer opportunities. Feel free to reach
                    out to discuss a role or collaboration.
                  </p>
                  <a
                      href="mailto:sumanthdh13@gmail.com"
                      className="button button-primary"
                  >
                    Send me an email <ArrowUpRight size={17} />
                  </a>
                </div>

                <div className="contact-links">
                  <a href="mailto:sumanthdh13@gmail.com">
                    <span><Mail size={19} /></span>
                    <div>
                      <small>EMAIL</small>
                      <strong>sumanthdh13@gmail.com</strong>
                    </div>
                    <ArrowUpRight size={17} />
                  </a>
                  <a href="tel:+919483633976">
                    <span><Phone size={19} /></span>
                    <div>
                      <small>PHONE</small>
                      <strong>+91 9483633976</strong>
                    </div>
                    <ArrowUpRight size={17} />
                  </a>
                  <a
                      href="https://linkedin.com/in/sumanth-hegde-50b020237/"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <span><BriefcaseBusiness size={19} /></span>
                    <div>
                      <small>LINKEDIN</small>
                      <strong>Connect professionally</strong>
                    </div>
                    <ArrowUpRight size={17} />
                  </a>
                  <a
                      href="https://github.com/sumanthdh13"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <span><Code2 size={19} /></span>
                    <div>
                      <small>GITHUB</small>
                      <strong>Explore my repositories</strong>
                    </div>
                    <ArrowUpRight size={17} />
                  </a>
                  <a
                      href="https://leetcode.com/u/sumanth_1113/"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <span><Code2 size={19} /></span>
                    <div>
                      <small>LEET CODE</small>
                      <strong>Explore my solutions</strong>
                    </div>
                    <ArrowUpRight size={17} />
                  </a>
                  <div className="contact-location">
                    <span><MapPin size={19} /></span>
                    <div>
                      <small>LOCATION</small>
                      <strong>Bengaluru, India · Open to relocation</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-content">
            <a className="brand" href="#home">
              <span className="brand-mark">SH</span>
              <span>Sumanth Hegde</span>
            </a>
            <p>Designed & built with care. © {new Date().getFullYear()} Sumanth Hegde.</p>
            <a href="#home" className="back-to-top">
              Back to top <ArrowUpRight size={15} />
            </a>
          </div>
        </footer>
      </div>
  )
}

export default App