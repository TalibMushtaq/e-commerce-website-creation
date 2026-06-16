'use client'

import { CartProvider } from '@/lib/cart-context'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { products } from '@/lib/products'
import ProductCard from '@/components/product-card'
import Link from 'next/link'
import { ShoppingCart, Leaf, Heart } from 'lucide-react'

function HomeContent() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background py-20 px-4 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 text-balance">
            Pure Luxury, Green Conscience
          </h1>
          <p className="text-xl text-foreground/60 mb-8 max-w-2xl mx-auto text-pretty">
            Handcrafted soaps made with certified organic ingredients. Every bar is a commitment to your skin and our planet.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/shop"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                100% Natural
              </h3>
              <p className="text-foreground/60">
                Certified organic ingredients, no synthetic chemicals or harmful additives.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                Cruelty-Free
              </h3>
              <p className="text-foreground/60">
                Never tested on animals. Certified by international animal welfare standards.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                Eco-Packaging
              </h3>
              <p className="text-foreground/60">
                Recyclable, compostable materials. Minimal waste from production to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Customer Favorites
            </h2>
            <p className="text-foreground/60 text-lg">
              Discover our most-loved collections
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition font-semibold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/40 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-foreground mb-12">
            Loved by Our Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                text: 'These soaps changed my skincare routine completely. My sensitive skin has never felt better!',
                rating: 5,
              },
              {
                name: 'James T.',
                text: 'Amazing quality and I love knowing I&apos;m supporting sustainable practices with every purchase.',
                rating: 5,
              },
              {
                name: 'Elena R.',
                text: 'The lather is incredible and they last so long. Worth every penny for my family.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">{testimonial.text}</p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Join Our Green Community
          </h2>
          <p className="mb-6 text-primary/90">
            Get exclusive offers, tips for sustainable living, and updates on new products.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for subscribing!')
            }}
            className="flex gap-2 flex-col sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-foreground/40"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function Page() {
  return (
    <CartProvider>
      <HomeContent />
    </CartProvider>
  )
}
