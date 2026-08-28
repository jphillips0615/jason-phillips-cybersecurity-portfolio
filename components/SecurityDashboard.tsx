'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Activity, Radio, Server, TerminalSquare, Coffee } from 'lucide-react'

const rows = [
  ['ROLE', 'CYBERSECURITY', ShieldCheck],
  ['FOCUS', 'SECURITY OPERATIONS', Activity],
  ['ENVIRONMENT', 'LINUX / WINDOWS', TerminalSquare],
  ['NETWORK', 'ACTIVE', Radio],
  ['LAB STATUS', 'ONLINE', Server],
  ['BUILDING', 'ALWAYS', Activity],
]

export function SecurityDashboard() {
  return (
    <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.2 }} className="dashboard-panel relative overflow-hidden rounded-3xl border border-white/10 bg-cyber-card/90 p-5 shadow-2xl sm:p-7">
      <div className="scan-line" />
      <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.32em] text-cyber-muted">SECURITY PROFILE</p>
          <h3 className="mt-1 text-xl font-semibold text-white">Operator Console</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-[10px] text-white">
          <span className="status-dot" /> ONLINE
        </div>
      </div>

      <div className="space-y-2.5">
        {rows.map(([label, value, Icon]) => (
          <div key={String(label)} className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/25 px-3 py-3 transition hover:border-cyber-red/30 hover:bg-white/[0.03]">
            <Icon size={15} className="shrink-0 text-cyber-red" />
            <span className="w-28 font-mono text-[10px] tracking-wider text-cyber-muted">{String(label)}</span>
            <span className="min-w-0 flex-1 truncate font-mono text-xs text-cyber-text">{String(value)}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-red shadow-[0_0_8px_rgba(225,6,0,.8)]" />
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-white/[0.06] bg-black/35 p-4">
        <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-cyber-muted">
          <span className="flex items-center gap-2"><Coffee size={13} /> Coffee level</span><span>90%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full w-[90%] rounded-full bg-cyber-red shadow-[0_0_12px_rgba(225,6,0,.6)]" /></div>
        <p className="mt-4 font-mono text-[10px] text-cyber-secondary">THREAT LEVEL: <span className="text-white">Recruiters detected.</span></p>
      </div>
    </motion.div>
  )
}
