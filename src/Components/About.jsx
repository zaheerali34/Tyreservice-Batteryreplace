import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutImg from "/about.webp";
import { ArrowRight } from "lucide-react";

function About() {
  const points = [
    {
      number: "01",
      title: "Skilled & Certified Technicians",
      description:
        "Our team of trained specialists ensures every job, from a simple tyre change to complex battery diagnostics, is done with accuracy, safety, and care.",
    },
    {
      number: "02",
      title: "Convenient Mobile Service",
      description:
        "Why waste time at a workshop? We bring the service to your doorstep or roadside, saving you time while ensuring your vehicle is always ready for the road.",
    },
    {
      number: "03",
      title: "Affordable Pricing with Assurance",
      description:
        "Get the best of both worlds, competitive rates and reliable warranty on tyres and batteries. With us, you’ll always know you’re getting value you can trust.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-gray-50 font-sans" id="about" ref={ref}>
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

          <div className="space-y-8">
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
              className="text-4xl font-extrabold text-[#002A3A] leading-tight"
            >
              Your Go-To Mobile Tyre & Battery Experts in Dubai
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-base leading-relaxed border-l-4 border-[#0B5E5F]/50 pl-4 py-1"
            >
              Since 2024, we’ve been providing on-site tyre replacement and
              battery solutions across Dubai. Our mission is to keep drivers
              safe and stress-free with fast, professional, and reliable
              roadside support, anytime, anywhere.
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

export default About;
