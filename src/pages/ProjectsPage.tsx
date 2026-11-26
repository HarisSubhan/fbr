import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePageMeta } from '../hooks/usePageMeta'
import { projects, projectCategories } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'
import CTASection from '../components/CTASection'

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All')
  usePageMeta(
    `Our Projects | ${siteConfig.name}`,
    'Browse representative RAI INTERIORS visuals across residential, villa, apartment, corporate, hospitality and architectural categories.',
  )

  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="SPACES THAT INSPIRE."
        subtitle="An evolving portfolio of visualizations across residential, commercial and hospitality work."
        image={img('1600607687644-c7171b42498f')}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Our Projects' }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 flex flex-wrap justify-center gap-2.5">
            {projectCategories.map((c) => (
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
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <p className="mt-12 text-center text-xs text-charcoal/55 dark:text-ivory-100/45">
            Visualizations shown are representative demo content \u2014 update them with actual project documentation in
            the central projects data file.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  )
}
