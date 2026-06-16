'use client'

import { CartProvider } from '@/lib/cart-context'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { products } from '@/lib/products'
import ProductCard from '@/components/product-card'
import { useState, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'

function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('featured')

  const categories = ['all', ...new Set(products.map((p) => p.category))]

  const filteredProducts = useMemo(() => {
    let filtered = products
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // Sort products
    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }, [selectedCategory, sortBy])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
            Shop Our Collection
          </h1>
          <p className="text-foreground/60">
            Discover our complete range of natural, artisanal soaps
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="md:col-span-1">
              <div className="sticky top-4 space-y-6">
                {/* Category Filter */}
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-4">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={selectedCategory === cat}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="ml-3 text-foreground/80 capitalize">
                          {cat === 'all' ? 'All Products' : cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort Filter */}
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-4">
                    Sort By
                  </h3>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground appearance-none cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name: A to Z</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-foreground/60" />
                  </div>
                </div>

                {/* Price Range Info */}
                <div className="bg-secondary/40 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground text-sm mb-2">
                    Price Range
                  </h4>
                  <p className="text-foreground/60 text-sm">
                    ${Math.min(...products.map((p) => p.price))} - $
                    {Math.max(...products.map((p) => p.price))}
                  </p>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              <div className="mb-6">
                <p className="text-foreground/60">
                  Showing {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-foreground/60 text-lg">
                    No products found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function Shop() {
  return (
    <CartProvider>
      <ShopContent />
    </CartProvider>
  )
}
