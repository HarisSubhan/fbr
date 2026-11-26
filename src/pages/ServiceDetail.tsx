import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { projects } from '../data/projects'
import { getService, services } from '../data/services'
import { siteConfig } from '../data/siteConfig'
import { openWhatsApp, serviceInquiryMessage } from '../lib/whatsapp'
import { transformations, type Transformation } from '../data/beforeAfter'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import ProjectCard from '../components/ProjectCard'
import InquiryForm from '../components/InquiryForm'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import { useToast } from '../components/Toast'

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

const serviceProjectIds: Record<string, string[]> = {
  architecture: ['modern-villa-architecture', 'villa-facade'],
  'interior-design': ['luxury-living-room', 'modern-villa-interior'],
  furniture: ['executive-modular-kitchen', 'contemporary-apartment'],
  curtains: ['hotel-guest-suite', 'contemporary-apartment'],
  flooring: ['residential-lounge', 'modern-villa-interior'],
  'ceiling-lighting': ['boutique-lobby', 'serene-master-bedroom'],
  'wall-finishes': ['luxury-living-room', 'serene-master-bedroom'],
  'kitchen-wardrobes': ['executive-modular-kitchen', 'contemporary-apartment'],
  'home-decor': ['open-plan-living', 'luxury-living-room'],
  commercial: ['corporate-workspace', 'boutique-lobby'],
  hospitality: ['hotel-guest-suite', 'boutique-lobby'],
  turnkey: ['contemporary-apartment', 'modern-villa-interior'],
}

const serviceTransformMap: Record<string, string[]> = {
  architecture: ['architecture', 'complete-home'],
  'interior-design': ['living-room', 'complete-home'],
  furniture: ['furniture'],
  curtains: ['curtains'],
  flooring: ['flooring'],
  'ceiling-lighting': ['ceiling'],
  'wall-finishes': ['living-room'],
  'kitchen-wardrobes': ['kitchen'],
  'home-decor': ['living-room'],
  commercial: ['office'],
  hospitality: ['office', 'bedroom'],
  turnkey: ['complete-home'],
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const toast = useToast()
  const service = slug ? getService(slug) : undefined

  usePageMeta(
    service ? `${service.title} | ${siteConfig.name}` : `Services | ${siteConfig.name}`,
    service ? `${service.tagline} ${service.description.slice(0, 110)}…` : undefined,
  )

  if (!service) return <Navigate to="/services" replace />

  const relatedTransforms: Transformation[] = transformations.filter((t: Transformation) =>
    (serviceTransformMap[service.slug] ?? []).includes(t.id),
  )
  const relatedProjects = (serviceProjectIds[service.slug] ?? [])
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const waClick = () => {
    const ok = openWhatsApp(serviceInquiryMessage(service.shortTitle))
    if (!ok) {
      toast(
        'WhatsApp inquiries are temporarily unavailable — the WhatsApp number has not been configured yet. Please check back soon.',
      )
    }
  }

  return (
    <>
      <PageHero
        eyebrow={service.shortTitle}
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.shortTitle }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-lg leading-relaxed text-charcoal/80 dark:text-ivory-100/80">{service.description}</p>
          </AnimatedSection>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-gold-500/25 bg-white/60 p-6 transition-all duration-400 hover:border-gold-500/60 hover:shadow-lg dark:bg-burgundy-850/80">
                  <h3 className="font-display text-lg font-semibold text-burgundy-800 dark:text-gold-200">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75 dark:text-ivory-100/70">{b.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-100 py-20 dark:bg-burgundy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title={`${service.shortTitle} Services`}
            align="left"
          />
          <div className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.items.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.03}>
                <div className="group flex items-center gap-3 border-b border-gold-500/15 py-3 transition-colors hover:border-gold-500/50">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-500 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm text-charcoal/85 dark:text-ivory-100/80">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {relatedTransforms.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Before & After"
              title={`THE ${service.shortTitle.toUpperCase()} DIFFERENCE`}
              description="Drag to compare demo before-and-after visuals showing what this service can change in a space."
            />
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {relatedTransforms.map((t) => (
                <AnimatedSection key={t.id}>
                  <BeforeAfterSlider slide={t} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="bg-ivory-100 py-20 dark:bg-burgundy-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Related Projects" title="SEE IT IN CONTEXT." />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <AnimatedSection key={p.id}>
                  <ProjectCard project={p} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Common Questions" title="FREQUENTLY ASKED." />
          <div className="mt-8">
            <FAQ faqs={service.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-burgundy-900 py-20 dark:bg-burgundy-850">
        <div className="mx-auto grid max-w-5xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <AnimatedSection direction="right">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-400">Inquire Now</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ivory-100 sm:text-4xl">
              GET A QUOTE FOR {service.shortTitle.toUpperCase()}.
            </h2>
            <span className="gold-line mt-6 w-24" />
            <p className="mt-6 text-sm leading-relaxed text-ivory-100/70">
              Share a few details and we will respond on WhatsApp with next steps, timelines and indicative pricing
              for your {service.shortTitle.toLowerCase()} project.
            </p>
            <button
              type="button"
              onClick={waClick}
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/60 px-7 py-3 text-sm font-medium text-gold-300 transition-all duration-300 hover:bg-gold-500/15"
            >
              Prefer a quick chat on WhatsApp?
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </AnimatedSection>
          <AnimatedSection direction="left" className="rounded-3xl border border-gold-500/25 bg-ivory-50 p-6 shadow-2xl dark:bg-burgundy-900 sm:p-8">
            <InquiryForm presetService={service.title} />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {services
            .filter((s) => s.slug !== service.slug)
            .map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="rounded-full border border-gold-500/30 px-4 py-2 text-xs tracking-wide text-charcoal/70 transition-all duration-300 hover:border-gold-500/70 hover:text-gold-600 dark:text-ivory-100/70 dark:hover:text-gold-300"
              >
                {s.shortTitle}
              </Link>
            ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
