'use client'
import { useEffect, useRef } from 'react'

export default function Trail() {
  const cv = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = cv.current; if (!c) return
    const ctx = c.getContext('2d')!
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)

    const pts: { x: number; y: number; age: number }[] = []
    const onMove = (e: MouseEvent) => { pts.push({ x: e.clientX, y: e.clientY, age: 0 }); if (pts.length > 75) pts.shift() }
    window.addEventListener('mousemove', onMove)

    const MAX = 42
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      for (let i = pts.length - 1; i >= 0; i--) pts[i].age++
      while (pts.length && pts[0].age >= MAX) pts.shift()

      for (let i = 1; i < pts.length; i++) {
        const a = pts[i - 1], b = pts[i]
        const t = i / pts.length
        const alpha = (1 - b.age / MAX) * .52
        const R = Math.round(213 + (250 - 213) * t)
        const G = Math.round(30 + (131 - 30) * t)
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(${R},${G},32,${alpha})`
        ctx.lineWidth = (1 - a.age / MAX) * 2.5
        ctx.lineCap = 'round'; ctx.stroke()
      }
      if (pts.length) {
        const h = pts[pts.length - 1]
        const g = ctx.createRadialGradient(h.x, h.y, 0, h.x, h.y, 12)
        g.addColorStop(0, 'rgba(240,57,15,.58)'); g.addColorStop(1, 'rgba(240,57,15,0)')
        ctx.beginPath(); ctx.arc(h.x, h.y, 12, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMove) }
  }, [])
  return <canvas ref={cv} id="trail" />
}
