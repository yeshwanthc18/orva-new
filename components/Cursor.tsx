'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById('c-dot')!
    const ring = document.getElementById('c-ring')!
    let lx = -300, ly = -300, rx = -300, ry = -300
    let raf: number

    const mv = (e: MouseEvent) => {
      lx = e.clientX; ly = e.clientY
      dot.style.left = lx + 'px'; dot.style.top = ly + 'px'
    }
    window.addEventListener('mousemove', mv)
    const tick = () => { rx += (lx - rx) * .11; ry += (ly - ry) * .11; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; raf = requestAnimationFrame(tick) }
    tick()

    const big = () => { dot.style.width = '11px'; dot.style.height = '11px'; ring.style.width = '54px'; ring.style.height = '54px'; ring.style.borderColor = 'rgba(213,30,32,.6)' }
    const sml = () => { dot.style.width = '7px';  dot.style.height = '7px';  ring.style.width = '32px'; ring.style.height = '32px'; ring.style.borderColor = 'rgba(213,30,32,.38)' }
    const addH = (el: Element) => { el.addEventListener('mouseenter', big); el.addEventListener('mouseleave', sml) }
    document.querySelectorAll('a, button').forEach(addH)
    const obs = new MutationObserver(() => document.querySelectorAll('a, button').forEach(addH))
    obs.observe(document.body, { childList: true, subtree: true })

    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', mv); obs.disconnect() }
  }, [])
  return <><div id="c-dot" /><div id="c-ring" /></>
}
