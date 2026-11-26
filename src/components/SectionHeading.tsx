import AnimatedSection from './AnimatedSection'

interface Props {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <AnimatedSection className={`flex max-w-3xl flex-col ${alignCls}`}>
      {eyebrow && (
        <span className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-600 dark:text-gold-400">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-burgundy-800 dark:text-gold-200 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <span className="gold-line mt-5 w-24" />
      {description && (
        <p className="mt-5 text-base leading-relaxed text-charcoal/80 dark:text-ivory-100/75">{description}</p>
      )}
    </AnimatedSection>
  )
}
