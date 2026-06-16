'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/products'
import { ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg bg-secondary mb-4 aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsFavorite(!isFavorite)
            }}
            className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur rounded-lg hover:bg-background transition-colors"
            aria-label="Add to favorites"
          >
            <Heart
              className={`w-5 h-5 transition-all ${
                isFavorite ? 'fill-accent text-accent' : 'text-foreground'
              }`}
            />
          </button>

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3">
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full capitalize">
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          {/* Scent and Weight */}
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {product.scent && <span className="bg-secondary px-2 py-1 rounded">{product.scent}</span>}
            {product.weight && <span className="bg-secondary px-2 py-1 rounded">{product.weight}</span>}
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-lg transition-all ${
                isAdded
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {isAdded && (
            <p className="text-xs text-primary font-semibold text-center">
              Added to cart!
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
