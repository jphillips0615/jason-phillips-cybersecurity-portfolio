import { ArrowLeft, CheckCircle2, ExternalLink, Network, Server, ShieldCheck, TerminalSquare } from 'lucide-react'

const controls = [
  'Windows Server 2025 installed and configured',
  'V-SER-1 promoted to an Active Directory Domain Controller',
  'DNS configured for the v-dom.local domain',
  'Windows 11 workstation joined to the domain',
  'Centralized domain authentication validated',
  'Active Directory users and security groups created',
  'Group-based authorization implemented',
  'Restricted HR network share configured',
  'SMB share permissions and NTFS permissions applied',
  'Authorized and unauthorized access tested',
  'Source-specific Windows Firewall rules created',
  'Firewall behavior validated without disrupting DNS or SMB',
  'Parrot OS / Nmap used to establish an external service-exposure baseline',
  'WinRM / TCP 5985 exposure identified and selectively mitigated',
  'Post-mitigation Nmap retest confirmed required AD services remained reachable',
]

const skills = [
  'Windows Server Administration','Active Directory Domain Services','DNS','TCP/IP Networking','Static IP Configuration',
  'Domain Authentication','Role-Based Access Control','NTFS Permissions','SMB File Sharing','Windows Firewall',
  'Network Troubleshooting','PowerShell','Security Validation','Least Privilege','Network Hardening','Nmap','Attack Surface Assessment','Remediation Validation','Parrot OS','Oracle VirtualBox'
]

const screenshots = [
  {
    src: '/enterprise-lab-dns-and-icmp-validation.webp',
    alt: 'PowerShell showing ICMP blocked while DNS port 53 remains reachable',
    caption: 'Firewall Validation — ICMP traffic from V-DTOP-1 was blocked while DNS / TCP 53 remained reachable.'
  },
  {
    src: '/enterprise-lab-smb-and-icmp-validation.webp',
    alt: 'PowerShell showing SMB port 445 reachable while ping is blocked',
    caption: 'Service Continuity — SMB / TCP 445 remained reachable while ICMP requests received 100% packet loss.'
  },
  {
    src: '/enterprise-lab-hr-share-denied.webp',
    alt: 'Windows denying access to HR-Share for an unauthorized account',
    caption: 'Authorization Test — a user outside the HR security group was denied access to the restricted HR-Share.'
  },
  {
    src: '/enterprise-lab-firewall-rule.webp',
    alt: 'Windows Defender Firewall inbound rule wizard',
    caption: 'Firewall Configuration — Windows Defender Firewall with Advanced Security was used to build and scope the inbound rule.'
  },
  {
    src: '/enterprise-lab-winrm-before.webp',
    alt: 'Parrot OS Nmap scan showing WinRM TCP port 5985 open on V-SER-1 before mitigation',
    caption: 'Exposure Baseline — Nmap from the Parrot OS security workstation showed WinRM / TCP 5985 open on V-SER-1 before mitigation.'
  },
  {
    src: '/enterprise-lab-winrm-after.webp',
    alt: 'Parrot OS Nmap scan showing WinRM TCP port 5985 filtered while required domain services remain open',
    caption: 'Post-Mitigation Validation — WinRM / TCP 5985 changed to filtered while DNS 53, Kerberos 88, LDAP 389, and SMB 445 remained open.'
  },
]

export default function EnterpriseWindowsDomainLab() {
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

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:py-14 lg:px-8">
        <a href="/#projects" className="project-link"><ArrowLeft size={14}/> BACK TO PORTFOLIO</a>

        <header className="mt-12 max-w-4xl">
          <p className="font-mono text-[10px] tracking-[.28em] text-cyber-red">CYBERSECURITY // CASE STUDY</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-.045em] text-white sm:text-6xl">Enterprise Windows Domain &amp; Network Security Lab</h1>
          <div className="mt-5 inline-flex rounded-full border border-cyber-red/30 bg-cyber-red/[.055] px-3 py-1.5 font-mono text-[9px] tracking-[.14em] text-white">VALIDATED CONTROLS // LAB EXPANSION IN PROGRESS</div>
          <p className="mt-7 text-lg leading-8 text-cyber-secondary">Built a small enterprise-style Windows network and tested selected security controls using Windows Server 2025 and Windows 11 in Oracle VirtualBox. The lab demonstrates centralized authentication, DNS, role-based access control, secure file sharing, firewall configuration, attack-surface assessment, targeted hardening, and before/after validation testing.</p>
        </header>

        <section className="panel-card mt-10" aria-labelledby="summary-title">
          <h2 id="summary-title" className="text-2xl font-semibold text-white">Project summary</h2>
          <dl className="mt-5 space-y-4 text-base leading-7 text-cyber-secondary">
            <div><dt className="font-semibold text-white">Objective</dt><dd>Control access to an HR file share and restrict management-service exposure in an isolated Windows domain.</dd></div>
            <div><dt className="font-semibold text-white">My contribution</dt><dd>Built the virtual environment, configured domain users and permissions, applied firewall rules, and captured validation evidence.</dd></div>
            <div><dt className="font-semibold text-white">Observed results</dt><dd>An unauthorized account was denied HR-Share access. Nmap reported TCP 5985 filtered after the firewall change, while the tested domain-service ports remained reachable.</dd></div>
            <div><dt className="font-semibold text-white">Limits of the evidence</dt><dd>Results apply to the documented lab and test sources. A filtered port means the scanner could not determine whether it was open or closed; it does not establish that the service was disabled or that the host was fully secured.</dd></div>
          </dl>
        </section>

        <section className="mt-12">
          <div className="panel-card p-3 sm:p-4">
            <img src="/enterprise-domain-architecture.svg" alt="Architecture diagram of the v-dom.local Windows enterprise security lab" className="w-full rounded-2xl" />
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="panel-card">
            <Server className="text-cyber-red" size={22}/>
            <p className="mt-5 panel-kicker">SERVER</p>
            <h2 className="mt-2 text-xl font-semibold text-white">V-SER-1</h2>
            <div className="mt-4 space-y-2 font-mono text-xs text-cyber-secondary">
              <p>Windows Server 2025</p><p>192.168.56.10</p><p>Domain Controller</p><p>DNS / AD DS / File Share</p>
            </div>
          </div>
          <div className="panel-card">
            <Network className="text-cyber-red" size={22}/>
            <p className="mt-5 panel-kicker">NETWORK</p>
            <h2 className="mt-2 text-xl font-semibold text-white">VirtualBox Host-Only</h2>
            <div className="mt-4 space-y-2 font-mono text-xs text-cyber-secondary">
              <p>192.168.56.0/24</p><p>Domain: v-dom.local</p><p>Isolated lab traffic</p><p>Static addressing</p>
            </div>
          </div>
          <div className="panel-card">
            <TerminalSquare className="text-cyber-red" size={22}/>
            <p className="mt-5 panel-kicker">CLIENT</p>
            <h2 className="mt-2 text-xl font-semibold text-white">V-DTOP-1</h2>
            <div className="mt-4 space-y-2 font-mono text-xs text-cyber-secondary">
              <p>Windows 11 Pro</p><p>192.168.56.50</p><p>Domain joined</p><p>Validation source</p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="panel-kicker">IMPLEMENTATION</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Security Controls Implemented</h2>
            <p className="mt-4 leading-7 text-cyber-secondary">The environment was built to practice both configuration and validation. Each control was tested from the client side instead of assuming that a completed wizard meant the security behavior was correct.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {controls.map((item) => <div className="validation-chip" key={item}><CheckCircle2 size={13}/>{item}</div>)}
          </div>
        </section>

        <section className="mt-16 grid gap-5 lg:grid-cols-2">
          <div className="panel-card">
            <ShieldCheck size={22} className="text-cyber-red"/>
            <p className="mt-5 panel-kicker">ACCESS CONTROL DEMONSTRATION</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Authentication + Authorization</h2>
            <p className="mt-4 leading-7 text-cyber-secondary">Separate Active Directory security groups were used for HR, Employees, and IT. The HR-Share was configured so HR members could work with files while ordinary employees were denied access.</p>
            <div className="mt-6 grid gap-3 font-mono text-xs">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4"><span className="text-cyber-red">hruser</span><br/><span className="text-cyber-secondary">→ HR group → HR-Share access allowed</span></div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4"><span className="text-cyber-red">employee1</span><br/><span className="text-cyber-secondary">→ Employees group → HR-Share access denied</span></div>
            </div>
            <p className="mt-5 text-sm leading-6 text-cyber-muted">Demonstrated centralized authentication, group-based authorization, least privilege, SMB share permissions, and NTFS permissions.</p>
          </div>

          <div className="panel-card">
            <Network size={22} className="text-cyber-red"/>
            <p className="mt-5 panel-kicker">FIREWALL SECURITY</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Selective Traffic Filtering</h2>
            <p className="mt-4 leading-7 text-cyber-secondary">A custom inbound firewall rule on V-SER-1 blocked ICMP traffic specifically from V-DTOP-1 while required application services remained reachable.</p>
            <div className="mt-6 grid gap-3 font-mono text-xs">
              <div className="rounded-xl border border-cyber-red/25 bg-cyber-red/[.04] p-4"><span className="text-cyber-red">ICMP / PING</span><br/><span className="text-white">BLOCKED // 100% packet loss</span></div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4"><span className="text-cyber-red">DNS / TCP 53</span><br/><span className="text-white">ALLOWED // TcpTestSucceeded: True</span></div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4"><span className="text-cyber-red">SMB / TCP 445</span><br/><span className="text-white">ALLOWED // TcpTestSucceeded: True</span></div>
            </div>
            <p className="mt-5 text-sm leading-6 text-cyber-muted">These checks demonstrate TCP reachability on the tested ports. DNS resolution and file-sharing behavior require separate application-level tests. ICMP blocking is a scoped firewall exercise, not a general security requirement.</p>
          </div>
        </section>

        <section className="mt-16">
          <p className="panel-kicker">ASSESSMENT + HARDENING</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Exposure → Mitigation → Retest</h2>
          <p className="mt-4 max-w-4xl leading-7 text-cyber-secondary">The lab was expanded with a Parrot OS security workstation to validate server exposure from a separate host. An initial Nmap scan confirmed WinRM on TCP 5985 was reachable. A targeted Windows Defender Firewall change was then applied, and follow-up scanning confirmed 5985 changed from <span className="font-mono text-white">open</span> to <span className="font-mono text-white">filtered</span> without removing required domain services.</p>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            <div className="panel-card">
              <p className="panel-kicker">01 // BASELINE</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Identify Exposure</h3>
              <p className="mt-3 text-sm leading-7 text-cyber-secondary">Nmap from Parrot OS identified WinRM / TCP 5985 as reachable on V-SER-1.</p>
              <div className="mt-5 rounded-xl border border-cyber-red/25 bg-cyber-red/[.04] p-4 font-mono text-xs"><span className="text-cyber-red">5985/tcp</span><br/><span className="text-white">OPEN // WSMAN</span></div>
            </div>
            <div className="panel-card">
              <p className="panel-kicker">02 // MITIGATION</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Restrict WinRM</h3>
              <p className="mt-3 text-sm leading-7 text-cyber-secondary">A source-scoped Windows Defender Firewall control was applied to reduce unnecessary remote-management exposure from the testing host.</p>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-xs"><span className="text-cyber-red">CONTROL</span><br/><span className="text-white">TARGETED FIREWALL RULE</span></div>
            </div>
            <div className="panel-card">
              <p className="panel-kicker">03 // RETEST</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Preserve Required Services</h3>
              <p className="mt-3 text-sm leading-7 text-cyber-secondary">The retest showed WinRM filtered while DNS, Kerberos, LDAP, and SMB remained reachable.</p>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-xs text-white"><span className="text-cyber-red">5985</span> FILTERED<br/>53 / 88 / 389 / 445 OPEN</div>
            </div>
          </div>
          <p className="mt-5 text-xs leading-6 text-cyber-muted">Assessment note: the Nmap evidence reflects the server's current lab-facing address used during the Parrot OS validation phase.</p>
        </section>

        <section className="mt-16">
          <p className="panel-kicker">EVIDENCE</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Validation Screenshots</h2>
          <p className="mt-4 max-w-3xl leading-7 text-cyber-secondary">The screenshots below are direct captures from the lab and document access-control testing, firewall behavior, service-exposure baselining, mitigation, and post-change retesting.</p>
          <div className="evidence-grid mt-7">
            {screenshots.map((shot) => (
              <figure key={shot.src} className="evidence-card">
                <a href={shot.src} target="_blank" rel="noreferrer"><img src={shot.src} alt={shot.alt} loading="lazy" /></a>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <div className="panel-card">
            <p className="panel-kicker">SKILLS DEMONSTRATED</p>
            <div className="mt-5 flex flex-wrap gap-2">{skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
          </div>
          <div className="panel-card">
            <p className="panel-kicker">VALIDATION TOOLS</p>
            <div className="mt-5 space-y-2 font-mono text-xs text-cyber-secondary">
              <p>ping</p><p>ipconfig</p><p>nslookup</p><p>Test-NetConnection</p><p>PowerShell</p><p>Windows Defender Firewall with Advanced Security</p><p>Active Directory Users and Computers</p><p>Server Manager</p><p>Nmap</p><p>Parrot OS</p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-cyber-red/20 bg-cyber-red/[.035] p-6 sm:p-8">
          <p className="font-mono text-[10px] tracking-[.2em] text-cyber-red">LAB SCOPE</p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-cyber-secondary">All testing was performed against systems configured in the self-built lab environment. The core Windows domain runs in VirtualBox, and the later Nmap validation phase used a separate Parrot OS security workstation to assess the server from another lab host. The project is being expanded over time with additional hardening, vulnerability management, packet analysis, security testing, and segmentation work.</p>
        </section>

        <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 font-mono text-[10px] tracking-[.12em] text-cyber-muted">
          <span>JASON PHILLIPS // CYBERSECURITY</span>
          <a href="/#projects" className="inline-flex items-center gap-2 text-white transition hover:text-cyber-red">RETURN TO SELECTED WORK <ExternalLink size={12}/></a>
        </footer>
      </div>
    </main>
  )
}
