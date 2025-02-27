import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <div className="relative h-[50vh] w-full">
        <Image 
          src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Linara Fashion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Linara</h1>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg mb-8">
            Founded in 2020, Linara was born from a passion for timeless design and sustainable fashion. 
            Our mission is to create clothing that transcends trends, focusing on quality materials and 
            ethical production practices.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-accent p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p>We're committed to reducing our environmental impact through responsible sourcing and production.</p>
            </div>
            <div className="bg-accent p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p>Each piece is crafted with attention to detail, ensuring longevity and timeless style.</p>
            </div>
            <div className="bg-accent p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p>We believe in honest pricing and being open about our manufacturing processes.</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-lg mb-12">
            Linara is powered by a diverse team of designers, craftspeople, and fashion enthusiasts who share 
            a common vision: to create beautiful, functional clothing that stands the test of time.
          </p>
        </div>
      </div>
    </div>
  )
}