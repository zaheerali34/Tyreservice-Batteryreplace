import React from 'react'
import { Rocket, Phone, MapPin, Mail, Car, ArrowRight } from 'lucide-react'

function Header() {
  // Add animation classes for left/right entrance using Tailwind CSS
  return (
    <header className="w-full">
      <div className="bg-[#0B5E5F] text-white py-2 animate-[slide-in-left_0.7s_ease-out]">
        <div className="mx-auto">
          <div className="flex flex-wrap items-center justify-between text-xs md:text-sm gap-2">
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              <div className="flex items-center gap-2 py-2 animate-[discord-left-to-right_0.8s_ease-out]">
                <span className="whitespace-nowrap">💥 Double Deal! Buy 4 Tyres & Get FREE Battery Health Check + Complimentary Installation 🚀 24/7 Mobile Service Dubai | 📞 Call +971 52 562 3674</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-700 py-2 animate-[slide-in-right_0.7s_ease-out]">
        <div className="px-14 py-2 mx-auto">
          <div className="flex flex-wrap items-center justify-between text-xs md:text-sm gap-2">
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              <div className="flex items-center gap-2 animate-[discord-left-to-right_0.8s_ease-out]">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#0B5E5F]" />
                <span className="whitespace-nowrap">Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2 animate-[discord-left-to-right_0.8s_ease-out]">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-[#0B5E5F]" />
                <span className="whitespace-nowrap">admin@tyreservice.ae</span>
              </div>
            </div>
            <div className="flex items-center gap-2 animate-[discord-left-to-right_0.8s_ease-out]">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-[#0B5E5F]" />
              <span className="whitespace-nowrap">+971 52 562 3674</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm py-4 animate-[slide-in-left_0.7s_ease-out]">
        <div className="px-14 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2 animate-[discord-left-to-right_0.8s_ease-out]">
              <Car className="w-6 h-6 md:w-8 md:h-8 text-[#0B5E5F]" />
              <h3 className="text-[2rem] max-md:text-xl font-bold text-[#0B5E5F]">
                TyreServiceBatteryReplace
              </h3>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-4 md:gap-8 flex-wrap justify-center animate-[discord-left-to-right_0.8s_ease-out]">
              <a
                href="#home"
                className="font-medium hover:text-[#0B5E5F]/80 transition-colors text-sm md:text-base"
              >
                HOME
              </a>
              <a
                href="#about"
                className="font-medium hover:text-[#0B5E5F] transition-colors text-sm md:text-base"
              >
                ABOUT
              </a>
              <a
                href="#services"
                className="font-medium hover:text-[#0B5E5F] transition-colors text-sm md:text-base"
              >
                SERVICES
              </a>
              <a
                href="#contact"
                className="font-medium hover:text-[#0B5E5F] transition-colors text-sm md:text-base"
              >
                CONTACT
              </a>

                <button className="bg-[#0B5E5F] hover:bg-[#0B5E5F] text-white md:px-6 py-4 rounded-sm flex items-center gap-2 font-medium transition-colors text-sm md:text-base whitespace-nowrap cursor-pointer">
              <span>WHATSAPP US</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header