import "./App.css";

const experiences = [
  {
    role: "Software Engineer",
    company: "Vijatshi Software Pvt. Ltd.",
    location: "Noida, India",
    period: "Dec 2025 — Present",
    current: true,
    description:
      "Developing enterprise applications, operational dashboards, and business management systems.",
    achievements: [
      "Developed RMRTrac, a live operations platform using Vue.js, Node.js, and MySQL for 1,000+ active users.",
      "Built enterprise dashboards using React, Python/Frappe, and a MySQL schema spanning 1,500+ tables.",
      "Developing a CRM-integrated MIS dashboard for company, distributor, and retailer operations.",
      "Redesigned 15+ UI pages for a .NET and Angular application.",
      "Implemented Sales Orders and Order Detail modules, reducing manual processing time by 25%.",
    ],
    stack: ["React", "Vue.js", "Node.js", "Python", "Frappe", "MySQL"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Acelema",
    location: "Noida, India",
    period: "Jul 2025 — Oct 2025",
    current: false,
    description:
      "Built responsive web interfaces and integrated APIs for interactive web applications.",
    achievements: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and React.",
      "Converted Figma designs into functional interfaces, improving design-to-development efficiency by 30%.",
      "Integrated REST APIs for dynamic data and real-time interactions.",
      "Collaborated with Agile teams using Git and GitHub.",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS", "REST APIs", "Git"],
  },
];

const projects = [
  {
    number: "01",
    name: "AB Fitness",
    category: "FULL-STACK PWA · GYM MANAGEMENT",
    description:
      "A production-ready gym management platform with member and owner panels, geo-fenced attendance, online payments, automated invoices, and personalized fitness tracking.",
    features: [
      "GPS-based attendance",
      "Razorpay payments",
      "Push notifications",
      "Diet and calorie tracking",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      "Firebase",
      "Redis",
    ],
    live: "https://abfitness.devplex.in",
    github: "https://github.com/Princeydv83032/abfitness",
    theme: "fitness",
  },
  {
    number: "02",
    name: "RMRTrac",
    category: "ENTERPRISE · OPERATIONS PLATFORM",
    description:
      "A live business operations application developed for DS Group, supporting daily operations and real-time business data processing for over 1,000 active users.",
    features: [
      "Live operational data",
      "Business workflows",
      "Enterprise interfaces",
      "Operational visibility",
    ],
    stack: ["Vue.js", "Node.js", "MySQL"],
    live: null,
    github: null,
    theme: "enterprise",
  },
  {
    number: "03",
    name: "Prescripto",
    category: "FULL-STACK · HEALTHCARE",
    description:
      "A doctor appointment booking application with dedicated user, doctor, and admin panels, JWT authentication, and integrated online payments.",
    features: [
      "Role-based access",
      "Appointment booking",
      "JWT authentication",
      "Payment integration",
    ],
    stack: ["React", "Node.js", "MongoDB", "Razorpay", "JWT"],
    live: "https://prescripto-full-stack-frontend-rr1m.onrender.com",
    github: null,
    theme: "healthcare",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user experiences.",
    skills: [
      "React.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    description: "Building APIs, application logic, and business workflows.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Frappe Framework",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Databases",
    description: "Working with relational and document-oriented data.",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    title: "Cloud & Integrations",
    description: "Deployments, payments, notifications, and background jobs.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Firebase FCM",
      "Razorpay",
      "Redis",
      "Bull",
      "Cloudinary",
      "Resend",
    ],
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const email = "pyadav15734@gmail.com";

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="brand" aria-label="Prince Yadav home">
          prince<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href={`mailto:${email}`}>
          Let's talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}

        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              FULL-STACK SOFTWARE ENGINEER
            </div>

            <p className="hero-intro">Hi, I'm Prince Yadav.</p>

            <h1>
              I build digital
              <br />
              products that
              <br />
              <span>solve problems.</span>
            </h1>

            <p className="hero-description">
              Full-Stack Software Engineer working across frontend, backend,
              databases, and production applications. I turn complex business
              requirements into useful software.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <span>↗</span>
              </a>

              <a href="#contact" className="button button-secondary">
                Get in touch
              </a>
            </div>

            <div className="hero-location">
              <span>⌖</span>
              Noida, Uttar Pradesh, India
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer introduction">
            <div className="hero-glow" />

            <div className="visual-topline">
              <span>PERSONAL PORTFOLIO</span>
              <span>2026</span>
            </div>

            <div className="monogram">
              <span>P</span>
              <span>Y</span>
            </div>

            <div className="visual-caption">
              <div>
                <span className="caption-label">CURRENT FOCUS</span>
                <h3>Engineering better systems.</h3>
              </div>

              <span className="caption-arrow">↗</span>
            </div>

            <div className="visual-index">01 / DEVELOPER</div>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>DESIGN · ENGINEERING · EXECUTION</span>
          </div>
        </section>

        {/* ABOUT */}

        <section className="section-container about-section" id="about">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="Software built around real problems."
            description="I work across the development lifecycle, from user interfaces to APIs, databases, and deployment."
          />

          <div className="about-grid">
            <div className="about-copy">
              <p className="about-lead">
                I enjoy building software that makes complicated workflows
                easier to understand and use.
              </p>

              <p>
                My experience includes enterprise dashboards, operational
                applications, CRM-integrated reporting, and full-stack products.
                I've worked with React, Vue.js, Node.js, Python/Frappe, and
                relational databases.
              </p>

              <p>
                Outside enterprise development, I independently built AB
                Fitness, a gym management PWA with payments, attendance
                tracking, notifications, and member management features.
              </p>

              <a
                href="https://github.com/Princeydv83032"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Explore my GitHub <span>↗</span>
              </a>
            </div>

            <div className="about-facts">
              <div className="fact-card">
                <span className="fact-number">01</span>
                <div>
                  <h3>Full-stack thinking</h3>
                  <p>Frontend, APIs, databases, and deployment.</p>
                </div>
              </div>

              <div className="fact-card">
                <span className="fact-number">02</span>
                <div>
                  <h3>Business-focused engineering</h3>
                  <p>Practical features that support real workflows.</p>
                </div>
              </div>

              <div className="fact-card">
                <span className="fact-number">03</span>
                <div>
                  <h3>Production experience</h3>
                  <p>Applications, integrations, and deployed projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section
          className="section-container experience-section"
          id="experience"
        >
          <SectionHeading
            eyebrow="02 / EXPERIENCE"
            title="Where I've worked."
            description="Professional experience building applications, interfaces, and business systems."
          />

          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.company}>
                <div className="experience-meta">
                  <span className="experience-period">{experience.period}</span>

                  {experience.current && (
                    <span className="current-badge">CURRENT ROLE</span>
                  )}

                  <span className="experience-location">
                    {experience.location}
                  </span>
                </div>

                <div className="experience-content">
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.description}</p>

                  <ul className="achievement-list">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>

                  <div className="tag-list">
                    {experience.stack.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}

        <section className="section-container projects-section" id="projects">
          <SectionHeading
            eyebrow="03 / SELECTED PROJECTS"
            title="Things I've built."
            description="A selection of projects demonstrating full-stack development, integrations, and production-oriented engineering."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.theme}`}
                key={project.name}
              >
                <div className="project-preview">
                  <div className="project-preview-top">
                    <span>PROJECT / {project.number}</span>
                    <span>↗</span>
                  </div>

                  {project.theme === "fitness" && (
                    <div className="preview-content fitness-preview">
                      <span className="preview-kicker">
                        YOUR FITNESS JOURNEY
                      </span>
                      <h3>Build better habits.</h3>
                      <div className="preview-metrics">
                        <div>
                          <strong>01</strong>
                          <span>Track</span>
                        </div>
                        <div>
                          <strong>02</strong>
                          <span>Improve</span>
                        </div>
                        <div>
                          <strong>03</strong>
                          <span>Repeat</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.theme === "enterprise" && (
                    <div className="preview-content enterprise-preview">
                      <span className="preview-kicker">
                        OPERATIONS OVERVIEW
                      </span>
                      <h3>Business at a glance.</h3>
                      <div className="chart-bars">
                        {[35, 52, 42, 72, 56, 88, 68, 96].map(
                          (height, index) => (
                            <span
                              key={index}
                              style={{ height: `${height}%` }}
                            />
                          ),
                        )}
                      </div>
                      <div className="preview-chart-label">
                        Live operational data
                      </div>
                    </div>
                  )}

                  {project.theme === "healthcare" && (
                    <div className="preview-content healthcare-preview">
                      <span className="preview-kicker">
                        HEALTHCARE / APPOINTMENTS
                      </span>
                      <h3>Care, made simpler.</h3>
                      <div className="appointment-preview">
                        <span className="appointment-icon">+</span>
                        <div>
                          <strong>Appointment booking</strong>
                          <span>Secure · Simple · Connected</span>
                        </div>
                        <span className="appointment-arrow">→</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-body">
                  <span className="project-category">{project.category}</span>

                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    {project.features.map((feature) => (
                      <span key={feature}>✓ {feature}</span>
                    ))}
                  </div>

                  <div className="tag-list project-tags">
                    {project.stack.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live project <span>↗</span>
                      </a>
                    )}

                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        Source code <span>↗</span>
                      </a>
                    )}

                    {!project.live && !project.github && (
                      <span className="private-project">
                        Enterprise project · Details available on request
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}

        <section className="section-container skills-section" id="skills">
          <SectionHeading
            eyebrow="04 / TECHNICAL SKILLS"
            title="My engineering toolkit."
            description="Technologies I've used across professional work and personal projects."
          />

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top">
                  <span>0{index + 1}</span>
                  <span>↗</span>
                </div>

                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}

        <section className="section-container education-section">
          <SectionHeading
            eyebrow="05 / EDUCATION"
            title="My academic background."
          />

          <div className="education-card">
            <div>
              <span className="education-year">2025</span>
              <h3>Bachelor of Computer Applications</h3>
              <p>Goel Institute of Higher Studies, Lucknow, Uttar Pradesh</p>
            </div>

            <div className="education-score">
              <strong>8.0</strong>
              <span>GPA</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="section-container contact-section" id="contact">
          <span className="eyebrow">06 / CONTACT</span>

          <h2>
            Have a project
            <br />
            <span>in mind?</span>
          </h2>

          <p>
            I'm interested in discussing software development, engineering
            opportunities, and practical product ideas.
          </p>

          <a
            className="button button-primary contact-button"
            href={`mailto:${email}`}
          >
            Let's start a conversation <span>↗</span>
          </a>

          <div className="contact-links">
            <a href={`mailto:${email}`}>Email</a>

            <a
              href="https://linkedin.com/in/prince-yadav-b118a2278"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Princeydv83032"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <a href="#home" className="brand">
          prince<span>.</span>
        </a>

        <p>Designed and built by Prince Yadav.</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
