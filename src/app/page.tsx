import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import Collections from '@/components/Collections'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <FeaturedProducts />
      <Collections />
      <Newsletter />
    </div>
  )
}