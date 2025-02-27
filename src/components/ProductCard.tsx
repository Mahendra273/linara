'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Product } from '@/types/shopify'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      variantId: product.variants[0].id
    })
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/products/${product.handle}`}>
        <div 
          className="relative overflow-hidden rounded-lg mb-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="aspect-[3/4] relative bg-gray-100">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover"
            />
            
            {product.images.length > 1 && (
              <div 
                className={`absolute inset-0 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={product.images[1]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
          
          {/* Quick actions */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 flex justify-between transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}>
            <button 
              onClick={handleAddToCart}
              className="bg-primary text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            
            <button 
              className="bg-white text-primary p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>
          
          {/* Sale tag */}
          {product.compareAtPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              SALE
            </div>
          )}
        </div>
        
        <h3 className="font-medium mb-1">{product.title}</h3>
        
        <div className="flex items-center">
          <span className="font-semibold">${product.price}</span>
          {product.compareAtPrice && (
            <span className="ml-2 text-gray-500 line-through text-sm">${product.compareAtPrice}</span>
          )}
        </div>
      </Link>
    </motion.div>
  )
}