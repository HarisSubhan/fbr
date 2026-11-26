import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Sofa,
  DraftingCompass,
  Eye,
  HandHeart,
  Lamp,
  LayoutGrid,
  Lightbulb,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  Building2,
} from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { services, homeServiceSlugs } from '../data/services'
import { projects } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { openWhatsApp } from '../lib/whatsapp'
import BeforeAfterGallery from '../components/BeforeAfterGallery'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import TiltCard from '../components/TiltCard'
import CTASection from '../components/CTASection'
import { useToast } from '../components/Toast'

const heroImg =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80'

const windowCategories = [
  { label: 'Architecture & Planning', slug: 'architecture', icon: Building2 },
  { label: 'Interior Design', slug: 'interior-design', icon: LayoutGrid },
  { label: 'Furniture Solutions', slug: 'furniture', icon: Sofa },
  { label: 'Curtains & Blinds', slug: 'curtains', icon: Eye },
  { label: 'Flooring & Wall Finishes', slug: 'flooring', icon: Ruler },
  { label: 'Ceiling & Lighting', slug: 'ceiling-lighting', icon: Lamp },
  { label: 'Kitchen & Wardrobes', slug: 'kitchen-wardrobes', icon: Store },
  { label: 'Home Décor & Accessories', slug: 'home-decor', icon: Sparkles },
  { label: 'Commercial & Hospitality', slug: 'commercial', icon: Building2 },
  { label: 'Project Execution & Installation', slug: 'turnkey', icon: DraftingCompass },
]

const whyUs = [
  { icon: LayoutGrid, title: 'Complete One-Window Solution', text: 'Every trade, material and detail coordinated by a single accountable team.' },
  { icon: Award, title: 'Premium Quality Materials', text: 'Finishes, fabrics and fittings selected for lasting beauty, not short-term savings.' },
  { icon: HandHeart, title: 'Customized Design Solutions', text: 'Spaces composed around your routines, tastes and aspirations — never templates.' },
  { icon: DraftingCompass, title: 'Architectural Expertise', text: 'Structural understanding behind every layout, from load paths to daylight.' },
  { icon: Sofa, title: 'Bespoke Furniture', text: 'Made-to-measure pieces manufactured to your exact dimensions and materials.' },
  { icon: Eye, title: 'Attention to Every Detail', text: 'Shadow gaps, seams and reveals finished with millimeter care.' },
  { icon: ShieldCheck, title: 'Professional Project Coordination', text: 'Scheduled milestones, site supervision and transparent reporting.' },
  { icon: Lightbulb, title: 'End-to-End Execution', text: 'From concept boards to the final styling walk-through, we deliver.' },
  { icon: Sparkles, title: 'Personalized Customer Experience', text: 'A dedicated point of contact who knows your project by heart.' },
]

const processSteps = [
  { num: '01', title: 'Consultation', text: 'Understanding your vision, requirements and budget.' },
  { num: '02', title: 'Site Visit & Measurements', text: 'Understanding the space and its possibilities.' },
  { num: '03', title: 'Concept & Design', text: 'Creating layouts, concepts and 3D visualizations.' },
  { num: '04', title: 'Proposal & Approval', text: 'Presenting materials, designs and project quotations.' },
  { num: '05', title: 'Execution', text: 'Managing procurement, manufacturing and installation.' },
  { num: '06', title: 'Final Handover', text: 'Delivering a beautifully completed space.' },
]

function Hero() {
  const reduce = useReducedMotion()
  const toast = useToast()
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, 180])
  const fade = useTransform(scrollY, [0, 500], [1, 0])
  const [heroIdx, setHeroIdx] = useState(0)

  const heroSlides = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=2000&q=80',
  ]

  useEffect(() => {
    const t = window.setInterval(() => setHeroIdx((i) => (i + 1) % heroSlides.length), 7000)
    return () => window.clearInterval(t)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={heroIdx}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.6 }, scale: { duration: 7.2, ease: 'linear' } }}
            className="absolute inset-0"
          >
            <img src={heroSlides[heroIdx]} alt="Luxury interior designed by RAI INTERIORS" className="h-full w-full object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-950/80 via-burgundy-950/45 to-burgundy-950" />
        <div className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-gold-500/15 blur-[140px]" />
        <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-burgundy-500/30 blur-[120px]" />
      </motion.div>

      <motion.div style={reduce ? undefined : { opacity: fade }} className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-gold-400"
        >
          {siteConfig.tagline}
        </motion.p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] text-ivory-100 sm:text-7xl lg:text-8xl">
          {['DESIGNING SPACES.', 'DEFINING LIFESTYLES.'].map((line, i) => (
            <motion.span
              key={line}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`block ${i === 1 ? 'gold-gradient-text' : ''}`}
            >
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ivory-100/80 sm:text-lg"
        >
          Where thoughtful architecture meets timeless interiors. Discover complete design, furnishing and
          architectural solutions, all under one roof.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-burgundy-900 shadow-xl shadow-gold-700/30 transition-all duration-300 hover:bg-gold-400 hover:shadow-gold-500/50 active:scale-95"
          >
            Explore Our Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            onClick={() => {
              const ok = openWhatsApp(siteConfig.whatsapp.contextMessage)
              if (!ok) {
                toast(
                  'WhatsApp inquiries are temporarily unavailable — the WhatsApp number has not been configured yet. Please check back soon.',
                )
              }
            }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/60 px-8 py-4 text-sm font-medium text-gold-200 backdrop-blur transition-all duration-300 hover:bg-gold-500/15 active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to Our Design Team
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={reduce ? undefined : { opacity: fade }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory-100/50">Scroll</span>
          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-gold-500/50 p-1.5">
            <motion.span
              animate={reduce ? undefined : { y: [0, 20, 0], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-2 rounded-full bg-gold-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default function Home() {
  usePageMeta(
    "RAI INTERIORS — POWERED BY AZZAN'S | One Window. Every Interior Solution.",
    "Designing spaces, defining lifestyles. Architecture, interior design, furniture, curtains, flooring, lighting and turnkey execution under one roof in Islamabad, Pakistan.",
  )

  return (
    <>
      <Hero />

      {/* Section 2 — Brand Introduction */}
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <AnimatedSection direction="right">
            <span className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400">
              Who We Are
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-burgundy-800 dark:text-gold-200 sm:text-4xl lg:text-5xl">
              More Than Interiors. A Complete Experience.
            </h2>
            <span className="gold-line mt-6 w-28" />
            <p className="mt-6 leading-relaxed text-charcoal/80 dark:text-ivory-100/75">
              {siteConfig.name}, {siteConfig.tagline.charAt(0) + siteConfig.tagline.slice(1).toLowerCase()}, brings
              together interior design, architecture, bespoke furniture, curtains, blinds, lighting, flooring and
              complete furnishing solutions.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/80 dark:text-ivory-100/75">
              From initial concepts to final installation, we simplify the entire process through our one-window
              approach — one team, one standard of quality, one point of contact.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-gold-500/60 px-7 py-3 text-sm font-medium text-burgundy-800 transition-all duration-300 hover:bg-gold-500/10 dark:text-gold-300"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
          <AnimatedSection direction="left" className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80"
                alt="Elegant interior composed by RAI INTERIORS"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-gold-500/30 bg-ivory-50 px-6 py-4 shadow-xl dark:bg-burgundy-850 sm:block">
              <p className="font-display text-2xl text-gold-600 dark:text-gold-300">One Window</p>
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60 dark:text-ivory-100/60">
                Every Interior Solution
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3 — One-Window Solution */}
      <section className="relative bg-ivory-100 py-24 dark:bg-burgundy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our One-Window Solution"
            title="EVERYTHING YOUR SPACE NEEDS. UNDER ONE ROOF."
            description="Why coordinate with multiple vendors when you can get everything from one trusted partner? RAI INTERIORS provides a complete one-window solution for residential and commercial spaces."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {windowCategories.map((cat, i) => (
              <AnimatedSection key={cat.label} delay={i * 0.05}>
                <TiltCard maxTilt={8}>
                  <Link
                    to={`/services/${cat.slug}`}
                    className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-gold-500/25 bg-white/60 px-4 py-7 text-center shadow-sm transition-all duration-400 hover:border-gold-500/70 hover:shadow-xl hover:shadow-gold-600/10 dark:bg-burgundy-850/80"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 text-gold-600 transition-all duration-400 group-hover:bg-gold-500 group-hover:text-burgundy-900 dark:text-gold-400">
                      <cat.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium leading-snug text-burgundy-800 dark:text-ivory-100">
                      {cat.label}
                    </span>
                    <span className="h-px w-6 bg-gold-500/50 transition-all duration-400 group-hover:w-12 group-hover:bg-gold-400" />
                  </Link>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 text-center" delay={0.1}>
            <Link
              to="/one-window"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-burgundy-900 shadow-lg shadow-gold-600/25 transition-all duration-300 hover:bg-gold-400"
            >
              Explore the One-Window Solution
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4 — Our Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="CRAFTED CAPABILITIES, COMPLETE COVERAGE."
            description="Twelve specialized disciplines, delivered by one coordinated studio. Every service links to its own dedicated page."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {homeServiceSlugs.map((slug, i) => {
              const svc = services.find((s) => s.slug === slug)!
              return (
                <AnimatedSection key={slug} delay={i * 0.06}>
                  <ServiceCard service={svc} />
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 5 — Before & After */}
      <section className="relative bg-ivory-100 py-24 dark:bg-burgundy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Before & After"
            title="THE TRANSFORMATION SPEAKS FOR ITSELF."
            description="Drag the handle to compare each space before and after a complete RAI INTERIORS transformation."
          />
          <div className="mt-14">
            <BeforeAfterGallery limit={4} note={false} />
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/before-after"
              className="group inline-flex items-center gap-2 rounded-full border border-gold-500/60 px-7 py-3 text-sm font-medium text-burgundy-800 transition-all duration-300 hover:bg-gold-500/10 dark:text-gold-300"
            >
              View All Transformations
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 — Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Projects"
            title="SPACES THAT INSPIRE."
            description="Representative visualizations across our residential, commercial and hospitality portfolio categories."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.06}>
                <ProjectCard project={p} />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-gold-500/60 px-7 py-3 text-sm font-medium text-burgundy-800 transition-all duration-300 hover:bg-gold-500/10 dark:text-gold-300"
            >
              View Full Portfolio
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7 — Why Choose Us */}
      <section className="relative bg-ivory-100 py-24 dark:bg-burgundy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="THE DIFFERENCE IS IN THE DETAILS."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-gold-500/25 bg-white/60 p-7 transition-all duration-400 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-xl hover:shadow-gold-600/10 dark:bg-burgundy-850/80">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 text-gold-600 transition-all duration-400 group-hover:bg-gold-500 group-hover:text-burgundy-900 dark:text-gold-400">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-burgundy-800 dark:text-gold-200">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75 dark:text-ivory-100/70">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Our Process */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="FROM FIRST CONVERSATION TO FINAL HANDOVER."
          />
          <div className="relative mt-16">
            <span className="absolute bottom-8 left-[27px] top-2 hidden w-px bg-gold-500/30 lg:block" />
            <div className="space-y-10">
              {processSteps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.08} direction="left">
                  <div className="flex items-start gap-6 lg:gap-8">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-500/50 bg-ivory-50 font-display text-lg font-semibold text-gold-600 shadow-md dark:bg-burgundy-900 dark:text-gold-300">
                      {step.num}
                    </span>
                    <div className="rounded-2xl border border-gold-500/25 bg-white/60 px-6 py-5 shadow-sm transition-all duration-400 hover:border-gold-500/60 hover:shadow-lg dark:bg-burgundy-850/80 lg:flex-1">
                      <h3 className="font-display text-xl font-semibold text-burgundy-800 dark:text-gold-200">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75 dark:text-ivory-100/70">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Powered by AZZAN'S */}
      <section className="relative overflow-hidden bg-burgundy-900 py-24 dark:bg-burgundy-850">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[130px]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <AnimatedSection>
            <span className="mb-5 flex justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/60 font-display text-3xl font-semibold text-gold-400">
                A
              </span>
            </span>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold-400">Brand Association</p>
            <h2 className="gold-gradient-text mt-4 font-display text-4xl font-semibold sm:text-5xl">
              POWERED BY AZZAN&rsquo;S.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ivory-100/75">
              RAI INTERIORS is powered by AZZAN&rsquo;S, bringing together a commitment to quality, thoughtful
              design and complete interior solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 10 — CTA */}
      <CTASection />
    </>
  )
}
