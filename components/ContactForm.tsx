'use client'

import { FormEvent, useState } from 'react'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  function submit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 4500)
  }
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-white/10 bg-cyber-card p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-label">NAME<input required className="field-input" placeholder="Your name" /></label>
        <label className="field-label">EMAIL<input required type="email" className="field-input" placeholder="you@example.com" /></label>
      </div>
      <label className="field-label">SUBJECT<input required className="field-input" placeholder="Opportunity / collaboration / hello" /></label>
      <label className="field-label">MESSAGE<textarea required rows={6} className="field-input resize-none" placeholder="Tell me what you're working on..." /></label>
      <button className="btn-primary justify-center sm:justify-self-start" type="submit"><Send size={15} /> SEND TRANSMISSION</button>
      {sent && <p role="status" className="font-mono text-xs text-white"><span className="mr-2 text-cyber-red">&gt;</span> MESSAGE TRANSMITTED SUCCESSFULLY<span className="terminal-cursor ml-1" /></p>}
    </form>
  )
}
