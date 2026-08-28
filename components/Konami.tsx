'use client'

import { useEffect, useState } from 'react'

const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export function Konami() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    let index = 0
    const handler = (e: KeyboardEvent) => {
      if (e.key === sequence[index]) {
        index += 1
        if (index === sequence.length) {
          setEnabled(true)
          document.documentElement.classList.add('red-team-mode')
          index = 0
          window.setTimeout(() => {
            setEnabled(false)
            document.documentElement.classList.remove('red-team-mode')
          }, 5000)
        }
      } else index = 0
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])
  if (!enabled) return null
  return <div className="fixed inset-x-0 top-0 z-[100] bg-cyber-red py-2 text-center font-mono text-xs font-bold tracking-[0.25em] text-white">RED TEAM MODE ENABLED</div>
}
