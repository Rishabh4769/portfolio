import { useEffect, useState } from "react";

const resumeHref = "/Rishabh_Resume.pdf";
const heroName = "Rishabh";

const quickStats = [
  { value: "B.Tech", label: "CSE student building security-centric work" },
  { value: "Full-Stack", label: "Backend-first delivery with practical security focus" },
  { value: "Cyber", label: "Foundation, offensive security, and modern threat research" },
];

const aboutPoints = [
  "Exploring modern tech, offensive security, and emerging cyber threats.",
  "Interested in low-level behavior, edge-case exploits, and unusual network traffic.",
  "Focused on security-centric projects during B.Tech CSE studies.",
  "Building Android security tools, API-driven apps, and secure communication systems.",
];

const interests = [
  "Mobile Security",
  "IoT Security",
  "PenTesting",
  "Network Security",
  "Secure App Development",
  "Android Security Tools",
];

const capabilities = [
  {
    id: "01",
    title: "Security-first development",
    text: "I approach application work with a bias toward secure design, cleaner trust boundaries, and implementation details that hold up under scrutiny.",
  },
  {
    id: "02",
    title: "Full-stack execution",
    text: "I build beyond isolated experiments, combining backend logic, APIs, frontend delivery, and project structure into complete working systems.",
  },
  {
    id: "03",
    title: "Research-oriented mindset",
    text: "I like exploring odd edge cases, network behavior, low-level patterns, and the parts of software most people skip past too quickly.",
  },
];

const techGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "PHP", "JavaScript", "SQL", "MongoDB"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Laravel", "Django", "Flask", "Bootstrap", "REST APIs"],
  },
  {
    title: "Tools, Platforms & Security",
    items: ["HTML5", "CSS3", "Bash", "Linux", "Kali Linux", "Git", "Docker", "Android"],
  },
];

const majorWorks = [
  {
    label: "Network Security",
    link: "https://github.com/Rishabh4769/Graduation-Projects/tree/main/Python-Projects/Packet-Sniffer",
    title: "NetScope",
    summary:
      "Real-time capture, inspection, and alerting for network monitoring, anomaly spotting, and deeper packet-level understanding.",
    details: [
      "Built to inspect live traffic flows and understand protocol-level behavior in a practical way.",
      "Focused on packet capture, filtering logic, inspection workflows, and anomaly-oriented monitoring ideas.",
      "Used as a hands-on security project to strengthen network visibility and traffic analysis fundamentals.",
    ],
    tags: ["Python", "Packet Analysis", "Network Security"],
  },
  {
    label: "Endpoint Research",
    link: "https://github.com/Rishabh4769/Graduation-Projects/tree/main/Python-Projects/Keylogger",
    title: "StealthKey",
    summary:
      "A security-focused keylogger build used to explore host-level monitoring, keystroke capture workflows, and the defensive implications of endpoint surveillance techniques.",
    details: [
      "Built as a research-oriented project to understand keystroke capture techniques and local host monitoring behavior.",
      "Explores endpoint visibility, logging patterns, and the security implications of surveillance-style tooling.",
      "Useful for understanding both offensive possibilities and the defensive need for stronger endpoint awareness.",
    ],
    tags: ["Python", "Endpoint Monitoring", "Security Research"],
  },
];

const roadmap = [
  {
    period: "Next step",
    title: "Go deeper into penetration testing",
    text: "Build stronger Metasploit workflows, custom payload familiarity, and more practical red-team execution.",
  },
  {
    period: "Security track",
    title: "Explore Android and mobile security",
    text: "Study reverse engineering, malware analysis, and app-level security issues across mobile environments.",
  },
  {
    period: "Applied research",
    title: "Use ML and AI for anomaly detection",
    text: "Apply intelligent detection approaches to network traffic, logs, and suspicious behavioral patterns.",
  },
  {
    period: "Engineering path",
    title: "Ship security-by-design applications",
    text: "Combine full-stack delivery with CI/CD, defensive thinking, and DevSecOps practices from the beginning.",
  },
];

function App() {
  const [typingProgress, setTypingProgress] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    let observer;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
      );

      elements.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index * 75, 300)}ms`);
        observer.observe(element);
      });
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setTypingProgress(1);
      setIsTypingDone(true);
      return undefined;
    }

    const heroNameplate = document.querySelector("[data-hero-name]");

    if (!heroNameplate || !("IntersectionObserver" in window)) {
      setStartTyping(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartTyping(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.45 },
    );

    observer.observe(heroNameplate);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startTyping || isTypingDone) {
      return undefined;
    }

    let frame = 0;
    let holdTimeout = 0;
    let startTime = 0;
    const duration = 1850;
    const startDelay = 500;
    const easeOutCubic = (value) => 1 - (1 - value) ** 3;

    const step = (timestamp) => {
      if (!startTime) {
        startTime = timestamp + startDelay;
      }

      if (timestamp < startTime) {
        frame = window.requestAnimationFrame(step);
        return;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setTypingProgress(easeOutCubic(progress));

      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
        return;
      }

      holdTimeout = window.setTimeout(() => {
        setIsTypingDone(true);
      }, 260);
    };

    frame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(holdTimeout);
    };
  }, [isTypingDone, startTyping]);

  return (
    <div className="app-shell">
      <div className="scene-grid" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <header className="site-header reveal" data-reveal>
        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#resume">Resume</a>
          <a href="#contact" className="button button-primary">
            Connect
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-nameplate reveal" data-reveal data-hero-name>
            <div className="eyebrow hero-name-kicker">Cybersecurity Portfolio</div>
            <p className={`hero-name-intro ${isTypingDone ? "is-typed" : ""}`}>
              <span className="hero-name-track" aria-label={heroName}>
                <span
                  className="hero-name-visible"
                  style={{ width: `${typingProgress * 100}%` }}
                >
                  {heroName}
                </span>
                <span className="hero-name-ghost" aria-hidden="true">
                  {heroName}
                </span>
                <span
                  className="hero-name-caret"
                  aria-hidden="true"
                  style={{ left: `${typingProgress * 100}%` }}
                />
              </span>
            </p>
            <h1 className="hero-name-title">B.Tech CSE Student | Security-Focused Developer</h1>
            <p className="hero-name-subtitle">
              Full-stack and cybersecurity-oriented builder exploring modern threats,
              secure applications, Android tooling, and defensive engineering foundations.
            </p>
          </div>

          <div className="hero-copy reveal" data-reveal>
            <div className="eyebrow">Overview</div>
            <h1>
              Building dependable software while going deeper into
              <span className="headline-accent"> cybersecurity, systems, and edge-case behavior.</span>
            </h1>
            <p className="hero-text">
              I am a B.Tech CSE student combining professional full-stack development with
              security-focused learning. The goal is not only to build applications, but to
              understand how they behave under pressure, how they fail, and how they can be made safer.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="mailto:rishabh.public.mail@gmail.com">
                Email me
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/rishabh-joshi-992834326/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="button button-secondary" href="#work">
                Security project
              </a>
            </div>

            <div className="signal-strip">
              <span>Foundation</span>
              <span>Cybersecurity</span>
              <span>Android Security</span>
              <span>Network Security</span>
              <span>Full-Stack</span>
              <span>Secure Development</span>
            </div>
          </div>

          <div className="hero-stage reveal" data-reveal>
            <div className="stage-panel panel-primary">
              <div className="stage-panel-content">
                <span className="mini-label">Current direction</span>
                <h2>Professional engineering with a security research edge</h2>
                <p>
                  Balancing real software delivery with offensive security learning, Android tooling,
                  network inspection, and foundation-first systems understanding.
                </p>
              </div>
            </div>

            <div className="hero-card-grid">
              <div className="floating-card">
                <span className="mini-label">Interests</span>
                <strong>Mobile + IoT Security</strong>
                <p>Studying practical attack surfaces beyond standard web app workflows.</p>
              </div>

              <div className="floating-card">
                <span className="mini-label">Builds</span>
                <strong>Secure communication systems</strong>
                <p>API-driven apps, secure notes, and Android-focused utility work.</p>
              </div>

              <div className="floating-card">
                <span className="mini-label">Mindset</span>
                <strong>Foundation first</strong>
                <p>Strong fundamentals before noise, hype, or shallow tooling shortcuts.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-row section reveal" data-reveal>
          {quickStats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="section split-layout" id="about">
          <div className="section-copy reveal" data-reveal>
            <div className="eyebrow">About Me</div>
            <h2>Curiosity-driven security learning backed by practical software work.</h2>
            <p>
              I enjoy exploring the technical edges: weird traffic, system behavior,
              overlooked flaws, and the kind of implementation details that matter when
              secure software has to work in the real world.
            </p>
          </div>

          <div className="pillar-grid">
            {aboutPoints.map((point, index) => (
              <article className="pillar-card reveal" data-reveal key={point}>
                <span className="pillar-id">0{index + 1}</span>
                <h3>{index === 0 ? "Research mindset" : index === 1 ? "Low-level curiosity" : index === 2 ? "Academic direction" : "Current builds"}</h3>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-layout" id="capabilities">
          <div className="section-copy reveal" data-reveal>
            <div className="eyebrow">Capabilities</div>
            <h2>Technical curiosity backed by practical software execution.</h2>
            <p>
              The site should reflect both sides of the profile: someone building real
              software and someone intentionally growing into deeper cybersecurity and systems work.
            </p>
          </div>

          <div className="pillar-grid">
            {capabilities.map((item) => (
              <article className="pillar-card reveal" data-reveal key={item.id}>
                <span className="pillar-id">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading reveal" data-reveal>
            <div className="eyebrow">Major Works</div>
            <h2>Two security-focused builds that best represent my practical direction.</h2>
            <p>
              These projects show the kind of work I want to keep pushing deeper into:
              traffic analysis, endpoint monitoring, and the practical overlap between
              software engineering and cybersecurity research.
            </p>
          </div>

          <div className="project-grid">
            {majorWorks.map((project) => (
              <article className="project-card reveal" data-reveal key={project.title}>
                <div className="project-topbar">
                  <div className="project-no">{project.label}</div>
                  <a
                    className="project-link-button"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-detail-list">
                  {project.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section-heading reveal" data-reveal>
            <div className="eyebrow">Tech Stack</div>
            <h2>Languages, frameworks, platforms, and security tooling.</h2>
            <p>
              The stack reflects both software delivery and security exploration, from
              backend frameworks to Linux, Android, and network-oriented tooling.
            </p>
          </div>

          <div className="stack-grid">
            {techGroups.map((group) => (
              <article className="stack-card reveal" data-reveal key={group.title}>
                <span className="mini-label">{group.title}</span>
                <div className="chip-grid">
                  {group.items.map((item) => (
                    <span className="tool-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="interest-strip reveal" data-reveal>
            {interests.map((item) => (
              <span className="interest-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="journey">
          <div className="timeline-shell reveal" data-reveal>
            <div className="section-heading timeline-heading">
              <div className="eyebrow">Roadmap & Learning Path</div>
              <h2>What the next stage of growth looks like.</h2>
            </div>

            <div className="timeline">
              {roadmap.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <span className="timeline-period">{item.period}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section resume-shell reveal" data-reveal id="resume">
          <div className="resume-copy">
            <div className="eyebrow">Resume</div>
            <h2>Keep the portfolio open, or take the summary with you.</h2>
            <p>
              View the latest resume online or download the PDF directly for applications,
              outreach, and profile sharing.
            </p>
            <span className="resume-note">
              Place your PDF at <code>public/Rishabh_Resume.pdf</code> before deploy.
            </span>
          </div>

          <div className="resume-actions">
            <a
              className="button button-primary"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              View resume
            </a>
            <a className="button button-secondary" href={resumeHref} download>
              Download PDF
            </a>
          </div>
        </section>

        <section className="section contact-shell reveal" data-reveal id="contact">
          <div className="contact-copy">
            <div className="eyebrow">Connect</div>
            <h2>Open to conversations around security, software, and ambitious builds.</h2>
            <p>
              Reach out for collaboration, project discussions, opportunities, or simply
              to talk about cybersecurity, Android tooling, network security, and secure development.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:rishabh.public.mail@gmail.com">
              Email
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/rishabh-joshi-992834326/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/Rishabh4769"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button-secondary"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
