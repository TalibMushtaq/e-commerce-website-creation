'use client'

import { CartProvider } from '@/lib/cart-context'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Leaf, Users, Globe, Sparkles } from 'lucide-react'

function AboutContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            From a small kitchen to a thriving eco-conscious brand, Pure + Green is dedicated to crafting exceptional soaps without compromising our planet.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                We believe that luxury and sustainability go hand-in-hand. Our mission is to create the finest natural soaps while minimizing our environmental impact and supporting fair-trade practices.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Every bar of soap is a small act of resistance against harmful chemicals and disposable culture. We're committed to transparency, quality, and making a difference.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-12 text-center">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-foreground/60 italic">
                "Crafting luxury with purpose, one soap at a time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/40 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-3">
                Sustainability
              </h3>
              <p className="text-foreground/70">
                Eco-friendly ingredients, recyclable packaging, and carbon-neutral shipping.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-3">
                Community
              </h3>
              <p className="text-foreground/70">
                Supporting local suppliers and fair-trade partners across the globe.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-3">
                Transparency
              </h3>
              <p className="text-foreground/70">
                Complete ingredient lists and ethical sourcing practices for every product.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-3">
                Quality
              </h3>
              <p className="text-foreground/70">
                Handcrafted in small batches using only the finest natural ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-foreground mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">
                Source
              </h3>
              <p className="text-foreground/70">
                We carefully source certified organic ingredients from ethical suppliers worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">
                Craft
              </h3>
              <p className="text-foreground/70">
                Each batch is hand-crafted using traditional cold-process methods, preserving nutrients.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">
                Ship
              </h3>
              <p className="text-foreground/70">
                Packaged in recyclable, compostable materials and shipped carbon-neutral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Join Our Movement?
          </h2>
          <p className="text-lg mb-8 text-primary/90">
            Experience the difference that natural, sustainable soaps can make in your daily routine.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition"
          >
            Shop Our Collection
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function About() {
  return (
    <CartProvider>
      <AboutContent />
    </CartProvider>
  )
}
