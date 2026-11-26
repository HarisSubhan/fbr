import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'
import { openWhatsApp } from '../lib/whatsapp'
import { useToast } from './Toast'

interface Props {
  headline?: string
  description?: string
}

export default function CTASection({
  headline = "LET'S BRING YOUR VISION TO LIFE.",
  description = "Whether you're designing your dream home, transforming your office, furnishing a new property or planning an architectural project, our team is ready to help.",
}: Props) {
  const reduce = useReducedMotion()
  const toast = useToast()

  return (
    <section className="relative overflow-hidden bg-burgundy-900 py-20 dark:bg-burgundy-850">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-gold-500/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-burgundy-500/40 blur-[120px]" />
      </div>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6"
      >
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-gold-400">
          {siteConfig.tagline}
        </p>
        <h2 className="gold-gradient-text font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ivory-100/75">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-medium text-burgundy-900 shadow-lg shadow-gold-600/30 transition-all duration-300 hover:bg-gold-400 active:scale-95"
          >
            Start Your Project
          </Link>
          <button
            type="button"
            onClick={() => {
              const ok = openWhatsApp(siteConfig.whatsapp.contextMessage)
              if (!ok) {
                toast(
                  'WhatsApp inquiries are temporarily unavailable \u2014 the WhatsApp number has not been configured yet. Please check back soon.',
                )
              }
            }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/60 px-8 py-4 text-sm font-medium text-gold-300 transition-all duration-300 hover:bg-gold-500/10 active:scale-95"
          >
            Contact Us on WhatsApp
          </button>
        </div>
      </motion.div>
    </section>
  )
}
