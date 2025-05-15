import { Instagram, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import appleIcon from "@/assets/images/apple-icon.png"
import playIcon from "@/assets/images/play-icon.png"
import logo from "@/assets/images/logo.png"
import liscense from "@/assets/images/liscense.png"
import Logo1 from "@/assets/images/card-logo1.png"
import Logo2 from "@/assets/images/card-logo2.png"
import Logo3 from "@/assets/images/card-logo3.png"
import Logo4 from "@/assets/images/card-logo4.png"

export default function Footer() {
  return (
    <footer className="bg-[#f5f3ff] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
          {/* Column 1: Logo and Description */}
          <div>
            <div className="flex-shrink-0">
             <img src={logo} alt="" className="w-60 h-60" />
            </div>
            <p className="text-gray-700 text-sm mb-6 poppins-light">
              VinretailPRO is a comprehensive POS software developed by Vindove Limited to streamline the day-to-day
              operations of retail businesses.
            </p>

            {/* App Store Buttons */}
            <div className="md:flex gap-4 text-white justify-center md:justify-start py-16 hidden">
            <a href="#" className="block">
            <Button className="bg-black flex items-center justify-center py-6">
              <img
                src={appleIcon}
                alt="Download on App Store"
                width={115}
                height={40}
                className="h-6 w-auto"
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
                className="h-6 w-auto"
              />
              <div className="text-start">
                <p className="poppins-regular text-sm">Get it on</p>
                <p className="poppins-medium">Google Play</p>
              </ div>
            </Button>
            </a>    
          </div>
          </div>

          {/* Column 2: Company */}
          <div className="lg:ml-auto">
            <h3 className="font-semibold text-lg mb-4 poppins-regular">Company</h3>
            <ul className="space-y-5">
              <li>
                <a href="#" className="text-gray-700 hover:text-purple-600 text-sm poppins-regular">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-purple-600 text-sm poppins-regular">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-purple-600 text-sm poppins-regular">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-4 poppins-regular">Contacts</h3>
            <ul className="space-y-5">
              <li className="text-gray-700 text-sm poppins-regular">+2348072208263</li>
              <li>
                <a href="mailto:tech@vindove.com" className="text-gray-700 hover:text-purple-600 text-sm poppins-regular">
                  tech@vindove.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="font-semibold text-lg mb-4 poppins-regular">Socials</h3>
            <div className="flex space-x-5">
              <a
                href="#"
                className="bg-purple-600 text-white p-2 rounded-full hover:bg-[#6717CD] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-purple-600 text-white p-2 rounded-full hover:bg-[#6717CD] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-purple-600 text-white p-2 rounded-full hover:bg-[#6717CD] transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods and Certification */}
        <div className="md:flex flex-col md:flex-row justify-between items-start md:items-center mb-8 w-[80%] gap-y-10 hidden">
            {/* Address */}
            <p className="text-gray-700 text-sm poppins-light">
              No16 Market Street,
              <br />
              Shomolu, Lagos State,
              <br />
              Nigeria.
            </p>

          <div className="flex justify-center mb-4 md:mb-0">
            <div className="bg-white p-2">
              <img src={liscense} alt="NDPR Audit" width={100} height={100} />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3">
            
            <img src={Logo1} alt="" width={50} height={40} />
            
            <img src={Logo2} alt="" width={50} height={40} />
            
            <img src={Logo3} alt="" width={50} height={40} />
            
            <img src={Logo4} alt="" width={50} height={40} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mb-4 md:mb-0 flex items-center justify-between border-t-1 border-gray-600 py-5">
            <a href="#" className="text-gray-700 hover:text-purple-600 text-sm hidden md:block">
              Terms of Service
            </a>
        <div className="text-center md:text-right text-sm text-gray-700">
          &copy;2024 VinretailPRO. All Rights Reserved.
        </div>
          </div>
      </div>
    </footer>
  )
}
