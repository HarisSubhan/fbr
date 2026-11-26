import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { openWhatsApp } from '../lib/whatsapp'
import type { Project } from '../data/projects'
import TiltCard from './TiltCard'
import { useToast } from './Toast'

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const toast = useToast()

  const inquire = () => {
    const ok = openWhatsApp(
      `Hello RAI INTERIORS, I would like to know more about your "${project.title}" project approach.`,
    )
    if (!ok) {
      toast(
        'WhatsApp inquiries are temporarily unavailable — the WhatsApp number has not been configured yet. Please check back soon.',
      )
    }
  }

  return (
    <>
      <TiltCard>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full overflow-hidden rounded-2xl border border-gold-500/25 text-left shadow-lg transition-all duration-500 hover:border-gold-500/60 hover:shadow-2xl hover:shadow-gold-600/10"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={project.images[0]}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/90 via-burgundy-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400">{project.category}</span>
              <h3 className="mt-1 font-display text-xl font-semibold text-ivory-100">{project.title}</h3>
            </div>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/50 text-gold-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </button>
      </TiltCard>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] overflow-y-auto bg-burgundy-950/95 p-4 backdrop-blur sm:p-8"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              aria-label="Close project view"
              className="fixed right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/50 text-gold-300 transition-colors hover:bg-gold-500 hover:text-burgundy-900"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto max-w-5xl rounded-3xl border border-gold-500/25 bg-ivory-50 p-5 dark:bg-burgundy-900 sm:p-8"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 dark:text-gold-400">
                {project.category}
              </span>
              <h3 className="mt-2 font-display text-3xl font-semibold text-burgundy-800 dark:text-gold-200 sm:text-4xl">
                {project.title}
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.images.map((src, i) => (
                  <div key={src} className={`overflow-hidden rounded-2xl ${i === 0 ? 'sm:col-span-2' : ''}`}>
                    <img
                      src={src}
                      alt={`${project.title} view ${i + 1}`}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-3xl leading-relaxed text-charcoal/80 dark:text-ivory-100/75">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.scope.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold-500/40 px-3.5 py-1.5 text-xs tracking-wide text-gold-700 dark:text-gold-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col items-start gap-2">
                <button
                  type="button"
                  onClick={inquire}
                  className="rounded-full bg-gold-500 px-7 py-3 text-sm font-medium text-burgundy-900 shadow-lg shadow-gold-600/25 transition-all hover:bg-gold-400 active:scale-95"
                >
                  Inquire About a Similar Project
                </button>
                <p className="text-xs text-charcoal/55 dark:text-ivory-100/45">
                  Representative demo visualization — not a completed RAI INTERIORS client project.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
