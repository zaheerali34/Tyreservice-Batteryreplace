import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Car, ArrowRight, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50 font-sans">
      {/* Top Bar */}
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

      {/* Info Bar */}
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
        <div className="px-4 md:px-6 lg:px-14 mx-auto max-w-7xl">
          <div className="flex  items-center justify-between gap-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-[#0B5E5F] p-2 rounded-full shadow-sm">
                <Car className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0B5E5F] tracking-tight leading-none">
                TyreServiceBatteryReplace
              </h3>
            </div>

            <button
              className="md:hidden ml-auto text-[#0B5E5F]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>

            <nav className="hidden md:flex items-center gap-6 md:gap-10 w-full md:w-auto justify-center md:justify-between flex-wrap">
              <ul className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    `font-medium hover:text-[#0B5E5F] transition-colors text-sm md:text-base relative group py-2 cursor-pointer${isActive ? ' text-[#0B5E5F]' : ''}`
                  }
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0B5E5F] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    `font-medium hover:text-[#0B5E5F] transition-colors text-sm md:text-base relative group py-2 cursor-pointer${isActive ? ' text-[#0B5E5F]' : ''}`
                  }
                >
                  About
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0B5E5F] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                  to={'/services'}
                  className={({ isActive }) =>
                    `font-medium hover:text-[#0B5E5F] transition-colors text-sm md:text-base relative group py-2 cursor-pointer${isActive ? ' text-[#0B5E5F]' : ''}`
                  }
                >
                  Services
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0B5E5F] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                  to={'/contact'}
                  className={({ isActive }) =>
                    `font-medium hover:text-[#0B5E5F] transition-colors text-sm md:text-base relative group py-2 cursor-pointer${isActive ? ' text-[#0B5E5F]' : ''}`
                  }
                >
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

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-50">
            <nav className="flex flex-col items-center gap-4 py-4">
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  `font-medium hover:text-[#0B5E5F] transition-colors text-base relative group py-2 cursor-pointer${isActive ? ' text-[#0B5E5F]' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to={'/about'}
                className={({ isActive }) =>
                  `font-medium hover:text-[#0B5E5F] transition-colors text-base relative group py-2 cursor-pointer${isActive ? ' text-[#0B5E5F]' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to={'/services'}
                className={({ isActive }) =>
                  `font-medium hover:text-[#0B5E5F] transition-colors text-base relative group py-2 cursor-pointer${isActive ? ' text-[#0B5E5F]' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to={'/contact'}
                className={({ isActive }) =>
                  `font-medium hover:text-[#0B5E5F] transition-colors text-base relative group py-2 cursor-pointer${isActive ? ' text-[#0B5E5F]' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <button className="bg-[#0B5E5F] hover:bg-[#084546] text-white px-6 py-3 rounded-sm flex items-center gap-2 font-medium transition-all text-base whitespace-nowrap shadow-lg">
                <span>WHATSAPP US</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}
      </motion.div>
    </header>
  );
}

export default Header;
