import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { openWhatsApp } from '../lib/whatsapp'
import { useToast } from './Toast'

export default function FloatingWhatsApp() {
  const reduce = useReducedMotion()
  const toast = useToast()

  const handleClick = () => {
    const ok = openWhatsApp(siteConfig.whatsapp.contextMessage)
    if (!ok) {
      toast(
        'WhatsApp inquiries are temporarily unavailable — the WhatsApp number has not been configured yet. Please check back soon.',
      )
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
      initial={reduce ? false : { opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-burgundy-900 shadow-xl shadow-gold-700/30 ring-2 ring-gold-300/40 ring-offset-2 ring-offset-transparent"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-gold-500/30 [animation-duration:2.5s]" />
      <MessageCircle className="h-6 w-6" />
    </motion.button>
  )
}
