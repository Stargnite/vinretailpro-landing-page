import './App.css'
import Navbar from "@/components/navbar"
import Hero from '@/components/sections/Hero'
import UseCase from "@/components/sections/UseCase"
import Features from "@/components/sections/Features"
import Pricing from "@/components/sections/Pricing"
// import FeatureNumbering from "@/components/feature-numbering"

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <UseCase />
      <Features />
      <Pricing />
      {/* <FeatureNumbering /> */}
    </>
  )
}

export default App
