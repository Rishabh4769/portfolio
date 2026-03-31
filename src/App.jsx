import { useEffect } from "react";

const metrics = [
  { value: "3+", label: "Years building backend systems" },
  { value: "25+", label: "Scripts, tools, and automation experiments" },
  { value: "Daily", label: "Linux, networking, and security practice" },
];

const focusAreas = [
  {
    title: "Secure backend engineering",
    text: "Designing APIs and service layers with authentication, logging, validation, and operational clarity built in from the start.",
  },
  {
    title: "Cybersecurity growth",
    text: "Studying networking, operating systems, Linux internals, and threat modeling to improve how systems are defended in practice.",
  },
  {
    title: "Full-stack delivery",
    text: "Shipping MERN applications end to end when the product needs both a reliable backend and a clean user-facing experience.",
  },
];

const projects = [
  {
    type: "Research tooling",
    name: "StealthKey",
    summary:
      "Python proof-of-concept for keystroke capture research, focused on log handling, system behavior, and secure storage patterns.",
    stack: ["Python", "Security tooling", "OS behavior"],
  },
  {
    type: "MERN platform",
    name: "Frolics",
    summary:
      "University event management system covering registrations, team workflows, payment coordination, and role-aware administration.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    type: "Networking",
    name: "DeepPacket",
    summary:
      "Packet inspection experiment built to explore protocol parsing, live traffic filtering, and anomaly-oriented visibility.",
    stack: ["Python", "Scapy", "Network analysis"],
  },
];

const toolkit = [
  "Node.js",
  "Express",
  "MongoDB",
  "React",
  "JavaScript",
  "Python",
  "REST APIs",
  "Linux",
  "Git",
  "JWT/Auth flows",
];

const journey = [
  {
    period: "Now",
    title: "Backend Developer focused on secure systems",
    text: "Building production-minded backend work while sharpening cybersecurity fundamentals through hands-on practice.",
  },
  {
    period: "Current track",
    title: "MERN plus Python automation",
    text: "Combining application development with scripting and tooling to move faster across implementation, testing, and debugging.",
  },
  {
    period: "Learning edge",
    title: "Networking, Linux, and OS internals",
    text: "Using systems-level study to make better engineering decisions around hardening, visibility, and reliability.",
  },
];

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (prefersReduced || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="site-header" data-reveal>
        <a className="brand" href="#top" aria-label="Go to top">
          <span className="brand-mark">R</span>
          <span className="brand-copy">
            <strong>Rishabh</strong>
            <span>Backend Developer</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#focus">Focus</a>
          <a href="#journey">Journey</a>
          <a href="#contact" className="button button-primary">
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">Portfolio 2026</span>
            <h1>Backend engineering with a security-first mindset.</h1>
            <p className="hero-text">
              I build APIs, service logic, and full-stack systems with reliability,
              authentication, and operational clarity in mind. Alongside delivery work,
              I am deepening my cybersecurity foundation through Linux, networking, and
              systems-level study.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="mailto:rishabh@pm.me">
                rishabh@pm.me
              </a>
              <a className="button button-secondary" href="#work">
                Selected projects
              </a>
            </div>
          </div>

          <aside className="hero-panel" data-reveal>
            <div className="status-row">
              <span className="status-dot" />
              <span>Open to backend and full-stack opportunities</span>
            </div>
            <div className="panel-block">
              <span className="panel-label">Primary stack</span>
              <p>Node.js, Express, MongoDB, React, Python</p>
            </div>
            <div className="panel-block">
              <span className="panel-label">Engineering priorities</span>
              <p>Auth hardening, logging, API design, maintainable delivery</p>
            </div>
            <div className="panel-block">
              <span className="panel-label">Learning focus</span>
              <p>Linux, networking, OS internals, secure system thinking</p>
            </div>
          </aside>
        </section>

        <section className="metrics section" data-reveal>
          {metrics.map((item) => (
            <article className="metric-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section two-column" id="focus">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">Focus</span>
            <h2>Engineering work grounded in resilience and systems thinking.</h2>
            <p>
              My portfolio is centered on backend delivery, but the longer-term direction
              is broader: build reliable applications, understand infrastructure deeply,
              and make stronger security decisions at every layer.
            </p>
          </div>

          <div className="card-stack">
            {focusAreas.map((item) => (
              <article className="info-card" data-reveal key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Selected Work</span>
            <h2>Projects that reflect how I build.</h2>
            <p>
              The work spans application development, security experimentation, and
              networking practice, but the throughline is consistent: learn fast, build
              clearly, and make systems easier to trust.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" data-reveal key={project.name}>
                <div className="project-topline">
                  <span>{project.type}</span>
                  <span className="project-index">0{projects.indexOf(project) + 1}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.stack.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section toolkit-layout">
          <div className="toolkit-panel" data-reveal>
            <span className="eyebrow">Toolkit</span>
            <h2>Core technologies and working habits.</h2>
            <p>
              I prefer straightforward architecture, readable code paths, and practical
              security controls over complexity that looks impressive but is harder to
              operate.
            </p>
          </div>

          <div className="toolkit-grid" data-reveal>
            {toolkit.map((item) => (
              <span className="tool-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="journey">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Journey</span>
            <h2>Where the work is heading next.</h2>
          </div>

          <div className="timeline">
            {journey.map((item) => (
              <article className="timeline-item" data-reveal key={item.title}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-card" id="contact" data-reveal>
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Let’s build reliable software.</h2>
            <p>
              If you need a developer who cares about backend quality, secure defaults,
              and steady execution, I am available to talk.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="mailto:rishabh@pm.me">
              Email me
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
              href="https://www.linkedin.com/in/rishabh"
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
