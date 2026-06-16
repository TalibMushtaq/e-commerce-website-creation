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
            Get In Touch
          </h1>
          <p className="text-foreground/60">
            We&apos;d love to hear from you. Reach out with questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex-1 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-secondary/40 rounded-lg p-8">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif font-bold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70">
                <a
                  href="mailto:hello@puregreen.com"
                  className="hover:text-primary transition"
                >
                  hello@puregreen.com
                </a>
              </p>
            </div>

            <div className="bg-secondary/40 rounded-lg p-8">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif font-bold text-foreground mb-2">Phone</h3>
              <p className="text-foreground/70">
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition"
                >
                  (123) 456-7890
                </a>
              </p>
            </div>

            <div className="bg-secondary/40 rounded-lg p-8">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif font-bold text-foreground mb-2">Address</h3>
              <p className="text-foreground/70">
                123 Sustainable Lane
                <br />
                Portland, OR 97201
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Send us a Message
            </h2>

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
