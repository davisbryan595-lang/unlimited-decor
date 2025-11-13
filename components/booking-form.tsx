'use client'

import { useState } from 'react'
import { Calendar, Phone, Mail, MessageSquare } from 'lucide-react'

export function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventDate: '',
    occasion: '',
    budget: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventDate: '',
      occasion: '',
      budget: '',
      message: '',
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Book Your Event?
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Fill out the form below and we'll be in touch within 1 hour!
          </p>
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600 rounded-full px-4 py-2">
            <Phone size={18} className="text-red-600" />
            <a href="tel:(313)544-6119" className="font-semibold text-red-600">
              (313) 544-6119
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors text-base"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors text-base"
            />
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4">
              <Mail size={18} className="text-red-600 flex-shrink-0" />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 bg-transparent py-3 text-white placeholder-gray-400 focus:outline-none text-base"
              />
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4">
              <Phone size={18} className="text-red-600 flex-shrink-0" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 bg-transparent py-3 text-white placeholder-gray-400 focus:outline-none text-base"
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4">
              <Calendar size={18} className="text-red-600 flex-shrink-0" />
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="flex-1 bg-transparent py-3 text-white focus:outline-none text-base"
              />
            </div>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors text-base"
            >
              <option value="">Select Occasion *</option>
              <option value="birthday">Birthday</option>
              <option value="sweetest-day">Sweetest Day</option>
              <option value="anniversary">Anniversary</option>
              <option value="proposal">Proposal</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget and Message */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors text-base"
            >
              <option value="">Select Budget Range</option>
              <option value="under-200">Under $200</option>
              <option value="200-500">$200 - $500</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000+">$1,000+</option>
            </select>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4">
              <MessageSquare size={18} className="text-red-600 flex-shrink-0" />
              <input
                type="text"
                name="message"
                placeholder="Special Requests?"
                value={formData.message}
                onChange={handleChange}
                className="flex-1 bg-transparent py-3 text-white placeholder-gray-400 focus:outline-none text-base"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105 animate-pulse-glow"
          >
            Book My Event Now
          </button>

          {submitted && (
            <div className="bg-green-600/20 border border-green-600 text-green-300 px-4 py-3 rounded-lg text-center font-semibold animate-slide-in">
              ✓ Thank you! We'll call you within 1 hour to confirm!
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
