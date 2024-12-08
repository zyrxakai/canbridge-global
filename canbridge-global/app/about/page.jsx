import React from 'react'
import Navbar from '../components/Navbar'
import MarqueeSlider from '../components/Marquee'
import NewsLetter from '../components/NewsLetter'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import CommitedSection from '../components/CommitedSection'
import Mission from '../components/Mission'

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <CommitedSection />
      <Mission />
      <MarqueeSlider />
      <NewsLetter />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page
