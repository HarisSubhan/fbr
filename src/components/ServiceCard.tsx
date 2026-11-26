import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ServiceItem } from '../data/services'
import TiltCard from './TiltCard'

export default function ServiceCard({ service, tall = false }: { service: ServiceItem; tall?: boolean }) {
  return (
    <TiltCard>
      <Link
        to={`/services/${service.slug}`}
        className={`group relative block overflow-hidden rounded-2xl border border-gold-500/25 bg-ivory-100 shadow-lg transition-all duration-500 hover:border-gold-500/60 hover:shadow-2xl hover:shadow-gold-600/10 dark:bg-burgundy-850 ${
          tall ? 'aspect-[3/4]' : 'aspect-[4/5]'
        }`}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/45 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-0 rounded-2xl border border-gold-400/0 p-3 transition-all duration-500 group-hover:border-gold-400/60">
          <div className="flex h-full flex-col justify-end p-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-400 opacity-0 transition-all duration-500 group-hover:opacity-100">
              Explore Service
            </span>
            <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug text-ivory-100 sm:text-2xl">
              {service.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory-100/70 line-clamp-2">
              {service.tagline}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors group-hover:text-gold-200">
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  )
}
