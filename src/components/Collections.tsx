'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const collections = [
  {
    id: 1,
    title: 'Summer Essentials',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/collections/summer'
  },
  {
    id: 2,
    title: 'Minimalist Collection',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80',
    link: '/collections/minimalist'
  },
  {
    id: 3,
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    link: '/collections/accessories'
  }
]

export default function Collections() {
  return (
    <section className="py-16 bg-accent">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-2">Shop by Collection</h2>
        <p className="text-gray-600 mb-8">Curated collections for every style</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20" />
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold mb-4">{collection.title}</h3>
                <Link 
                  href={collection.link}
                  className="bg-white text-primary px-6 py-2 rounded-sm font-medium transition-transform duration-300 transform hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}