import { getProducts } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'

export default async function ProductsPage() {
  const products = await getProducts()
  
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <ProductGrid products={products} />
    </div>
  )
}