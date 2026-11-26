import { Link } from 'react-router-dom'

/**
 * Brand wordmark. Replace by dropping the official logo file at
 * `public/assets/logo.png` and swapping this component to an <img>.
 * The placeholder below should not be treated as the final logo.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="RAI INTERIORS — home">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/60">
        <span className="font-display text-xl font-semibold text-gold-500 transition-colors group-hover:text-gold-300">
          R
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-[0.18em] text-burgundy-800 group-hover:text-burgundy-700 dark:text-gold-300 dark:group-hover:text-gold-200 sm:text-xl">
          RAI INTERIORS
        </span>
        {!compact && (
          <span className="mt-1 text-[9px] font-medium tracking-[0.32em] text-gold-600 dark:text-gold-500">
            POWERED BY AZZAN&rsquo;S
          </span>
        )}
      </span>
    </Link>
  )
}
