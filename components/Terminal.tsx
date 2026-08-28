'use client'

import { FormEvent, useRef, useState } from 'react'
import { Terminal as TerminalIcon } from 'lucide-react'

const responses: Record<string, string[]> = {
  help: ['Available commands: help, about, skills, projects, experience, education, contact, clear, whoami, sudo hire-jason, sudo hire jason'],
  about: ['Jason Phillips — cybersecurity student, technical builder, and hands-on learner focused on security operations, networking, web security, Linux, and development.'],
  skills: ['Security // Networking // Linux // Windows // Active Directory // Python // JavaScript // TypeScript // React // Next.js // Burp Suite // Nmap // Wireshark'],
  projects: ['Opening projects module...', '#projects'],
  experience: ['Opening experience module...', '#experience'],
  education: ['Opening education module...', '#education'],
  contact: ['Opening contact module...', '#contact'],
  whoami: ['jason — aspiring cybersecurity professional // builder // problem solver'],
  'sudo hire-jason': ['Permission granted.', 'Excellent decision.', '#contact'],
  'sudo hire jason': ['Permission granted.', 'Excellent decision.', '#contact'],
}

type Line = { kind: 'cmd' | 'out'; text: string }

export function PortfolioTerminal() {
  const [input, setInput] = useState('')
  const [lines, setLines] = useState<Line[]>([
    { kind: 'out', text: 'Portfolio terminal initialized. Type "help" to begin.' },
  ])
  const field = useRef<HTMLInputElement>(null)

  function submit(e: FormEvent) {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    if (!cmd) return
    if (cmd === 'clear') {
      setLines([])
      setInput('')
      return
    }
    const output = responses[cmd] ?? [`Command not found: ${cmd}. Type "help".`]
    const display = output.filter((x) => !x.startsWith('#'))
    setLines((prev) => [...prev, { kind: 'cmd', text: cmd }, ...display.map((text) => ({ kind: 'out' as const, text }))])
    const target = output.find((x) => x.startsWith('#'))
    if (target) window.setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' }), 350)
    setInput('')
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#070707] shadow-2xl" onClick={() => field.current?.focus()}>
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.025] px-5 py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-cyber-red" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-2 flex items-center gap-2 font-mono text-xs text-cyber-muted"><TerminalIcon size={14} /> jason@portfolio:~$</div>
      </div>
      <div className="min-h-[330px] p-5 font-mono text-xs leading-6 sm:p-6 sm:text-sm">
        <div className="mb-4 space-y-1.5">
          {lines.map((line, idx) => (
            <div key={`${idx}-${line.text}`} className={line.kind === 'cmd' ? 'text-white' : 'text-cyber-secondary'}>
              {line.kind === 'cmd' && <span className="mr-2 text-cyber-red">$</span>}{line.text}
            </div>
          ))}
        </div>
        <form onSubmit={submit} className="flex items-center gap-2">
          <span className="text-cyber-red">$</span>
          <input ref={field} value={input} onChange={(e) => setInput(e.target.value)} aria-label="Portfolio terminal command" className="w-full bg-transparent text-white outline-none placeholder:text-cyber-muted" placeholder="type a command..." autoComplete="off" spellCheck={false} />
        </form>
      </div>
    </div>
  )
}
