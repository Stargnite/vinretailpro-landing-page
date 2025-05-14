import './App.css'
import Navbar from "@/components/navbar"
import Hero from '@/components/sections/Hero'
import UseCase from "@/components/sections/UseCase"
import Features from "@/components/sections/Features"
import Pricing from "@/components/sections/Pricing"
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
      {/* <FreeTrial /> */}
      {/* <FeatureNumbering /> */}
    </>
  )
}

export default App
