'use client'

import { CartProvider } from '@/lib/cart-context'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
            Contact White Sparkle
          </h1>
          <p className="text-foreground/60 text-lg">
            Have a question about our products? Need help with an order? We&apos;re here for you and typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex-1 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-secondary/40 rounded-lg p-8 border border-border">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif font-bold text-foreground mb-2">Email Support</h3>
              <p className="text-foreground/70 mb-2">
                <a
                  href="mailto:support@whitesparkle.com"
                  className="hover:text-primary transition font-semibold"
                >
                  support@whitesparkle.com
                </a>
              </p>
              <p className="text-sm text-foreground/60">
                Response time: 24 hours
              </p>
            </div>

            <div className="bg-secondary/40 rounded-lg p-8 border border-border">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-foreground/70 mb-2">
                <a
                  href="tel:+18005551234"
                  className="hover:text-primary transition font-semibold"
                >
                  1 (800) 555-1234
                </a>
              </p>
              <p className="text-sm text-foreground/60">
                Mon-Fri, 9am-6pm EST
              </p>
            </div>

            <div className="bg-secondary/40 rounded-lg p-8 border border-border">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif font-bold text-foreground mb-2">Headquarters</h3>
              <p className="text-foreground/70 text-sm">
                White Sparkle Beauty Co.
                <br />
                250 Innovation Drive
                <br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2 text-center">
              Get In Touch
            </h2>
            <p className="text-center text-foreground/60 mb-8">
              We&apos;re always happy to hear from our community. Send us a message and we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition bg-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="product">Product Question</option>
                  <option value="order">Order Issue</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition resize-none"
                  placeholder="Tell us what's on your mind..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-primary/10 border border-primary text-primary rounded-lg text-center">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function Contact() {
  return (
    <CartProvider>
      <ContactContent />
    </CartProvider>
  )
}
