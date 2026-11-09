// All site content lives here. Edit facts in this file —
// the pages render from it. Placeholders are marked [TO BE FILED].

export const LINKS = {
  github: 'https://github.com/Rishabh4769',
  plexusRepo: 'https://github.com/Rishabh4769/Project-Plexus',
  linkedin: 'https://www.linkedin.com/in/rishabh-joshi-992834326/',
  email: 'mailto:contact@rishabh-joshi.in',
};

export const TICKER_ITEMS = [
  { t: 'PLEXUS v3.0.2 — shipped', c: 'ok' },
  { t: 'KRONOS — active build · 210 tests green', c: 'wr' },
  { t: 'NETSCOPE v2 — FastAPI + React monitor', c: '' },
  { t: 'clearance: public', c: '' },
  { t: 'subject: RISHABH JOSHI', c: 'ok' },
];

export const CASES = [
  {
    id: 'plexus',
    no: 'CASE 001',
    title: 'PLEXUS',
    sub: 'Real-time network intrusion detection, with machine learning.',
    status: 'SHIPPED',
    statusClass: 'ship',
    desc: 'PLEXUS watches a network interface in real time and calls out attacks as they happen. A <strong>rule-based fast path</strong> catches port scans and flooding instantly, while an <strong>XGBoost slow path</strong> — trained on CICIDS2017 — scores traffic for subtler intrusions. Live dashboard, PCAP analysis, and Night-Dossier PDF reports round it out.',
    arch: `[LIVE PACKET STREAM] ──> Scapy Sniffer Engine
                             │
            ┌────────────────┴────────────────┐
            ▼ (Fast Path)                     ▼ (Slow Path)
    Rule Heuristics                Feature Extractor (79 metrics)
 [SYN Flood / Port Scan]                      │
            │                                 ▼
            │                        XGBoost Classifier
            │                        (Trained on CICIDS2017)
            ▼                                 ▼
     Immediate Alert                   Scored Threat
            └────────────────┬────────────────┘
                             ▼
                FastAPI WebSocket Pipeline
                             │
                 [React Triage Dashboard]`,
    meta: [
      ['VERSION', 'v3.0.2'],
      ['ROLE', 'Sole builder'],
      ['DETECTION', 'Rules + XGBoost'],
      ['DATASET', 'CICIDS2017'],
    ],
    feats: [
      'Real-time capture and alerting on a live interface',
      'Port-scan and flood detection on the fast path',
      'ML scoring pipeline trained on CICIDS2017 traffic',
      'React dashboard with live alert feed',
      'PCAP upload and offline analysis',
      'Night-Dossier PDF report generation',
    ],
    stack: ['Python', 'Scapy', 'XGBoost', 'FastAPI', 'React', 'SQLite'],
    links: [{ label: 'GitHub repo', href: LINKS.plexusRepo }],
  },
  {
    id: 'kronos',
    no: 'CASE 002',
    title: 'KRONOS',
    sub: 'A beginner-friendly SIEM, built like a real analyst console.',
    status: 'ACTIVE BUILD',
    statusClass: 'build',
    desc: 'KRONOS is a <strong>security information and event management</strong> system built from scratch: a query grammar compiles to ORM queries, a search API serves results over HTMX, and detection rules turn raw events into triageable alerts. The interface is deliberately an <strong>authentic analyst console</strong> — no neon-dashboard cosplay.',
    arch: `[SYSLOG / EVENT INGRESS] ──> JSON Normalizer
                                  │
                                  ▼
                     Custom Query Lexer & Parser
                    (grammar: field == val | aggr)
                                  │
                                  ▼
                         Django ORM Compiler
                                  │
               ┌──────────────────┴──────────────────┐
               ▼                                     ▼
     Real-Time Search API                  Detection Rule Engine
     (HTMX Server-Render)                  (Threshold & Windowing)
               │                                     │
               ▼                                     ▼
     [Analyst Web Console]                 [Alert Triage Pipeline]`,
    meta: [
      ['VERSION', 'v0.4.0'],
      ['ROLE', 'Sole builder'],
      ['TESTS', '210 green'],
      ['STACK', 'Django + HTMX'],
    ],
    feats: [
      'Custom query grammar → ORM compiler → search API',
      'Search autocomplete with keyboard navigation',
      'Detection rules engine with alert triage views',
      'Live event tail on the dashboard',
      'Built-in user guide and build-version info modal',
      '210-test suite, all green',
    ],
    stack: ['Python', 'Django', 'HTMX', 'SQLite', 'pytest'],
    links: [],
  },
  {
    id: 'netscope',
    no: 'CASE 003',
    title: 'NETSCOPE',
    sub: 'A professional network traffic monitor and anomaly detector.',
    status: 'SHIPPED',
    statusClass: 'ship',
    desc: 'NETSCOPE captures and dissects live traffic so you can watch the wire the way an analyst does — <strong>protocol by protocol, packet by packet</strong>. It began as a single-file Tkinter app; <strong>v2 rebuilt it properly</strong> — a FastAPI backend with the sniffer decoupled from the UI, and a React frontend with live tables, charts and session history. The original Tkinter build is preserved in the repo as <strong>netscope.py</strong>.',
    arch: `[NETWORK INTERFACE] ──> Scapy PacketSniffer
                        (backend/sniffer.py)
                                  │
                                  ▼
                     SQLite Store (packets · alerts
                     · sessions — parameterised)
                                  │
                                  ▼
                  FastAPI — REST /api/* + WebSocket
                                  │
                 ┌────────────────┴────────────────┐
                 ▼                                 ▼
        [React Frontend]                  [PDF Reports]
     Dashboard · PacketTable            (ReportLab export)
     AlertTable · TrafficChart
     Sessions browser

     v1 Tkinter app preserved as netscope.py`,
    meta: [
      ['VERSION', 'v2.0'],
      ['ROLE', 'Sole builder'],
      ['STACK', 'FastAPI + React'],
      ['ORIGIN', 'Tkinter v1 — preserved'],
    ],
    feats: [
      'Live packet capture and protocol dissection (Scapy)',
      'Filterable live packet and alert tables',
      'Traffic charting and dashboard stat cards',
      'Historical sessions browser',
      'PDF report generation (ReportLab)',
      'One-command launcher — NetScope.sh',
    ],
    stack: ['Python', 'Scapy', 'FastAPI', 'React', 'SQLite', 'ReportLab'],
    links: [{ label: 'GitHub profile', href: LINKS.github }],
  },
];

export const CAPABILITIES = [
  {
    k: 'OFFENSE',
    title: 'Recon & Enumeration',
    note: 'See the network the way an attacker maps it — then build the alarms.',
    meters: [
      ['Network scanning (nmap)', 82],
      ['Recon & OSINT basics', 68],
      ['Enumeration workflow', 64],
    ],
  },
  {
    k: 'DEFENSE',
    title: 'Detection Engineering',
    note: 'Turn packets and logs into signals an analyst can actually triage.',
    meters: [
      ['Intrusion detection (IDS)', 86],
      ['SIEM & alert triage', 74],
      ['Log analysis', 70],
    ],
  },
  {
    k: 'BUILD',
    title: 'Security Tooling',
    note: 'Full-stack builds where the security feature is the product.',
    meters: [
      ['Python (scapy, ML)', 88],
      ['React + dashboards', 80],
      ['FastAPI / Django backends', 78],
    ],
  },
  {
    k: 'BASE',
    title: 'Fundamentals',
    note: 'The ground everything else stands on — TCP/IP, OS internals, how the kernel works.',
    meters: [
      ['TCP/IP & networking', 76],
      ['Linux & OS internals', 72],
      ['ML for security (XGBoost)', 66],
    ],
  },
];

export const TOOLS = [
  'nmap', 'Wireshark', 'tcpdump', 'Scapy', 'Python', 'XGBoost', 'FastAPI',
  'Django', 'React', 'SQLite', 'Git', 'Linux', 'Burp Suite (basics)',
];

export const TIMELINE = [
  {
    date: 'PHASE 01 — FOUNDATION',
    title: 'The fundamentals',
    body: 'Operating systems, computer networking, system architecture, file structures. <strong>Learn → do → exam-note</strong>, always with a security lens — the ground the dossier stands on.',
  },
  {
    date: 'PHASE 02 — FIRST DETECTIONS',
    title: 'NetScope — see the wire',
    body: 'A packet sniffer built to watch traffic protocol by protocol — first a Tkinter desktop app, later rebuilt as NetScope v2 with a FastAPI backend and React frontend. First shipped tool; taught packet-level thinking that runs through everything since.',
  },
  {
    date: 'SEPTEMBER 2026',
    title: 'PLEXUS v3 — shipped',
    body: 'Real-time network intrusion detection with ML. Rule-based fast path for scans and floods, XGBoost slow path trained on CICIDS2017, live dashboard, PCAP analysis, Night-Dossier PDFs. <strong>Pushed to GitHub and submitted.</strong>',
  },
  {
    date: 'SEPTEMBER 2026',
    title: 'KRONOS — under active build',
    body: 'A beginner-friendly SIEM: query grammar → ORM compiler → search API → HTMX console, with autocomplete, a user guide, and detection rules. <strong>210 tests green.</strong>',
  },
  {
    date: 'NOW',
    title: 'What\'s next',
    body: 'Deep in networking fundamentals, sharpening the foundation. The open question: <strong>blue team or red team</strong> — building toward that decision every day.',
    now: true,
  },
];

export const TERMINAL_FS = {
  'operations': {
    'plexus': {
      'brief.txt':
`CASE 001 — PLEXUS
Real-time network intrusion detection.
Rule-based fast path (port scans, floods) +
XGBoost slow path trained on CICIDS2017.
React dashboard · PCAP analysis · Night-Dossier PDFs.
STATUS: SHIPPED v3.0.2
→ github.com/Rishabh4769/Project-Plexus`,
    },
    'kronos': {
      'brief.txt':
`CASE 002 — KRONOS
Beginner-friendly SIEM, under active build.
Query grammar → ORM compiler → search API → HTMX console.
Detection rules · alert triage · 210 tests green.
STATUS: ACTIVE BUILD`,
    },
    'netscope': {
      'brief.txt':
`CASE 003 — NETSCOPE
Network traffic monitor and anomaly detector.
FastAPI + React (v2) · live capture · sessions · PDF reports.
v1 Tkinter original preserved as netscope.py.
STATUS: SHIPPED v2.0`,
    },
  },
  'profile': {
    'bio.txt':
`Rishabh Joshi — security-first engineer.
BTech student building detection systems:
network IDS with ML · SIEM tooling · packet analysis.
Working toward a career in cybersecurity.`,
    'skills.txt':
`OFFENSE — nmap · recon · enumeration
DEFENSE — detection engineering · SIEM · hardening
BUILD — python · react · fastapi · scapy
BASE — tcp/ip · linux · os fundamentals`,
  },
  'signal': {
    'contact.txt':
`github — github.com/Rishabh4769
linkedin — linkedin.com/in/rishabh-joshi-992834326
email — contact@rishabh-joshi.in`,
  },
};
