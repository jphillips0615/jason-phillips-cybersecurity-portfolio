'use client'

import { FormEvent, useState } from 'react'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [opened, setOpened] = useState(false)

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const subject = String(data.get('subject') || 'Portfolio inquiry')
    const message = String(data.get('message') || '')

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n')

    const mailto = `mailto:jason.phillips0615@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
    window.location.href = mailto
    window.setTimeout(() => setOpened(false), 5000)
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-white/10 bg-cyber-card p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field-label">NAME<input required name="name" autoComplete="name" className="field-input" placeholder="Your name" /></label>
        <label className="field-label">EMAIL<input required name="email" autoComplete="email" type="email" className="field-input" placeholder="you@example.com" /></label>
      </div>
      <label className="field-label">SUBJECT<input required name="subject" className="field-input" placeholder="Opportunity / collaboration / hello" /></label>
      <label className="field-label">MESSAGE<textarea required name="message" rows={6} className="field-input resize-none" placeholder="Tell me what you're working on..." /></label>
      <button className="btn-primary justify-center sm:justify-self-start" type="submit"><Send size={15} /> OPEN EMAIL CLIENT</button>
      {opened && <p role="status" className="font-mono text-xs text-white"><span className="mr-2 text-cyber-red">&gt;</span> EMAIL CLIENT OPENED — REVIEW AND SEND YOUR MESSAGE<span className="terminal-cursor ml-1" /></p>}
    </form>
  )
}
