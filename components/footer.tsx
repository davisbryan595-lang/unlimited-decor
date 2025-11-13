import { Instagram, Facebook, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-red-600">✨ Unlimited</span>
              <span className="ml-1">Decor</span>
            </h3>
            <p className="text-gray-400">Creating unforgettable moments since day one.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-red-600">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
              <li><a href="#packages" className="hover:text-white transition">Packages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-red-600">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-red-600" />
                <a href="tel:(313)544-6119">(313) 544-6119</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-red-600" />
                <span>Detroit, MI</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-red-600">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-red-600/20 hover:bg-red-600 rounded-lg transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600/20 hover:bg-blue-600 rounded-lg transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Unlimited Decor LLC. All rights reserved. | Serving Detroit with luxury event décor</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
