import BlogHero from '@/app/components/BlogHero'
import ContactSection from '@/app/components/ContactSection'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import NewsLetter from '@/app/components/NewsLetter'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <NewsLetter />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
