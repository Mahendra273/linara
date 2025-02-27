export interface Product {
  id: string
  title: string
  handle: string
  description?: string
  price: number
  compareAtPrice?: number
  images: string[]
  variants: ProductVariant[]
}

export interface ProductVariant {
  id: string
  title: string
  price: number
}

export interface Collection {
  id: string
  title: string
  handle: string
  description?: string
  image: string
  products: Product[]
}

export interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
  variantId: string
  size?: string
  color?: string
}