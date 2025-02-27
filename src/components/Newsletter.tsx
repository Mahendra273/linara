'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setEmail('')
    }, 500)
  }
  
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to receive updates on new arrivals, special offers, and exclusive content.
            </p>
            
            {isSubmitted ? (
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-xl font-medium">Thank you for subscribing!</p>
                <p className="mt-2">You'll be the first to know about our latest collections and offers.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-3 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-white text-primary px-6 py-3 rounded-sm font-medium transition-transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}