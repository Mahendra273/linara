import { Product, Collection } from '@/types/shopify'

// Mock data for development
const mockProducts: Product[] = [
  {
    id: 'prod_1',
    title: 'Minimalist Cotton Shirt',
    handle: 'minimalist-cotton-shirt',
    description: 'A timeless cotton shirt with a relaxed fit, perfect for everyday wear.',
    price: 49.99,
    compareAtPrice: 69.99,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    variants: [
      { id: 'var_1', title: 'Default', price: 49.99 }
    ]
  },
  {
    id: 'prod_2',
    title: 'Linen Blend Dress',
    handle: 'linen-blend-dress',
    description: 'A lightweight linen blend dress, perfect for warm weather.',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
    ],
    variants: [
      { id: 'var_2', title: 'Default', price: 79.99 }
    ]
  },
  {
    id: 'prod_3',
    title: 'Wool Blend Coat',
    handle: 'wool-blend-coat',
    description: 'A warm wool blend coat with a modern silhouette.',
    price: 149.99,
    compareAtPrice: 199.99,
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    variants: [
      { id: 'var_3', title: 'Default', price: 149.99 }
    ]
  },
  {
    id: 'prod_4',
    title: 'Leather Crossbody Bag',
    handle: 'leather-crossbody-bag',
    description: 'A versatile leather crossbody bag with multiple compartments.',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    ],
    variants: [
      { id: 'var_4', title: 'Default', price: 89.99 }
    ]
  }
]

const mockCollections: Collection[] = [
  {
    id: 'col_1',
    title: 'Summer Essentials',
    handle: 'summer',
    description: 'Lightweight pieces for warm weather',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    products: mockProducts.slice(0, 2)
  },
  {
    id: 'col_2',
    title: 'Minimalist Collection',
    handle: 'minimalist',
    description: 'Timeless pieces with clean lines',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80',
    products: [mockProducts[0], mockProducts[2]]
  },
  {
    id: 'col_3',
    title: 'Accessories',
    handle: 'accessories',
    description: 'Complete your look with our accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    products: [mockProducts[3]]
  }
]

// In a real application, these functions would make API calls to Shopify
export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockProducts
}

export async function getProduct(handle: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockProducts.find(product => product.handle === handle) || null
}

export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockProducts.slice(0, 4)
}

export async function getRelatedProducts(productId: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockProducts.filter(product => product.id !== productId).slice(0, 4)
}

export async function getCollections(): Promise<Collection[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockCollections
}

export async function getCollection(handle: string): Promise<Collection | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockCollections.find(collection => collection.handle === handle) || null
}