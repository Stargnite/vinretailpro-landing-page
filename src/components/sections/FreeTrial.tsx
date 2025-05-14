import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function FreeTrialSection() {
  const features = ["Unlimited business locations", "Unlimited Users", "Unlimited Products", "Unlimited Invoices"]

  return (
    <section className="w-full">
      {/* Top banner */}
      <div className=" hidden md:flex bg-purple-700 text-white py-3 px-4 text-center text-sm md:text-base overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block text-center">
          WooCommerce Integration for ₦30,000. Boost Your Online Store with Seamless Integration
        </div>
      </div>

      {/* Main content */}
      <div className="card items-center justify-center bg-white py-6 px-4 md:py-6 md:px-8 max-w-4xl mx-auto mt-8 rounded-md">
        <h2 className="text-2xl md:text-3xl bg-white font-bold mb-5 text-center poppins-medium">Get our free trial today</h2>
      <div className="flex flex-col-reverse gap-y-8 md:flex-row items-center justify-center w-full">
        <div className="text-center mb-6">
          <p className="text-lg mb-6 poppins-regular">Free for 3 Days</p>

          <div className="mb-8">
            <Button
              variant="outline"
              className="cursor-pointer border-purple-600 poppins-regular text-purple-600 hover:text-purple-40 hover:bg-purple-50 px-6 py-2 rounded-md"
            >
              Register & Subscribe
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center poppins-light">
              <div className="mr-2 text-green-500">
                <Check className="h-5 w-5 text-[#2871FA]" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
