import { useState, useRef, useEffect } from "react"
import { ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  quote: string
  company: string
  author: string
}

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "With VINRETAILPRO they were able to track my inventory more efficiently, streamline transactions and made my customers experience better off.",
      company: "Kopa Supermarket",
      author: "Tunji",
    },
    {
      id: 2,
      quote:
        "As demand for my products grew, I needed to take the leap of faith and opt for a retail POS system. Choosing VINRETAILPRO has been the best decision for my business so far.",
      company: "Amazing Grace Store",
      author: "Goodwill",
    },
    {
      id: 3,
      quote:
        "The inventory management features have saved us countless hours. We can now focus on growing our business instead of manual stock counting.",
      company: "Fresh Foods Market",
      author: "Sarah",
    },
    {
      id: 4,
      quote:
        "Customer support is exceptional. Whenever we have questions, the team is always available to help us resolve issues quickly.",
      company: "Tech Haven",
      author: "Michael",
    },
  ]

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  // const handleDotClick = (index: number) => {
  //   setActiveIndex(index)
  // }

  // Update slide width on window resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth)
      }
    }

    // Initial width
    updateWidth()

    // Update on resize
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Top diagonal purple background */}
    <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-[#6717CD] transform skew-y-4 origin-top-right -translate-y-8 z-0" ></div>

      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 poppins-medium mb-[134px]">Customer Success Stories</h2>

        <div className="relative max-w-6xl mx-auto mb-10">
          {/* Testimonial Slider */}
          <div className="overflow-hidden" ref={containerRef}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * slideWidth}px)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-[60%] md:w-1/2 flex-shrink-0 px-2 md:px-4"
                  style={{ width: slideWidth > 0 ? slideWidth : "100%" }}
                >
                  <div className="border border-gray-200 rounded-lg p-6 h-full">
                    <Quote className="text-[#6717CD] mb-4 h-6 w-6" />
                    <div className="mb-4">
                      <h3 className="text-[#6717CD] font-medium poppins-regular">{testimonial.company}</h3>
                      <p className="text-[#6717CD] font-medium poppins-medium my-5">{testimonial.author}</p>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base italic poppins-light">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Button */}
          <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-[#6717CD] hover:bg-purple-700 text-white shadow-md"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                // onClick={() => handleDotClick(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#6717CD]" : "bg-purple-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom diagonal purple background */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-[#6717CD] transform skew-y-4 origin-bottom-left translate-y-8 z-0"></div>
    </section>
  )
}
