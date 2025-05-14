import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check } from "lucide-react"
import img1 from "@/assets/images/useCaseImg1.png"
import img2 from "@/assets/images/useCaseImg2.png"
import img3 from "@/assets/images/useCaseImg3.png"

type UseCase = {
  id: number
  title: string
  image: string
  features: string[]
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: "POS Solution for PHARMACY",
    image: img1,
    features: [
      "Simplify medication management with our intuitive product matrix.",
      "Allowing you to organize & track your inventory efficiently.",
    ],
  },
  {
    id: 2,
    title: "POS Solution for SUPERMARKET",
    image: img2,
    features: [
      "Seamlessly organize your inventory with our intuitive product matrix.",
      "Gain insights into your profit margin with real-time margin data analysis.",
    ],
  },
  {
    id: 3,
    title: "POS Solution for CAFE & BAKERY",
    image: img3,
    features: [
      "Unlock the secrets to profitability with real-time margin data analysis.",
      "Simplify your inventory management with our intuitive product matrix.",
    ],
  },
  
]

export default function UseCaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const handleNext = () => {
    setActiveIndex((prev) => (prev === useCases.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? useCases.length - 1 : prev - 1))
  }

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  // Touch event handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNext()
    }
    if (isRightSwipe) {
      handlePrev()
    }
  }

  return (
    <div className="w-full py-12 bg-[#f5f3ff]">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 poppins-medium">VinretailPRO Use Case</h2>

        <div className="relative">
          {/* Cards Container */}
          <div className="relative" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            {/* Desktop View - Show all cards side by side */}
            <div className="hidden md:flex gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.id} className="bg-white rounded-lg shadow-md overflow-hidden flex-1">
                  <div className="h-56 mb-6 relative overflow-hidden rounded-t-lg">
                    <img
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-4 poppins-medium">{useCase.title}</h3>
                    <ul className="space-y-4 mb-16">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-[#2871FA] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex w-full items-center justify-center">
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50"> 
                      Learn More
                    </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View - Show only active card with sliding */}
            <div className="md:hidden overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                  width: `${useCases.length * 100}%`,
                }}
              >
                {useCases.map((useCase) => (
                  <div
                    key={useCase.id}
                    className="w-full bg-white rounded-lg shadow-md overflow-hidden"
                    style={{ flex: `0 0 ${100 / useCases.length}%` }}
                  >
                    <div className="h-48 relative overflow-hidden rounded-t-lg">
                      <img
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-4 poppins-medium">{useCase.title}</h3>
                      <ul className="space-y-4 mb-6">
                        {useCase.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 poppins-regular">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 poppins-regular">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Button - Only show right arrow as in the design */}
          <div className="absolute top-1/2 -right-2 md:-right-4 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-[#6717CD] shadow-md hover:bg-gray-100 text-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-purple-600" : "bg-purple-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
