'use client'

import { useEffect, useState } from 'react'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-600 rounded-full animate-pulse"
              style={{
                left: `${Math.cos((i / 8) * Math.PI * 2) * 24 + 24}px`,
                top: `${Math.sin((i / 8) * Math.PI * 2) * 24 + 24}px`,
                animation: `sparkle ${1.5 + i * 0.1}s infinite`,
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse" />
          </div>
        </div>
        <p className="text-lg font-semibold text-gray-800 animate-pulse">Creating Magic...</p>
      </div>
    </div>
  )
}
