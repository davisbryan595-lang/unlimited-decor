import { Preloader } from '@/components/preloader'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesGrid } from '@/components/services-grid'
import { GallerySection } from '@/components/gallery-section'
import { PackagesSection } from '@/components/packages-section'
import { BookingForm } from '@/components/booking-form'
import { FloatingCTA } from '@/components/floating-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <GallerySection />
      <PackagesSection />
      <BookingForm />
      <FloatingCTA />
      <Footer />
    </>
  )
}
