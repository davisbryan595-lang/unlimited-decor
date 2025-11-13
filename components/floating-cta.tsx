import { MessageCircle, Phone } from 'lucide-react'

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col gap-2 sm:gap-3 z-40">
      <a
        href="https://wa.me/3135446119"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-float flex items-center gap-2"
        title="WhatsApp Chat"
      >
        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
      </a>
      <a
        href="tel:(313)544-6119"
        className="bg-red-600 hover:bg-red-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 animate-float flex items-center gap-2"
        title="Call Us"
      >
        <Phone size={20} className="sm:w-6 sm:h-6" />
      </a>
    </div>
  )
}
