import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

interface Props {
  faqs: { question: string; answer: string }[]
}

export default function FAQ({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gold-500/20">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span
                className={`text-base font-medium transition-colors sm:text-lg ${
                  isOpen ? 'text-gold-600 dark:text-gold-300' : 'text-burgundy-800 dark:text-ivory-100'
                }`}
              >
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  isOpen
                    ? 'border-gold-500 bg-gold-500 text-burgundy-900'
                    : 'border-gold-500/40 text-gold-600 dark:text-gold-400'
                }`}
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 leading-relaxed text-charcoal/75 dark:text-ivory-100/70">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
