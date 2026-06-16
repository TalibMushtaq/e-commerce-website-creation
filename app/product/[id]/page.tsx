'use client'

import { CartProvider, useCart } from '@/lib/cart-context'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { products } from '@/lib/products'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

function ProductContent() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find((p) => p.id === productId)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-foreground mb-4">
              Product Not Found
            </h1>
            <p className="text-foreground/60 mb-6">
              The product you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Back to Shop
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-background px-4 py-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/shop"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <section className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative overflow-hidden bg-secondary/40 rounded-lg p-8 min-h-96">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4 capitalize">
                  {product.category}
                </span>
                <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Product Details List */}
                <div className="bg-secondary/40 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-foreground mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-foreground/70">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Made with certified organic ingredients</span>
                    </li>
                    <li className="flex gap-3 text-foreground/70">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Handcrafted in small batches</span>
                    </li>
                    <li className="flex gap-3 text-foreground/70">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Cruelty-free and vegan</span>
                    </li>
                    <li className="flex gap-3 text-foreground/70">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Eco-friendly, recyclable packaging</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="font-semibold text-foreground">
                    Quantity:
                  </label>
                  <div className="flex border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-background transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 border-x border-border">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-background transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center gap-2 ${
                    added
                      ? 'bg-primary/10 text-primary'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {added ? 'Added to Cart!' : 'Add to Cart'}
                </button>

                <Link
                  href="/shop"
                  className="block text-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                You Might Also Like
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="relative overflow-hidden bg-secondary/40 rounded-lg mb-4 min-h-64 group-hover:bg-secondary/60 transition">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-primary font-bold">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function Product() {
  return (
    <CartProvider>
      <ProductContent />
    </CartProvider>
  )
}
