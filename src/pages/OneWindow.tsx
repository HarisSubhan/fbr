import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'
import { openWhatsApp } from '../lib/whatsapp'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import { useToast } from '../components/Toast'

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

const journey = [
  {
    title: 'One Consultation',
    text: 'Everything starts with a single conversation about your space, your budget and how you want to live or work in it.',
  },
  {
    title: 'One Design Team',
    text: 'Architects and interior designers develop your project together — so the structure and the finishes never argue with each other.',
  },
  {
    title: 'One Procurement Channel',
    text: 'Materials, furniture, fabrics, lighting and fixtures are sourced through our own supply chain at coordinated costs.',
  },
  {
    title: 'One Execution Crew',
    text: 'Our own teams install flooring, ceilings, paneling, kitchens, wardrobes and every remaining detail.',
  },
  {
    title: 'One Handover',
    text: 'You receive a finished, styled, cleaned space — with every question answered by the same project manager.',
  },
]

export default function OneWindow() {
  usePageMeta(
    `One-Window Solution | ${siteConfig.name}`,
    'One partner, every detail, complete transformation. Architecture, design, furniture, curtains, flooring, lighting, kitchens, wardrobes, décor and installation through one company.',
  )
  const toast = useToast()

  return (
    <>
      <PageHero
        eyebrow="Our Signature Model"
        title="ONE PARTNER. EVERY DETAIL. COMPLETE TRANSFORMATION."
        subtitle="Architecture, design, furniture, curtains, flooring, lighting, kitchen, wardrobes, décor and installation — coordinated through one company, one contract and one point of contact."
        image={img('1600210492486-724fe5c67fb0')}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'One-Window Solution' }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Old Way vs. The RAI Way"
            title="STOP MANAGING VENDORS. START MANAGING EXCITEMENT."
            description="Coordinating five suppliers means five timelines, five quality standards and five people to chase. The one-window model replaces all of it with a single accountable partner."
          />
          <div className="relative mt-16">
            <span className="absolute bottom-8 left-[27px] top-2 hidden w-px bg-gold-500/30 md:block" />
            <div className="space-y-10">
              {journey.map((step, i) => (
                <AnimatedSection key={step.title} delay={i * 0.08} direction="left">
                  <div className="flex items-start gap-6 md:gap-8">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-500/50 bg-ivory-50 shadow-md dark:bg-burgundy-900">
                      <CheckCircle2 className="h-6 w-6 text-gold-500" />
                    </span>
                    <div className="rounded-2xl border border-gold-500/25 bg-white/60 px-6 py-5 shadow-sm transition-all duration-400 hover:border-gold-500/60 hover:shadow-lg dark:bg-burgundy-850/80 md:flex-1">
                      <h3 className="font-display text-xl font-semibold text-burgundy-800 dark:text-gold-200">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75 dark:text-ivory-100/70">{step.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-100 py-24 dark:bg-burgundy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="All Under One Roof"
            title="EVERY SERVICE, ONE STANDARD."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.04}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-gold-500/25 bg-white/60 px-6 py-5 transition-all duration-300 hover:border-gold-500/70 hover:shadow-lg dark:bg-burgundy-850/80"
                >
                  <span className="text-sm font-medium text-burgundy-800 dark:text-ivory-100">{s.title}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gold-500 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="ONE CALL STARTS EVERYTHING."
        description="Message us on WhatsApp with your space and requirements — we will take it from there, exactly as we do with every detail of your project."
      />
    </>
  )
}
