import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Eye, ScrollText } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { siteConfig } from '../data/siteConfig'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import CTASection from '../components/CTASection'

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

const pillars = [
  {
    icon: Compass,
    title: 'Who We Are',
    text: "RAI INTERIORS, powered by AZZAN'S, is a complete interior design and architectural solutions studio. We unite design, manufacturing and execution so our clients never have to manage multiple vendors.",
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To become the region’s most trusted one-window interior partner — the studio clients call first, and the only one they need.',
  },
  {
    icon: ScrollText,
    title: 'Our Mission',
    text: 'To deliver thoughtfully designed, beautifully finished spaces through premium materials, honest coordination and complete end-to-end accountability.',
  },
]

export default function About() {
  usePageMeta(
    `About Us | ${siteConfig.name}`,
    "Learn about RAI INTERIORS, powered by AZZAN'S — our story, vision, mission and one-window approach to complete interior solutions.",
  )

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="More Than Interiors. A Complete Experience."
        subtitle="One team for design, furniture, finishes, fittings and execution — united under a single standard of quality."
        image={img('1600210491892-03d54c0aaf87', 2000)}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <AnimatedSection direction="right">
            <span className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400">
              Our Story
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-burgundy-800 dark:text-gold-200 sm:text-4xl">
              A Studio Built Around Completeness
            </h2>
            <span className="gold-line mt-6 w-28" />
            <p className="mt-6 leading-relaxed text-charcoal/80 dark:text-ivory-100/75">
              RAI INTERIORS was founded on a simple observation: clients with beautiful visions were spending their
              energy coordinating architects, furniture makers, curtain suppliers, flooring crews and electricians —
              instead of enjoying the transformation of their space.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/80 dark:text-ivory-100/75">
              Our answer is the one-window philosophy. Every discipline lives under one roof, follows one design
              language and answers to one project manager. When every detail belongs to the same plan, the result
              feels effortless — because for the client, it is.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="left">
            <div className="overflow-hidden rounded-3xl border border-gold-500/25 shadow-2xl">
              <img
                src={img('1524758631624-e2822e304c36', 1200)}
                alt="Refined interior detailing"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-ivory-100 py-24 dark:bg-burgundy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Approach" title="CLARITY. CRAFT. COMPLETION." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-gold-500/25 bg-white/60 p-8 transition-all duration-400 hover:border-gold-500/60 hover:shadow-xl dark:bg-burgundy-850/80">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 text-gold-600 transition-all duration-400 group-hover:bg-gold-500 group-hover:text-burgundy-900 dark:text-gold-400">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-burgundy-800 dark:text-gold-200">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75 dark:text-ivory-100/70">{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <AnimatedSection direction="right">
            <div className="overflow-hidden rounded-3xl border border-gold-500/25 shadow-2xl">
              <img
                src={img('1613545325278-f24b0cae1224', 1200)}
                alt="Luxury living space by RAI INTERIORS"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left">
            <span className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400">
              Brand Association
            </span>
            <h2 className="gold-gradient-text font-display text-4xl font-semibold sm:text-5xl">
              POWERED BY AZZAN&rsquo;S.
            </h2>
            <span className="gold-line mt-6 w-28" />
            <p className="mt-6 leading-relaxed text-charcoal/80 dark:text-ivory-100/75">
              RAI INTERIORS is powered by AZZAN&rsquo;S, bringing together a commitment to quality, thoughtful design
              and complete interior solutions.
            </p>
            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-burgundy-900 shadow-lg shadow-gold-600/25 transition-all duration-300 hover:bg-gold-400"
            >
              Explore What We Do
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection headline="LET'S DESIGN YOUR STORY." />
    </>
  )
}
