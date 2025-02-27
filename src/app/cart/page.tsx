'use client'

import { useCart } from '@/context/CartContext'
import CartItem from '@/components/CartItem'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()
  
  if (!cart.length) {
    return (
      <div className="container-custom py-16 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-gray-400" />
        <h2 className="mt-4 text-2xl font-semibold">Your cart is empty</h2>
        <p className="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products" className="btn btn-primary mt-8">
          Continue Shopping
        </Link>
      </div>
    )
  }
  
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-sm">
            {cart.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                removeItem={removeFromCart} 
                updateQuantity={updateQuantity} 
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="btn btn-primary w-full">
              Proceed to Checkout
            </button>
            
            <Link href="/products" className="block text-center mt-4 text-gray-600 hover:text-gray-900">
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}