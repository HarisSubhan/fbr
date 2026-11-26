import { usePageMeta } from '../hooks/usePageMeta'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export default function ServicesIndex() {
  usePageMeta(
    `Our Services | ${siteConfig.name}`,
    'Explore all RAI INTERIORS services: architecture, interior design, furniture, curtains and blinds, flooring, ceilings and lighting, wall finishes, kitchens and wardrobes, décor, commercial, hospitality and turnkey projects.',
  )

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every Discipline. One Studio."
        subtitle="Twelve complete service lines — from architectural planning to the final cushion — delivered under our one-window standard."
        image={img('1600585154340-be6161a56a0c')}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.slug} delay={i * 0.05}>
                <ServiceCard service={svc} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection headline="NOT SURE WHICH SERVICE YOU NEED?" description="Tell us about your space on WhatsApp and our design team will guide you to the right starting point." />
    </>
  )
}
