import { Star } from "lucide-react"

export default function Features() {
  const features = [
    {
      id: "01",
      color: "bg-purple-600",
      text: "Streamlined sales processing with barcode scanning, flexible payment options and professional receipt printing",
    },
    {
      id: "02",
      color: "bg-blue-500",
      text: "Customizable user permissions and staff management capabilities.",
    },
    {
      id: "03",
      color: "bg-purple-600",
      text: "Robust reporting and analytics to drive informed business decisions.",
    },
    {
      id: "04",
      color: "bg-blue-500",
      text: "Maintain optimal stock levels with real-time tracking and low-stock alerts.",
    },
    {
      id: "05",
      color: "bg-purple-600",
      text: "Seamless online integration (WooCommerce). Manage your online store and physical inventory effortlessly from one central hub.",
    },
    {
      id: "06",
      color: "bg-blue-500",
      text: "Smart stock alerts that can avoid stock-outs and optimize ordering with real time data.",
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Top diagonal purple background */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-[#6717CD] transform skew-y-4 origin-top-right -translate-y-8 z-0"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 popping-medium">Features of VinretailPRO</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center bg-white rounded-full shadow-sm border border-[#6717CD] p-4 pr-6 md:pr-8"
            >
              {/* Feature number circle with gradient border */}
              <div className="relative mr-4 flex-shrink-0">
                <div
                  className="w-16 h-16 md:w-[68px] md:h-[68px] rounded-full flex items-center justify-center"
                  style={{
                    background: "conic-gradient(from 90deg at 50% 50%, #6D28D9 0%, #3B82F6 50%, #6D28D9 100%)",
                    padding: "2px",
                  }}
                >
                  <div
                    className={`${feature.color} w-full h-full rounded-full flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {feature.id}
                  </div>
                </div>
                {/* Star icon */}
                <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5">
                  <div className="bg-purple-600 rounded-full p-0.5">
                    <Star className="h-4 w-4 fill-white text-white" />
                  </div>
                </div>
              </div>

              {/* Feature text */}
              <p className="text-sm md:text-base poppins-light">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom diagonal purple background */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-[#6717CD] transform skew-y-4 origin-bottom-left translate-y-8 z-0"></div>
    </section>
  )
}
