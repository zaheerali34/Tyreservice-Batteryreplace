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
    icon: Settings, 
    title: "Battery Installation & Replacement in Dubai",
    description:
      "Are You Looking For a Mobile Car Battery Replacement in Dubai? Picture this: You're all set to leave an important meeting, but as you turn the key, silence. A dead battery! No need to stress. Our Mobile Battery Installation & Replacement Service in Dubai is here to save your day. Whether your car refuses to start in a mall parking lot, at home, or on a busy Dubai street, our expert team will reach you quickly. We'll test your old battery, recommend the right replacement, and install it on the spot so you can get back on track without wasting time. Here's why drivers choose us ",
    points: [
      " Genuine Car Batteries: We only supply high-quality, long-lasting batteries from trusted brands to ensure reliable performance.",
      " Expert Installation: Our technicians are trained to fit your battery safely and efficiently, minimizing downtime.",
      " 24/7 Emergency Help: Day or night, we're always ready to replace your dead battery anywhere in Dubai.",
    ],
    image: "/services 2.webp",
  },
  {
    id: "Tyre Repair Services",
    icon: Battery,
    title: "Battery Installation",
    description:
      "Need Quick & Reliable Tyre Repair in Dubai? Flat tyre in the middle of your journey? We know how frustrating that can be. That's why our On-the-Spot Tyre Repair Service is designed to bring peace of mind wherever you are in Dubai. Imagine being stuck with a puncture at night, instead of waiting hours for a tow, just give us a call! Our mobile team arrives with advanced tools, fixes your puncture safely, and gets you rolling again in no time. What you get with us:",
    points: [
      "  Professional Puncture Repair: We use advanced sealing and patching methods to restore your tyre's safety.",
      " Mobile Tyre Service: No need to visit a shop, our team comes directly to you.",
      " Durable Results: Our repairs are designed to last, giving you safe miles ahead.",
    ],
    image: "/services 1.webp",
  },
  {
    id: "Tyre Installation & Replacement",
    icon: Truck,
    title: "Tyre Installation",
    description:
      "Searching for Emergency Tyre Installation in Dubai? Driving with worn-out tyres is risky, and a sudden burst can ruin your journey. But here's the good news: with our Mobile Tyre Installation & Replacement Service, you don't have to stress. Stranded on Sheikh Zayed Road, stuck at your villa, or parked at a mall? Our team arrives with a wide range of premium tyres, installs them quickly, and ensures perfect fitting so you can hit the road again with full confidence. Here's why we stand out:",
    points: [
      " Premium Tyre Brands: We stock tyres from world-class manufacturers for maximum safety and performance.",
      " Fast On-Site Replacement: Get new tyres installed wherever you are, roadside, home, or office.",
      " Safe & Precise Fitting: Our technicians ensure balanced, secure installation for smooth driving.",
    ],
    image: "/services 3.webp",
  },
  {
    id: "car-jump-start",
    icon: Zap,
    title: "Car Jump Start",
    description:
      "Looking for Emergency Car Jump Start in Dubai? Nothing feels worse than turning the key and hearing just a click. Dead batteries can leave you stuck anywhere, but we've got your back with our 24/7 Car Jump Start Service in Dubai. Whether your car has been idle too long or the battery suddenly drains, our team arrives with the right tools to revive it instantly. No delays, no worries, just fast, professional help when you need it most. Why trust us?",
    points: [
      " Quick Response Team: Our mobile crew reaches you promptly to get your car running again.",
      " Safe Jump-Start Methods: We use modern tools to protect your vehicle's electrical system during the boost.",
      " Always Available: Day, night, weekends, or holidays, we're just one call away.",
    ],
    image: "/services 4.webp",
  },
];

function OurServices() {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeTab);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      <section
        className="w-full h-full py-24 font-sans max-md:h-[210vh]"
        ref={ref}
      >
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
              Explore Our Services
              <Car className="text-gray-700 w-8 h-8 scale-x-[-1]" />
            </h2>
            <div className="h-1 w-20 bg-[#0B5E5F] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="w-full h-[50vh] grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-2 items-start">
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
                    className="bg-white rounded-lg pl-5"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="lg:col-span-1 w-full h-[60vh] overflow-hidden rounded-lg shadow-xl">
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
    </>
  );
}

export default OurServices;
