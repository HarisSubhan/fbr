const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export type ProjectCategory =
  | 'Residential'
  | 'Villa'
  | 'Apartment'
  | 'Bedroom'
  | 'Living Room'
  | 'Kitchen'
  | 'Corporate'
  | 'Hospitality'
  | 'Architecture'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  images: string[]
  scope: string[]
}

/**
 * Demo portfolio entries. Replace titles, images and descriptions with
 * actual RAI INTERIORS project documentation when available.
 */
export const projects: Project[] = [
  {
    id: 'modern-villa-interior',
    title: 'Modern Villa Interior',
    category: 'Villa',
    description:
      'A demo visualization of a premium villa living space — layered lighting, custom sectionals and a full-height feature wall in warm wood tones.',
    images: [img('1600585154340-be6161a56a0c'), img('1600210492486-724fe5c67fb0')],
    scope: ['Interior Design', 'Custom Furniture', 'Lighting', 'Flooring'],
  },
  {
    id: 'luxury-living-room',
    title: 'Luxury Living Room',
    category: 'Living Room',
    description:
      'A demo living room concept with marble accents, gold detailing and tailored curtains framing generous garden views.',
    images: [img('1613545325278-f24b0cae1224'), img('1586023492125-27b2c045efd7')],
    scope: ['3D Visualization', 'Curtains', 'Décor & Styling'],
  },
  {
    id: 'contemporary-apartment',
    title: 'Contemporary Apartment',
    category: 'Apartment',
    description:
      'A demo compact apartment scheme proving that modest square footage can still deliver premium materials and calm order.',
    images: [img('1522708323590-d24dbb6b0267'), img('1560448204-e02f11c3d0e2')],
    scope: ['Space Planning', 'Furniture', 'Window Treatments'],
  },
  {
    id: 'serene-master-bedroom',
    title: 'Serene Master Bedroom',
    category: 'Bedroom',
    description:
      'A demo bedroom design with upholstered headboard, soft cove lighting and a layered neutral palette for restful evenings.',
    images: [img('1616594039964-ae9021a400a0'), img('1615874959474-d609969a20ed')],
    scope: ['Bedroom Design', 'Furniture', 'Ceiling & Lighting'],
  },
  {
    id: 'executive-modular-kitchen',
    title: 'Executive Modular Kitchen',
    category: 'Kitchen',
    description:
      'A demo modular kitchen with an island focal point, handleless cabinetry and premium appliance integration.',
    images: [img('1556909114-f6e7ad7d3136'), img('1556912173-3bb406ef7e77')],
    scope: ['Kitchen Design', 'Cabinetry', 'Counter & Storage'],
  },
  {
    id: 'corporate-workspace',
    title: 'Corporate Workspace',
    category: 'Corporate',
    description:
      'A demo office interior balancing acoustic comfort, brand colors and ergonomic furniture across open and private zones.',
    images: [img('1497366216548-37526070297c'), img('1524758631624-e2822e304c36')],
    scope: ['Office Interiors', 'Furniture', 'Partitions'],
  },
  {
    id: 'hotel-guest-suite',
    title: 'Hotel Guest Suite',
    category: 'Hospitality',
    description:
      'A demo hospitality suite with repeatable furniture specification, blackout drapery and layered bedside lighting.',
    images: [img('1578683010236-d716f9a3f461'), img('1590490360182-c33d57733427')],
    scope: ['Hospitality Interiors', 'Furnishing', 'Curtains'],
  },
  {
    id: 'modern-villa-architecture',
    title: 'Modern Villa Architecture',
    category: 'Architecture',
    description:
      'A demo exterior visualization exploring massing, material contrast and landscape integration for a private residence.',
    images: [img('1600596542815-ffad4c1539a9'), img('1512917774080-9991f1c4c750')],
    scope: ['Architecture', 'Elevation Design', '3D Visualization'],
  },
  {
    id: 'residential-lounge',
    title: 'Residential Lounge',
    category: 'Residential',
    description:
      'A demo family lounge combining durable flooring, built-in media storage and a warm neutral material palette.',
    images: [img('1600607687939-ce8a6c25118c'), img('1493809842364-78817add7ffb')],
    scope: ['Interior Design', 'Flooring', 'Storage'],
  },
  {
    id: 'boutique-lobby',
    title: 'Boutique Lobby Concept',
    category: 'Hospitality',
    description:
      'A demo boutique hotel lobby — sculptural reception desk, statement chandelier and rich layered textures.',
    images: [img('1540518614846-7eded433c457'), img('1598300042247-d088f8ab3a91')],
    scope: ['Lobby Design', 'Lighting', 'Furniture'],
  },
  {
    id: 'villa-facade',
    title: 'Villa Facade Study',
    category: 'Villa',
    description:
      'A demo elevation study pairing stone, render and timber for a contemporary yet timeless residential facade.',
    images: [img('1568605114967-8130f3a36994'), img('1431540015161-0bf868a2d407')],
    scope: ['Architecture', 'Exterior Design'],
  },
  {
    id: 'open-plan-living',
    title: 'Open-Plan Living',
    category: 'Living Room',
    description:
      'A demo open-plan scheme zoning dining, lounge and study areas through ceiling detail, rugs and lighting rather than walls.',
    images: [img('1519710164239-da123dc03ef4'), img('1616486338812-3dadae4b4ace')],
    scope: ['Space Planning', 'Ceiling & Lighting', 'Furniture'],
  },
]

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Residential',
  'Villa',
  'Apartment',
  'Bedroom',
  'Living Room',
  'Kitchen',
  'Corporate',
  'Hospitality',
  'Architecture',
]
