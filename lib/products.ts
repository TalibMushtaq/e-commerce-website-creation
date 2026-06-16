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
    image: '/products/lavender-soap.png',
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
    name: 'Rose Facial Serum',
    category: 'body',
    type: 'liquid',
    price: 34.99,
    image: '/products/rose-facial-serum.png',
    description: 'Luxury anti-aging facial serum with rose hip oil and vitamin E.',
    scent: 'Rose',
    weight: '1 oz',
    ingredients: [
      'Rose hip oil',
      'Vitamin E',
      'Jojoba oil',
      'Rose extract',
      'Essential oils',
    ],
    benefits: ['Anti-aging', 'Hydrating', 'Brightening'],
  },
  {
    id: '3',
    name: 'Gold Clay Facial Mask',
    category: 'body',
    type: 'paste',
    price: 28.99,
    image: '/products/gold-clay-mask.png',
    description: 'Premium gold-infused clay mask for deep cleansing and radiance.',
    weight: '2 oz',
    ingredients: [
      'Gold powder',
      'French clay',
      'Honey',
      'Aloe vera',
      'Essential oils',
    ],
    benefits: ['Cleansing', 'Illuminating', 'Luxurious'],
  },
  {
    id: '4',
    name: 'Hydration Cream',
    category: 'body',
    type: 'cream',
    price: 39.99,
    image: '/products/hydration-cream.png',
    description: 'Intensive hydration cream with hyaluronic acid and botanical extracts.',
    weight: '1.7 oz',
    ingredients: [
      'Hyaluronic acid',
      'Shea butter',
      'Chamomile extract',
      'Aloe vera',
      'Vitamin C',
    ],
    benefits: ['Intense hydration', 'Anti-wrinkle', 'Soothing'],
  },
  {
    id: '5',
    name: 'Eye Contour Gel',
    category: 'body',
    type: 'gel',
    price: 32.99,
    image: '/products/eye-contour-gel.png',
    description: 'Lightweight gel for brightening and de-puffing the delicate eye area.',
    weight: '0.5 oz',
    ingredients: [
      'Caffeine',
      'Vitamin K',
      'Peptides',
      'Arnica extract',
      'Rose water',
    ],
    benefits: ['De-puffing', 'Brightening', 'Anti-aging'],
  },
  {
    id: '6',
    name: 'Luminous Body Oil',
    category: 'body',
    type: 'oil',
    price: 29.99,
    image: '/products/luminous-body-oil.png',
    description: 'Luxurious multi-purpose body oil with illuminating particles.',
    weight: '3 oz',
    ingredients: [
      'Argan oil',
      'Jojoba oil',
      'Mica particles',
      'Vanilla extract',
      'Essential oils',
    ],
    benefits: ['Moisturizing', 'Illuminating', 'Nourishing'],
  },
  {
    id: '7',
    name: 'Eucalyptus Detox Soap',
    category: 'body',
    type: 'bar',
    price: 9.99,
    image: '/products/eucalyptus-soap.png',
    description: 'Invigorating eucalyptus and charcoal soap for deep cleansing.',
    scent: 'Eucalyptus',
    weight: '4.5 oz',
    ingredients: [
      'Activated charcoal',
      'Eucalyptus oil',
      'Tea tree oil',
      'Coconut oil',
      'Shea butter',
    ],
    benefits: ['Detoxifying', 'Cleansing', 'Energizing'],
  },
  {
    id: '8',
    name: 'Activated Charcoal Soap',
    category: 'body',
    type: 'bar',
    price: 8.99,
    image: '/products/charcoal-soap.png',
    description: 'Deep cleansing charcoal soap perfect for oily and acne-prone skin.',
    weight: '4.5 oz',
    ingredients: [
      'Activated charcoal',
      'Tea tree oil',
      'Jojoba oil',
      'Coconut oil',
      'Aloe vera',
    ],
    benefits: ['Purifying', 'Deep-cleansing', 'Balancing'],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: 'body' | 'laundry'): Product[] {
  return products.filter((product) => product.category === category)
}
