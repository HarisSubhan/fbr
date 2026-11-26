import { usePageMeta } from '../hooks/usePageMeta'
import { siteConfig } from '../data/siteConfig'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import BeforeAfterGallery from '../components/BeforeAfterGallery'
import CTASection from '../components/CTASection'

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export default function BeforeAfterPage() {
  usePageMeta(
    `Before & After | ${siteConfig.name}`,
    'Interactive before-and-after transformations across living rooms, bedrooms, kitchens, offices, furniture, curtains, flooring, ceilings and architecture.',
  )

  return (
    <>
      <PageHero
        eyebrow="Before & After"
        title="THE TRANSFORMATION SPEAKS FOR ITSELF."
        subtitle="Drag the gold handle on any comparison to reveal what a complete RAI INTERIORS transformation can do."
        image={img('1600566753086-00f18fb6b3ea')}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Before & After' }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-charcoal/70 dark:text-ivory-100/65">
              Filter by the service you are planning, then drag, compare and expand each transformation fullscreen.
            </p>
          </AnimatedSection>
          <BeforeAfterGallery />
        </div>
      </section>
      <CTASection headline="READY FOR YOUR OWN TRANSFORMATION?" />
    </>
  )
}
