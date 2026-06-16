export interface Product {
  id: string
  name: string
  category: 'body' | 'laundry'
  type: 'bar' | 'liquid' | 'powder' | 'wash'
  price: number
  image: string
  description: string
  scent?: string
  weight?: string
  ingredients: string[]
  benefits: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Lavender Dream Body Soap',
    category: 'body',
    type: 'bar',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1600840677537-60debdfb69b6?w=500&h=500&fit=crop',
    description: 'A luxurious lavender-scented body soap bar made with organic shea butter and essential oils.',
    scent: 'Lavender',
    weight: '4.5 oz',
    ingredients: [
      'Organic shea butter',
      'Lavender essential oil',
      'Coconut oil',
      'Olive oil',
      'Sea salt',
    ],
    benefits: ['Moisturizing', 'Calming', 'Anti-inflammatory'],
  },
  {
    id: '2',
    name: 'Citrus Burst Body Wash',
    category: 'body',
    type: 'wash',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    description: 'Energizing liquid body wash with fresh citrus notes and plant-based cleansers.',
    scent: 'Citrus',
    weight: '8 oz',
    ingredients: [
      'Organic coconut oil',
      'Orange essential oil',
      'Lemon essential oil',
      'Grapefruit essential oil',
      'Plant-based glycerin',
    ],
    benefits: ['Invigorating', 'Energizing', 'Refreshing'],
  },
  {
    id: '3',
    name: 'Unscented Pure Bar',
    category: 'body',
    type: 'bar',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1555573479-0904b309ca59?w=500&h=500&fit=crop',
    description: 'Gentle, fragrance-free soap perfect for sensitive skin. Made with only essential ingredients.',
    weight: '4.5 oz',
    ingredients: [
      'Organic coconut oil',
      'Organic palm oil',
      'Shea butter',
      'Water',
      'Sodium hydroxide',
    ],
    benefits: ['Hypoallergenic', 'Gentle', 'Suitable for sensitive skin'],
  },
  {
    id: '4',
    name: 'Fresh Garden Body Soap',
    category: 'body',
    type: 'bar',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop',
    description: 'A blend of herbal scents inspired by a morning garden walk. Skin-loving and sustainable.',
    scent: 'Herbal Garden',
    weight: '4.5 oz',
    ingredients: [
      'Organic rosemary oil',
      'Organic mint oil',
      'Olive oil',
      'Shea butter',
      'Calendula extract',
    ],
    benefits: ['Refreshing', 'Soothing', 'Skin-nourishing'],
  },
  {
    id: '5',
    name: 'Eco Laundry Powder',
    category: 'laundry',
    type: 'powder',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1582213918032-1cb4a4d26b37?w=500&h=500&fit=crop',
    description: 'Powerful yet gentle laundry powder that works in all water temperatures.',
    weight: '32 oz',
    ingredients: [
      'Plant-based enzymes',
      'Soda ash',
      'Borax',
      'Essential oils',
      'Organic castile soap',
    ],
    benefits: ['Biodegradable', 'Septic-safe', 'Fresh scent'],
  },
  {
    id: '6',
    name: 'Natural Laundry Liquid',
    category: 'laundry',
    type: 'liquid',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1563828033-1674a64e20fd?w=500&h=500&fit=crop',
    description: 'Concentrated liquid laundry soap that cleans effectively without harsh chemicals.',
    weight: '16 oz',
    ingredients: [
      'Saponified oils',
      'Essential oil blend',
      'Water',
      'Vegetable glycerin',
      'Natural preservatives',
    ],
    benefits: ['Eco-friendly', 'Concentrated formula', 'Versatile'],
  },
  {
    id: '7',
    name: 'Delicate Wash Bundle',
    category: 'laundry',
    type: 'liquid',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1523293182386-7651a8e7d157?w=500&h=500&fit=crop',
    description: 'Special formula for delicate fabrics. Two 8oz bottles included.',
    weight: '16 oz total',
    ingredients: [
      'Gentle plant-based cleansers',
      'Silk proteins',
      'Water',
      'Natural lavender scent',
    ],
    benefits: ['Gentle on fabrics', 'Effective cleaning', 'Long-lasting scent'],
  },
  {
    id: '8',
    name: 'Premium Soap Variety Pack',
    category: 'body',
    type: 'bar',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1600840677537-60debdfb69b6?w=500&h=500&fit=crop',
    description: 'Experience our bestselling soaps. Pack includes 4 different scents, 4.5 oz each.',
    ingredients: [
      'Organic oils',
      'Essential oils',
      'Shea butter',
      'Natural colorants',
      'Sea salt',
    ],
    benefits: ['Variety pack', 'Great for gifting', 'Sample different scents'],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: 'body' | 'laundry'): Product[] {
  return products.filter((product) => product.category === category)
}
