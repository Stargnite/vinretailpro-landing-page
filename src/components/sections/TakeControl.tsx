import { Button } from "@/components/ui/button"
import ipad from "@/assets/images/ipad.png"
import laptop from "@/assets/images/laptop.png"

export default function TakeControl() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden mt-16 md:mt-32">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight poppins-medium">
            Take control of your retail operations
            <br className="hidden md:block" />
            and unlock new levels of efficiency
            <br className="hidden md:block" />
            and profitability
          </h2>
        </div>

        {/* Devices and CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center justify-items-center">
          {/* Tablet */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-48 md:w-80 md:h-60 mb-8">
              <div
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{ transform: "perspective(1000px) rotateY(5deg) rotateX(5deg)" }}
              >
                <img src={ipad} alt="VinretailPRO on tablet" className="object-cover" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 poppins-bold">Schedule a Demo</h3>
            <Button variant="secondary" size="lg" className="bg-white hover:bg-gray-100 text-[#6717CD] font-medium px-6 poppins-regular">
              Schedule a Demo
            </Button>
          </div>

          {/* Laptop */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-48 md:w-80 md:h-60 mb-8">
              <div
                className="absolute inset-0"
                style={{ transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg)" }}
              >
                <img src={laptop} alt="VinretailPRO on laptop" className="object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 poppins-bold">Download the App</h3>
            <Button variant="secondary" size="lg" className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 text-[#6717CD] poppins-regular">
              Download Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
