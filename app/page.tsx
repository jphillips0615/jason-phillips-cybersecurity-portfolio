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
  { title: 'Active Directory Lab', icon: Server, text: 'Windows Server + Windows client environment for practicing domain services and enterprise identity fundamentals.', bullets: ['Domains, users & groups','DNS & authentication','Group Policy','Network configuration'] },
  { title: 'Web Security Lab', icon: ShieldCheck, text: 'Hands-on web application testing with a focus on understanding requests, access control, and common vulnerability classes.', bullets: ['Burp Suite & HTTP','Authentication','Access control','Path traversal'] },
  { title: 'Linux Security Environment', icon: TerminalSquare, text: 'Security-focused Linux environments used to build command-line fluency and practice defensive/offensive tooling.', bullets: ['Kali Linux','Parrot OS','Terminal tools','Recon utilities'] },
  { title: 'Networking Lab', icon: Network, text: 'Practical networking environment for learning how core services interact and how to troubleshoot them when they do not.', bullets: ['DNS & DHCP','IP addressing','TCP/IP','Routing & troubleshooting'] },
]

const projects = [
  {
    category: 'CYBERSECURITY',
    title: 'Cybersecurity Simulation Platform',
    description: 'Concept for a dynamic cyber training environment that generates unpredictable offensive and defensive scenarios, measures decisions, and compares response paths against the scenario’s intended resolution.',
    stack: ['Security Architecture','Red Team','Blue Team','Scenario Engine','Training UX'],
    relevance: 'Designed around realistic decision-making, incident response, randomized scenarios, and gap analysis rather than scripted checkbox labs.',
    featured: true,
  },
  {
    category: 'SAAS',
    title: 'Post-Logix A.I.',
    description: 'Email campaign analytics SaaS focused on simplifying campaign scoring, comparisons, trends, and actionable AI-assisted insights.',
    stack: ['Next.js','TypeScript','Supabase','Vercel'],
    relevance: 'Demonstrates authentication, data handling, scoring logic, dashboards, deployment, and full-stack product thinking.',
  },
  {
    category: 'WEB DEVELOPMENT',
    title: 'Unique Spirits & Pairings',
    description: 'Mobile-first product for discovering cocktails, managing a personal bar, exploring pairings, and navigating spirit terminology.',
    stack: ['React Native','Expo','Supabase','TypeScript'],
    relevance: 'Shows component architecture, authentication, structured data, mobile UI, and production build workflows.',
  },
  {
    category: 'SAAS',
    title: 'Audiora AI',
    description: 'Product concept and application work around AI-assisted music generation, credits, account flows, pricing, and community features.',
    stack: ['Next.js','Supabase','APIs','Product Design'],
    relevance: 'Built experience with API-driven product flows, usage credits, auth state, pricing logic, and iterative debugging.',
  },
]

const training = [
  { name: 'PortSwigger Web Security Academy', status: 'ACTIVE', topics: ['Path Traversal','Access Control','Authentication','HTTP Requests','Burp Suite'] },
  { name: 'TryHackMe', status: 'ACTIVE', topics: ['Linux','Networking','Enumeration','Security Fundamentals','Practical Labs'] },
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
                ['NAME','Jason Phillips'],['FIELD','Cybersecurity'],['STATUS','Building'],['PRIMARY OS','Linux / Windows'],['INTERESTS','Red Team / Blue Team / Development'],['CURRENT OBJECTIVE','Break into Cybersecurity'],
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
          <SectionHeading label="04 // PROJECTS" title="Things I&apos;ve Built" text="Security ideas, SaaS products, and software projects that show how I approach technical problems from concept through implementation." />
          <div className="space-y-5">
            {projects.map((p) => (
              <RevealCard key={p.title} className={`project-card ${p.featured ? 'featured-project' : ''}`}>
                <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
                  <div>
                    <p className="font-mono text-[10px] tracking-[.25em] text-cyber-red">{p.category}{p.featured ? ' // FEATURED' : ''}</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">{p.title}</h3>
                    <p className="mt-4 max-w-2xl leading-7 text-cyber-secondary">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{p.stack.map((x) => <span className="skill-pill" key={x}>{x}</span>)}</div>
                    <p className="mt-5 border-l border-cyber-red/50 pl-4 text-sm leading-6 text-cyber-secondary"><span className="font-mono text-[10px] tracking-wider text-white">SECURITY / TECHNICAL RELEVANCE</span><br/>{p.relevance}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="https://github.com/jphillips0615" target="_blank" rel="noreferrer" className="project-link"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a>
                    </div>
                  </div>
                  <div className="project-visual">
                    {p.featured ? (
                      <div className="architecture">
                        <div className="arch-node">SCENARIO ENGINE</div><span>↓</span>
                        <div className="grid grid-cols-2 gap-2"><div className="arch-node">RED TEAM</div><div className="arch-node">BLUE TEAM</div></div><span>↓</span>
                        <div className="arch-node">DECISION + EVENT TRACKING</div><span>↓</span>
                        <div className="arch-node red">PERFORMANCE ANALYSIS</div>
                      </div>
                    ) : (
                      <div className="mock-window">
                        <div className="mock-top"><span/><span/><span/></div>
                        <div className="space-y-3 p-5"><div className="h-2 w-1/3 rounded bg-white/15"/><div className="grid grid-cols-3 gap-2"><div className="mock-stat"/><div className="mock-stat"/><div className="mock-stat"/></div><div className="h-28 rounded-xl border border-white/5 bg-black/30 p-3"><div className="chart-line"/></div></div>
                      </div>
                    )}
                  </div>
                </div>
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
