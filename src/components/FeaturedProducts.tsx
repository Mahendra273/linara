import { getFeaturedProducts } from '@/lib/shopify'
import ProductCard from './ProductCard'

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts()
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
        <p className="text-gray-600 mb-8">Discover our most popular items</p>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}