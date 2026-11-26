import { useState } from 'react'
import { motion } from 'framer-motion'
import { transformations, transformationCategories, type TransformationCategory } from '../data/beforeAfter'
import BeforeAfterSlider from './BeforeAfterSlider'
import AnimatedSection from './AnimatedSection'

interface Props {
  limit?: number
  showFilters?: boolean
  includeFilters?: TransformationCategory[]
  note?: boolean
}

export default function BeforeAfterGallery({
  limit,
  showFilters = true,
  includeFilters,
  note = true,
}: Props) {
  const [filter, setFilter] = useState<'All' | TransformationCategory>('All')

  const available = includeFilters
    ? transformationCategories.filter((c) => c === 'All' || includeFilters.includes(c))
    : transformationCategories

  let list = transformations
  if (includeFilters) list = list.filter((t) => includeFilters.includes(t.category))
  if (filter !== 'All') list = list.filter((t) => t.category === filter)
  if (limit) list = list.slice(0, limit)

  return (
    <div>
      {showFilters && (
        <AnimatedSection className="mb-10 flex flex-wrap justify-center gap-2.5">
          {available.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
                filter === c
                  ? 'border-gold-500 bg-gold-500 text-burgundy-900 shadow-md shadow-gold-600/25'
                  : 'border-gold-500/35 text-charcoal/70 hover:border-gold-500/70 hover:text-gold-600 dark:text-ivory-100/70 dark:hover:text-gold-300'
              }`}
            >
              {c}
            </button>
          ))}
        </AnimatedSection>
      )}

      <motion.div layout className="grid gap-10 md:grid-cols-2 lg:gap-12">
        {list.map((t) => (
          <motion.div key={t.id} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <BeforeAfterSlider slide={t} />
          </motion.div>
        ))}
      </motion.div>

      {note && (
        <p className="mt-10 text-center text-xs text-charcoal/55 dark:text-ivory-100/45">
          The comparisons shown use representative demo visuals. Replace them with actual RAI INTERIORS project
          photography via the central data file \u2014 no component changes required.
        </p>
      )}
    </div>
  )
}
