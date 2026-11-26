import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { siteConfig } from '../data/siteConfig'
import { openWhatsApp } from '../lib/whatsapp'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import SectionHeading from '../components/SectionHeading'
import InquiryForm from '../components/InquiryForm'
import { useToast } from '../components/Toast'

const img = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export default function Contact() {
  usePageMeta(
    `Contact Us | ${siteConfig.name}`,
    'Contact RAI INTERIORS — visit us at Faisal Plaza, near PIA Building, Islamabad, Pakistan, or send an inquiry directly through WhatsApp.',
  )
  const toast = useToast()

  const waClick = () => {
    const ok = openWhatsApp(siteConfig.whatsapp.contextMessage)
    if (!ok) {
      toast(
        'WhatsApp inquiries are temporarily unavailable — the WhatsApp number has not been configured yet. Please check back soon.',
      )
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="LET'S TALK ABOUT YOUR SPACE."
        subtitle="Send us your details below — your inquiry opens directly in WhatsApp and reaches our design team instantly."
        image={img('1600121848594-d8644e57abab')}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
          <AnimatedSection direction="right">
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400">
              Reach Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-burgundy-800 dark:text-gold-200 sm:text-4xl">
              Visit. Call. Message.
            </h2>
            <span className="gold-line mt-6 w-24" />
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-sm font-medium text-burgundy-800 dark:text-ivory-100">Studio Location</p>
                  <p className="mt-1 text-sm text-charcoal/75 dark:text-ivory-100/70">{siteConfig.contact.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-sm font-medium text-burgundy-800 dark:text-ivory-100">Phone</p>
                  <p className="mt-1 text-sm italic text-charcoal/55 dark:text-ivory-100/50">
                    To be provided — placeholder for now.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-sm font-medium text-burgundy-800 dark:text-ivory-100">Email</p>
                  <p className="mt-1 text-sm italic text-charcoal/55 dark:text-ivory-100/50">
                    To be provided — placeholder for now.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-500" />
                <div>
                  <p className="text-sm font-medium text-burgundy-800 dark:text-ivory-100">Business Hours</p>
                  <p className="mt-1 text-sm text-charcoal/75 dark:text-ivory-100/70">{siteConfig.contact.hours}</p>
                </div>
              </li>
            </ul>
            <button
              type="button"
              onClick={waClick}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-burgundy-900 shadow-lg shadow-gold-600/25 transition-all duration-300 hover:bg-gold-400 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us Directly
            </button>
            <p className="mt-4 text-xs text-charcoal/55 dark:text-ivory-100/45">{siteConfig.tagline}</p>
          </AnimatedSection>

          <AnimatedSection
            direction="left"
            className="rounded-3xl border border-gold-500/25 bg-white/60 p-6 shadow-xl dark:bg-burgundy-850/80 sm:p-8"
          >
            <InquiryForm
              title="Request a Consultation"
              subtitle="All required fields are marked with * — your answers are sent to WhatsApp exactly as you type them."
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-ivory-100 py-20 dark:bg-burgundy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="OUR LOCATION"
            description={siteConfig.contact.address}
          />
          <AnimatedSection className="mt-12 overflow-hidden rounded-3xl border border-gold-500/25 shadow-xl">
            <iframe
              title="RAI INTERIORS location map — Faisal Plaza, near PIA Building, Islamabad"
              src={siteConfig.contact.mapEmbedUrl}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AnimatedSection>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-gold-500/60 px-7 py-3 text-sm font-medium text-burgundy-800 transition-all hover:bg-gold-500/10 dark:text-gold-300"
            >
              Open in Google Maps
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={siteConfig.contact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-medium text-burgundy-900 transition-all hover:bg-gold-400"
            >
              Get Directions
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <p className="mt-6 text-center text-xs text-charcoal/55 dark:text-ivory-100/45">
            Map currently points to a location search for “{siteConfig.contact.mapQuery}” — it will be updated to the
            exact verified pin once provided.
          </p>
        </div>
      </section>
    </>
  )
}
