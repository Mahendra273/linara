import { getCollections } from '@/lib/shopify'
import CollectionGrid from '@/components/CollectionGrid'

export default async function CollectionsPage() {
  const collections = await getCollections()
  
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Collections</h1>
      <CollectionGrid collections={collections} />
    </div>
  )
}