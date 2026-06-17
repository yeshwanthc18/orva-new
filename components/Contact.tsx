'use client'
import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Contact() {
  const ref   = useRef<HTMLElement>(null)
  const hdr   = useRef<HTMLDivElement>(null)
  const inView = useInView(hdr, { once:true, margin:'-80px' })
  const [form, setForm] = useState({ name:'', email:'', city:'', msg:'' })
  const [sent, setSent] = useState(false)
  const { scrollYProgress } = useScroll({ target:ref, offset:['start end','end start'] })
  const bgY = useTransform(scrollYProgress, [0,1], [-65, 65])

  const iSt: React.CSSProperties = { width:'100%', background:'#f8f6f2', border:'1px solid rgba(24,24,24,.1)',
    borderRadius:12, padding:'11px 16px', color:'#181818', fontSize:14, fontFamily:'Cairo,sans-serif', outline:'none', transition:'border-color .18s' }
  const lSt: React.CSSProperties = { display:'block', fontSize:10, letterSpacing:'.2em', textTransform:'uppercase', fontWeight:700, color:'rgba(24,24,24,.36)', marginBottom:8 }

  return (
    <section ref={ref} id="contact" style={{ position:'relative', padding:'120px 0', background:'#f8f6f2', overflow:'hidden' }}>
      <motion.div style={{ y:bgY, position:'absolute', inset:'-12%', opacity:.04, pointerEvents:'none' }}>
        <Image src="/images/img01.jpeg" alt="" fill className="object-cover" />
      </motion.div>

      <div style={{ maxWidth:1360, margin:'0 auto', padding:'0 52px', position:'relative', zIndex:1 }}>

        {/* Header */}
        <div ref={hdr} style={{ marginBottom:60, textAlign:'center' }}>
          <motion.div initial={{ opacity:0, y:28 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:.85 }}>
            <div className="label" style={{ justifyContent:'center', marginBottom:18 }}>
              <span style={{ width:36, height:1.5, background:'#D51E20', flexShrink:0, display:'block' }}/>
              Take the First Step
              <span style={{ width:36, height:1.5, background:'#D51E20', flexShrink:0, display:'block' }}/>
            </div>
            <h2 style={{ fontSize:'clamp(38px,5.5vw,66px)', fontWeight:900, lineHeight:.92, letterSpacing:'-.028em', color:'#181818' }}>
              Your future starts <span className="gr">now.</span>
            </h2>
            <p style={{ marginTop:14, fontSize:17, fontWeight:300, color:'rgba(24,24,24,.44)' }}>We&apos;ll guide the way.</p>
          </motion.div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:44, alignItems:'start' }}>
          {/* Left — image + features */}
          <motion.div initial={{ opacity:0, x:-28 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:.88, delay:.1 }}>
            <div style={{ position:'relative', height:276, borderRadius:20, overflow:'hidden', marginBottom:30 }}>
              <Image src="/images/img13.jpeg" alt="" fill className="object-cover" />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(24,24,24,.72), transparent 60%)' }}/>
              <div style={{ position:'absolute', bottom:22, left:26 }}>
                <p style={{ fontSize:20, fontWeight:900, color:'#fff', lineHeight:1.25 }}>
                  Your future starts now.<br/>
                  <span style={{ background:'linear-gradient(135deg,#FA8322,#F45104)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                    We&apos;ll guide the way.
                  </span>
                </p>
              </div>
            </div>

            {['Explore. Discover. Define your path.','Expert guidance you can trust.','Global pathways. Infinite possibilities.','Take the first step. Your future awaits.'].map((f,i) => (
              <motion.div key={f} initial={{ opacity:0, x:-12 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:.5, delay:.28+i*.08 }}
                style={{ display:'flex', alignItems:'center', gap:14, marginBottom:14 }}>
                <div style={{ width:26, height:26, borderRadius:'50%', background:'rgba(213,30,32,.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <div style={{ width:6, height:6, borderRadius:'50%', background:'#D51E20' }}/>
                </div>
                <span style={{ fontSize:14, fontWeight:500, color:'rgba(24,24,24,.6)' }}>{f}</span>
              </motion.div>
            ))}

            {/* Social proof */}
            <motion.div initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ delay:.7 }}
              style={{ display:'flex', alignItems:'center', gap:14, marginTop:28, paddingTop:22, borderTop:'1px solid rgba(24,24,24,.08)' }}>
              <div style={{ display:'flex' }}>
                {['/images/img02.jpeg','/images/img03.jpeg','/images/img04.jpeg'].map((s,i) => (
                  <div key={i} style={{ width:34, height:34, borderRadius:'50%', border:'2px solid #fff', overflow:'hidden', position:'relative', marginLeft: i>0 ? -8 : 0 }}>
                    <Image src={s} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize:13, fontWeight:700, color:'#181818' }}>500+ students guided</div>
                <div style={{ fontSize:12, color:'rgba(24,24,24,.42)', fontWeight:300 }}>UAE · Saudi Arabia · Qatar & more</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity:0, x:28 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:.88, delay:.14 }}
            style={{ background:'#fff', border:'1px solid rgba(24,24,24,.08)', borderRadius:24, padding:40, boxShadow:'0 4px 52px rgba(0,0,0,.05)' }}>
            {sent ? (
              <motion.div initial={{ opacity:0, scale:.95 }} animate={{ opacity:1, scale:1 }} style={{ textAlign:'center', padding:'56px 0' }}>
                <div style={{ width:58, height:58, borderRadius:'50%', background:'linear-gradient(135deg,#D51E20,#F45104)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px' }}>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                </div>
                <h3 style={{ fontSize:21, fontWeight:900, color:'#181818', marginBottom:10 }}>We&apos;ll be in touch.</h3>
                <p style={{ fontSize:14, fontWeight:300, color:'rgba(24,24,24,.5)' }}>Our team will reach out within 24 hours.</p>
              </motion.div>
            ) : (
              <>
                <h3 style={{ fontSize:21, fontWeight:900, color:'#181818', marginBottom:6 }}>Start the conversation</h3>
                <p style={{ fontSize:14, fontWeight:300, color:'rgba(24,24,24,.44)', marginBottom:26 }}>No commitment. Just a conversation about your student&apos;s future.</p>
                <form onSubmit={e=>{ e.preventDefault(); setSent(true) }} style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                    <div>
                      <label style={lSt}>Full Name</label>
                      <input type="text" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" style={iSt}
                        onFocus={e=>(e.target as HTMLElement).style.borderColor='rgba(213,30,32,.46)'} onBlur={e=>(e.target as HTMLElement).style.borderColor='rgba(24,24,24,.1)'}/>
                    </div>
                    <div>
                      <label style={lSt}>City</label>
                      <select value={form.city} onChange={e=>setForm({...form,city:e.target.value})} style={{ ...iSt, appearance:'none' }}>
                        <option value="">Select</option>
                        {['Dubai','Abu Dhabi','Riyadh','Jeddah','Doha','Other'].map(c=><option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={lSt}>Email</label>
                    <input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="family@email.com" style={iSt}
                      onFocus={e=>(e.target as HTMLElement).style.borderColor='rgba(213,30,32,.46)'} onBlur={e=>(e.target as HTMLElement).style.borderColor='rgba(24,24,24,.1)'}/>
                  </div>
                  <div>
                    <label style={lSt}>Tell us about your student</label>
                    <textarea rows={4} value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} placeholder="Year, interests, dream universities..." style={{ ...iSt, resize:'none' }}
                      onFocus={e=>(e.target as HTMLElement).style.borderColor='rgba(213,30,32,.46)'} onBlur={e=>(e.target as HTMLElement).style.borderColor='rgba(24,24,24,.1)'}/>
                  </div>
                  <button type="submit" style={{ padding:'14px', background:'linear-gradient(135deg,#D51E20,#F45104)', border:'none', borderRadius:14,
                    color:'#fff', fontFamily:'Cairo,sans-serif', fontSize:14, fontWeight:700, cursor:'none',
                    transition:'transform .2s, box-shadow .2s' }}
                    onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-2px)'; el.style.boxShadow='0 8px 28px rgba(213,30,32,.3)' }}
                    onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform='translateY(0)'; el.style.boxShadow='none' }}>
                    Begin My Journey →
                  </button>
                  <p style={{ textAlign:'center', fontSize:11, color:'rgba(24,24,24,.28)' }}>We respect your privacy. No spam, ever.</p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
