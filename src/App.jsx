import { useEffect, useState } from "react";

const resumeHref = "/Rishabh_Resume.pdf";
const heroName = "Rishabh";

const stats = [
  { value: "03+", label: "Years building backend systems" },
  { value: "25+", label: "Automation scripts and internal tools" },
  { value: "24/7", label: "Security-first operating mindset" },
];

const pillars = [
  {
    id: "01",
    title: "Secure backend systems",
    text: "I design API layers and service flows with validation, auth boundaries, logging, and maintainability considered from the start.",
  },
  {
    id: "02",
    title: "Cybersecurity growth",
    text: "I am actively building stronger intuition around Linux, networking, threat modeling, and systems behavior so engineering decisions hold up under pressure.",
  },
  {
    id: "03",
    title: "Full-stack execution",
    text: "When the product needs it, I move beyond the backend and ship complete MERN experiences with clear structure and production-minded implementation.",
  },
];

const projects = [
  {
    label: "Python research build",
    title: "StealthKey",
    summary:
      "A keystroke research proof-of-concept focused on system behavior, encrypted logging paths, and controlled experimentation around host-level monitoring.",
    tags: ["Python", "Security tooling", "System research"],
  },
  {
    label: "MERN application",
    title: "Frolics",
    summary:
      "An event operating system for university workflows covering registrations, team management, payment coordination, and role-based access logic.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    label: "Network analysis",
    title: "DeepPacket",
    summary:
      "A packet inspection experiment for learning traffic capture, protocol interpretation, filter pipelines, and anomaly-oriented visibility.",
    tags: ["Python", "Scapy", "Packet analysis"],
  },
];

const stackGroups = [
  {
    title: "Core stack",
    items: ["Node.js", "Express", "MongoDB", "React", "JavaScript", "Python"],
  },
  {
    title: "Backend priorities",
    items: ["REST APIs", "Auth flows", "Validation", "Logging", "Role controls", "Operational clarity"],
  },
  {
    title: "Systems learning",
    items: ["Linux", "Networking", "OS internals", "Threat modeling", "Shell workflows", "Git discipline"],
  },
];

const timeline = [
  {
    period: "Present",
    title: "Backend developer with a security-first lens",
    text: "Shipping practical backend work while deliberately strengthening the systems knowledge behind it.",
  },
  {
    period: "Current edge",
    title: "MERN plus Python automation",
    text: "Combining app delivery with scripting and tooling so I can move efficiently across debugging, implementation, and iteration.",
  },
  {
    period: "Next phase",
    title: "Deeper infrastructure and defensive engineering",
    text: "Pushing further into system behavior, network visibility, and resilient architecture so product code is backed by stronger technical depth.",
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
    const startDelay = 700;

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
          <a href="#capabilities">Capabilities</a>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#resume">Resume</a>
          <a href="#contact" className="button button-primary">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-nameplate reveal" data-reveal data-hero-name>
            <div className="eyebrow hero-name-kicker">Portfolio</div>
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
            <h1 className="hero-name-title">Backend Developer</h1>
            <p className="hero-name-subtitle">
              Secure systems, full-stack execution, and a sharper engineering standard.
            </p>
          </div>

          <div className="hero-copy reveal" data-reveal>
            <div className="eyebrow">Overview</div>
            <h1>
              I build backend systems that stay
              <span className="headline-accent"> secure, fast, and dependable.</span>
            </h1>
            <p className="hero-text">
              I build backend systems and full-stack products with a clear bias toward
              security, operational clarity, and long-term maintainability. My current
              direction is simple: ship reliable software and deepen the systems knowledge
              behind every decision.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="mailto:rishabh@pm.me">
                Contact via email
              </a>
              <a
                className="button button-secondary"
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
              <a className="button button-secondary" href="#work">
                Explore selected work
              </a>
            </div>

            <div className="signal-strip">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>React</span>
              <span>Python</span>
              <span>Linux</span>
            </div>
          </div>

          <div className="hero-stage reveal" data-reveal>
            <div className="stage-panel panel-primary">
              <div className="stage-panel-content">
                <span className="mini-label">Current direction</span>
                <h2>Security-aware backend engineering</h2>
                <p>
                  Building APIs and service logic with stronger auth boundaries,
                  observability, and systems awareness.
                </p>
              </div>
            </div>

            <div className="hero-card-grid">
              <div className="floating-card">
                <span className="mini-label">Focus</span>
                <strong>API hardening</strong>
                <p>Validation, auth, logs, and role-aware flows.</p>
              </div>

              <div className="floating-card">
                <span className="mini-label">Learning</span>
                <strong>Linux + Networking</strong>
                <p>Practical systems depth behind product work.</p>
              </div>

              <div className="floating-card">
                <span className="mini-label">Approach</span>
                <strong>Build clearly</strong>
                <p>Readable architecture over flashy complexity.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-row section reveal" data-reveal>
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="section split-layout" id="capabilities">
          <div className="section-copy reveal" data-reveal>
            <div className="eyebrow">Capabilities</div>
            <h2>Professional presentation, grounded by actual engineering priorities.</h2>
            <p>
              This portfolio is intentionally designed to feel premium, but the message is
              still technical and credible. The strongest work is not decoration. It is
              clarity, trust, and disciplined execution.
            </p>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card reveal" data-reveal key={pillar.id}>
                <span className="pillar-id">{pillar.id}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading reveal" data-reveal>
            <div className="eyebrow">Selected Work</div>
            <h2>Projects that communicate taste, discipline, and technical direction.</h2>
            <p>
              Each project highlights a different side of the same profile: backend
              delivery, research-minded security work, and systems-level curiosity that
              improves the quality of shipped software.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className="project-card reveal"
                data-reveal
                key={project.title}
                style={{ "--card-tilt": `${index % 2 === 0 ? "-5deg" : "5deg"}` }}
              >
                <div className="project-no">0{index + 1}</div>
                <span className="mini-label">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
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
            <div className="eyebrow">Stack + Method</div>
            <h2>The toolkit is practical. The intent is high-end.</h2>
          </div>

          <div className="stack-grid">
            {stackGroups.map((group) => (
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
        </section>

        <section className="section" id="journey">
          <div className="timeline-shell reveal" data-reveal>
            <div className="section-heading timeline-heading">
              <div className="eyebrow">Trajectory</div>
              <h2>Where the work is moving next.</h2>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
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
            <h2>Everything important, in one downloadable snapshot.</h2>
            <p>
              View the latest version online or download the PDF directly for sharing,
              applications, and outreach.
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
            <div className="eyebrow">Contact</div>
            <h2>Open to meaningful work, strong teams, and ambitious products.</h2>
            <p>
              Available for backend, full-stack, and security-aware engineering roles.
              If you are building reliable software and need disciplined execution, let&apos;s connect.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:joshirishabh205@gmail.com">
              rishabh@pm.me
            </a>
            <a
              className="button button-secondary"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/rishabh4769"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/rishabh-joshi-992834326/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
