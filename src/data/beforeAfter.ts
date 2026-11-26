const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

/** Applies a desaturated, dimmed treatment so the "before" image reads as the pre-renovation state. */
const beforeImg = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70&sat=-90&bri=-15`

export type TransformationCategory =
  | 'Living Room'
  | 'Bedroom'
  | 'Kitchen'
  | 'Office'
  | 'Furniture'
  | 'Curtains & Windows'
  | 'Flooring'
  | 'Ceiling'
  | 'Architecture'
  | 'Complete Home'

export interface Transformation {
  id: string
  title: string
  category: TransformationCategory
  description: string
  before: string
  after: string
}

/**
 * Demo transformations. Images are representative placeholders — replace
 * `before` and `after` URLs here with actual project photography when
 * available. No component changes are needed.
 */
export const transformations: Transformation[] = [
  {
    id: 'living-room',
    title: 'Living Room Transformation',
    category: 'Living Room',
    description: 'Demo comparison: an ordinary lounge redesigned with layered lighting, tailored furniture and warm textures.',
    before: beforeImg('1616486338812-3dadae4b4ace'),
    after: img('1616486338812-3dadae4b4ace'),
  },
  {
    id: 'bedroom',
    title: 'Bedroom Transformation',
    category: 'Bedroom',
    description: 'Demo comparison: a plain bedroom elevated with an upholstered headboard, cove lighting and premium bedding layers.',
    before: beforeImg('1616594039964-ae9021a400a0'),
    after: img('1616594039964-ae9021a400a0'),
  },
  {
    id: 'kitchen',
    title: 'Kitchen Transformation',
    category: 'Kitchen',
    description: 'Demo comparison: a basic kitchen replaced with a modular layout, premium cabinetry and statement lighting.',
    before: beforeImg('1556909212-d5b604d0c90d'),
    after: img('1556909114-f6e7ad7d3136'),
  },
  {
    id: 'office',
    title: 'Office Transformation',
    category: 'Office',
    description: 'Demo comparison: a dated workspace transformed into a branded, ergonomic corporate environment.',
    before: beforeImg('1552664730-d307ca884978'),
    after: img('1497366216548-37526070297c'),
  },
  {
    id: 'furniture',
    title: 'Furniture Transformation',
    category: 'Furniture',
    description: 'Demo comparison: standard seating replaced with bespoke, made-to-measure upholstered furniture.',
    before: beforeImg('1540574163026-643ea20ade25'),
    after: img('1538688525198-9b88f6f53126'),
  },
  {
    id: 'curtains',
    title: 'Curtain & Window Transformation',
    category: 'Curtains & Windows',
    description: 'Demo comparison: bare glazing dressed with double-layer sheers and blackout drapes, floor to ceiling.',
    before: beforeImg('1533779283484-8ad4940aa3a8'),
    after: img('1513161455079-7dc1de15ef3e'),
  },
  {
    id: 'flooring',
    title: 'Flooring Transformation',
    category: 'Flooring',
    description: 'Demo comparison: worn flooring renewed with premium wood-look planks and refined transitions.',
    before: beforeImg('1600585154526-990dced4db0d'),
    after: img('1600585154340-be6161a56a0c'),
  },
  {
    id: 'ceiling',
    title: 'Ceiling Transformation',
    category: 'Ceiling',
    description: 'Demo comparison: a flat ceiling given tray gypsum detail, cove lighting and pendant focus.',
    before: beforeImg('1600210491892-03d54c0aaf87'),
    after: img('1600210492486-724fe5c67fb0'),
  },
  {
    id: 'architecture',
    title: 'Architectural Transformation',
    category: 'Architecture',
    description: 'Demo comparison: a home elevation reworked with new massing, material contrast and landscape balance.',
    before: beforeImg('1568605114967-8130f3a36994'),
    after: img('1600596542815-ffad4c1539a9'),
  },
  {
    id: 'complete-home',
    title: 'Complete Home Transformation',
    category: 'Complete Home',
    description: 'Demo comparison: a full turnkey journey — an empty shell delivered as a finished, styled residence.',
    before: beforeImg('1560448204-e02f11c3d0e2'),
    after: img('1522708323590-d24dbb6b0267'),
  },
]

export const transformationCategories: ('All' | TransformationCategory)[] = [
  'All',
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Office',
  'Furniture',
  'Curtains & Windows',
  'Flooring',
  'Ceiling',
  'Architecture',
  'Complete Home',
]
