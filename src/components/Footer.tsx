import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LINARA</h3>
            <p className="text-gray-300 mb-4">
            Luxury reimagined. Timeless fashion, premium craftsmanship, and a lifestyle of sophistication—designed for the modern man.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/linara.in" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-300 hover:text-white">All Products</Link></li>
              <li><Link href="/collections" className="text-gray-300 hover:text-white">Collections</Link></li>
              <li><Link href="/products/new-arrivals" className="text-gray-300 hover:text-white">New Arrivals</Link></li>
              <li><Link href="/products/sale" className="text-gray-300 hover:text-white">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              {/* <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li> */}
              {/* <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li> */}
              {/* <li><Link href="/sustainability" className="text-gray-300 hover:text-white">Sustainability</Link></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="text-gray-300 hover:text-white">Shipping & Returns</Link></li>
              {/* <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li> */}
              {/* <li><Link href="/size-guide" className="text-gray-300 hover:text-white">Size Guide</Link></li> */}
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Linara. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                {/* <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}