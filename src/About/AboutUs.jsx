import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutImg from "/about.webp";
import { ArrowRight } from "lucide-react";

function AboutUs() {
  const points = [
    {
      number: "01",
      title: "Leading the Way in Mobile Tyre & Battery Services",
      description:
        "Looking for more than just a repair? Our dedicated team combines hands-on expertise with advanced tools to deliver reliable tyre and battery solutions wherever you are. Whether you need mobile tyre fitting, emergency puncture repair, or a professional battery replacement in Dubai, we’re always ready to assist. Trust us to deliver with precision, speed, and care, every single time.",
    },
    {
      number: "02",
      title: "Your Reliable Hub for Quality Care",
      description:
        "At Tyre Service – Battery Replace, your vehicle’s performance and safety come first. We provide everything from quick roadside support to complete servicing with the same attention to detail. Our quality servicing standards ensure your tyres, batteries, and overall vehicle systems run smoothly. With us, you don’t just get a service, you gain a dependable partner committed to keeping you stress-free on the road.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-gray-50 font-sans" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[83vh] w-full bg-gray-300 rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src={AboutImg}
              alt="Tyre workshop background"
              className="w-full h-full object-cover grayscale opacity-90"
            />

            <div className="absolute top-0 right-0 h-full w-1/3 bg-black/70 flex flex-col justify-center items-center text-white p-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-6xl font-extrabold tracking-tight"
              >
                15
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="text-lg font-medium tracking-wide uppercase mt-1 text-center"
              >
                Years <br /> of Service
              </motion.span>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[#0B5E5F] font-bold uppercase tracking-widest text-sm block"
            >
              // ABOUT US //
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl font-extrabold text-[#002A3A] leading-tight"
            >
              About Tyre Service - Battery Replace | Your Trusted Partner for Tyre & Battery Solutions in Dubai
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-sm leading-relaxed border-l-4 border-[#0B5E5F]/50 pl-4 py-1"
            >
              Welcome to Tyre Service - Battery Replace, your reliable name in mobile tyre and battery services in Dubai! Since 2024, we’ve been committed to making roadside assistance faster, safer, and more convenient for drivers across the UAE. Our mission is simple: to keep you moving with confidence, whether it’s a quick tyre repair, a brand-new installation, or an urgent battery replacement at your location.
            </motion.p>

              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-sm leading-relaxed border-l-4 border-[#0B5E5F]/50 pl-4"
            >
              With round-the-clock support and a growing network of trusted distributors, we’ve become the go-to solution for motorists who value efficiency, expertise, and quality. From emergency breakdowns to planned maintenance, we’re here to ensure your journey continues without interruptions.
            </motion.p>

            <div className="space-y-6 pt-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B5E5F] flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {point.number}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#002A3A] mb-1">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="bg-[#0B5E5F] hover:bg-[#084546] text-white px-8 py-4 rounded-md flex items-center gap-3 font-bold transition-all uppercase tracking-wider shadow-[0_10px_30px_rgba(11,94,95,0.4)] hover:shadow-[0_10px_40px_rgba(11,94,95,0.6)] transform hover:-translate-y-1 mt-6"
            >
              WHATSAPP US
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
