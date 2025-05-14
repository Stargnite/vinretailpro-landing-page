import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import FreeTrial from "@/components/sections/FreeTrial"


export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly")

  const pricingPlans = [
    {
      name: "BASIC",
      headerColor: "bg-black",
      features: ["1 Business Location", "3 Users", "400 Products", "Unlimited Invoices"],
      price: {
        monthly: "₦ 5,000.00",
        annually: "₦ 50,000.00",
      },
    },
    {
      name: "STANDARD",
      headerColor: "bg-purple-600",
      features: ["3 Business Locations", "10 Users", "700 Products", "Unlimited Invoices"],
      price: {
        monthly: "₦ 8,000.00",
        annually: "₦ 80,000.00",
      },
    },
    {
      name: "PREMIUM",
      headerColor: "bg-blue-500",
      features: ["Unlimited Business Locations", "Unlimited Users", "Unlimited Products", "Unlimited Invoices"],
      price: {
        monthly: "₦ 15,000.00",
        annually: "₦ 150,000.00",
      },
    },
  ]

  return (
    <section className="py-16 px-4 bg-[#f5f3ff]">
      <div className="max-w-6xl mx-auto mb-[117px]">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 poppins-medium">Right Pricing for your Business</h2>
          <p className="text-gray-600 poppins-light">Choose a plan that works for your business.</p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex rounded-md gap-x-5">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-md bg-white text-gray-900 ${
                billingCycle === "monthly" ? "bg-white text-gray-900" : "bg-transparent text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Billed Monthly
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-md bg-white text-gray-900 ${
                billingCycle === "annually" ? "bg-white text-gray-900" : "bg-transparent text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setBillingCycle("annually")}
            >
              Billed Annually
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              {/* Card Header */}
              <div className={`${plan.headerColor} p-4 text-white text-start py-10 px-5 h-[180px]`}>
                <h3 className="text-xl font-bold poppins-semibold">{plan.name}</h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Features */}
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center poppins-light">
                      <Check className="h-5 w-5 text-[#2871FA] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center md:justify-center text-center mt-10 mb-16 md:mb-24">
                  <p className="text-2xl font-bold">
                    {billingCycle === "monthly" ? plan.price.monthly : plan.price.annually}
                  </p>
                  <p className="poppins-regular">/ {billingCycle === "monthly" ? "Month" : "Year"}</p>
                </div>

                {/* Button */}
                <Button variant="outline" className="w-full md:w-auto flex justify-center border-purple-600 text-purple-600 hover:text-purple-20 cursor-pointer hover:bg-purple-50 mx-auto">
                  Register & Subscribe
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FreeTrial />
    </section>
  )
}
