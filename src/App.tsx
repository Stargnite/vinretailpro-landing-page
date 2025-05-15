import './App.css'
import Navbar from "@/components/navbar"
import Hero from '@/components/sections/Hero'
import UseCase from "@/components/sections/UseCase"
import Features from "@/components/sections/Features"
import Pricing from "@/components/sections/Pricing"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import FAQ from "@/components/sections/FAQ"
import SuccessStories from "@/components/sections/SuccessStories"
import About from "@/components/sections/About"
import TakeControl from "@/components/sections/TakeControl"
import WeAccept from "@/components/sections/WeAccept"
import Footer from "@/components/sections/Footer"
// import FreeTrial from "@/components/sections/FreeTrial"
// import FeatureNumbering from "@/components/feature-numbering"

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <UseCase />
      <Features />
      <Pricing />
      <WhyChooseUs />
      <FAQ />
      <SuccessStories />
      <About />
      <TakeControl />
      <WeAccept />
      <Footer />
      {/* <FreeTrial /> */}
      {/* <FeatureNumbering /> */}
    </>
  )
}

export default App
