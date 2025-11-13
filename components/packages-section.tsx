'use client'

import { ShoppingCart, Check, Sparkles } from 'lucide-react'

const packages = [
  {
    id: 1,
    name: 'Sweetest Day Surprise',
    price: 350,
    description: 'Perfect for that special someone',
    features: [
      'Luxury room setup with rose petals',
      'Premium balloon arch',
      'Candy & chocolate bouquet',
      'Bling champagne glasses',
      'Same-day delivery available',
    ],
    image: '/placeholder.svg?height=300&width=300',
    badge: 'Most Popular',
  },
  {
    id: 2,
    name: 'Luxury Balloon Experience',
    price: 450,
    description: 'Make a stunning statement',
    features: [
      'Custom balloon arch design',
      'Professional backdrop setup',
      'Event coordination included',
      'Instagram-worthy installation',
      'Premium balloon materials',
    ],
    image: '/placeholder.svg?height=300&width=300',
    badge: 'Premium',
  },
  {
    id: 3,
    name: 'Full Bling Experience',
    price: 650,
    description: 'The ultimate luxury package',
    features: [
      'Complete room transformation',
      'Custom balloon decorations',
      'Bling glassware set',
      'Card box & money tree',
      'Full event planning consultation',
      'Professional photography coordination',
    ],
    image: '/placeholder.svg?height=300&width=300',
    badge: 'Best Value',
  },
]

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in">
          <div className="inline-block bg-red-100 rounded-full px-4 py-2 mb-4">
            <span className="text-red-600 font-semibold flex items-center gap-2 justify-center">
              <Sparkles size={16} /> Packages
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready-to-Book Packages
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect package for your special moment
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 animate-slide-in ${
                pkg.badge === 'Most Popular'
                  ? 'border-4 border-red-600 shadow-2xl md:scale-105'
                  : 'border border-gray-200 shadow-lg'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {pkg.badge}
                </div>
              )}

              {/* Background */}
              <div className="bg-white h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-red-600">${pkg.price}</span>
                    <span className="text-gray-600 ml-2">one-time</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all transform hover:scale-105">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
