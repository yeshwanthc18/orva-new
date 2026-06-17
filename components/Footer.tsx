'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once:true })
  return (
    <footer style={{ background:'#f0ede8', borderTop:'1px solid rgba(24,24,24,.07)' }}>
      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 52px' }}>
        <motion.div ref={ref} initial={{ opacity:0, y:18 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:.8 }}
          style={{ display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1fr', gap:44, padding:'56px 0 44px' }}>

          <div>
            <Image src="/orva-logo-red.svg" alt="ORVA Education" width={120} height={36} style={{ height:28, width:'auto', marginBottom:20 }} />
            <p style={{ fontSize:14, fontWeight:300, lineHeight:1.78, color:'rgba(24,24,24,.46)', maxWidth:260, marginBottom:22 }}>
              We serve the family, guide the student to what truly fits, and stay for the life that follows.
            </p>
            <div style={{ display:'flex', gap:18 }}>
              {['Instagram','LinkedIn','WhatsApp'].map(s => (
                <a key={s} href="#" style={{ fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', fontWeight:700,
                  color:'rgba(24,24,24,.28)', textDecoration:'none', transition:'color .18s', cursor:'none' }}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color='#D51E20'}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color='rgba(24,24,24,.28)'}
                >{s}</a>
              ))}
            </div>
          </div>

          {[
            { h:'Navigate', links:[['Story','#story'],['Process','#process'],['Reach','#reach'],['Values','#values'],['Contact','#contact']] },
            { h:'Contact',  links:[['www.orvaedu.com','https://orvaedu.com'],['UAE · KSA · Qatar','#'],['UK · USA · Canada','#']] },
            { h:'Partner',  links:[['For Families','#contact'],['For Schools','#contact'],['For Sponsors','#contact']] },
          ].map(col => (
            <div key={col.h}>
              <h4 style={{ fontSize:10, letterSpacing:'.3em', textTransform:'uppercase', fontWeight:700, color:'rgba(24,24,24,.2)', marginBottom:18 }}>{col.h}</h4>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                {col.links.map(([l,h]) => (
                  <li key={l}><a href={h} style={{ fontSize:14, fontWeight:300, color:'rgba(24,24,24,.46)', textDecoration:'none', transition:'color .18s', cursor:'none' }}
                    onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color='#D51E20'}
                    onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color='rgba(24,24,24,.46)'}
                  >{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div style={{ borderTop:'1px solid rgba(24,24,24,.07)', padding:'18px 0', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:10 }}>
          <p style={{ fontSize:11, color:'rgba(24,24,24,.22)' }}>© 2025 ORVA Education. All rights reserved.</p>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ fontSize:10, letterSpacing:'.4em', textTransform:'uppercase', fontWeight:800, color:'rgba(213,30,32,.36)' }}>Rise.</span>
            <div style={{ width:3, height:3, borderRadius:'50%', background:'rgba(213,30,32,.28)' }}/>
            <span style={{ fontSize:10, letterSpacing:'.4em', textTransform:'uppercase', fontWeight:800, color:'rgba(213,30,32,.36)' }}>Guided.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
