import { Link } from 'react-router-dom'
import { ArrowUpRight, Facebook, Instagram, Linkedin, MapPin, MessageCircle } from 'lucide-react'
import { mainNav } from '../data/navigation'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'
import { openWhatsApp } from '../lib/whatsapp'
import { useToast } from './Toast'
import Logo from './Logo'

export default function Footer() {
  const toast = useToast()

  const waClick = (message?: string) => {
    const ok = openWhatsApp(message ?? siteConfig.whatsapp.contextMessage)
    if (!ok) {
      toast(
        'WhatsApp inquiries are temporarily unavailable — the WhatsApp number has not been configured yet. Please check back soon.',
      )
    }
  }

  const socials = [
    { icon: Instagram, url: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Facebook, url: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Linkedin, url: siteConfig.social.linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="relative border-t border-gold-500/20 bg-ivory-100 dark:bg-burgundy-900">
      <div className="gold-line absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal/75 dark:text-ivory-100/70">
            {siteConfig.description}
          </p>
          <p className="mt-5 font-display text-lg tracking-wide text-gold-600 dark:text-gold-400">
            {siteConfig.motto}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url || '#'}
                onClick={(e) => {
                  if (!url) e.preventDefault()
                }}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 text-gold-600 transition-all duration-300 hover:bg-gold-500 hover:text-burgundy-900 dark:text-gold-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 dark:text-gold-400">
            Explore
          </h3>
          <ul className="mt-5 space-y-2.5">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group inline-flex items-center gap-1 text-sm text-charcoal/75 transition-colors hover:text-gold-600 dark:text-ivory-100/70 dark:hover:text-gold-300"
                >
                  <span className="h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-3" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 dark:text-gold-400">
            Services
          </h3>
          <ul className="mt-5 grid gap-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group inline-flex items-center gap-1 text-sm text-charcoal/75 transition-colors hover:text-gold-600 dark:text-ivory-100/70 dark:hover:text-gold-300"
                >
                  <span className="h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-3" />
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600 dark:text-gold-400">
            Visit Us
          </h3>
          <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-charcoal/75 dark:text-ivory-100/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
            {siteConfig.contact.address}
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-gold-500/25">
            <iframe
              title="RAI INTERIORS location — Faisal Plaza, near PIA Building, Islamabad"
              src={siteConfig.contact.mapEmbedUrl}
              className="h-36 w-full grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={siteConfig.contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 inline-flex items-center gap-1 text-sm text-gold-600 transition-colors dark:text-gold-400"
          >
            Open in Google Maps
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => waClick()}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-medium text-burgundy-900 shadow-lg shadow-gold-600/25 transition-all duration-300 hover:bg-gold-400"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </button>
        </div>
      </div>

      <div className="border-t border-gold-500/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-charcoal/60 dark:text-ivory-100/50 sm:flex-row sm:px-6 lg:px-8">
          <p className="tracking-wide">
            © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.tagline}.
          </p>
          <p className="tracking-[0.25em] text-gold-600 dark:text-gold-500">{siteConfig.motto}</p>
        </div>
      </div>
    </footer>
  )
}
