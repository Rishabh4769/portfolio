// All site content lives here. Edit facts in this file —
// the pages render from it. Placeholders are marked [TO BE FILED].

export const LINKS = {
  github: 'https://github.com/Rishabh4769',
  plexusRepo: 'https://github.com/Rishabh4769/Project-Plexus',
  linkedin: 'https://www.linkedin.com/in/rishabh-joshi-992834326/',
  email: 'mailto:contact@rishabh-joshi.in',
};

export const TICKER_ITEMS = [
  { t: 'PLEXUS v3.0.0 — shipped', c: 'ok' },
  { t: 'KRONOS — active build · 210 tests green', c: 'wr' },
  { t: 'NETSCOPE — packet sniffer live', c: '' },
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
      ['VERSION', 'v3.0.0'],
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
    sub: 'A network packet sniffer for seeing what the wire sees.',
    status: 'SHIPPED',
    statusClass: 'ship',
    desc: 'NETSCOPE captures and dissects network packets so you can watch traffic the way an analyst does — <strong>protocol by protocol, packet by packet</strong>. It was the first tool in the dossier and the reason packet-level thinking runs through everything built since.',
    arch: `[NETWORK INTERFACE (eth0/wlan0)]
              │
              ▼
       AF_PACKET Socket
              │
              ▼
     Layer 2: Ethernet Frame Header Check (MAC / EtherType)
              │
              ▼
     Layer 3: IPv4 / IPv6 Header Deconstruction (TTL, TOS)
              │
              ▼
     Layer 4: TCP / UDP / ICMP Protocol Dissection
              │
              ▼
 [Live Terminal TUI / Packet Hex Dump Stream]`,
    meta: [
      ['VERSION', 'v1.0'],
      ['ROLE', 'Sole builder'],
      ['FOCUS', 'Packet capture'],
      ['STATUS', 'Shipped'],
    ],
    feats: [
      'Live packet capture and dissection',
      'Protocol-level traffic breakdown',
      'Foundation for the PLEXUS detection work',
    ],
    stack: ['Python', 'Scapy'],
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
    body: 'A packet sniffer built to watch traffic protocol by protocol. First shipped tool; taught packet-level thinking that runs through everything since.',
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
STATUS: SHIPPED v3.0.0
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
Network packet sniffer.
Live capture · protocol dissection.
STATUS: SHIPPED`,
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
