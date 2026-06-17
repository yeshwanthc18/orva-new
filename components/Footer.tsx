'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <footer style={{ background: '#f0ede8', borderTop: '1px solid rgba(24,24,24,.07)' }}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 52px' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '2.2fr 1fr 1fr 1fr',
            gap: 44,
            padding: '56px 0 44px',
          }}
        >
          {/* Brand Column */}
          <div>
            <Image
              src="/orva-logo-red.svg"
              alt="ORVA Education"
              width={120}
              height={36}
              style={{ height: 28, width: 'auto', marginBottom: 20 }}
            />
            <h3
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '.1em',
                color: 'rgba(24,24,24,.88)',
                marginBottom: 12,
              }}
            >
              Elite Admissions.
            </h3>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.78,
                color: 'rgba(24,24,24,.46)',
                maxWidth: 280,
                marginBottom: 12,
              }}
            >
              The competitive edge your child needs for admission to the world's
              best universities — and a future-proof career.
            </p>
            <p
              style={{
                fontSize: 12,
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'rgba(24,24,24,.36)',
                maxWidth: 280,
                marginBottom: 22,
              }}
            >
              Boutique university admissions consulting for UAE and Saudi Arabia.
              UK · US · Europe.
            </p>
            <div style={{ display: 'flex', gap: 18 }}>
              {['Instagram', 'LinkedIn', 'WhatsApp'].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontSize: 10,
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: 'rgba(24,24,24,.28)',
                    textDecoration: 'none',
                    transition: 'color .18s',
                    cursor: 'none',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = '#D51E20')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      'rgba(24,24,24,.28)')
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate Column */}
          <div>
            <h4
              style={{
                fontSize: 10,
                letterSpacing: '.3em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'rgba(24,24,24,.2)',
                marginBottom: 18,
              }}
            >
              Navigate
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['Why Orva', '/why-orva'],
                ['How It Works', '/how-it-works'],
                ['About Daniela', '/about-daniela'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href as string}
                    style={{
                      fontSize: 14,
                      fontWeight: 300,
                      color: 'rgba(24,24,24,.46)',
                      textDecoration: 'none',
                      transition: 'color .18s',
                      cursor: 'none',
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = '#D51E20')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        'rgba(24,24,24,.46)')
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              style={{
                fontSize: 10,
                letterSpacing: '.3em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'rgba(24,24,24,.2)',
                marginBottom: 18,
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>
                <a
                  href="mailto:hello@orvaedu.com"
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'rgba(24,24,24,.46)',
                    textDecoration: 'none',
                    transition: 'color .18s',
                    cursor: 'none',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = '#D51E20')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      'rgba(24,24,24,.46)')
                  }
                >
                  hello@orvaedu.com
                </a>
              </li>
              <li>
                <a
                  href="https://orvaedu.com"
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'rgba(24,24,24,.46)',
                    textDecoration: 'none',
                    transition: 'color .18s',
                    cursor: 'none',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = '#D51E20')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      'rgba(24,24,24,.46)')
                  }
                >
                  orvaedu.com
                </a>
              </li>
            </ul>
          </div>

          {/* Serving Column */}
          <div>
            <h4
              style={{
                fontSize: 10,
                letterSpacing: '.3em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'rgba(24,24,24,.2)',
                marginBottom: 18,
              }}
            >
              Serving
            </h4>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: 'rgba(24,24,24,.46)',
                lineHeight: 1.6,
              }}
            >
              Dubai · Abu Dhabi · Riyadh · Jeddah · Online globally
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(24,24,24,.07)',
            padding: '18px 0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <p style={{ fontSize: 11, color: 'rgba(24,24,24,.22)' }}>
            © 2026 Orva Education. All rights reserved.
          </p>
          <p
            style={{
              fontSize: 11,
              color: 'rgba(24,24,24,.22)',
              fontWeight: 500,
              letterSpacing: '.05em',
            }}
          >
            Elite Admissions. The competitive edge your child needs.
          </p>
        </div>
      </div>
    </footer>
  )
}
