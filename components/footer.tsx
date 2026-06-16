import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P+G</span>
              </div>
              <div>
                <h3 className="font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Pure + Green
                </h3>
                <p className="text-xs text-background/70">Artisanal Soaps</p>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Handcrafted, natural soaps made with organic ingredients and love for the planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-background/80 hover:text-background transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=body" className="text-background/80 hover:text-background transition-colors">
                  Body Soaps
                </Link>
              </li>
              <li>
                <Link href="/shop?category=laundry" className="text-background/80 hover:text-background transition-colors">
                  Laundry Soaps
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:hello@puregreen.com" className="text-background/80 hover:text-background transition-colors">
                  hello@puregreen.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-background/80 hover:text-background transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-background/80">Portland, OR 97214</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} Pure + Green. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-background/70 hover:text-background transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors" aria-label="Phone">
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors" aria-label="Location">
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
