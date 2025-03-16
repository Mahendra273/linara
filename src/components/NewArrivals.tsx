import React from 'react'
import ProductCard from './ProductCard'
import { getNewArrivals } from '@/lib/shopify'


export default async function NewArrivals() {
  const products = await getNewArrivals()
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
        <p className="text-gray-600 mb-8">Your new favorites are here. Check them out!</p>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}