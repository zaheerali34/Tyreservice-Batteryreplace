import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Car, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full relative z-50 font-sans">
      <div className="bg-[#0B5E5F] text-white py-2 overflow-hidden">
        <div className="mx-auto w-full">
          <div className="flex items-center overflow-hidden whitespace-nowrap relative">
            <motion.div
              className="flex items-center gap-12 text-xs md:text-sm font-medium"
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              style={{ width: "fit-content" }}
            >
              <span className="flex items-center gap-2">
                💥 Double Deal! Buy 4 Tyres & Get FREE Battery Health Check +
                Complimentary Installation 🚀 24/7 Mobile Service Dubai | 📞
                Call +971 52 562 3674
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-100 text-gray-700 py-2 hidden md:block border-b border-gray-200"
      >
        <div className="px-6 lg:px-14 py-2 mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between text-xs md:text-sm gap-2">
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              <div className="flex items-center gap-2 hover:text-[#0B5E5F] transition-colors cursor-pointer">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-[#0B5E5F]" />
                <span className="whitespace-nowrap">
                  Dubai, United Arab Emirates
                </span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#0B5E5F] transition-colors cursor-pointer">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-[#0B5E5F]" />
                <span className="whitespace-nowrap">admin@tyreservice.ae</span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-bold text-[#0B5E5F]">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="whitespace-nowrap">+971 52 562 3674</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white shadow-md py-4 sticky top-0 z-40"
      >
        <div className="px-6 lg:px-14 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-[#0B5E5F] p-2 rounded-full shadow-sm">
                <Car className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0B5E5F] tracking-tight leading-none">
                TyreServiceBatteryReplace
              </h3>
            </div>

            <nav className="flex items-center gap-6 md:gap-10 w-full md:w-auto justify-center md:justify-between flex-wrap">
              
              <ul className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
                <NavLink to={'/'} className="font-medium text-gray-600 hover:text-[#0B5E5F] transition-colors text-sm md:text-base relative group py-2 cursor-pointer">                 
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0B5E5F] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

                  <NavLink to={'/about'} className="font-medium text-gray-600 hover:text-[#0B5E5F] transition-colors text-sm md:text-base relative group py-2 cursor-pointer">                 
                    About
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0B5E5F] transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>

                 <NavLink to={'/services'} className="font-medium text-gray-600 hover:text-[#0B5E5F] transition-colors text-sm md:text-base relative group py-2 cursor-pointer">                 
                  Services
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0B5E5F] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

                 <NavLink to={'/contact'} className="font-medium text-gray-600 hover:text-[#0B5E5F] transition-colors text-sm md:text-base relative group py-2 cursor-pointer">                
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0B5E5F] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>

              </ul>

              <button className="bg-[#0B5E5F] hover:bg-[#084546] text-white px-6 py-3 rounded-sm flex items-center gap-2 font-medium transition-all text-sm md:text-base whitespace-nowrap shadow-lg transform hover:-translate-y-0.5 active:translate-y-0">
                <span>WHATSAPP US</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
