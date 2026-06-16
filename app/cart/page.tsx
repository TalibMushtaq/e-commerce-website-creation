'use client'

import { CartProvider, useCart } from '@/lib/cart-context'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

function CartContent() {
  const { items, removeFromCart, updateQuantity } = useCart()

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-foreground">
            Shopping Cart
          </h1>
        </div>
      </section>

      {/* Cart Section */}
      <section className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-20 h-20 text-foreground/30 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                Your Cart Is Empty
              </h2>
              <p className="text-foreground/60 mb-8">
                Start shopping to add items to your cart.
              </p>
              <Link
                href="/shop"
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-secondary px-6 py-4 font-semibold text-foreground">
                    Cart Items ({items.length})
                  </div>
                  <div className="divide-y divide-border">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="p-6 flex gap-6 items-start hover:bg-background/50 transition"
                      >
                        {/* Product Image Placeholder */}
                        <div className="w-24 h-24 bg-secondary/40 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                          {item.emoji}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <Link
                            href={`/product/${item.id}`}
                            className="font-semibold text-foreground hover:text-primary transition"
                          >
                            {item.name}
                          </Link>
                          <p className="text-foreground/60 text-sm capitalize mb-2">
                            {item.category}
                          </p>
                          <p className="text-primary font-bold">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, Math.max(1, item.quantity - 1))
                            }
                            className="p-2 hover:bg-background rounded-lg transition"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-background rounded-lg transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Subtotal */}
                        <div className="text-right">
                          <p className="text-foreground/60 text-sm mb-2">Subtotal</p>
                          <p className="font-bold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition flex-shrink-0"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-secondary/40 rounded-lg p-8 sticky top-4">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-foreground/70">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-foreground/70">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-primary font-semibold">FREE</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    {subtotal > 0 && subtotal <= 50 && (
                      <p className="text-sm text-primary">
                        Free shipping on orders over $50!
                      </p>
                    )}
                    <div className="flex justify-between text-foreground/70">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-serif font-bold text-foreground">
                      Total
                    </span>
                    <span className="text-3xl font-bold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => alert('Checkout functionality coming soon!')}
                    className="w-full py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold mb-3"
                  >
                    Proceed to Checkout
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function Cart() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  )
}
