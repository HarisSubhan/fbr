import { siteConfig } from '../data/siteConfig'

export interface InquiryData {
  fullName: string
  phone: string
  email?: string
  service: string
  projectType: string
  location: string
  requirements: string
  additionalMessage?: string
  sourcePage: string
}

export function isWhatsAppConfigured(): boolean {
  const digits = siteConfig.whatsapp.number.replace(/\D/g, '')
  return digits.length >= 10
}

export function waLink(message: string): string | null {
  if (!isWhatsAppConfigured()) return null
  const digits = siteConfig.whatsapp.number.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

/**
 * Opens WhatsApp with a pre-filled message.
 * Returns false when the WhatsApp number has not been configured yet.
 */
export function openWhatsApp(message: string): boolean {
  const link = waLink(message)
  if (!link) return false
  window.open(link, '_blank', 'noopener,noreferrer')
  return true
}

export function serviceInquiryMessage(serviceTitle: string): string {
  return `Hello RAI INTERIORS, I would like to know more about your ${serviceTitle} services.`
}

export function buildInquiryMessage(data: InquiryData): string {
  return [
    'NEW WEBSITE INQUIRY — RAI INTERIORS',
    '',
    `Full Name: ${data.fullName}`,
    '',
    `Phone Number: ${data.phone}`,
    '',
    `Email: ${data.email || '—'}`,
    '',
    `Service Required: ${data.service}`,
    '',
    `Project Type: ${data.projectType}`,
    '',
    `Location: ${data.location}`,
    '',
    `Project Requirements: ${data.requirements}`,
    '',
    `Additional Message: ${data.additionalMessage || '—'}`,
    '',
    `Source Page: ${data.sourcePage}`,
    '',
    'Thank you.',
  ].join('\n')
}
