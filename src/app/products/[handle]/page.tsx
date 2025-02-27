import { getProduct, getRelatedProducts } from '@/lib/shopify'
import ProductDetails from '@/components/ProductDetails'
import RelatedProducts from '@/components/RelatedProducts'
import { notFound } from 'next/navigation'

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const { handle } = params
  const product = await getProduct(handle)
  
  if (!product) {
    notFound()
  }
  
  const relatedProducts = await getRelatedProducts(product.id)
  
  return (
    <div className="container-custom py-12 animate-fade-in">
      <ProductDetails product={product} />
      <RelatedProducts products={relatedProducts} />
    </div>
  )
}