import Link from 'next/link'
import Image from 'next/image'
import { Collection } from '@/types/shopify'

interface CollectionGridProps {
  collections: Collection[]
}

export default function CollectionGrid({ collections }: CollectionGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map((collection) => (
        <Link 
          key={collection.id} 
          href={`/collections/${collection.handle}`}
          className="group"
        >
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
              <p className="text-sm text-center max-w-xs px-4">{collection.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}