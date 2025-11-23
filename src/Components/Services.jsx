import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Car,
  ArrowRight,
  Check,
  Settings,
  Battery,
  Truck,
  Zap,
} from "lucide-react";

const servicesData = [
  {
    id: "tyre-repair",
    icon: Settings, // Using Settings icon for Repair
    title: "Tyre Repair",
    description:
      "Get back on the road quickly with our efficient tyre repair solutions. Whether it's a puncture or pressure issue, our mobile tyre repair service in Dubai is just a call away.",
    points: [
      "Comprehensive Repairs: From small punctures to balancing, we restore your tyres to top condition.",
      "Mobile Assistance: We bring tyre repair to your location for maximum convenience.",
      "Reliable Results: Our experts ensure your tyres are safe, durable, and road-ready.",
    ],
    image: "/services 2.webp", // Mechanic repairing a tyre/brake
  },
  {
    id: "battery-installation",
    icon: Battery,
    title: "Battery Installation",
    description:
      "Our fast and reliable battery installation service in Dubai ensures your vehicle never leaves you stranded. From quick replacements to diagnostics, we handle everything on the spot with expert care.",
    points: [
      " Quality Batteries: We provide only trusted and durable battery brands for long-lasting performance.",
      " Expert Technicians: Our skilled team ensures safe installation and reliable testing before you get back on the road.",
      " Emergency Support: Available 24/7, we'll reach you anywhere in Dubai for quick battery assistance.",
    ],
    image: "/services 1.webp",
  },
  {
    id: "tyre-installation",
    icon: Truck,
    title: "Tyre Installation",
    description:
      "Upgrade your driving experience with our seamless new tyre installation service in Dubai. We provide the right fit for your car, ensuring safety and performance.",
    points: [
      " Wide Range of Tyres: Choose from premium brands and sizes that suit your vehicle perfectly.",
      " Professional Installation: Our team handles mounting, balancing, and alignment with precision.",
      " Safety First: Every tyre is checked thoroughly to guarantee smooth and secure driving.",
    ],
    image: "/services 3.webp",
  },
  {
    id: "car-jump-start",
    icon: Zap,
    title: "Car Jump Start",
    description:
      "Dead battery? Our car jump start service in Dubai helps you get moving again in minutes. Quick, efficient, and available round the clock, we've got your back.",
    points: [
      " Instant Response: Reach us anytime for immediate roadside jump start support.",
      " Safe & Reliable: Our technicians use the proper tools to protect your battery and car's electrical system.",
      " 24/7 Availability: No matter the time, we'll be there to restart your journey.",
    ],
    image: "/services 4.webp",
  },
];

function Services() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeTab);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      <section className="w-full max-lg:h-[180vh] py-24 bg-white font-sans" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#0B5E5F] font-bold uppercase tracking-wider text-xl">
              // OUR SERVICES //
            </span>
            <br />
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002A3A] mt-2 inline-flex items-center gap-4">
              <Car className="text-gray-700 w-8 h-8" />
              Explore Our Best Services
              <Car className="text-gray-700 w-8 h-8 scale-x-[-1]" />
            </h2>
            <div className="h-1 w-20 bg-[#0B5E5F] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="w-full h-[50vh] grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-1 space-y-8"
            >
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left flex gap-4 p-4 md:p-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md relative
                                    ${
                                      activeTab === service.id
                                        ? "bg-[#0B5E5F] text-white font-bold shadow-[0_10px_30px_rgba(11,94,95,0.3)]"
                                        : "bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
                                    }`}
                >
                  <service.icon
                    className={`w-6 h-6 ${
                      activeTab === service.id ? "text-white" : "text-[#0B5E5F]"
                    }`}
                  />
                  <span className="text-lg">{service.title}</span>
                </button>
              ))}
            </motion.div>

            <div className="lg:col-span-2 relative">
              <AnimatePresence mode="wait">
                {activeService && (
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-0 md:p-6 rounded-lg"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="lg:col-span-1 w-full h-[53vh] overflow-hidden rounded-lg shadow-xl">
                        <img
                          src={activeService.image}
                          alt={activeService.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      <div className="lg:col-span-1 space-y-6 pt-4 px-4 md:px-0">
                        <h3 className="text-3xl font-extrabold text-[#002A3A] border-b border-gray-100 pb-2">
                          {activeService.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-base">
                          {activeService.description}
                        </p>

                        <div className="space-y-3">
                          {activeService.points.map((point, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-[#0B5E5F] flex-shrink-0 mt-1" />
                              <p className="text-gray-700 font-medium text-sm">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>

                        <motion.button
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                          className="bg-[#0B5E5F] hover:bg-[#084546] text-white px-8 py-3 rounded-md flex items-center gap-3 font-bold transition-all uppercase tracking-wider shadow-[0_5px_15px_rgba(11,94,95,0.4)] transform hover:-translate-y-0.5 mt-6"
                        >
                          WHATSAPP US
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      
      className="w-full h-[30vh] max-md:h-full bg-[url('/9a.webp')] bg-cover bg-center bg-no-repeat mt-20">
        <div className="w-full h-full bg-[#000000d0] text-center flex flex-col justify-center items-center px-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          className="text-2xl font-bold text-white">
            Trusted & Recognized Mobile Tyre and Battery Service in Dubai
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.3 }}
          className="text-white pt-5">
            We take pride in being one of Dubai’s most reliable mobile tyre and
            battery service providers. Backed by a team of skilled technicians
            and advanced tools, we deliver fast, professional, and dependable
            automotive care right at your doorstep. Over the years, our
            dedication to quality service has earned us recognition and the
            trust of countless customers across the UAE. Rely on us for tyre
            repairs, battery replacements, and emergency assistance, all
            delivered with the highest standard of professionalism and care.
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}

export default Services;
