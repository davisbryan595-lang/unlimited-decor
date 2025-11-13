'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

interface Particle {
  left: number
  top: number
  delay: number
}

export function HeroSection() {
  const [eventDays, setEventDays] = useState({ days: 0, hours: 0 })
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const calculateCountdown = () => {
      const eventDate = new Date('2025-10-18T00:00:00').getTime()
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setEventDays({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        })
      }
    }

    calculateCountdown()
    const timer = setInterval(calculateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden pt-20">
      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-red-600 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center text-center">
        {/* Main Heading */}
        <div className="animate-slide-in space-y-6 z-10">
          <div className="inline-block bg-red-600/20 border border-red-600/50 rounded-full px-4 py-2 mb-4">
            <span className="text-red-600 font-semibold flex items-center gap-2">
              <Sparkles size={16} /> Luxury Event Décor Specialists
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            We Turn Moments Into
            <span className="block bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-clip-text text-transparent">
              Unforgettable Memories
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            From breathtaking balloon arches to full event transformations, we bring your vision to life with elegance and style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 animate-pulse-glow">
              Book Now <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 transition-all transform hover:scale-105">
              View Gallery
            </button>
          </div>

          {/* Trust Banner */}
          <div className="grid grid-cols-3 gap-4 bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">500+</p>
              <p className="text-gray-300 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">Same-Day</p>
              <p className="text-gray-300 text-sm">Setup Available</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">#1</p>
              <p className="text-gray-300 text-sm">Detroit Luxury Décor</p>
            </div>
          </div>

          {/* Sweetest Day Banner */}
          <div className="mt-12 bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-red-600/50 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-white font-semibold mb-3">🎉 Sweetest Day Special – 10/18/2025</p>
            <div className="text-gray-200 text-sm">
              <span className="text-red-600 font-bold text-lg">{eventDays.days}</span> days and{' '}
              <span className="text-blue-600 font-bold text-lg">{eventDays.hours}</span> hours until the ultimate gift-giving season!
            </div>
            <p className="text-yellow-300 text-xs mt-2 font-semibold">Early booking discount: Book by 9/30 for 15% off!</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
