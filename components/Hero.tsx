'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SecurityDashboard } from './SecurityDashboard'

const focus = ['Network Security','Penetration Testing','Security Operations','Web Security','Python','Linux','Active Directory','Cloud Security']

export function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = window.setInterval(() => setI((x) => (x + 1) % focus.length), 1800)
    return () => window.clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="hero-orb absolute -left-24 top-[12%] h-80 w-80 rounded-full bg-cyber-red/[0.07] blur-[120px]" />
      <div className="hero-signal absolute right-[-18rem] top-[8%] h-[42rem] w-[42rem] rounded-full" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:px-8">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-cyber-red">SECURITY // DEVELOPMENT // OPERATIONS</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-5xl font-black leading-[.9] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]">JASON<br />PHILLIPS</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-5 font-mono text-xs leading-6 tracking-[0.08em] text-cyber-secondary sm:text-sm">CYBERSECURITY <span className="text-cyber-red">//</span> NETWORK SECURITY <span className="text-cyber-red">//</span> SECURITY OPERATIONS</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.26 }} className="mt-7 max-w-2xl text-base leading-7 text-cyber-secondary sm:text-lg">Building practical cybersecurity skills through hands-on labs, network environments, security research, development, and real-world problem solving.</motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }} className="mt-7 inline-flex min-h-12 items-center rounded-xl border border-white/10 bg-black/55 px-4 font-mono text-xs text-cyber-secondary sm:text-sm">
            <span className="mr-2 text-cyber-red">&gt;</span> CURRENT_FOCUS: <span className="ml-2 text-white">{focus[i]}</span><span className="terminal-cursor ml-1" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">VIEW MY WORK <ArrowRight size={16} /></a>
            <a href="#contact" className="btn-secondary">CONTACT ME <Mail size={16} /></a>
          </motion.div>
        </div>

        <SecurityDashboard />
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] tracking-[0.24em] text-cyber-muted md:flex">
        SCROLL TO INITIALIZE <ArrowDown size={14} className="scroll-arrow" />
      </a>
    </section>
  )
}
