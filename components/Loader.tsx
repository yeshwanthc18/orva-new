'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Ph = 'in' | 'hold' | 'fly' | 'done'

export default function Loader() {
  const [ph, setPh]   = useState<Ph>('in')
  const [dx, setDx]   = useState(0)
  const [dy, setDy]   = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setPh('hold'), 850)
    const t2 = setTimeout(() => {
      const el = document.getElementById('nav-logo')
      if (el) {
        const r = el.getBoundingClientRect()
        setDx(r.left + r.width / 2 - window.innerWidth / 2)
        setDy(r.top + r.height / 2 - window.innerHeight / 2)
      }
      setPh('fly')
    }, 1800)
    const t3 = setTimeout(() => setPh('done'), 2600)
    const t4 = setTimeout(() => setGone(true), 2950)
    return () => { [t1,t2,t3,t4].forEach(clearTimeout) }
  }, [])

  if (gone) return null

  return (
    <AnimatePresence>
      {ph !== 'done' && (
        <motion.div key="ld" exit={{ opacity: 0, transition: { duration: .38 } }}
          style={{ position:'fixed', inset:0, zIndex:9999, background:'#f8f6f2',
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>

          {/* Soft radial */}
          <motion.div style={{ position:'absolute', width:460, height:460, borderRadius:'50%', pointerEvents:'none',
            background:'radial-gradient(circle, rgba(213,30,32,.08) 0%, transparent 70%)' }}
            initial={{ scale:0, opacity:0 }} animate={ph==='hold' ? { scale:1, opacity:1 } : { scale:0, opacity:0 }} transition={{ duration:.75 }} />

          {/* Travelling logo */}
          <motion.div layoutId="brand-logo"
            initial={{ opacity:0, y:56, scale:.78 }}
            animate={ph==='in' || ph==='hold' ? { opacity:1, y:0, scale:1, x:0 } : { opacity:1, y:dy, scale:.38, x:dx }}
            transition={ph==='in' ? { duration:.88, ease:[.22,1,.36,1] } : ph==='fly' ? { duration:.7, ease:[.76,0,.24,1] } : { duration:0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/orva-logo-red.svg" alt="ORVA" style={{ height:52, width:'auto' }} />
          </motion.div>

          {/* Tagline */}
          <motion.p style={{ position:'absolute', top:'55%', fontSize:10, letterSpacing:'.52em', textTransform:'uppercase',
            fontWeight:700, color:'rgba(213,30,32,.42)' }}
            initial={{ opacity:0, y:8 }}
            animate={ph==='hold' ? { opacity:1, y:0 } : { opacity:0, y: ph==='fly' ? -6 : 8 }}
            transition={{ duration:.38 }}>
            Elite&nbsp;&nbsp;Admissions.
          </motion.p>

          {/* Progress */}
          <motion.div style={{ position:'absolute', bottom:0, left:0, height:2, background:'linear-gradient(90deg,#D51E20,#FA8322)' }}
            initial={{ width:'0%' }}
            animate={{ width: ph==='in' ? '28%' : ph==='hold' ? '70%' : '100%' }}
            transition={{ duration:.82, ease:'easeInOut' }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
