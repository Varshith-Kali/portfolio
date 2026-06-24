// === Single source of truth — AI Security Engineer narrative ===

export const profile = {
  name: "Varshith Puli",
  firstName: "Varshith",
  lastName: "Puli",
  role: "AI Security Engineer",
  headline: "Building secure intelligence.",
  subheadline:
    "I secure AI systems end-to-end — from threat modeling and red teaming to guardrails, agent architecture, and runtime protection.",
  location: "India · Remote-ready",
  email: "pulivarshit@gmail.com",
  phone: "+91 7981360062",
  github: "github.com/Varshith-Kali",
  linkedin: "linkedin.com/in/varshith-puli",
  available: true,
  cgpa: "9.49",
  graduation: "May 2025",
  university: "SRM Institute of Science & Technology",
};

export type Metric = { value: string; label: string; context: string };

export const metrics: Metric[] = [
  { value: "60%", label: "Vulnerability review time cut", context: "ThreatModelerX unified pipeline" },
  { value: "35%", label: "AI accuracy gain", context: "NeuroRAG self-correcting RAG" },
  { value: "40%", label: "Manual effort reduced", context: "Python automation at IDFC FIRST Bank" },
  { value: "80+", label: "Security exceptions managed monthly", context: "Across enterprise systems" },
  { value: "50%", label: "Post-release security issues cut", context: "CI/CD security gates" },
  { value: "30%", label: "Security gap resolution faster", context: "Across VA/PT and DevSecOps teams" },
];

// === Section 2: The Evolution ===
export const evolutionStages = [
  {
    n: "01",
    year: "2025",
    title: "Cybersecurity",
    description: "Foundations in offensive security, ethical hacking, and network defense.",
    detail: "CEH certification. Hands-on with Burp Suite, Metasploit, Nessus. Built intuition for how systems break.",
  },
  {
    n: "02",
    year: "2025",
    title: "GRC & Risk",
    description: "Governance, risk, and compliance in regulated financial environments.",
    detail: "ISO 27001, RBI guidelines, SOC monitoring. Internal audit cycles. Control testing across enterprise systems.",
  },
  {
    n: "03",
    year: "2025",
    title: "Security Automation",
    description: "Replacing manual review with pipelines that scale.",
    detail: "Python tooling cut manual effort 40%. Eliminated SLA breaches across internal audit cycles.",
  },
  {
    n: "04",
    year: "2025",
    title: "DevSecOps",
    description: "Embedding security into the developer workflow, not bolting it on after.",
    detail: "ThreatModelerX — Semgrep, Bandit, Retire.js unified pipeline. STRIDE + MITRE ATT&CK correlation. CI/CD security gates.",
  },
  {
    n: "05",
    year: "2026",
    title: "AI Systems",
    description: "Building intelligent systems with retrieval, validation, and multi-agent reasoning.",
    detail: "NeuroRAG — self-correcting RAG with multi-agent validation. 35% accuracy gain. Local-first, privacy-preserving.",
  },
  {
    n: "06",
    year: "2026",
    title: "AI Security",
    description: "Securing AI itself — the systems, the agents, the models, the guardrails.",
    detail: "AI threat modeling. Prompt injection resistance. Agent abuse testing. RAG security. Runtime protection. Vendor assessments.",
  },
];

// === Section 3: How I Think — Three Pillars ===
export const pillars = [
  {
    id: "security",
    name: "Security",
    description: "Threat modeling, red teaming, architecture review, governance.",
    items: ["STRIDE", "MITRE ATT&CK", "AI Threat Modeling", "Red Teaming", "GRC", "Secure SDLC"],
  },
  {
    id: "automation",
    name: "Automation",
    description: "Pipelines, tooling, and platforms that scale security without scaling headcount.",
    items: ["Python", "CI/CD Security", "Semgrep", "Bandit", "Retire.js", "DevSecOps"],
  },
  {
    id: "ai",
    name: "AI",
    description: "Retrieval systems, multi-agent validation, guardrails, secure deployment.",
    items: ["LLMs", "RAG", "Multi-Agent Systems", "Prompt Engineering", "FAISS", "AI Guardrails"],
  },
];

// === Section 4: Featured Systems ===
export type Project = {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  year: string;
  status: string;
  summary: string;
  narrative: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  highlights: string[];
  architecture: { layer: string; components: string[] }[];
};

export const projects: Project[] = [
  {
    id: "threatmodelerx",
    name: "ThreatModelerX",
    subtitle: "Security automation platform",
    category: "DevSecOps",
    year: "2024",
    status: "Shipped",
    summary:
      "A fullstack security automation platform that fused Semgrep, Bandit, and Retire.js into a single pipeline, compressing manual vulnerability review by 60%.",
    narrative:
      "ThreatModelerX unifies static analysis, dependency scanning, and threat modeling into a single pipeline that runs inside CI/CD. STRIDE-based modeling correlates with MITRE ATT&CK to score 100+ vulnerability patterns automatically. Security gates embedded in the workflow catch issues before deployment, cutting post-release security issues in half.",
    stack: ["Python", "Semgrep", "Bandit", "Retire.js", "STRIDE", "MITRE ATT&CK", "CI/CD"],
    metrics: [
      { value: "60%", label: "Review time reduction" },
      { value: "100+", label: "Vulnerability patterns scored" },
      { value: "50%", label: "Post-release issues cut" },
    ],
    highlights: [
      "Unified SAST + dependency scanning pipeline",
      "STRIDE threat modeling with MITRE ATT&CK correlation",
      "Automated risk scoring across 100+ vulnerability patterns",
      "Security gates embedded directly in CI/CD",
    ],
    architecture: [
      { layer: "Intake", components: ["Git Webhook", "PR Trigger", "Repo Scanner"] },
      { layer: "Analysis", components: ["Semgrep", "Bandit", "Retire.js"] },
      { layer: "Intelligence", components: ["STRIDE Engine", "ATT&CK Map", "Risk Scorer"] },
      { layer: "Delivery", components: ["CI/CD Gate", "Exception Queue", "Audit Log"] },
    ],
  },
  {
    id: "neurorag",
    name: "NeuroRAG",
    subtitle: "Self-correcting retrieval system",
    category: "Applied AI",
    year: "2024",
    status: "Shipped",
    summary:
      "A self-correcting Retrieval-Augmented Generation pipeline with multi-agent validation that improved AI accuracy by 35% over standard RAG.",
    narrative:
      "NeuroRAG is a privacy-first RAG system where three agents — validator, verifier, synthesizer — review every response before it ships. TF-IDF vector search and confidence scoring route low-certainty queries back through validation. The entire system runs locally with zero external API dependency, and response caching cuts inference latency by 40%.",
    stack: ["FastAPI", "React", "FAISS", "Docker", "LLMs", "TF-IDF", "Python"],
    metrics: [
      { value: "+35%", label: "Accuracy vs. standard RAG" },
      { value: "40%", label: "Inference latency cut" },
      { value: "0", label: "External API dependencies" },
    ],
    highlights: [
      "Multi-agent validation pipeline (validator → verifier → synthesizer)",
      "Self-correcting retrieval with confidence scoring",
      "Local-first, privacy-preserving architecture",
      "Response caching with TF-IDF vector search",
    ],
    architecture: [
      { layer: "Interface", components: ["React UI", "FastAPI Gateway"] },
      { layer: "Retrieval", components: ["TF-IDF Vectorizer", "FAISS Index", "Confidence Scorer"] },
      { layer: "Reasoning", components: ["Validator", "Verifier", "Synthesizer"] },
      { layer: "Memory", components: ["Response Cache", "Docker Sandbox"] },
    ],
  },
];

// === Section 5: AI Security Operations — the differentiator ===
export type SecurityDomain = {
  id: string;
  name: string;
  category: string;
  summary: string;
  details: string[];
  icon: string;
};

export const securityDomains: SecurityDomain[] = [
  {
    id: "threat-modeling",
    name: "AI Threat Modeling",
    category: "Architecture",
    summary: "Mapping adversaries against AI systems before deployment.",
    details: [
      "Apply STRIDE and MITRE ATT&CK frameworks adapted for AI surfaces",
      "Model data flows from training corpus through inference to user-facing output",
      "Identify trust boundaries between model, agent, tool, and user",
      "Score risks by exploitability and blast radius in production",
    ],
    icon: "shield",
  },
  {
    id: "prompt-injection",
    name: "Prompt Injection",
    category: "Adversarial",
    summary: "Testing how models and agents respond to manipulation attempts.",
    details: [
      "Direct and indirect prompt injection resistance testing",
      "Jailbreak and payload variation across model families",
      "Context window manipulation and instruction override attempts",
      "Defense validation: input filtering, system prompt hardening, output sanitization",
    ],
    icon: "syringe",
  },
  {
    id: "agent-abuse",
    name: "Agent Abuse",
    category: "Adversarial",
    summary: "Probing autonomous agents for unsafe tool use and escalation paths.",
    details: [
      "Tool abuse — coercing agents into misusing available capabilities",
      "Privilege escalation through chained agent calls",
      "Goal hijacking and instruction manipulation mid-task",
      "Sandbox escape and lateral movement within agent runtimes",
    ],
    icon: "bot",
  },
  {
    id: "rag-security",
    name: "RAG Security",
    category: "Data",
    summary: "Securing retrieval pipelines against poisoning, leakage, and access control bypass.",
    details: [
      "Vector store poisoning via malicious document injection",
      "Sensitive data leakage through retrieved context",
      "Access control bypass through crafted queries",
      "Embedding inversion and membership inference risks",
    ],
    icon: "database",
  },
  {
    id: "model-risks",
    name: "Model Risks",
    category: "Model",
    summary: "Hallucination, bias, data leakage, and behavioral drift in deployed models.",
    details: [
      "Hallucination controls — confidence thresholds, grounding, citation enforcement",
      "Training data extraction and memorization testing",
      "Bias detection across demographic and behavioral dimensions",
      "Model behavior drift monitoring across versions and fine-tunes",
    ],
    icon: "brain",
  },
  {
    id: "guardrails",
    name: "AI Guardrails",
    category: "Defense",
    summary: "Designing input and output controls that hold under adversarial pressure.",
    details: [
      "Input guardrails — prompt classification, intent filtering, content moderation",
      "Output guardrails — PII redaction, toxicity scoring, schema enforcement",
      "Runtime policy enforcement for tool calls and external actions",
      "Telemetry and alerting when guardrails trigger in production",
    ],
    icon: "fence",
  },
  {
    id: "red-teaming",
    name: "AI Red Teaming",
    category: "Adversarial",
    summary: "Structured adversarial testing against production AI systems.",
    details: [
      "Red team exercises across prompt, agent, and model surfaces",
      "Automated fuzzing with Garak, Promptfoo, and custom harnesses",
      "Purple team collaboration with engineering to close findings",
      "Repeatable test suites that run in CI before every model release",
    ],
    icon: "crosshair",
  },
];

// === Section 6: Tool Evaluation Lab ===
export type ToolEvaluation = {
  id: string;
  name: string;
  category: string;
  tests: string;
  helps: string;
  limitations: string;
  observations: string;
};

export const toolEvaluations: ToolEvaluation[] = [
  {
    id: "garak",
    name: "Garak",
    category: "Model Probing",
    tests: "Probes LLMs for vulnerabilities — prompt injection, hallucination, data leakage, toxicity, jailbreaks.",
    helps: "Wide coverage of known LLM weakness classes. Open source. Extensible probe framework. Good for baseline model evaluation.",
    limitations: "Probe coverage is broad but shallow. False positives on edge cases. Requires custom probes for domain-specific risks.",
    observations: "Best used as a first-pass scanner in CI. Pair with targeted manual testing for findings that matter. Probes need tuning per model family.",
  },
  {
    id: "promptfoo",
    name: "Promptfoo",
    category: "Prompt Testing",
    tests: "Prompt injection, jailbreak resistance, output regression, adversarial prompt suites.",
    helps: "Excellent for prompt-level regression testing. YAML-driven test definitions. CI-friendly. Strong assertion framework.",
    limitations: "Focused on prompt I/O — does not assess agent behavior or tool-use paths. Limited runtime context.",
    observations: "Best paired with red team prompt libraries. Runs in our pre-deployment gate. Catches regression before model swaps ship.",
  },
  {
    id: "ragas",
    name: "RAGAS",
    category: "RAG Evaluation",
    tests: "RAG pipeline quality — faithfulness, answer relevancy, context precision, context recall.",
    helps: "Standardized RAG metrics. Useful for tracking retrieval quality across iterations. Framework-agnostic.",
    limitations: "Quality metrics, not security metrics. Does not assess poisoning, leakage, or access control. LLM-as-judge adds cost and variance.",
    observations: "Use for retrieval quality baseline. Layer security-specific tests on top — poisoning probes, access boundary tests, leakage scanners.",
  },
  {
    id: "model-scanner",
    name: "Model Scanner",
    category: "Model Inspection",
    tests: "Scans model artifacts for embedded payloads, suspicious code, and supply chain risks.",
    helps: "Catches model file tampering and pickle-based code execution risks. Important for third-party model ingestion.",
    limitations: "Signature-based — misses novel obfuscation. Limited coverage on fine-tuned variants. Requires curated indicator database.",
    observations: "Mandatory checkpoint for any third-party model entering the environment. Pair with provenance verification and signed model registry.",
  },
  {
    id: "pentestai",
    name: "PentestAI",
    category: "Adversarial Simulation",
    tests: "AI-driven penetration testing against applications, APIs, and infrastructure.",
    helps: "Augments manual pentest coverage. Useful for surface discovery and routine finding validation.",
    limitations: "Not a replacement for skilled red teamers. Findings need human verification. Limited reasoning on complex multi-step attack chains.",
    observations: "Useful as a force multiplier for routine testing. Keep humans in the loop for anything that touches production or regulated data.",
  },
];

// === Section 7: Architecture Reviews ===
export type ArchitectureReview = {
  id: string;
  name: string;
  category: string;
  description: string;
  threatSurfaces: string[];
  dataFlows: string[];
  guardrails: string[];
  controls: string[];
};

export const architectureReviews: ArchitectureReview[] = [
  {
    id: "ai-application",
    name: "AI Application",
    category: "User-facing",
    description: "Chat interfaces, copilots, and AI-powered features embedded in products.",
    threatSurfaces: ["User input channels", "Model API endpoints", "Response rendering", "Session state"],
    dataFlows: ["User → Application → Model → Application → User", "Conversation logs → Storage", "Telemetry → Analytics"],
    guardrails: ["Input classification", "Output filtering", "Rate limiting", "Content moderation"],
    controls: ["AuthN/AuthZ on model calls", "PII redaction", "Audit logging", "Circuit breakers"],
  },
  {
    id: "rag-system",
    name: "RAG System",
    category: "Retrieval",
    description: "Knowledge-augmented generation pipelines with vector stores and document ingestion.",
    threatSurfaces: ["Document ingestion", "Vector store", "Embedding API", "Retrieval query path"],
    dataFlows: ["Documents → Embeddings → Vector Store", "Query → Embedding → Retrieval → LLM → Response", "Cache → Storage"],
    guardrails: ["Document provenance verification", "Access control on retrieval", "Output grounding enforcement", "Source attribution"],
    controls: ["Ingestion scanning", "Vector store isolation", "Tenant separation", "Retrieval logging"],
  },
  {
    id: "agent-system",
    name: "Agent System",
    category: "Autonomous",
    description: "Multi-step autonomous agents with tool access, memory, and planning capabilities.",
    threatSurfaces: ["Tool interfaces", "Memory store", "Planning loop", "Inter-agent communication"],
    dataFlows: ["User → Agent → Planner → Tools → Memory → Agent → User", "Agent ↔ Agent messages", "Tool calls → External APIs"],
    guardrails: ["Tool call policy enforcement", "Action approval gates", "Sandboxed execution", "Resource quotas"],
    controls: ["Per-tool authorization", "Action logging", "Kill switches", "Output validation"],
  },
  {
    id: "cloud-ai-platform",
    name: "Cloud AI Platform",
    category: "Infrastructure",
    description: "Model hosting, training pipelines, and inference infrastructure across AWS, GCP, and on-prem.",
    threatSurfaces: ["Model registry", "Training pipeline", "Inference endpoints", "IAM boundaries"],
    dataFlows: ["Training data → Pipeline → Model artifact → Registry → Endpoint", "Secrets → Workloads", "Telemetry → Monitoring"],
    guardrails: ["Network segmentation", "Endpoint rate limiting", "Model signing", "Pipeline gates"],
    controls: ["IAM least privilege", "VPC isolation", "Encryption at rest and transit", "Compliance attestation"],
  },
];

// === Section 8: Impact (real metrics only — reuse metrics array above) ===

// === Section 9: Operating Principles ===
export const principles = [
  {
    n: "01",
    title: "Security is a feature, not a gate.",
    body: "The future belongs to teams that ship security inside the IDE — not as a final-stage checklist. I build tooling that makes secure-by-default the path of least resistance.",
  },
  {
    n: "02",
    title: "AI without validation is a liability.",
    body: "Generative models are powerful but untrustworthy. NeuroRAG proved multi-agent validation can lift accuracy by 35%. Every AI system that touches real users deserves the same self-correcting scaffold.",
  },
  {
    n: "03",
    title: "Automate before scaling.",
    body: "Manual review does not scale. Pipelines do. Every repetitive security decision should become code — tested, versioned, and reviewed.",
  },
  {
    n: "04",
    title: "Trust boundaries matter.",
    body: "In AI systems, trust is fluid. Models trust tools. Agents trust memory. Users trust output. Map every trust boundary explicitly and defend each one.",
  },
  {
    n: "05",
    title: "Design for misuse.",
    body: "If a system can be misused, it will be. Threat model adversarial users from day one — not after launch.",
  },
  {
    n: "06",
    title: "Local-first is the new cloud.",
    body: "Privacy is a feature, not a setting. The next decade of AI tooling runs in regulated perimeters with full observability and zero external dependencies.",
  },
];

// === Section 10: What I'm Exploring ===
export const exploringTopics = [
  {
    name: "Agent Security",
    description: "Securing autonomous multi-step agents against goal hijacking, tool abuse, and sandbox escape.",
  },
  {
    name: "MCP Security",
    description: "Model Context Protocol — securing the standardized interface between models, tools, and data sources.",
  },
  {
    name: "AI Runtime Protection",
    description: "Real-time detection and response for adversarial behavior in production AI inference paths.",
  },
  {
    name: "Autonomous Red Teaming",
    description: "AI-driven red team agents that continuously probe production systems for emergent weaknesses.",
  },
  {
    name: "Model Context Protocol Security",
    description: "Hardening the protocol layer that governs how AI systems connect to external tools and data.",
  },
  {
    name: "AI Security Posture Management",
    description: "Continuous assessment and drift detection across the full AI stack — model, data, agent, infra.",
  },
  {
    name: "Secure Multi-Agent Systems",
    description: "Authorization, isolation, and coordination controls for systems where multiple agents collaborate.",
  },
];

// === Experience + Education + Certifications + Publications ===
export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "idfc-analyst",
    company: "IDFC FIRST Bank",
    role: "Cybersecurity / AI Security Analyst",
    period: "Jul 2025 — Present",
    location: "Financial sector",
    description:
      "Securing GenAI initiatives and agentic workflows while hardening the bank's broader security posture.",
    achievements: [
      "Review security architecture for GenAI initiatives and agentic workflows, partnering with engineering teams to embed guardrails, threat modeling, and OWASP LLM Top 10 controls into the AI development lifecycle.",
      "Evaluate AI security tooling (Garak, Promptlint, model scanners, RAGAS) to test prompt injection resistance, agent vulnerabilities, RAG security, and data leakage risks, strengthening the org's AI red-teaming capability.",
      "Assess vendor solutions (HiddenLayer, Palo Alto Networks, Noma Security) and drive POCs across AWS and on-prem AI deployments, advising on model hosting, data flow security, and AI security posture.",
    ],
    stack: ["Garak", "Promptlint", "RAGAS", "Model Scanners", "HiddenLayer", "Palo Alto Networks", "Noma Security", "AWS", "OWASP LLM Top 10", "AI Threat Modeling"],
  },
  {
    id: "idfc-intern",
    company: "IDFC FIRST Bank",
    role: "Cybersecurity Intern, Governance Risk & Compliance (GRC)",
    period: "Jan 2025 — Jun 2025",
    location: "Financial sector",
    description:
      "Managed security exceptions across enterprise systems and built automation that cut manual effort.",
    achievements: [
      "Managed 80+ monthly security exceptions across URL whitelisting, application security, vulnerability assessments, and privileged access controls, backed by a self-built Python automation tool that cut manual effort by 40% and eliminated SLA breaches across internal audit cycles.",
    ],
    stack: ["Python", "GRC", "ISO 27001", "RBI Guidelines", "SOC Monitoring", "Vulnerability Assessment"],
  },
];

export const certifications = [
  { name: "Certified Ethical Hacker", issuer: "EC-Council", year: "2024" },
  { name: "Red Hat Enterprise Linux Fundamentals", issuer: "Red Hat", year: "2024" },
];

export const education = {
  institution: "SRM Institute of Science & Technology",
  degree: "B.Tech, Computer Science — Cybersecurity Specialization",
  period: "Graduated May 2025",
  cgpa: "9.49 / 10",
};

export const publications = [
  {
    title: "Copyright Information Embedding Using Steganography with Binary Lower Triangular Matrix",
    venue: "IEEE",
    publisher: "IEEE Xplore",
    year: "2024",
    url: "https://ieeexplore.ieee.org/abstract/document/10987986",
    summary:
      "A steganographic approach to copyright protection using binary lower triangular matrices for embedding information into digital media with improved imperceptibility and robustness.",
  },
];

// === Vendor assessments ===
export const vendorAssessments = [
  {
    name: "HiddenLayer",
    category: "AI Security Platform",
    focus: "Model scanning, runtime protection, and threat detection for ML systems.",
  },
  {
    name: "Palo Alto Networks",
    category: "Network + AI Security",
    focus: "AI Access Security, model governance, and integration with existing network controls.",
  },
  {
    name: "Noma Security",
    category: "AI Governance",
    focus: "Data science security — pipeline protection, model lineage, and compliance automation.",
  },
];

// === Navigation sections (for command palette + section nav) ===
export const navSections = [
  { id: "hero", label: "Index", index: "00", group: "Top" },
  { id: "evolution", label: "Evolution", index: "01", group: "Story" },
  { id: "experience", label: "Experience", index: "02", group: "Story" },
  { id: "systems", label: "Side Projects", index: "03", group: "Work" },
  { id: "ai-security", label: "AI Security Lab", index: "04", group: "Work" },
  { id: "tools", label: "Open-Source Evaluations", index: "05", group: "Work" },
  { id: "architecture", label: "Architecture Reviews", index: "06", group: "Work" },
  { id: "principles", label: "POC's & Research", index: "07", group: "Record" },
  { id: "thinking", label: "How I Think", index: "08", group: "Story" },
  { id: "impact", label: "Impact", index: "09", group: "Record" },
  { id: "exploring", label: "Exploring", index: "10", group: "Record" },
  { id: "contact", label: "Contact", index: "11", group: "Top" },
] as const;

// === Command palette entries ===
export const commandPaletteEntries = [
  { id: "threatmodelerx", label: "ThreatModelerX", description: "Security automation platform", group: "Projects", target: "systems" },
  { id: "neurorag", label: "NeuroRAG", description: "Self-correcting RAG system", group: "Projects", target: "systems" },
  { id: "ai-threat-modeling", label: "AI Threat Modeling", description: "Adapting STRIDE for AI surfaces", group: "AI Security", target: "ai-security" },
  { id: "prompt-injection", label: "Prompt Injection", description: "Injection resistance testing", group: "AI Security", target: "ai-security" },
  { id: "agent-abuse", label: "Agent Abuse", description: "Tool use and escalation probes", group: "AI Security", target: "ai-security" },
  { id: "rag-security", label: "RAG Security", description: "Poisoning, leakage, access control", group: "AI Security", target: "ai-security" },
  { id: "red-teaming", label: "AI Red Teaming", description: "Structured adversarial testing", group: "AI Security", target: "ai-security" },
  { id: "garak", label: "Garak", description: "LLM vulnerability prober", group: "Tools", target: "tools" },
  { id: "promptfoo", label: "Promptfoo", description: "Prompt regression testing", group: "Tools", target: "tools" },
  { id: "ragas", label: "RAGAS", description: "RAG quality metrics", group: "Tools", target: "tools" },
  { id: "ai-application", label: "AI Application Architecture", description: "User-facing AI review", group: "Architecture", target: "architecture" },
  { id: "agent-system", label: "Agent System Architecture", description: "Autonomous agent review", group: "Architecture", target: "architecture" },
  { id: "cloud-ai-platform", label: "Cloud AI Platform", description: "Infrastructure review", group: "Architecture", target: "architecture" },
  { id: "ieee-paper", label: "IEEE Paper", description: "Steganography research", group: "Research", target: "principles" },
  { id: "contact", label: "Contact", description: "Start a conversation", group: "Top", target: "contact" },
];
