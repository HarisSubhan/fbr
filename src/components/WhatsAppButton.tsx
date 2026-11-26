import { ArrowUpRight } from 'lucide-react'
import { serviceInquiryMessage, openWhatsApp } from '../lib/whatsapp'
import { useToast } from './Toast'

interface Props {
  serviceTitle?: string
  message?: string
  label?: string
  variant?: 'gold' | 'outline'
  className?: string
}

export default function WhatsAppButton({
  serviceTitle,
  message,
  label,
  variant = 'gold',
  className = '',
}: Props) {
  const toast = useToast()
  const text = message ?? (serviceTitle ? serviceInquiryMessage(serviceTitle) : undefined)

  const handleClick = () => {
    if (!text) return
    const ok = openWhatsApp(text)
    if (!ok) {
      toast(
        'WhatsApp inquiries are temporarily unavailable — the WhatsApp number has not been configured yet. Please check back soon.',
      )
    }
  }

  const base =
    'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 active:scale-95'
  const styles =
    variant === 'gold'
      ? 'bg-gold-500 text-burgundy-900 shadow-lg shadow-gold-600/25 hover:bg-gold-400 hover:shadow-gold-500/40'
      : 'border border-gold-500/60 text-burgundy-800 dark:text-gold-300 hover:bg-gold-500/10'

  return (
    <button type="button" onClick={handleClick} className={`${base} ${styles} ${className}`}>
      {label ?? 'WhatsApp Inquiries'}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  )
}
