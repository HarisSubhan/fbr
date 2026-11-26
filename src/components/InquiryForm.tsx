import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Send } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { buildInquiryMessage, openWhatsApp } from '../lib/whatsapp'

interface Props {
  presetService?: string
  title?: string
  subtitle?: string
}

const inputCls =
  'w-full rounded-lg border border-gold-500/30 bg-white/70 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-gold-600 dark:border-gold-500/25 dark:bg-burgundy-800/50 dark:text-ivory-100 dark:placeholder:text-ivory-100/35 focus:dark:border-gold-400'

const labelCls = 'mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-charcoal/70 dark:text-ivory-100/60'

export default function InquiryForm({ presetService, title, subtitle }: Props) {
  const location = useLocation()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: presetService ?? '',
    projectType: '',
    location: '',
    requirements: '',
    additionalMessage: '',
  })
  const [errors, setErrors] = useState<string[]>([])

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = (): string[] => {
    const errs: string[] = []
    if (!form.fullName.trim()) errs.push('Full Name is required.')
    if (!form.phone.trim()) errs.push('Phone Number is required.')
    if (!form.service) errs.push('Please select a service.')
    if (!form.projectType) errs.push('Please select a project type.')
    if (!form.location.trim()) errs.push('Location is required.')
    if (!form.requirements.trim()) errs.push('Project Requirements are required.')
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (errs.length > 0) {
      setErrors(errs)
      return
    }
    setErrors([])
    const message = buildInquiryMessage({ ...form, sourcePage: location.pathname || 'Home' })
    const ok = openWhatsApp(message)
    if (!ok) {
      setErrors([
        'WhatsApp inquiries are temporarily unavailable \u2014 the WhatsApp number has not been configured yet. Please check back soon.',
      ])
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {title && <h3 className="font-display text-2xl text-burgundy-800 sm:col-span-2 dark:text-gold-200">{title}</h3>}
      {subtitle && <p className="-mt-2 text-sm text-charcoal/70 sm:col-span-2 dark:text-ivory-100/70">{subtitle}</p>}

      <div>
        <label htmlFor="inq-name" className={labelCls}>Full Name *</label>
        <input id="inq-name" className={inputCls} value={form.fullName} onChange={set('fullName')} placeholder="Your full name" />
      </div>
      <div>
        <label htmlFor="inq-phone" className={labelCls}>Phone Number *</label>
        <input id="inq-phone" className={inputCls} value={form.phone} onChange={set('phone')} placeholder="+92 3XX XXXXXXX" />
      </div>
      <div>
        <label htmlFor="inq-email" className={labelCls}>Email Address (Optional)</label>
        <input id="inq-email" type="email" className={inputCls} value={form.email} onChange={set('email')} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="inq-service" className={labelCls}>Select Service *</label>
        <select id="inq-service" className={inputCls} value={form.service} onChange={set('service')}>
          <option value="">Select a service\u2026</option>
          <option value="Architecture & Architectural Design">Architecture & Architectural Design</option>
          <option value="Interior Design & Space Planning">Interior Design & Space Planning</option>
          <option value="Furniture & Custom Furniture">Furniture & Custom Furniture</option>
          <option value="Curtains & Window Treatments">Curtains & Window Treatments</option>
          <option value="Flooring Solutions">Flooring Solutions</option>
          <option value="Ceiling & Lighting Solutions">Ceiling & Lighting Solutions</option>
          <option value="Wall Finishes & Paneling">Wall Finishes & Paneling</option>
          <option value="Kitchen & Wardrobe Solutions">Kitchen & Wardrobe Solutions</option>
          <option value="Home D\u00e9cor & Accessories">Home D\u00e9cor & Accessories</option>
          <option value="Corporate & Commercial Interiors">Corporate & Commercial Interiors</option>
          <option value="Hospitality & Hotel Interiors">Hospitality & Hotel Interiors</option>
          <option value="Turnkey Interior Project">Turnkey Interior Project</option>
          <option value="Multiple / Other">Multiple / Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="inq-type" className={labelCls}>Project Type *</label>
        <select id="inq-type" className={inputCls} value={form.projectType} onChange={set('projectType')}>
          <option value="">Select a project type\u2026</option>
          {siteConfig.projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="inq-location" className={labelCls}>Location *</label>
        <input id="inq-location" className={inputCls} value={form.location} onChange={set('location')} placeholder="City / area of your project" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="inq-req" className={labelCls}>Project Details / Requirements *</label>
        <textarea id="inq-req" rows={4} className={inputCls} value={form.requirements} onChange={set('requirements')} placeholder="Tell us about your space, rooms, style preferences and budget range\u2026" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="inq-msg" className={labelCls}>Additional Message</label>
        <textarea id="inq-msg" rows={2} className={inputCls} value={form.additionalMessage} onChange={set('additionalMessage')} placeholder="Anything else we should know?" />
      </div>

      {errors.length > 0 && (
        <div className="rounded-lg border border-red-400/50 bg-red-500/10 px-4 py-3 text-sm text-red-600 sm:col-span-2 dark:text-red-300" role="alert">
          <ul className="list-inside list-disc space-y-1">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col items-start gap-3 sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-medium text-burgundy-900 shadow-lg shadow-gold-600/25 transition-all duration-300 hover:bg-gold-400 active:scale-95"
        >
          Submit Inquiry
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <p className="text-xs text-charcoal/55 dark:text-ivory-100/45">
          Submitting opens WhatsApp with your inquiry pre-filled \u2014 nothing is sent to any server.
        </p>
      </div>
    </form>
  )
}
