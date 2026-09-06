import { ArrowUpRight } from 'lucide-react'

export function SecurityDashboard() {
  return (
    <aside className="dashboard-panel relative rounded-3xl border border-white/10 bg-cyber-card/90 p-6 shadow-2xl sm:p-8" aria-label="Candidate highlights">
      <p className="font-mono text-sm tracking-wider text-cyber-red">AT A GLANCE</p>
      <h2 className="mt-3 text-2xl font-semibold text-white">Security skills in practice</h2>
      <dl className="mt-6 space-y-5 text-base">
        <div><dt className="text-cyber-secondary">Education</dt><dd className="mt-1 text-white">Cybersecurity bachelor's degree in progress · Full Sail University</dd></div>
        <div><dt className="text-cyber-secondary">Featured evidence</dt><dd className="mt-1 text-white">Active Directory, restricted file sharing, and firewall testing with before-and-after results</dd></div>
        <div><dt className="text-cyber-secondary">Development</dt><dd className="mt-1 text-white">Next.js, TypeScript, and full-stack product projects</dd></div>
        <div><dt className="text-cyber-secondary">Previous experience</dt><dd className="mt-1 text-white">Operations management, team leadership, and customer escalation handling</dd></div>
      </dl>
      <a href="/projects/enterprise-windows-domain-lab" className="project-link mt-7">READ SECURITY CASE STUDY <ArrowUpRight size={16} /></a>
    </aside>
  )
}
