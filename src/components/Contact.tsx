'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, MapPin } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chris-aidoo-atta' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/chris008123' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/alexchen' },
  { icon: Mail, label: 'Email', href: 'mailto:aidoochris0081@gmail.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's build something{' '}
            <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="text-lg text-light-textMuted dark:text-dark-textMuted max-w-2xl mx-auto">
            Always interested in connecting with fellow builders, visionaries, 
            and anyone working on the future of technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition disabled:opacity-60"
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>

              {/* Success / Error Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-green-600 text-sm mt-2"
                  >
                    ✅ Message sent successfully!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-red-600 text-sm mt-2"
                  >
                    ❌ Something went wrong. Try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info + Social Links + Availability */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
              <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:aidoochris0081@gmail.com"
                  className="flex items-center gap-3 text-light-textMuted dark:text-dark-textMuted hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  aidoochris0081@gmail.com
                </a>
                <div className="flex items-center gap-3 text-light-textMuted dark:text-dark-textMuted">
                  <MapPin className="w-5 h-5" />
                  Accra, Ghana
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border">
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-light-surfaceHover dark:hover:bg-dark-surfaceHover transition-colors text-light-textMuted dark:text-dark-textMuted hover:text-light-text dark:hover:text-dark-text"
                  >
                    <social.icon className="w-5 h-5" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium">Currently available for</span>
              </div>
              <ul className="space-y-2 text-light-textMuted dark:text-dark-textMuted text-sm">
                <li>• Advisory roles at early-stage startups</li>
                <li>• Strategic technical consulting</li>
                <li>• Board positions</li>
                <li>• Speaking engagements</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}