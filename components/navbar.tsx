'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ShoppingCart } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold">
              <span className="text-red-600">✨ Unlimited</span>
              <span className="text-white ml-1">Decor</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '#services' },
              { name: 'Gallery', href: '#gallery' },
              { name: 'Packages', href: '#packages' },
            ].map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-red-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all animate-pulse-glow">
              <Phone size={18} />
              <a href="tel:(313)544-6119">(313) 544-6119</a>
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ShoppingCart size={20} className="text-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur border-t border-red-600/20 animate-slide-in">
            <div className="px-4 py-4 space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Packages', href: '#packages' },
              ].map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-white hover:text-red-500 py-2 transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-all mt-4">
                <Phone size={18} />
                <a href="tel:(313)544-6119">Call Now</a>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
