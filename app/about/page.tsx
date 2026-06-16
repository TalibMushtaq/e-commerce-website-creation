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
            About White Sparkle
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Founded by a team of skincare scientists and beauty enthusiasts, White Sparkle represents a new generation of luxury that prioritizes your skin health and environmental responsibility.
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
                We&apos;re on a mission to revolutionize the beauty industry by proving that premium doesn&apos;t mean harmful. Every White Sparkle product is meticulously formulated with cutting-edge skincare science and clean, ethically-sourced ingredients.
              </p>
              <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
                Our goal is simple: deliver visible results without compromise. No parabens, sulfates, or fillers—just pure efficacy backed by dermatological expertise and customer love.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We believe beauty should make you glow inside and out—confidence from knowing what you're putting on your skin, and pride in supporting a brand that cares.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-12 text-center">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-foreground/60 italic text-lg">
                "Luxe skincare that doesn&apos;t compromise. Clean beauty that actually works."
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
            <div className="bg-white p-8 rounded-lg border border-border">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-3">
                Innovation
              </h3>
              <p className="text-foreground/70">
                Cutting-edge formulations developed with dermatologists and skincare experts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-3">
                Purity
              </h3>
              <p className="text-foreground/70">
                Clean ingredients you can pronounce, backed by rigorous testing and third-party certifications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif font-semibold text-foreground mb-3">
                Community
              </h3>
              <p className="text-foreground/70">
                Building a global beauty community dedicated to self-care without guilt.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border">
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-foreground mb-12">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">
                Research & Formulate
              </h3>
              <p className="text-foreground/70">
                Our team of chemists and dermatologists collaborate to create innovative formulas backed by scientific research and real-world testing.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">
                Test & Refine
              </h3>
              <p className="text-foreground/70">
                Every product undergoes rigorous dermatological testing to ensure safety, efficacy, and suitability for all skin types.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-serif font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">
                Deliver & Support
              </h3>
              <p className="text-foreground/70">
                We're committed to customer success with dedicated support and visible results you can measure and feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50K+</p>
              <p className="text-foreground/70">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-foreground/70">Clean Formulas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-foreground/70">Product Lines</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-foreground/70">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Join the White Sparkle Community
          </h2>
          <p className="text-lg mb-8 text-primary/90">
            Discover luxury skincare that actually works. Experience visible results and the confidence of knowing exactly what&apos;s on your skin.
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
