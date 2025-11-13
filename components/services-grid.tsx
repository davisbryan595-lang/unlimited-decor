'use client'

import { Sparkles } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Balloon Arches & Garlands',
    description: 'Stunning custom balloon installations that create the perfect backdrop',
    image: '/balloon-arch-decoration.jpg',
  },
  {
    id: 2,
    title: 'Romantic Room Setups',
    description: 'Transform any space into a luxurious, intimate setting',
    image: '/romantic-room-setup-decoration.jpg',
  },
  {
    id: 3,
    title: 'Candy & Chocolate Bouquets',
    description: 'Deliciously beautiful gift arrangements that delight the senses',
    image: '/candy-chocolate-bouquet-luxury.jpg',
  },
  {
    id: 4,
    title: 'Custom Gift Baskets',
    description: 'Thoughtfully curated baskets for any occasion and budget',
    image: '/luxury-gift-baskets.jpg',
  },
  {
    id: 5,
    title: 'Bling Wine & Champagne Glasses',
    description: 'Elegant, personalized glassware that shines',
    image: '/bling-champagne-glasses-luxury.jpg',
  },
  {
    id: 6,
    title: 'Card Boxes & Money Trees',
    description: 'Sophisticated gift reception solutions for events',
    image: '/card-box-money-tree-elegant.jpg',
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-in">
          <div className="inline-block bg-red-100 rounded-full px-3 sm:px-4 py-2 mb-4">
            <span className="text-red-600 font-semibold flex items-center gap-2 justify-center text-sm sm:text-base">
              <Sparkles size={16} /> Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Luxury Services Designed for You
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Each service crafted with attention to detail and passion for perfection
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="w-full py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                  Learn More
                </button>
              </div>

              {/* Sparkle Effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles size={20} className="text-yellow-300 animate-spin" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
