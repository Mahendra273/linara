import { getCollection } from '@/lib/shopify'
import ProductGrid from '@/components/ProductGrid'
import { notFound } from 'next/navigation'

export default async function CollectionPage({ params }: { params: { handle: string } }) {
  const { handle } = params
  const collection = await getCollection(handle)
  
  if (!collection) {
    notFound()
  }
  
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-4">{collection.title}</h1>
      {collection.description && (
        <p className="text-gray-600 mb-8">{collection.description}</p>
      )}
      <ProductGrid products={collection.products} />
    </div>
  )
}