import './App.css'
import Navbar from "@/components/navbar"
import Hero from '@/components/sections/Hero'
import UseCase from "@/components/sections/UseCase"
import Features from "@/components/sections/Features"
// import FeatureNumbering from "@/components/feature-numbering"

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <UseCase />
      <Features />
      {/* <FeatureNumbering /> */}
    </>
  )
}

export default App
