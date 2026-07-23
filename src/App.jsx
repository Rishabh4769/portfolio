import { useEffect, useRef, useState } from "react";

const resumeHref = "/Rishabh_Joshi_Resume.pdf";
const heroName = "Rishabh";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#journey", label: "Journey" },
];

const quickStats = [
  { value: "B.Tech CSE", label: "Information security focused, targeting the 2027 placement cycle." },
  { value: "Real-Time NIDS", label: "Live packet capture paired with ML-based attack classification." },
  { value: "ISC2 CC", label: "Certified in Cybersecurity exam targeted for May 2027." },
];

const aboutPoints = [
  "Specializing in Network Security and Intrusion Detection Systems.",
  "Hands-on experience with real-time packet analysis and ML-based threat detection.",
  "Building security-centric tools during B.Tech CSE with a defensive-first mindset.",
  "Currently preparing for ISC2 Certified in Cybersecurity (CC).",
];

const aboutPointTitles = ["Core Focus", "Applied Skill", "Engineering Approach", "Certification Track"];

const capabilities = [
  {
    id: "01",
    title: "Network Security & Threat Detection",
    text: "Designed Project Plexus — a real-time NIDS using Scapy and XGBoost for live attack detection.",
  },
  {
    id: "02",
    title: "Secure Development Practices",
    text: "Security-first approach in full-stack work — input validation, secure architecture, and safe coding.",
  },
  {
    id: "03",
    title: "Practical Security Research",
    text: "Exploring traffic analysis, endpoint behavior, and real-world attack surfaces.",
  },
];

const techGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "Security & ML Tools",
    items: ["Scapy", "XGBoost", "Kali Linux", "Wireshark", "Docker"],
  },
  {
    title: "Frameworks & Platforms",
    items: ["FastAPI", "React", "Linux", "Git"],
  },
];

const interests = [
  "Network Security",
  "Intrusion Detection",
  "Traffic Analysis",
  "Applied ML for Security",
  "Secure Development",
  "Full-Stack Delivery",
];

const majorWorks = [
  {
    featured: true,
    label: "Network Security · Featured Build",
    link: "https://github.com/Rishabh4769",
    title: "Project Plexus",
    summary:
      "A real-time Network Intrusion Detection System that watches live traffic and flags attacks as they happen, combining a Scapy packet-capture engine with a trained ML classifier.",
    details: [
      "FastAPI + Scapy backend streams live packet data to a React dashboard over WebSockets.",
      "Random Forest / XGBoost classifier trained on CICIDS2017 separates normal traffic from attack patterns.",
      "Rule-based and ML-based alerts feed a shared alert queue, with PDF incident reports generated on demand.",
    ],
    tags: ["Python", "FastAPI", "Scapy", "XGBoost", "React", "WebSockets"],
  },
  {
    featured: false,
    label: "Network Security",
    link: "https://github.com/Rishabh4769/Graduation-Projects/tree/main/Python-Projects/Packet-Sniffer",
    title: "NetScope",
    summary:
      "Real-time capture, inspection, and alerting for network monitoring, anomaly spotting, and deeper packet-level understanding.",
    details: [
      "Built to inspect live traffic flows and understand protocol-level behavior in a practical way.",
      "Focused on packet capture, filtering logic, inspection workflows, and anomaly-oriented monitoring ideas.",
    ],
    tags: ["Python", "Packet Analysis", "Network Security"],
  },
];

const roadmap = [
  {
    period: "Next Step",
    title: "ISC2 Certified in Cybersecurity (CC)",
    text: "Target: May 2027 — building strong foundational knowledge.",
  },
  {
    period: "Core Focus",
    title: "Deepen Network Security & Threat Detection",
    text: "Enhance Project Plexus with deep learning models.",
  },
  {
    period: "Applied Skills",
    title: "Cross-Platform Support",
    text: "Add Windows support to Project Plexus.",
  },
];

const terminalCommands = [
  {
    name: "about",
    aliases: ["about"],
    href: "#about",
    output: [
      "Security-focused CSE student — network defense, real-time detection, ML.",
      "Opening about section...",
    ],
  },
  {
    name: "capabilities",
    aliases: ["capabilities", "skills"],
    href: "#capabilities",
    output: ["network-security   secure-development   applied-research", "Opening capabilities..."],
  },
  {
    name: "project",
    aliases: ["project", "projects", "work"],
    href: "#work",
    output: [
      "Real-time NIDS online. FastAPI + Scapy + XGBoost.",
      "Loading Project Plexus and NetScope...",
    ],
  },
  {
    name: "stack",
    aliases: ["stack", "tech"],
    href: "#stack",
    output: ["python  fastapi  scapy  xgboost  react  docker  git", "Opening tech stack..."],
  },
  {
    name: "journey",
    aliases: ["journey", "roadmap"],
    href: "#journey",
    output: ["ISC2 Certified in Cybersecurity — exam targeted May 2027.", "Opening roadmap..."],
  },
  {
    name: "contact",
    aliases: ["contact"],
    href: "#contact",
    output: ["email · linkedin · github ready.", "Opening contact..."],
  },
  {
    name: "resume",
    aliases: ["resume", "cv"],
    href: "#resume",
    output: ["Fetching latest resume...", "Opening resume section..."],
  },
  {
    name: "hi",
    aliases: ["hi", "hello", "hey", "yo"],
    href: null,
    hidden: true,
    output: ["hi, i'm rishabh — information security focused developer. Feel free to explore the portfolio or reach out!"],
  },
  {
    name: "whoami",
    aliases: ["whoami"],
    href: null,
    hidden: true,
    output: ["rishabh — network security & full-stack development."],
  },
];

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-signal px-6 py-3 font-mono text-sm font-medium text-bg transition hover:brightness-110 active:brightness-95";
const btnSecondary =
  "inline-flex items-center justify-center rounded-full border border-line-strong bg-panel px-6 py-3 font-mono text-sm font-medium text-ink transition hover:border-signal/60 hover:text-signal";

function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (prefersReduced || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
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
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 60, 280)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="reveal max-w-2xl" data-reveal>
      <span className="font-mono text-sm uppercase tracking-[0.16em] text-signal">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold leading-snug text-ink md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-muted">{text}</p> : null}
    </div>
  );
}

function TerminalNav() {
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to rishabh@plexus — type 'help' to see available commands." },
  ]);
  const [value, setValue] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [history]);

  const commandNames = terminalCommands
    .filter((entry) => !entry.hidden)
    .map((entry) => entry.name)
    .join("  ");

  const runCommand = (raw) => {
    const trimmed = raw.trim().slice(0, 60);
    const word = trimmed.split(/\s+/)[0]?.toLowerCase();
    if (!word) return;

    setCmdHistory((prev) => [...prev, trimmed].slice(-50));
    setHistoryIndex(-1);

    if (word === "clear") {
      setHistory([]);
      return;
    }

    if (word === "help") {
      setHistory((prev) =>
        [
          ...prev,
          { type: "command", text: trimmed },
          { type: "output", text: `Available commands: ${commandNames}  clear` },
        ].slice(-200),
      );
      return;
    }

    const match = terminalCommands.find((entry) => entry.aliases.includes(word));

    if (!match) {
      setHistory((prev) =>
        [
          ...prev,
          { type: "command", text: trimmed },
          { type: "error", text: `bash: ${word}: command not found` },
          { type: "output", text: "Type 'help' to see available commands." },
        ].slice(-200),
      );
      return;
    }

    setHistory((prev) =>
      [
        ...prev,
        { type: "command", text: trimmed },
        ...match.output.map((line) => ({ type: "output", text: line })),
      ].slice(-200),
    );

    if (match.href) {
      window.setTimeout(() => {
        document.querySelector(match.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) return;
    runCommand(value);
    setValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(cmdHistory[nextIndex]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(cmdHistory[nextIndex]);
      }
    }
  };

  return (
    <div
      className="rounded-xl2 border border-term-line bg-term-bg shadow-panel"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-term-line px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-term-green-dim">rishabh@plexus: ~</span>
      </div>

      <div
        ref={logRef}
        className="term-scanlines h-72 overflow-y-auto p-5 font-mono text-xs leading-relaxed md:p-6 md:text-sm"
      >
        {history.map((line, index) => {
          if (line.type === "command") {
            return (
              <div key={index} className="term-glow mt-2 flex gap-2 text-term-green first:mt-0">
                <span>❯</span>
                <span>{line.text}</span>
              </div>
            );
          }

          if (line.type === "system") {
            return (
              <p key={index} className="text-term-green-dim">
                {line.text}
              </p>
            );
          }

          if (line.type === "error") {
            return (
              <p key={index} className="mt-1 pl-4 text-term-err">
                {line.text}
              </p>
            );
          }

          return (
            <p key={index} className="mt-1 pl-4 text-term-green-dim">
              {line.text}
            </p>
          );
        })}

        <form onSubmit={handleSubmit} className="term-glow mt-2 flex items-center gap-2 text-term-green">
          <span>❯</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            maxLength={60}
            aria-label="Terminal command input"
            placeholder="type a command…"
            className="flex-1 bg-transparent font-mono text-term-green caret-term-green outline-none placeholder:text-term-green-dim/70"
          />
          <span className="term-cursor h-4 w-2 bg-term-green" aria-hidden="true" hidden={value.length > 0} />
        </form>
      </div>

      <p className="border-t border-term-line px-5 py-3 font-mono text-[11px] text-term-green-dim md:px-6">
        Try: about · project · capabilities · stack · journey · contact · resume · hi · help
      </p>
    </div>
  );
}

function App() {
  useReveal();

  return (
    <div className="relative">
      <div className="scene-grid" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1220px] px-5 pb-24 md:px-8">
        <header className="reveal flex items-center justify-between py-6" data-reveal>
          <a href="#top" className="font-mono text-sm tracking-wide text-ink">
            rishabh<span className="text-signal">.</span>sec
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="font-mono text-sm text-muted transition hover:text-ink">
                {link.label}
              </a>
            ))}
            <a href="#contact" className={btnPrimary}>
              Connect
            </a>
          </nav>
          <a href="#contact" className={`${btnPrimary} md:hidden`}>
            Connect
          </a>
        </header>

        <main id="top">
          {/* HERO */}
          <section className="grid gap-12 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
            <div className="reveal" data-reveal>
              <span className="font-mono text-sm uppercase tracking-[0.16em] text-teal">
                Network Security Portfolio
              </span>

              <h1 className="mt-5 flex items-center gap-2 font-display text-6xl font-semibold leading-none text-ink md:text-7xl">
                <span>{heroName}</span>
                <span className="type-caret h-12 md:h-14" aria-hidden="true" />
              </h1>

              <p className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-signal md:text-base">
                Information Security Focused Developer
              </p>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                Building secure systems with focus on Network Security, Threat Detection, and defensive
                development practices.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className={btnPrimary} href="mailto:rishabh.public.mail@gmail.com">
                  Email me
                </a>
                <a
                  className={btnSecondary}
                  href="https://www.linkedin.com/in/rishabh-joshi-992834326/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a className={btnSecondary} href="#work">
                  View Project Plexus
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Signature element: interactive terminal nav */}
            <div className="reveal" data-reveal>
              <TerminalNav />
            </div>
          </section>

          {/* STATS */}
          <section className="grid gap-4 py-6 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <article
                key={stat.value}
                className="reveal rounded-xl2 border border-line bg-panel p-6"
                data-reveal
              >
                <strong className="font-display text-xl text-ink">{stat.value}</strong>
                <p className="mt-2 text-sm leading-relaxed text-muted">{stat.label}</p>
              </article>
            ))}
          </section>

          {/* ABOUT */}
          <section className="grid gap-10 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-14" id="about">
            <SectionHeading
              eyebrow="About Me"
              title="Curiosity-driven security learning backed by practical software work."
              text="I enjoy exploring the technical edges: live traffic, system behavior, and the implementation details that matter when defensive software has to hold up in the real world."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutPoints.map((point, index) => (
                <article
                  key={point}
                  className="reveal rounded-xl2 border border-line bg-panel p-6"
                  data-reveal
                >
                  <span className="font-mono text-xs text-signal">{aboutPointTitles[index]}</span>
                  <p className="mt-3 text-sm leading-relaxed text-ink">{point}</p>
                </article>
              ))}
            </div>
          </section>

          {/* CAPABILITIES */}
          <section className="grid gap-10 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-14" id="capabilities">
            <SectionHeading
              eyebrow="Capabilities"
              title="Technical curiosity backed by practical software execution."
              text="Two threads run through this work: building real, working software, and pushing deliberately deeper into network security and defensive engineering."
            />

            <div className="grid gap-4">
              {capabilities.map((item) => (
                <article
                  key={item.id}
                  className="reveal flex gap-5 rounded-xl2 border border-line bg-panel p-6"
                  data-reveal
                >
                  <span className="font-mono text-sm text-teal">{item.id}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* WORK */}
          <section className="py-20" id="work">
            <SectionHeading
              eyebrow="Major Works"
              title="Security-focused builds that best represent my practical direction."
              text="Real-time traffic analysis and detection systems, built to close the gap between security theory and running code."
            />

            <div className="mt-10 grid gap-6">
              {majorWorks.map((project) => (
                <article
                  key={project.title}
                  className={`reveal rounded-xl2 border p-6 md:p-8 ${
                    project.featured
                      ? "border-signal/30 bg-panel-strong shadow-panel"
                      : "border-line bg-panel"
                  }`}
                  data-reveal
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span
                      className={`font-mono text-sm uppercase tracking-[0.12em] ${
                        project.featured ? "text-signal" : "text-teal"
                      }`}
                    >
                      {project.label}
                    </span>
                    <a
                      className="font-mono text-xs text-muted underline decoration-line-strong underline-offset-4 transition hover:text-ink"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub ↗
                    </a>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-ink md:text-2xl">{project.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                    {project.summary}
                  </p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.details.map((detail) => (
                      <p key={detail} className="text-sm leading-relaxed text-ink/90">
                        · {detail}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* STACK */}
          <section className="py-20" id="stack">
            <SectionHeading
              eyebrow="Tech Stack"
              title="Languages, frameworks, platforms, and security tooling."
              text="A stack shaped by both software delivery and security exploration — from backend frameworks to packet-level tooling."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {techGroups.map((group) => (
                <article
                  key={group.title}
                  className="reveal rounded-xl2 border border-line bg-panel p-6"
                  data-reveal
                >
                  <span className="font-mono text-sm uppercase tracking-[0.12em] text-muted">
                    {group.title}
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line-strong bg-bg px-3 py-1.5 font-mono text-xs text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* JOURNEY / ROADMAP */}
          <section className="py-20" id="journey">
            <SectionHeading eyebrow="Roadmap & Learning Path" title="What the next stage of growth looks like." />

            <div className="mt-10 space-y-4 border-l border-line pl-6 md:pl-10">
              {roadmap.map((item) => (
                <article key={item.title} className="reveal relative" data-reveal>
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-signal md:-left-[47px]" />
                  <span className="font-mono text-sm uppercase tracking-[0.12em] text-signal">{item.period}</span>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* RESUME */}
          <section
            className="reveal grid gap-6 rounded-xl2 border border-line bg-panel p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-10"
            data-reveal
            id="resume"
          >
            <div>
              <span className="font-mono text-sm uppercase tracking-[0.16em] text-teal">Resume</span>
              <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
                Keep the portfolio open, or take the summary with you.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                View the latest resume online or download the PDF directly for applications, outreach, and
                profile sharing.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a className={btnPrimary} href={resumeHref} target="_blank" rel="noopener noreferrer">
                View resume
              </a>
              <a className={btnSecondary} href={resumeHref} download>
                Download PDF
              </a>
            </div>
          </section>

          {/* CONTACT */}
          <section className="reveal mt-8 py-16 text-center" data-reveal id="contact">
            <span className="font-mono text-sm uppercase tracking-[0.16em] text-signal">Connect</span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
              Open to conversations around security, software, and ambitious builds.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              Reach out for collaboration, project discussions, or opportunities in network security and
              secure development.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a className={btnPrimary} href="mailto:rishabh.public.mail@gmail.com">
                Email
              </a>
              <a
                className={btnSecondary}
                href="https://www.linkedin.com/in/rishabh-joshi-992834326/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a className={btnSecondary} href="https://github.com/Rishabh4769" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </section>
        </main>

        <footer className="mt-10 flex flex-col items-center gap-2 border-t border-line pt-8 text-center font-mono text-xs text-muted md:flex-row md:justify-between md:text-left">
          <span>© {new Date().getFullYear()} Rishabh Joshi. Built with React &amp; Tailwind CSS.</span>
          <span>Network Security · Full-Stack Development</span>
        </footer>
      </div>
    </div>
  );
}

export default App;