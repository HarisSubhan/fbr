import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { mainNav } from '../data/navigation'
import { siteConfig } from '../data/siteConfig'
import { openWhatsApp } from '../lib/whatsapp'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { useToast } from './Toast'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const toast = useToast()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const waClick = () => {
    const ok = openWhatsApp(siteConfig.whatsapp.contextMessage)
    if (!ok) {
      toast(
        'WhatsApp inquiries are temporarily unavailable \u2014 the WhatsApp number has not been configured yet. Please check back soon.',
      )
    }
  }

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative px-1 py-2 text-sm tracking-wide transition-colors duration-300 ${
      isActive ? 'text-gold-600 dark:text-gold-300' : 'text-charcoal/80 hover:text-burgundy-700 dark:text-ivory-100/80 dark:hover:text-gold-200'
    }`

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-gold-500/20 bg-ivory-50/90 py-3 shadow-lg shadow-burgundy-900/5 backdrop-blur-md dark:bg-burgundy-950/85'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {mainNav.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkCls} end={item.to === '/'}>
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-px bg-gold-500 transition-transform duration-300 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={waClick}
              className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-medium text-burgundy-900 shadow-lg shadow-gold-600/25 transition-all duration-300 hover:bg-gold-400 active:scale-95 md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden lg:inline">Consult on WhatsApp</span>
              <span className="lg:hidden">WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-600 dark:text-gold-300 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-burgundy-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto border-l border-gold-500/25 bg-ivory-50 p-6 dark:bg-burgundy-900"
            >
              <div className="flex items-center justify-between">
                <Logo compact />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-600 dark:text-gold-300"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {mainNav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `block border-b border-gold-500/15 py-3.5 font-display text-2xl transition-colors ${
                          isActive
                            ? 'text-gold-600 dark:text-gold-300'
                            : 'text-burgundy-800 dark:text-ivory-100'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8 flex flex-col gap-4"
              >
                <button
                  type="button"
                  onClick={waClick}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-medium text-burgundy-900 shadow-lg shadow-gold-600/25"
                >
                  <MessageCircle className="h-4 w-4" />
                  Consult on WhatsApp
                </button>
                <p className="text-center text-[10px] tracking-[0.3em] text-gold-600 dark:text-gold-500">
                  {siteConfig.tagline}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
