'use client'

import { Menu, X, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = ['home', 'projects', 'about', 'skills', 'experience', 'contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [clicks, setClicks] = useState(0)
  const [egg, setEgg] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const y = window.scrollY + 180
      for (const id of links) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) setActive(id)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const logoClick = () => {
    const next = clicks + 1
    setClicks(next)
    if (next >= 5) {
      setEgg(true)
      setClicks(0)
      window.setTimeout(() => setEgg(false), 3500)
    }
  }

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? 'border-white/5 bg-black/75 backdrop-blur-xl' : 'border-transparent bg-transparent'}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button onClick={logoClick} aria-label="Portfolio logo" className="font-mono text-sm font-bold tracking-[0.16em] text-white">
            JP<span className="text-cyber-red">//</span>SEC
          </button>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            {links.map((link) => (
              <a key={link} href={`#${link}`} className={`nav-link ${active === link ? 'active' : ''}`}>{link.toUpperCase()}</a>
            ))}
            <a href="/Jason_Phillips_Resume.pdf" download className="ml-2 inline-flex items-center gap-2 rounded-full border border-cyber-red/70 px-4 py-2 font-mono text-xs font-semibold text-white transition hover:bg-cyber-red hover:shadow-red-soft">
              <Download size={14} /> DOWNLOAD RESUME
            </a>
          </nav>

          <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-white/5 bg-black/95 px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {links.map((link) => (
                <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-mono text-sm text-cyber-secondary hover:bg-white/5 hover:text-white">{link.toUpperCase()}</a>
              ))}
              <a href="/Jason_Phillips_Resume.pdf" download onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-cyber-red/70 px-3 py-3 font-mono text-sm font-semibold text-white transition hover:bg-cyber-red">
                <Download size={15} /> DOWNLOAD RESUME
              </a>
            </div>
          </nav>
        )}
      </header>

      {egg && (
        <div className="fixed left-1/2 top-24 z-[60] -translate-x-1/2 rounded-full border border-cyber-red/50 bg-black/90 px-5 py-3 font-mono text-xs text-white shadow-red-soft">
          You found something that definitely wasn&apos;t in the documentation.
        </div>
      )}
    </>
  )
}
