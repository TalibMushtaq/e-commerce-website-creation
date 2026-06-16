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
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])

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
      <section className="bg-gradient-to-r from-secondary to-secondary/50 py-16 px-4 border-b border-primary/20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-2">
            Shop Our Collection
          </h1>
          <p className="text-foreground/70 text-lg">
            Discover premium beauty products crafted for radiance
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
                <div className="bg-card rounded-xl p-6 border border-primary/10">
                  <h3 className="font-serif font-bold text-foreground mb-4 text-lg">
                    Category
                  </h3>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={selectedCategory === cat}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="ml-3 text-foreground/80 capitalize group-hover:text-primary transition">
                          {cat === 'all' ? 'All Products' : cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort Filter */}
                <div className="bg-card rounded-xl p-6 border border-accent/10">
                  <h3 className="font-serif font-bold text-foreground mb-4 text-lg">
                    Sort By
                  </h3>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg bg-secondary text-foreground appearance-none cursor-pointer hover:border-accent transition"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name: A to Z</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-accent" />
                  </div>
                </div>

                {/* Price Range Info */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20">
                  <h4 className="font-serif font-bold text-foreground text-lg mb-3">
                    Price Range
                  </h4>
                  <div className="space-y-2">
                    <p className="text-foreground/80 text-sm">
                      Min: ${Math.min(...products.map((p) => p.price)).toFixed(2)}
                    </p>
                    <p className="text-foreground/80 text-sm">
                      Max: ${Math.max(...products.map((p) => p.price)).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              <div className="mb-8 p-4 bg-card rounded-lg border border-primary/10">
                <p className="text-foreground/80 font-medium">
                  Showing <span className="text-accent font-bold">{filteredProducts.length}</span> beautiful product{filteredProducts.length !== 1 ? 's' : ''}
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
