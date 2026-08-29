'use client'

import { motion } from 'framer-motion'
import {
  Activity, ArrowUpRight, BookOpen, BriefcaseBusiness, CheckCircle2, CircleDot, Code2,
  Cpu, Github, GraduationCap, Linkedin, Mail, Network, Radar, Server, Shield,
  ShieldCheck, TerminalSquare, Wrench, ExternalLink
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { PortfolioTerminal } from '@/components/Terminal'
import { ContactForm } from '@/components/ContactForm'
import { Konami } from '@/components/Konami'

const skillGroups = [
  { title: 'SECURITY', icon: Shield, items: ['Vulnerability Assessment','Penetration Testing Fundamentals','Web Application Security','Threat Analysis','Security Operations','Access Control','Authentication Security','Incident Investigation'] },
  { title: 'NETWORKING', icon: Network, items: ['TCP/IP','DNS','DHCP','Subnetting','Network Architecture','Firewalls','Routing','Packet Analysis'] },
  { title: 'SYSTEMS', icon: Server, items: ['Linux','Windows','Windows Server','Active Directory','Virtual Machines','Command Line Administration'] },
  { title: 'DEVELOPMENT', icon: Code2, items: ['Python','JavaScript','TypeScript','React','Next.js','APIs','Git','GitHub'] },
]

const tools = ['Burp Suite','Nmap','Wireshark','Metasploit','Nuclei','Hashcat','John the Ripper','Gobuster','ffuf','Git','VirtualBox','Kali Linux','Parrot OS']

const labs = [
  { title: 'Enterprise Windows Domain Lab', icon: Server, text: 'Windows Server 2025 + Windows 11 environment used to practice enterprise identity, centralized authentication, secure file sharing, firewall policy, and validation testing.', bullets: ['AD users & security groups','DNS & domain authentication','SMB / NTFS access control','Firewall validation'] },
  { title: 'Web Security Lab', icon: ShieldCheck, text: 'Hands-on web application testing with a focus on understanding requests, access control, and common vulnerability classes.', bullets: ['Burp Suite & HTTP','Authentication','Access control','Path traversal'] },
  { title: 'Linux Security Environment', icon: TerminalSquare, text: 'Security-focused Linux environments used to build command-line fluency and practice defensive/offensive tooling.', bullets: ['Kali Linux','Parrot OS','Terminal tools','Recon utilities'] },
  { title: 'Networking Lab', icon: Network, text: 'Practical networking environment for learning how core services interact and how to troubleshoot them when they do not.', bullets: ['DNS & DHCP','IP addressing','TCP/IP','Routing & troubleshooting'] },
]

type Project = {
  category: string
  title: string
  description: string
  stack: string[]
  relevance: string
  status?: string
  featured?: boolean
  visual?: 'enterprise-lab' | 'simulation' | 'postlogix' | 'mock'
  github?: string
  live?: string
  caseStudy?: string
  validation?: string[]
  screenshots?: { src: string; alt: string; caption: string }[]
}

const projects: Project[] = [
  {
    category: 'CYBERSECURITY',
    title: 'Enterprise Windows Domain & Network Security Lab',
    description: 'Built and secured a small enterprise-style Windows network using Windows Server 2025 and Windows 11 in Oracle VirtualBox. The environment demonstrates centralized authentication, DNS, role-based access control, secure file sharing, source-specific firewall rules, and validation testing.',
    stack: ['Windows Server 2025','Windows 11 Pro','Active Directory','DNS','SMB','NTFS','Windows Defender Firewall','PowerShell','Oracle VirtualBox'],
    relevance: 'Demonstrates enterprise identity fundamentals, least privilege, group-based authorization, selective traffic filtering, and evidence-driven validation in a self-built lab environment.',
    status: 'FUNCTIONAL SECURITY LAB // ONGOING EXPANSION',
    featured: true,
    visual: 'enterprise-lab',
    caseStudy: '/projects/enterprise-windows-domain-lab',
    validation: ['ICMP BLOCKED','DNS / TCP 53 ALLOWED','SMB / TCP 445 ALLOWED','HR SHARE ACCESS CONTROL VERIFIED'],
    screenshots: [
      {
        src: '/enterprise-lab-dns-and-icmp-validation.webp',
        alt: 'PowerShell showing ping blocked to the domain server while TCP port 53 remains reachable',
        caption: 'Firewall Validation: ICMP from 192.168.56.50 was blocked while DNS / TCP 53 remained reachable.'
      },
      {
        src: '/enterprise-lab-smb-and-icmp-validation.webp',
        alt: 'PowerShell showing TCP port 445 reachable and ping to the domain server timing out',
        caption: 'Service Continuity: SMB / TCP 445 remained available even while ICMP was selectively blocked.'
      },
      {
        src: '/enterprise-lab-hr-share-denied.webp',
        alt: 'Windows network error showing access denied to the restricted HR Share',
        caption: 'Access Control Validation: a non-authorized user was denied access to the restricted HR-Share.'
      },
      {
        src: '/enterprise-lab-firewall-rule.webp',
        alt: 'Windows Defender Firewall inbound rule wizard used to configure traffic filtering',
        caption: 'Windows Defender Firewall with Advanced Security was used to create and scope the inbound rule.'
      }
    ],
  },
  {
    category: 'CYBERSECURITY',
    title: 'Cybersecurity Simulation Platform',
    description: 'Concept for a dynamic cyber training environment that generates unpredictable offensive and defensive scenarios, measures decisions, and compares response paths against the scenario’s intended resolution.',
    stack: ['Security Architecture','Red Team','Blue Team','Scenario Engine','Training UX'],
    relevance: 'Designed around realistic decision-making, incident response, randomized scenarios, and gap analysis rather than scripted checkbox labs.',
    status: 'CONCEPT // IN DEVELOPMENT',
    visual: 'simulation',
  },
  {
    category: 'SAAS',
    title: 'PostLogix AI',
    description: 'Live email campaign analytics SaaS that scores campaign performance, compares historical results, tracks trends, and turns saved campaign data into actionable recommendations and AI-assisted insights.',
    stack: ['Next.js','TypeScript','Supabase','Vercel','Authentication','AI Integration'],
    relevance: 'Demonstrates full-stack development, persistent user data, custom scoring logic, comparative analytics, trend analysis, AI-assisted recommendations, production deployment, and iterative product development.',
    status: 'PUBLIC BETA // LIVE',
    visual: 'postlogix',
    github: 'https://github.com/jphillips0615/postlogix-ai',
    live: 'https://postlogix-ai.vercel.app',
    caseStudy: '/projects/postlogix-ai',
  },
  {
    category: 'MOBILE DEVELOPMENT',
    title: 'Unique Spirits & Pairings',
    description: 'Premium cross-platform mobile application in early development for cocktail discovery, spirit education, favorites, and curated food-pairing experiences.',
    stack: ['React Native','Expo','Expo Router','TypeScript','Git / GitHub'],
    relevance: 'Demonstrates modular mobile architecture, reusable components, typed application development, navigation design, responsive UI, version control, and planning for a scalable product roadmap.',
    status: 'EARLY DEVELOPMENT // ACTIVE BUILD',
    visual: 'mock',
    github: 'https://github.com/jphillips0615/unique-spirits-pairings',
  },
  {
    category: 'SAAS',
    title: 'Audiora AI',
    description: 'Product concept and application work around AI-assisted music generation, credits, account flows, pricing, and community features.',
    stack: ['Next.js','Supabase','APIs','Product Design'],
    relevance: 'Built experience with API-driven product flows, usage credits, auth state, pricing logic, and iterative debugging.',
    status: 'CONCEPT // APPLICATION WORK',
    visual: 'mock',
  },
]

const training = [
  { name: 'PortSwigger Web Security Academy', status: 'ACTIVE', topics: ['Path Traversal','Access Control','Authentication','HTTP Requests','Burp Suite'] },
  { name: 'TryHackMe', status: 'ONGOING', topics: ['Linux','Networking','Enumeration','Security Fundamentals','Practical Labs'] },
  { name: 'Bug Bounty Research', status: 'ACTIVE', topics: ['Reconnaissance','Scope Evaluation','Web Testing','Burp Suite','Responsible Disclosure'] },
]


const credentials = [
  { issuer: 'TryHackMe', title: 'Pre Security Learning Path', date: 'MAY 29, 2026', meta: '19H 10M // LEARNING PATH', file: '/TryHackMe_Pre_Security.pdf' },
  { issuer: 'TryHackMe', title: 'Hacker Holidays', date: 'AUG 12, 2026', meta: 'HANDS-ON CHALLENGE // COMPLETION', file: '/TryHackMe_Hacker_Holidays.pdf' },
  { issuer: 'Google / Coursera', title: 'Foundations of Cybersecurity', date: 'JUN 6, 2025', meta: 'COURSE CERTIFICATE', file: '/Google_Foundations_of_Cybersecurity.pdf', verify: 'https://coursera.org/verify/30FTHBU0YV7F' },
  { issuer: 'Google / Coursera', title: 'Play It Safe: Manage Security Risks', date: 'JUN 13, 2025', meta: 'COURSE CERTIFICATE', file: '/Google_Play_It_Safe_Manage_Security_Risks.pdf', verify: 'https://coursera.org/verify/LNY7CH4L6T06' },
  { issuer: 'Google / Coursera', title: 'Connect and Protect: Networks and Network Security', date: 'JUN 21, 2025', meta: 'COURSE CERTIFICATE', file: '/Google_Connect_Protect_Networks_Network_Security.pdf', verify: 'https://coursera.org/verify/KQHPRWUJLT1H' },
  { issuer: 'Google / Coursera', title: 'Tools of the Trade: Linux and SQL', date: 'JUL 8, 2025', meta: 'COURSE CERTIFICATE', file: '/Google_Tools_of_the_Trade_Linux_SQL.pdf', verify: 'https://coursera.org/verify/RZET14STDSFS' },
  { issuer: 'Google / Coursera', title: 'Assets, Threats, and Vulnerabilities', date: 'AUG 7, 2025', meta: 'COURSE CERTIFICATE', file: '/Google_Assets_Threats_Vulnerabilities.pdf', verify: 'https://coursera.org/verify/QNZF9JLLELW2' },
  { issuer: 'Coursera Project Network', title: 'SQL Joins', date: 'JUN 6, 2025', meta: 'PROJECT CERTIFICATE', file: '/Coursera_SQL_Joins.pdf', verify: 'https://coursera.org/verify/8ZFJJYVPGCLZ' },
]

const experience = [
  { role: 'General Manager', org: 'Burger King', dates: '2021 — 2024', points: ['Led day-to-day operations and team performance','Made time-sensitive decisions under pressure','Coached staff and improved process consistency','Resolved customer and operational issues'] },
  { role: 'General Manager', org: "Taziki's Mediterranean Café", dates: '2016 — 2021', points: ['Managed people, scheduling, training, and operations','Balanced standards, speed, quality, and customer experience','Developed team members and handled escalations','Built repeatable processes in a fast-moving environment'] },
  { role: 'Assistant Manager', org: 'Cracker Barrel', dates: '2012 — 2016', points: ['Supported team leadership and daily operations','Handled customer issues and operational troubleshooting','Helped train staff and maintain service standards','Built early leadership and decision-making experience'] },
]

function RevealCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .45 }} className={className}>{children}</motion.div>
}

export default function Home() {
  return (
    <main className="site-shell min-h-screen overflow-x-hidden text-cyber-text">
      <div className="site-atmosphere" aria-hidden="true">
        <div className="telemetry-rings telemetry-rings-left" />
        <div className="telemetry-rings telemetry-rings-right" />
        <div className="telemetry-traces" />
        <div className="telemetry-sweep" />
        <div className="telemetry-nodes" />
        <div className="telemetry-vignette" />
      </div>
      <Konami />
      <Navbar />
      <Hero />

      <section id="about" className="section-wrap">
        <div className="section-inner grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <SectionHeading label="01 // ABOUT" title="Behind the Terminal" />
            <div className="space-y-5 text-base leading-8 text-cyber-secondary sm:text-lg">
              <p>I&apos;m building my career in cybersecurity by doing the work: configuring labs, breaking down network behavior, testing web security concepts, learning enterprise environments, writing code, and troubleshooting the parts that refuse to cooperate.</p>
              <p>My strongest interests sit where security operations, network security, penetration testing, web application security, Linux, Active Directory, and software development overlap. I want to understand not only which tool to run, but what is happening underneath it and why.</p>
              <p>I bring prior leadership experience into the technical side as well — prioritization, communication, problem solving, staying composed when systems or people are under pressure, and taking ownership of the outcome.</p>
            </div>
          </div>
          <RevealCard className="panel-card lg:mt-10">
            <div className="panel-kicker">OPERATOR PROFILE</div>
            <div className="mt-6 space-y-4 font-mono text-xs sm:text-sm">
              {[
                ['NAME','Jason Phillips'],['FIELD','Cybersecurity'],['STATUS','Building'],['PRIMARY OS','Linux / Windows'],['INTERESTS','Red Team / Blue Team / Development'],['CURRENT OBJECTIVE','Cybersecurity / Security Operations Role'],
              ].map(([a,b]) => <div key={a} className="profile-row"><span>{a}</span><strong>{b}</strong></div>)}
            </div>
            <div className="mt-5 font-mono text-xs text-cyber-red">&gt; ready_for_next_challenge<span className="terminal-cursor ml-1" /></div>
          </RevealCard>
        </div>
      </section>

      <section id="skills" className="section-wrap">
        <div className="section-inner">
          <SectionHeading label="02 // CAPABILITIES" title="Technical Arsenal" text="A working toolkit built through coursework, labs, projects, troubleshooting, and continuous hands-on practice." />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <RevealCard key={title} className="panel-card group">
                <div className="flex items-center gap-3"><div className="icon-box"><Icon size={18} /></div><h3 className="font-mono text-sm font-semibold tracking-[.14em] text-white">{title}</h3></div>
                <div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="skill-pill">{item}</span>)}</div>
              </RevealCard>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-cyber-card p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3"><Wrench size={18} className="text-cyber-red"/><h3 className="font-mono text-sm font-semibold tracking-[.14em] text-white">SECURITY TOOLS</h3></div>
            <div className="flex flex-wrap gap-2.5">{tools.map((tool) => <span key={tool} className="tool-tag">{tool}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="labs" className="section-wrap">
        <div className="section-inner">
          <SectionHeading label="03 // LAB" title="Cyber Range" text="Hands-on environments where concepts become muscle memory and mistakes turn into troubleshooting experience." />
          <div className="grid gap-4 lg:grid-cols-2">
            {labs.map(({ title, icon: Icon, text, bullets }) => (
              <RevealCard key={title} className="panel-card lab-card">
                <div className="flex items-start justify-between gap-4"><div className="icon-box"><Icon size={18}/></div><div className="status-chip"><span className="status-dot"/> LAB_ENVIRONMENT // ONLINE</div></div>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-cyber-secondary">{text}</p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">{bullets.map((b) => <div key={b} className="flex items-center gap-2 font-mono text-xs text-cyber-secondary"><CircleDot size={11} className="text-cyber-red"/>{b}</div>)}</div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-wrap">
        <div className="section-inner">
          <SectionHeading label="04 // PROJECTS" title="Selected Work" text="Hands-on security labs, software builds, and clearly labeled concepts that show how I approach technical problems from implementation through validation." />
          <div className="space-y-5">
            {projects.map((p) => (
              <RevealCard key={p.title} className={`project-card ${p.featured ? 'featured-project' : ''}`}>
                <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="font-mono text-[10px] tracking-[.25em] text-cyber-red">{p.category}{p.featured ? ' // FEATURED' : ''}</p>
                      {p.status && <span className="project-status">{p.status}</span>}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">{p.title}</h3>
                    <p className="mt-4 max-w-2xl leading-7 text-cyber-secondary">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{p.stack.map((x) => <span className="skill-pill" key={x}>{x}</span>)}</div>

                    {p.validation && (
                      <div className="mt-6 grid gap-2 sm:grid-cols-2">
                        {p.validation.map((item) => (
                          <div key={item} className="validation-chip"><CheckCircle2 size={13}/>{item}</div>
                        ))}
                      </div>
                    )}

                    <p className="mt-5 border-l border-cyber-red/50 pl-4 text-sm leading-6 text-cyber-secondary"><span className="font-mono text-[10px] tracking-wider text-white">SECURITY / TECHNICAL RELEVANCE</span><br/>{p.relevance}</p>
                    {(p.github || p.live || p.caseStudy) && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {p.caseStudy && <a href={p.caseStudy} className="project-link">VIEW CASE STUDY <ArrowUpRight size={13}/></a>}
                        {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="project-link"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a>}
                        {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="project-link">LIVE DEMO <ArrowUpRight size={13}/></a>}
                      </div>
                    )}
                  </div>

                  <div className={`project-visual ${p.visual === 'enterprise-lab' ? 'enterprise-project-visual' : ''}`}>
                    {p.visual === 'enterprise-lab' ? (
                      <img
                        src="/enterprise-domain-architecture.svg"
                        alt="Architecture diagram of the v-dom.local Windows Server 2025 domain lab"
                        className="enterprise-architecture"
                        loading="lazy"
                      />
                    ) : p.visual === 'simulation' ? (
                      <div className="architecture">
                        <div className="arch-node">SCENARIO ENGINE</div><span>↓</span>
                        <div className="grid grid-cols-2 gap-2"><div className="arch-node">RED TEAM</div><div className="arch-node">BLUE TEAM</div></div><span>↓</span>
                        <div className="arch-node">DECISION + EVENT TRACKING</div><span>↓</span>
                        <div className="arch-node red">PERFORMANCE ANALYSIS</div>
                      </div>
                    ) : p.visual === 'postlogix' ? (
                      <a href="/projects/postlogix-ai" className="block w-full" aria-label="View the PostLogix AI case study">
                        <img src="/postlogix-dashboard.webp" alt="PostLogix AI dashboard showing campaign scoring and performance metrics" className="w-full rounded-2xl border border-white/10" loading="lazy" />
                      </a>
                    ) : (
                      <div className="mock-window">
                        <div className="mock-top"><span/><span/><span/></div>
                        <div className="space-y-3 p-5"><div className="h-2 w-1/3 rounded bg-white/15"/><div className="grid grid-cols-3 gap-2"><div className="mock-stat"/><div className="mock-stat"/><div className="mock-stat"/></div><div className="h-28 rounded-xl border border-white/5 bg-black/30 p-3"><div className="chart-line"/></div></div>
                      </div>
                    )}
                  </div>
                </div>

                {p.screenshots && (
                  <div className="project-evidence">
                    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] tracking-[.22em] text-cyber-red">VALIDATION EVIDENCE</p>
                        <h4 className="mt-1 text-lg font-semibold text-white">Configuration & Test Results</h4>
                      </div>
                      <p className="max-w-xl text-sm leading-6 text-cyber-muted">Screenshots captured from the self-built lab show both denied access and selective firewall behavior while required services remain available.</p>
                    </div>
                    <div className="evidence-grid">
                      {p.screenshots.map((shot) => (
                        <figure key={shot.src} className="evidence-card">
                          <a href={shot.src} target="_blank" rel="noreferrer" aria-label={`Open full-size evidence: ${shot.alt}`}>
                            <img src={shot.src} alt={shot.alt} loading="lazy" />
                          </a>
                          <figcaption>{shot.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                )}
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-inner">
          <SectionHeading label="05 // TRAINING" title="Field Experience" text="Practical training is presented separately from employment so the portfolio stays accurate about where experience comes from." />
          <div className="grid gap-4 lg:grid-cols-3">
            {training.map((t) => <RevealCard key={t.name} className="panel-card"><div className="flex items-center justify-between"><BookOpen size={18} className="text-cyber-red"/><div className="status-chip"><span className="status-dot"/>{t.status}</div></div><h3 className="mt-6 text-lg font-semibold text-white">{t.name}</h3><div className="mt-5 space-y-2">{t.topics.map((x)=><div key={x} className="flex items-center gap-2 text-sm text-cyber-secondary"><CheckCircle2 size={13} className="text-cyber-red"/>{x}</div>)}</div></RevealCard>)}
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-inner">
          <SectionHeading label="06 // EDUCATION" title="Knowledge Base" />
          <div className="timeline">
            <RevealCard className="timeline-card">
              <div className="timeline-dot"/><p className="font-mono text-[10px] tracking-[.2em] text-cyber-red">CURRENT</p><h3 className="mt-2 text-xl font-semibold text-white">Bachelor&apos;s Degree — Cybersecurity</h3><p className="mt-1 text-cyber-secondary">Full Sail University</p><p className="mt-4 max-w-3xl text-sm leading-7 text-cyber-secondary">Coursework and hands-on study spanning networking, security concepts, systems, risk, defensive thinking, development fundamentals, and practical technical problem solving.</p>
            </RevealCard>
            <RevealCard className="timeline-card">
              <div className="timeline-dot"/><p className="font-mono text-[10px] tracking-[.2em] text-cyber-red">TECHNICAL TRAINING</p><h3 className="mt-2 text-xl font-semibold text-white">Cybersecurity Skills Development</h3><p className="mt-1 text-cyber-secondary">Labs, guided platforms, independent practice, and project-based learning</p><p className="mt-4 max-w-3xl text-sm leading-7 text-cyber-secondary">PortSwigger Academy, TryHackMe, virtualized lab environments, Linux, networking, Active Directory, Python, web application testing, and security tooling.</p>
            </RevealCard>
            <RevealCard className="timeline-card">
              <div className="timeline-dot"/><p className="font-mono text-[10px] tracking-[.2em] text-cyber-red">ADDITIONAL TRAINING</p><h3 className="mt-2 text-xl font-semibold text-white">Cybersecurity Bootcamp — Attended</h3><p className="mt-1 text-cyber-secondary">Merit America</p><p className="mt-4 max-w-3xl text-sm leading-7 text-cyber-secondary">Additional structured cybersecurity training supporting the transition from operations leadership into technical and security-focused work.</p>
            </RevealCard>
          </div>
        </div>
      </section>

      <section id="certifications" className="section-wrap">
        <div className="section-inner">
          <SectionHeading label="07 // CREDENTIALS" title="Completed Training & Certificates" text="Verified coursework and hands-on learning completed across TryHackMe, Google, and Coursera. These are presented as completed training certificates, not as professional industry certifications." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {credentials.map((credential) => (
              <RevealCard key={`${credential.issuer}-${credential.title}`} className="credential-card group">
                <div className="flex items-start justify-between gap-4">
                  <div className="credential-status progress">COMPLETED</div>
                  <ShieldCheck className="text-cyber-red transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(225,6,0,.65)]" size={24}/>
                </div>
                <p className="mt-7 font-mono text-[9px] tracking-[.2em] text-cyber-red">{credential.issuer.toUpperCase()}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-white">{credential.title}</h3>
                <div className="mt-4 border-l border-cyber-red/40 pl-3 font-mono text-[9px] leading-5 tracking-[.14em] text-cyber-muted">
                  <div>{credential.date}</div>
                  <div>{credential.meta}</div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a href={credential.file} target="_blank" rel="noreferrer" className="project-link">VIEW CERTIFICATE <ExternalLink size={12}/></a>
                  {credential.verify && <a href={credential.verify} target="_blank" rel="noreferrer" className="project-link">VERIFY <ArrowUpRight size={12}/></a>}
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-wrap">
        <div className="section-inner">
          <SectionHeading label="08 // EXPERIENCE" title="Leadership Before the SOC" text="Cybersecurity is the destination; leadership, operations, accountability, and problem solving are experience I already bring with me." />
          <div className="grid gap-4 lg:grid-cols-3">
            {experience.map((e)=><RevealCard key={`${e.role}-${e.org}`} className="panel-card"><div className="flex items-start justify-between gap-4"><BriefcaseBusiness size={19} className="text-cyber-red"/><span className="font-mono text-[10px] text-cyber-muted">{e.dates}</span></div><h3 className="mt-6 text-xl font-semibold text-white">{e.role}</h3><p className="mt-1 font-mono text-xs text-cyber-red">{e.org}</p><div className="mt-5 space-y-3">{e.points.map((p)=><div key={p} className="flex gap-2 text-sm leading-6 text-cyber-secondary"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyber-red"/>{p}</div>)}</div></RevealCard>)}
          </div>
          <div className="mt-6 rounded-3xl border border-cyber-red/20 bg-cyber-red/[.035] p-6 font-mono text-xs leading-6 text-cyber-secondary">TRANSFERABLE_SIGNAL <span className="text-cyber-red">//</span> Leadership + incident-style prioritization + communication + process discipline + decision making under pressure.</div>
        </div>
      </section>

      <section className="section-wrap">
        <div className="section-inner grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div>
            <SectionHeading label="09 // TERMINAL" title="Command Line" text="A harmless simulated terminal that doubles as portfolio navigation. No shell access. No fake hacking theater." />
            <div className="panel-card">
              <div className="panel-kicker">CAREER STATUS</div>
              <div className="mt-5 space-y-3 font-mono text-xs">{[['Learning','ACTIVE'],['Building','ACTIVE'],['Cyber Labs','ACTIVE'],['Security Research','ACTIVE'],['Opportunities','ACCEPTING'],['Coffee','CRITICAL']].map(([a,b])=><div key={a} className="flex items-center justify-between gap-3 border-b border-white/[.05] pb-3"><span className="text-cyber-muted">{a}</span><span className="flex items-center gap-2 text-white"><span className="status-dot"/>{b}</span></div>)}</div>
            </div>
          </div>
          <PortfolioTerminal />
        </div>
      </section>

      <section id="contact" className="section-wrap">
        <div className="section-inner">
          <SectionHeading label="10 // CONNECT" title="Open a Connection" text="Interested in cybersecurity, security engineering, technical support, networking, software development, and security operations opportunities." />
          <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr]">
            <div className="space-y-4">
              <a className="contact-link" href="mailto:jason.phillips0615@gmail.com"><Mail/><span><small>EMAIL</small>jason.phillips0615@gmail.com</span><ArrowUpRight size={16}/></a>
              <a className="contact-link" href="https://www.linkedin.com/in/jlphillips3" target="_blank" rel="noreferrer"><Linkedin/><span><small>LINKEDIN</small>linkedin.com/in/jlphillips3</span><ArrowUpRight size={16}/></a>
              <a className="contact-link" href="https://github.com/jphillips0615" target="_blank" rel="noreferrer"><Github/><span><small>GITHUB</small>github.com/jphillips0615</span><ArrowUpRight size={16}/></a>
              <div className="rounded-3xl border border-white/10 bg-cyber-card p-5 font-mono text-xs leading-6 text-cyber-secondary"><span className="text-cyber-red">STATUS //</span> Open to conversations about entry-level cybersecurity, technical support, networking, security operations, and development opportunities.</div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black/55 py-10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div><p className="font-mono text-xs font-bold tracking-[.18em] text-white">JASON PHILLIPS <span className="text-cyber-red">//</span> CYBERSECURITY</p><p className="mt-2 text-xs text-cyber-muted">Built with curiosity, caffeine, and questionable amounts of terminal time.</p></div>
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[.15em] text-cyber-secondary"><span className="status-dot"/> SYSTEM STATUS: ONLINE</div>
        </div>
      </footer>
    </main>
  )
}
