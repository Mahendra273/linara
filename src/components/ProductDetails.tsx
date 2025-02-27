'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingBag, Heart, Share2, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Product } from '@/types/shopify'

interface ProductDetailsProps {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addToCart } = useCart()
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
      variantId: product.variants[0].id,
      size: selectedSize,
      color: selectedColor
    })
  }
  
  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Product Images */}
      <div className="lg:w-1/2">
        <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.images[activeImage]}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                activeImage === index ? 'border-primary' : 'border-transparent'
              }`}
              onClick={() => setActiveImage(index)}
            >
              <Image
                src={image}
                alt={`${product.title} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Product Info */}
      <motion.div 
        className="lg:w-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">4.0 (24 reviews)</span>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.compareAtPrice && (
              <span className="ml-3 text-gray-500 line-through">${product.compareAtPrice}</span>
            )}
            {product.compareAtPrice && (
              <span className="ml-3 bg-red-100 text-red-700 px-2 py-1 text-xs font-semibold rounded">
                {Math.round((1 - product.price / product.compareAtPrice) * 100)}% OFF
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">Tax included. Shipping calculated at checkout.</p>
        </div>
        
        {product.description && (
          <div className="mb-6">
            <p className="text-gray-700">{product.description}</p>
          </div>
        )}
        
        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Color</h3>
          <div className="flex space-x-2">
            {['Black', 'White', 'Navy', 'Beige'].map((color) => (
              <button
                key={color}
                className={`h-10 w-10 rounded-full border ${
                  selectedColor === color 
                    ? 'ring-2 ring-primary ring-offset-2' 
                    : 'border-gray-300'
                }`}
                style={{ 
                  backgroundColor: color.toLowerCase(),
                  border: color.toLowerCase() === 'white' ? '1px solid #e5e7eb' : 'none'
                }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color} color`}
              />
            ))}
          </div>
        </div>
        
        {/* Size Selection */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Size</h3>
            <button className="text-sm text-gray-600 underline">Size Guide</button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                className={`py-2 border rounded-md transition-colors ${
                  selectedSize === size 
                    ? 'bg-primary text-white border-primary' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Quantity */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Quantity</h3>
          <div className="flex border border-gray-300 rounded-md w-32">
            <button 
              className="px-3 py-2 border-r border-gray-300"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-full text-center focus:outline-none"
            />
            <button 
              className="px-3 py-2 border-l border-gray-300"
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <button 
            className="btn btn-primary flex-grow flex items-center justify-center"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
          
          <button className="btn btn-secondary">
            <Heart className="h-5 w-5 mr-2" />
            Wishlist
          </button>
          
          <button className="btn btn-secondary sm:w-auto">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
        
        {/* Product Meta */}
        <div className="border-t border-gray-200 pt-6 space-y-4 text-sm">
          <div className="flex">
            <span className="text-gray-500 w-24">SKU:</span>
            <span>{product.id.substring(product.id.length - 8)}</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 w-24">Category:</span>
            <span>Women's Clothing</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 w-24">Tags:</span>
            <span>Fashion, Summer, New Arrival</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}