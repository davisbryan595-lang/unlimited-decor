'use client'

import { useState } from 'react'
import { Sparkles, X } from 'lucide-react'

const galleryImages = [
  { id: 1, category: 'birthdays', src: '/birthday-balloon-decoration.jpg' },
  { id: 2, category: 'sweetest-day', src: '/sweetest-day-room-setup.jpg' },
  { id: 3, category: 'anniversaries', src: '/anniversary-romantic-setup.jpg' },
  { id: 4, category: 'proposals', src: '/proposal-setup-luxury.jpg' },
  { id: 5, category: 'birthdays', src: '/birthday-party-decoration.jpg' },
  { id: 6, category: 'all', src: '/luxury-event-decoration.jpg' },
  { id: 7, category: 'sweetest-day', src: '/sweet-gift-basket.jpg' },
  { id: 8, category: 'anniversaries', src: '/anniversary-balloons.jpg' },
  { id: 9, category: 'proposals', src: '/proposal-balloons-luxury.jpg' },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredImages = galleryImages.filter(
    img => activeFilter === 'all' || img.category === activeFilter
  )

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-slide-in">
          <div className="inline-block bg-red-100 rounded-full px-3 sm:px-4 py-2 mb-4">
            <span className="text-red-600 font-semibold flex items-center gap-2 justify-center text-sm sm:text-base">
              <Sparkles size={16} /> Our Gallery
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Moments We've Created
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 animate-slide-in px-2">
          {['all', 'birthdays', 'sweetest-day', 'anniversaries', 'proposals'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition-all capitalize ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {filter === 'sweetest-day' ? 'Sweetest Day' : filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-max">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-in border border-white/20"
              onClick={() => setSelectedImage(image.id)}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt="Gallery"
                className="w-full h-64 object-cover group-hover:brightness-110 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <span className="text-white font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full">
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src || "/placeholder.svg"}
              alt="Gallery"
              className="w-full rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
