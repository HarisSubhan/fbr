const mapQuery = 'Faisal Plaza near PIA Building, Islamabad, Pakistan'

export const siteConfig = {
  name: 'RAI INTERIORS',
  tagline: "POWERED BY AZZAN'S",
  motto: 'ONE WINDOW. EVERY INTERIOR SOLUTION.',
  description:
    "RAI INTERIORS, powered by AZZAN'S, brings together interior design, architecture, bespoke furniture, curtains, blinds, lighting, flooring and complete furnishing solutions — all under one roof.",
  siteUrl: 'https://rai-interiors.example.com',

  whatsapp: {
    // Configure the business WhatsApp number here, in international format without "+" or spaces.
    // Example: "923001234567"
    number: '',
    contextMessage:
      "Hello RAI INTERIORS, I would like to know more about your interior design and architectural services.",
  },

  contact: {
    address: 'Faisal Plaza, near PIA Building, Islamabad, Pakistan',
    phone: '',
    email: '',
    hours: 'Mon – Sat · 10:00 AM – 7:00 PM',
    mapQuery,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`,
    mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`,
  },

  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
    pinterest: '',
  },

  projectTypes: [
    'New Home / Villa',
    'Apartment / Flat',
    'Renovation / Remodeling',
    'Office / Commercial Space',
    'Hotel / Restaurant',
    'Retail Showroom',
    'Other',
  ],
} as const

export type SiteConfig = typeof siteConfig
