'use client'

import Image from 'next/image'
import { Trash2, Plus, Minus } from 'lucide-react'
import { CartItem as CartItemType } from '@/types/shopify'

interface CartItemProps {
  item: CartItemType
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
}

export default function CartItem({ item, removeItem, updateQuantity }: CartItemProps) {
  return (
    <div className="flex items-start border-b border-gray-200 py-6 px-4 last:border-b-0">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="font-medium">{item.title}</h3>
        
        {item.size && (
          <p className="text-sm text-gray-500">Size: {item.size}</p>
        )}
        
        {item.color && (
          <p className="text-sm text-gray-500">Color: {item.color}</p>
        )}
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button 
              className="px-2 py-1"
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-2 py-1 min-w-[30px] text-center">{item.quantity}</span>
            <button 
              className="px-2 py-1"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
            <button 
              className="ml-4 text-gray-500 hover:text-red-500"
              onClick={() => removeItem(item.id)}
              aria-label="Remove item"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}