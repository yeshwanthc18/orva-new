'use client'
import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const CITIES = [
  { n:'Dubai',     d:'Innovation meets excellence.' },
  { n:'Abu Dhabi', d:'Tradition. Vision. Global leadership.' },
  { n:'Riyadh',    d:'Rising minds. Limitless futures.' },
  { n:'Jeddah',    d:'Where heritage meets ambition.' },
  { n:'Doha',      d:'Global gateway. Local roots.' },
]

export default function Reach() {
  const ref   = useRef<HTMLElement>(null)
  const hdr   = useRef<HTMLDivElement>(null)
  const inView = useInView(hdr, { once:true, margin:'-80px' })
  const { scrollYProgress } = useScroll({ target:ref, offset:['start end','end start'] })
  const p1Y = useTransform(scrollYProgress, [0,1], [-75, 75])
  const p2Y = useTransform(scrollYProgress, [0,1], [-48, 48])

  return (
    <section ref={ref} id="reach" style={{ padding:'120px 0', background:'#fff', overflow:'hidden' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 52px' }}>

        <div ref={hdr} style={{ marginBottom:60 }}>
          <motion.div initial={{ opacity:0, y:28 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:.85 }}>
            <div className="label" style={{ marginBottom:18 }}>Our Reach</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900">
              From the Gulf.<br/><span className="gr">To the world.</span>
            </h2>
          </motion.div>
        </div>

        {/* Two large parallax photo panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-5 mb-4 md:mb-5" style={{ marginBottom:18 }}>
          {[
            { src:'/images/img14.jpeg', lbl:'We Serve',          title:'Across the GCC',  tags:CITIES.map(c=>c.n), y:p1Y, delay:0 },
            { src:'/images/img10.jpeg', lbl:'We Place Students', title:'Across the Globe', tags:['UK','USA','Canada','Netherlands','Australia'], y:p2Y, delay:.1 },
          ].map((p,pi) => (
            <motion.div key={pi}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:.9, delay:p.delay }}
              style={{ position:'relative', overflow:'hidden', borderRadius:20, minHeight:420 }}
            >
              <motion.div style={{ y:p.y, position:'absolute', inset:'-14%' }}>
                <Image src={p.src} alt={p.title} fill className="object-cover object-center" />
                <div style={{ position:'absolute', inset:0, background:'rgba(100,10,10,.08)', mixBlendMode:'multiply' }}/>
              </motion.div>
              <div style={{ position:'absolute', inset:0,
                background:'linear-gradient(to top, rgba(24,24,24,.85) 0%, rgba(24,24,24,.12) 55%, transparent 100%)' }}/>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:32 }}>
                <p style={{ fontSize:10, letterSpacing:'.44em', textTransform:'uppercase', fontWeight:700, color:'#FA8322', marginBottom:10 }}>{p.lbl}</p>
                <h3 style={{ fontSize:27, fontWeight:900, color:'#fff', marginBottom:16 }}>{p.title}</h3>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ padding:'4px 14px', background:'rgba(255,255,255,.12)',
                      backdropFilter:'blur(6px)', borderRadius:999, fontSize:11, fontWeight:600,
                      color:'#fff', border:'1px solid rgba(255,255,255,.18)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GCC city mini cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-3.5 mb-12 md:mb-20 lg:mb-52">
          {CITIES.map((c,i) => (
            <motion.div key={c.n}
              initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:.5, delay:i*.07 }}
              style={{ background:'#f8f6f2', border:'1px solid rgba(24,24,24,.07)', borderRadius:16, padding:20,
                cursor:'default', transition:'border-color .22s, background .22s' }}
              onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='rgba(213,30,32,.24)'; el.style.background='#fff' }}
              onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor='rgba(24,24,24,.07)'; el.style.background='#f8f6f2' }}
            >
              <div style={{ width:6, height:6, borderRadius:'50%', background:'#D51E20', marginBottom:12 }}/>
              <h4 style={{ fontSize:14, fontWeight:700, color:'#181818', marginBottom:5 }}>{c.n}</h4>
              <p style={{ fontSize:12, fontWeight:300, lineHeight:1.62, color:'rgba(24,24,24,.44)' }}>{c.d}</p>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.85 }}
          className="border-l-4 border-red-600 pl-6 md:pl-8 py-1">
          <p className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            "Counsel that understands the Gulf{' '}
            <span className="gr">cannot be flown in for the meeting.</span>"
          </p>
          <p style={{ fontSize:10, letterSpacing:'.42em', textTransform:'uppercase', fontWeight:700, color:'rgba(24,24,24,.28)', marginTop:14 }}>— ORVA Brand Values</p>
        </motion.div>
      </div>
    </section>
  )
}
