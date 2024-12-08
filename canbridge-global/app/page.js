import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VisaSection from "./components/VisaSection";
import Immigration from "./components/Immigration";
import Success from "./components/Success";
import Country from "./components/Country";
import Testimonal from "./components/Testimonal";
import FAQSection from "./components/FAQSection";
import Services from "./components/Services";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
// In your _app.js or relevant component file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function MyApp() {
  return (
    <>
    <div style={{ backgroundColor: "white", minHeight: "100vh", color: "black" }}>
     <Navbar />
     <Hero />
     <Marquee />
     <VisaSection />
     <Immigration />
     <Success />
     <Country />
     <Testimonal />
     <FAQSection />
     <Services />
     <ContactSection />
     <Footer />
    </div>
      
    </>
  );
}

export default MyApp;
