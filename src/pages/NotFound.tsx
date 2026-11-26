import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { siteConfig } from '../data/siteConfig'

export default function NotFound() {
  usePageMeta(`Page Not Found | ${siteConfig.name}`)
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-7xl font-semibold text-gold-500">404</p>
      <h1 className="mt-4 font-display text-2xl text-burgundy-800 dark:text-ivory-100">
        This room hasn&rsquo;t been designed yet.
      </h1>
      <p className="mt-2 text-sm text-charcoal/70 dark:text-ivory-100/60">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-gold-500 px-7 py-3 text-sm font-medium text-burgundy-900 transition-all hover:bg-gold-400"
      >
        Back to Home
      </Link>
    </section>
  )
}
