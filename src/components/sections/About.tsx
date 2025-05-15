import {Button} from "@/components/ui/button"
import appleIcon from "@/assets/images/apple-icon.png"
import playIcon from "@/assets/images/play-icon.png"
import aboutImg1 from "@/assets/images/aboutImg1.png"
import aboutImg2 from "@/assets/images/aboutImg2.png"

export default function About() {
  const businessTypes = [
    "Supermarkets",
    "Cafes & Bakeries",
    "Pharmacies",
    "Restaurants",
    "Salons",
    "Hotels",
    "And many more",
  ]

  return (
    <section className="py-16 md:py-28 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center poppins-medium md-16 md:mb-28">About VinretailPRO</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
        {/* Left Column - Text Content */}
        <div className="flex-1 ">

          <p className="text-gray-700 mb-8 poppins-regular max-w-[500px]">
            VinretailPRO is a comprehensive POS software developed by Vindove Limited to streamline the day-to-day
            operations of retail businesses. Whether you run a small store or a large chain, VinretailPRO provides a
            suite of tools to manage inventory, process sales, generate detailed reports, optimize efficiency, increase
            profitability, and deliver exceptional customer service. Ideal for;
          </p>

          {/* Business Types */}
          <div className="grid grid-cols-2 gap-6 my-10 md:my-14">
            {businessTypes.map((type, index) => (
              <div key={index} className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex-shrink-0 mr-2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-sm md:text-base poppins-medium-italic">{type}</span>
              </div>
            ))}
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-wrap gap-4 text-white justify-center md:justify-start">
            <a href="#" className="block">
            <Button className="bg-black flex items-center justify-center py-6">
              <img
                src={appleIcon}
                alt="Download on App Store"
                width={115}
                height={40}
                className="h-8 w-auto"
              />
              <div className="text-start">
                <p className="poppins-regular text-sm">Get it on</p>
                <p className="poppins-medium">App Store</p>
              </ div>
            </Button>
            </a>

            <a href="#" className="block">
            <Button className="bg-black flex items-center justify-center py-6">
              <img
                src={playIcon}
                alt="Download on App Store"
                width={115}
                height={40}
                className="h-8 w-auto"
              />
              <div className="text-start">
                <p className="poppins-regular text-sm">Get it on</p>
                <p className="poppins-medium">Google Play</p>
              </ div>
            </Button>
            </a>    
          </div>
        </div>

        {/* Right Column - App Screenshot */}
        <div className="flex-1 relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mt-8 md:mt-0 overflow-hidden md:overflow-visible">
          <img
            src={aboutImg1}
            alt="VinretailPRO Dashboard"
            className="object-contain"
          />
          <img
            src={aboutImg2}
            alt="VinretailPRO Dashboard"
            width={315}
            height={40}
            className="absolute top-[176px] -left-20 object-contain"
          />
        </div>
      </div>
    </section>
  )
}
