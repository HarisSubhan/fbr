import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Props {
  title: string
  subtitle?: string
  image: string
  eyebrow?: string
  crumbs?: { label: string; to?: string }[]
}

export default function PageHero({ title, subtitle, image, eyebrow, crumbs }: Props) {
  const reduce = useReducedMotion()

  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-28 sm:min-h-[68vh]">
      <motion.div
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/55 to-burgundy-950/25" />
        <div className="absolute inset-0 bg-gold-500/5" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1 text-xs text-ivory-100/60">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3 w-3 text-gold-500" />}
                {c.to ? (
                  <Link to={c.to} className="transition-colors hover:text-gold-300">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold-400">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-4 block text-xs font-medium uppercase tracking-[0.35em] text-gold-400"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="max-w-3xl font-display text-4xl font-semibold leading-tight text-ivory-100 sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-ivory-100/75 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="gold-line mt-8 w-40 origin-left"
        />
      </div>
    </section>
  )
}
