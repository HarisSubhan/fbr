export interface ServiceItem {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  image: string
  items: string[]
  benefits: { title: string; text: string }[]
  faqs: { question: string; answer: string }[]
  overlay?: string
}

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const services: ServiceItem[] = [
  {
    slug: 'architecture',
    title: 'Architecture & Architectural Design',
    shortTitle: 'Architecture',
    tagline: 'Thoughtful structures, beautifully planned.',
    description:
      'Great interiors begin with great architecture. Our architectural team plans residences, villas and commercial buildings with a balance of proportion, light, ventilation and everyday usability. From the first layout sketch to detailed 3D visualizations, we shape spaces that are structurally sound, elegant and built around the way you live and work.',
    image: img('1487958449943-2429e8be8625'),
    items: [
      'Architectural Planning',
      'Residential Architecture',
      'Commercial Architecture',
      'Villa Design',
      'Building Layout Planning',
      'Space Optimization',
      'Exterior Design',
      '2D Architectural Drawings',
      '3D Architectural Visualization',
      'Elevation Design',
      'Renovation & Remodeling Planning',
    ],
    benefits: [
      { title: 'Architect-Led Process', text: 'Every plan is developed and reviewed by experienced architectural designers.' },
      { title: 'Optimized Layouts', text: 'Circulation, daylight and ventilation are considered from the very first sketch.' },
      { title: 'Visual Clarity', text: 'Detailed 2D drawings and 3D visualizations let you see your project before it is built.' },
      { title: 'Build-Ready Output', text: 'Coordinated drawings that contractors and our own execution team can rely on.' },
    ],
    faqs: [
      {
        question: 'Can you redesign or extend an existing building?',
        answer:
          'Yes. We regularly plan renovations, remodeling and vertical or horizontal extensions, starting with a site study of the existing structure.',
      },
      {
        question: 'Do you provide 3D exterior views?',
        answer:
          'Yes. Photorealistic 3D elevations and exterior views are part of our architectural design package, so every facade decision is made with confidence.',
      },
    ],
  },
  {
    slug: 'interior-design',
    title: 'Interior Design & Space Planning',
    shortTitle: 'Interior Design',
    tagline: 'Interiors composed around the way you live.',
    description:
      'Our interior design studio creates residential and commercial spaces that feel considered from every angle. We plan layouts, select materials and colors, and style every corner \u2014 combining architectural understanding with a refined sense of comfort. The result is a space that is distinctly yours, executed to a premium standard.',
    image: img('1618221195710-dd6b41faaea6'),
    items: [
      'Residential Interior Design',
      'Commercial Interior Design',
      'Luxury Interior Design',
      'Living Room Design',
      'Bedroom Design',
      'Dining Area Design',
      'Office Interior Design',
      'Space Planning',
      '2D Layouts',
      '3D Interior Visualization',
      'Material & Color Selection',
      'Complete Interior Styling',
    ],
    benefits: [
      { title: 'Concept to Styling', text: 'One team carries your project from mood boards to the final cushion placement.' },
      { title: '3D First', text: 'Walk through your space in 3D before a single wall is touched.' },
      { title: 'Material Mastery', text: 'Curated palettes, textures and finishes selected for lasting elegance.' },
      { title: 'Personalized Design', text: 'No template homes \u2014 every scheme is drawn around your routines and taste.' },
    ],
    faqs: [
      {
        question: 'What does the design process look like?',
        answer:
          'We begin with a consultation and site measurement, then develop layouts and 3D concepts. After your approval of materials and budget, we move into execution and styling.',
      },
      {
        question: 'Can I hire you for design only, without execution?',
        answer:
          'Yes. Our design package can be delivered as drawings and visualizations for your own contractor \u2014 though most clients choose our one-window execution for consistency.',
      },
    ],
  },
  {
    slug: 'furniture',
    title: 'Furniture & Custom Furniture',
    shortTitle: 'Furniture',
    tagline: 'Bespoke pieces, made for your space.',
    description:
      'Furniture is where comfort meets craft. We design and manufacture bespoke sofas, beds, consoles and storage \u2014 tailored to your dimensions, materials and style. From a single statement piece to complete home or office furnishing, every item is built with premium materials and finished by hand.',
    image: img('1538688525198-9b88f6f53126'),
    items: [
      'Custom Furniture',
      'Luxury Sofas',
      'Sectional Sofas',
      'Beds & Headboards',
      'Dining Tables & Chairs',
      'Coffee Tables',
      'Side Tables',
      'TV Consoles',
      'Wardrobes',
      'Dressers',
      'Office Furniture',
      'Executive Furniture',
      'Hotel Furniture',
      'Custom Storage Solutions',
    ],
    benefits: [
      { title: 'Made to Measure', text: 'Every piece is proportioned to your room \u2014 never squeezed from a catalogue.' },
      { title: 'Material Choice', text: 'Choose fabrics, woods, finishes and hardware with our designers.' },
      { title: 'Craft & Durability', text: 'Solid joinery, premium foam and upholstery built for years of use.' },
      { title: 'Suite Coordination', text: 'Sofas, tables, consoles and headboards designed as one coherent collection.' },
    ],
    faqs: [
      {
        question: 'Can you match furniture to my existing interior?',
        answer:
          'Yes. Bring photos or measurements of your space and we will design pieces that complement your existing palette and proportions.',
      },
      {
        question: 'Do you manufacture hotel and office furniture in bulk?',
        answer:
          'Yes. We handle bulk manufacturing schedules for hospitality and corporate projects with consistent quality across every unit.',
      },
    ],
  },
  {
    slug: 'curtains',
    title: 'Curtains, Blinds & Window Treatments',
    shortTitle: 'Curtains & Blinds',
    tagline: 'Dressed windows, perfected light.',
    description:
      'The right window treatment changes the entire mood of a room. From silk-look luxury drapes and sheer layers to motorized blinds, we measure, fabricate and install complete window solutions. Choose from a curated library of fabrics, pleat styles, tracks and blind systems \u2014 all fitted by our own team.',
    image: img('1513161455079-7dc1de15ef3e'),
    items: [
      'Luxury Curtains',
      'Sheer Curtains',
      'Blackout Curtains',
      'Motorized Curtains',
      'Customized Curtains',
      'Double-Layer Curtains',
      'Wave Curtains',
      'Pleated Curtains',
      'Curtain Tracks',
      'Curtain Rods',
      'Roman Blinds',
      'Roller Blinds',
      'Zebra Blinds',
      'Wooden Blinds',
      'Vertical Blinds',
    ],
    benefits: [
      { title: 'Exact Measuring', text: 'Professional on-site measurement for flawlessly fitted drapes and blinds.' },
      { title: 'Premium Fabrics', text: 'A curated fabric library from sheers to theatrical blackout materials.' },
      { title: 'Motorization', text: 'One-touch and remote-controlled curtain systems for modern living.' },
      { title: 'Full Fitting', text: 'Tracks, rods and pelmets supplied and installed by the same team.' },
    ],
    faqs: [
      {
        question: 'How do I choose between curtains and blinds?',
        answer:
          'During our visit we consider your window size, light control needs and interior style \u2014 many rooms benefit from a layered combination of sheers plus blackout or a blind.',
      },
      {
        question: 'Can existing curtains be motorized?',
        answer:
          'In many cases yes. We assess your existing track and retrofit a motorized system where the track condition allows it.',
      },
    ],
  },
  {
    slug: 'flooring',
    title: 'Flooring Solutions',
    shortTitle: 'Flooring',
    tagline: 'The foundation of every fine interior.',
    description:
      'Flooring anchors the entire visual composition of a space. We supply and install wooden, SPC, vinyl, laminate, marble and tile flooring with meticulous subfloor preparation and finishing. Whether you want the warmth of engineered wood or the polish of marble, our installation teams deliver a flawless, long-lasting surface.',
    image: img('1600585154340-be6161a56a0c'),
    items: [
      'Wooden Flooring',
      'SPC Flooring',
      'Vinyl Flooring',
      'Laminate Flooring',
      'Marble Flooring',
      'Tile Flooring',
      'Premium Floor Finishes',
    ],
    benefits: [
      { title: 'Surface Preparation', text: 'Leveling and subfloor treatment before a single plank is laid.' },
      { title: 'Material Range', text: 'From natural marble to high-performance SPC, matched to each room.' },
      { title: 'Precision Fitting', text: 'Managed expansion gaps, transitions and stair nosings.' },
      { title: 'Long-Term Finish', text: 'Installations designed to handle daily wear without losing their look.' },
    ],
    faqs: [
      {
        question: 'Which flooring is best for high-traffic areas?',
        answer:
          'SPC and quality laminate are excellent for high-traffic residential and commercial areas, offering scratch resistance with a premium wood look.',
      },
      {
        question: 'Can flooring be installed over existing tiles?',
        answer:
          'Often yes. We inspect level and adhesion first; where suitable, flexible click-system flooring can be floated over existing tiles.',
      },
    ],
  },
  {
    slug: 'ceiling-lighting',
    title: 'Ceiling & Lighting Solutions',
    shortTitle: 'Ceiling & Lighting',
    tagline: 'Design, lit beautifully.',
    description:
      'Lighting is the jewelry of architecture. We design and install false ceilings, gypsum detail, cove lighting and decorative fixtures that give each room depth, warmth and atmosphere. Layered lighting plans combine ambient, accent and functional light so your interior looks as good at night as it does by day.',
    image: img('1613545325278-f24b0cae1224'),
    items: [
      'False Ceilings',
      'Gypsum Ceilings',
      'Cove Lighting',
      'LED Lighting',
      'Chandeliers',
      'Pendant Lights',
      'Wall Lights',
      'Architectural Lighting',
      'Decorative Lighting',
    ],
    benefits: [
      { title: 'Layered Lighting Plans', text: 'Ambient, task and accent layers composed room by room.' },
      { title: 'Sculpted Ceilings', text: 'Clean gypsum profiles, trays and feature drops built to your design.' },
      { title: 'Fixture Sourcing', text: 'Chandeliers and pendants selected or custom-ordered for your space.' },
      { title: 'Seamless Integration', text: 'Ceiling, wiring and fixtures delivered by one coordinated team.' },
    ],
    faqs: [
      {
        question: 'Will a false ceiling reduce my room height?',
        answer:
          'Perimeter designs and selective tray ceilings add depth while preserving most central height. We propose profiles that suit your room proportions.',
      },
      {
        question: 'Can you design lighting for an existing room?',
        answer:
          'Yes. We audit existing light levels and prepare an updated lighting plan, adding fixtures and controls where wiring allows.',
      },
    ],
  },
  {
    slug: 'wall-finishes',
    title: 'Wall Finishes & Paneling',
    shortTitle: 'Wall Finishes',
    tagline: 'Walls that carry the design.',
    description:
      'Blank walls are missed opportunities. Our wall treatments range from carved wooden paneling and fluted feature walls to premium wallpapers, marble cladding and textured paint finishes. Every treatment is selected to complement your furniture and lighting, turning plain walls into the defining feature of the room.',
    image: img('1615873968403-89e068629265'),
    items: [
      'Decorative Wall Paneling',
      'Wooden Wall Panels',
      'Feature Walls',
      'Wallpaper',
      'Textured Finishes',
      'Decorative Paint Finishes',
      'Marble Wall Finishes',
      'TV Feature Walls',
    ],
    benefits: [
      { title: 'Feature Wall Design', text: 'Statement walls behind beds, sofas and TV units, drawn to plan.' },
      { title: 'Material Variety', text: 'Wood, fluted panels, wallpaper, marble and texture under one supplier.' },
      { title: 'Detail Finishing', text: 'Reveals, trims and shadow gaps executed with millimeter care.' },
      { title: 'Cohesive Palettes', text: 'Wall finishes coordinated with flooring, ceiling and furniture tones.' },
    ],
    faqs: [
      {
        question: 'Is wooden paneling suitable for every room?',
        answer:
          'Wood paneling suits most interiors, with moisture-appropriate materials specified for kitchens, bathrooms and other humid spaces.',
      },
      {
        question: 'How long do wallpaper and textured finishes last?',
        answer:
          'With quality materials and prepared surfaces, premium wallpapers and textured finishes typically last many years with simple care.',
      },
    ],
  },
  {
    slug: 'kitchen-wardrobes',
    title: 'Kitchen & Wardrobe Solutions',
    shortTitle: 'Kitchen & Wardrobes',
    tagline: 'Storage as refined as the rest of your home.',
    description:
      'Kitchens and wardrobes work hardest in any home \u2014 they should also look the best. We design modular kitchens with considered workflows, premium cabinetry and hardware, plus walking-wardrobe and sliding systems tailored to your clothing and storage. Every unit is custom-manufactured to your exact dimensions.',
    image: img('1556909114-f6e7ad7d3136'),
    items: [
      'Modular Kitchens',
      'Custom Kitchen Cabinets',
      'Kitchen Islands',
      'Kitchen Storage',
      'Walk-In Wardrobes',
      'Sliding Wardrobes',
      'Customized Wardrobes',
      'Vanity Units',
      'Storage Solutions',
    ],
    benefits: [
      { title: 'Designed Around You', text: 'Work triangles and hanging heights set to how you actually cook and dress.' },
      { title: 'Premium Hardware', text: 'Soft-close hinges, quality runners and moisture-resistant finishes.' },
      { title: 'Maximum Storage', text: 'Clever corner solutions, pantries and full-height wardrobes.' },
      { title: 'One Supplier', text: 'Cabinets, counters, lighting and fitting handled end to end.' },
    ],
    faqs: [
      {
        question: 'How long does a modular kitchen take?',
        answer:
          'After design approval, manufacturing and installation typically complete within a standard project window \u2014 our team confirms dates with your quotation.',
      },
      {
        question: 'Can wardrobes be fitted into odd-shaped rooms?',
        answer:
          'Yes. Measuring to sloped ceilings, niches and pillars is exactly when custom wardrobes outperform standard units.',
      },
    ],
  },
  {
    slug: 'home-decor',
    title: 'Home D\u00e9cor & Accessories',
    shortTitle: 'Home D\u00e9cor',
    tagline: 'The finishing layer of luxury.',
    description:
      'It is the last five percent that makes a space feel complete. We curate luxury rugs, artwork, mirrors, vases, cushions and accessories that pull your entire palette together. Styled by our designers \u2014 or supplied for your own stylist \u2014 these pieces add warmth, character and a polished final impression.',
    image: img('1586023492125-27b2c045efd7'),
    items: [
      'Luxury Rugs',
      'Carpets',
      'Decorative Mirrors',
      'Wall Art',
      'Paintings',
      'Decorative Vases',
      'Cushions & Throws',
      'Centerpieces',
      'Table Accessories',
      'Artificial Plants',
      'Interior Styling',
    ],
    benefits: [
      { title: 'Curated Selection', text: 'Accessories chosen to match your palette, not picked at random.' },
      { title: 'Rugs & Carpets', text: 'Fine rugs sized and placed to anchor your seating and dining zones.' },
      { title: 'Art & Mirrors', text: 'Statement pieces that add depth and personality to plain walls.' },
      { title: 'Final Styling Service', text: 'Our team can style shelves, tables and consoles on site.' },
    ],
    faqs: [
      {
        question: 'Can you suggest d\u00e9cor for an already-furnished room?',
        answer:
          'Yes. A styling consultation reviews what you own and recommends the rugs, art and accessories that will complete the look.',
      },
      {
        question: 'Do you supply custom-sized rugs?',
        answer:
          'Custom sizing and shapes are available across several of our rug and carpet ranges.',
      },
    ],
  },
  {
    slug: 'commercial',
    title: 'Corporate & Commercial Interiors',
    shortTitle: 'Commercial',
    tagline: 'Workspaces that work beautifully.',
    description:
      'Commercial spaces must perform \u2014 for your team, your customers and your brand. We design and fit out offices, showrooms, reception areas, restaurants and caf\u00e9s, balancing durable materials with a distinctive brand atmosphere. From space planning to final signage and furniture, one team handles the entire fit-out.',
    image: img('1497366216548-37526070297c'),
    items: [
      'Corporate Office Interiors',
      'Retail Showrooms',
      'Commercial Buildings',
      'Reception Areas',
      'Conference Rooms',
      'Restaurants',
      'Caf\u00e9s',
      'Office Furniture',
      'Commercial Furnishing',
    ],
    benefits: [
      { title: 'Brand-Led Design', text: 'Interiors that express your brand identity across every zone.' },
      { title: 'Durable Materials', text: 'Commercial-grade finishes specified for heavy daily use.' },
      { title: 'Phased Fit-Outs', text: 'Works scheduled to minimize disruption to your operations.' },
      { title: 'Complete Scope', text: 'Partitions, floors, ceilings, furniture and d\u00e9cor from one partner.' },
    ],
    faqs: [
      {
        question: 'Can you work within our building\u2019s after-hours rules?',
        answer:
          'Yes. We regularly schedule noisy works outside business hours and coordinate with building management.',
      },
      {
        question: 'Do you handle showroom display fixtures?',
        answer:
          'Yes. Custom display units, cash counters and shelving are part of our commercial fit-out scope.',
      },
    ],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality & Hotel Interiors',
    shortTitle: 'Hospitality',
    tagline: 'Guest experiences, designed in detail.',
    description:
      'Hospitality interiors live or die on the details guests touch, see and remember. We design and furnish hotel rooms, lobbies, restaurants and resort spaces, combining durability standards with a warm, welcoming luxury. Our team can furnish complete room inventory programs to consistent specification.',
    image: img('1578683010236-d716f9a3f461'),
    items: [
      'Hotel Room Design',
      'Hotel Lobby Design',
      'Restaurant Interiors',
      'Resort Interiors',
      'Guest Room Furnishing',
      'Hotel Furniture',
      'Curtains & Window Treatments',
      'Complete Hospitality Solutions',
    ],
    benefits: [
      { title: 'Guest-First Design', text: 'Layouts, lighting and comfort tuned to the guest experience.' },
      { title: 'Repeatable Quality', text: 'Furniture and finishes produced to consistent standards across many rooms.' },
      { title: 'Operational Durability', text: 'Materials selected for housekeeping speed and long-term wear.' },
      { title: 'Turnkey Delivery', text: 'From design boards to installed, styled and ready for guests.' },
    ],
    faqs: [
      {
        question: 'Can you furnish an entire hotel floor?',
        answer:
          'Yes. We plan phased room furnishing programs \u2014 design, manufacturing, delivery and installation \u2014 coordinated around your occupancy.',
      },
      {
        question: 'Do you design restaurant and caf\u00e9 interiors?',
        answer:
          'Yes. Dining spaces, caf\u00e9s and resort venues are a core part of our hospitality portfolio.',
      },
    ],
  },
  {
    slug: 'turnkey',
    title: 'Turnkey Interior Projects',
    shortTitle: 'Turnkey',
    tagline: 'Hand us an empty space. We hand back a finished home.',
    description:
      'Our turnkey service is the one-window promise in its purest form. You share your vision; we manage design, approvals, procurement, manufacturing, installation and handover. A single project manager coordinates every trade, every material and every deadline \u2014 so you never chase vendors, and the finished space is exactly what was promised.',
    image: img('1600607687939-ce8a6c25118c'),
    items: [
      'Complete Interior Planning',
      'Architectural Coordination',
      'Material Procurement',
      'Custom Furniture',
      'Flooring & Ceiling',
      'Lighting',
      'Curtains & Blinds',
      'D\u00e9cor & Accessories',
      'Installation',
      'Final Project Handover',
    ],
    benefits: [
      { title: 'One Contract', text: 'Design, material and execution under a single scope and timeline.' },
      { title: 'One Project Manager', text: 'A single point of contact from kickoff to key handover.' },
      { title: 'Budget Discipline', text: 'Approved costs tracked against procurement at every stage.' },
      { title: 'Quality Control', text: 'Scheduled site inspections at every milestone before sign-off.' },
    ],
    faqs: [
      {
        question: 'What do I need to start a turnkey project?',
        answer:
          'A site (or floor plan), your budget range and a first conversation about how you want to use the space. We handle everything after that.',
      },
      {
        question: 'How is a turnkey project priced?',
        answer:
          'After the design is approved we present a detailed, itemized proposal covering each scope, material and milestone \u2014 so you approve the full picture before execution begins.',
      },
    ],
  },
]

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug)
}

export const homeServiceSlugs = [
  'architecture',
  'interior-design',
  'furniture',
  'curtains',
  'flooring',
  'ceiling-lighting',
  'wall-finishes',
  'kitchen-wardrobes',
  'home-decor',
  'commercial',
  'hospitality',
  'turnkey',
]
