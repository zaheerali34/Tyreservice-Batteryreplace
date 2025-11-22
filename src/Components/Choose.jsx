import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Choose() {
  const features = [
    {
      id: 1,
      image: "/1.webp",
      title: "Flat Tyre Repair",
      description:
        "A flat tyre can happen anytime, but with our expert team, you’re never left stranded. We provide quick and reliable flat tyre repair services across Dubai, available both at your location and our service center. Our goal is to get you back on the road safely with minimal downtime.",
    },
    {
      id: 2,
      image: "/2.webp",
      title: "Mobile Tyre Service",
      description:
        "No need to drive to a workshop, we bring the service to you. Our mobile tyre service is designed for your convenience, offering on-the-spot puncture repairs, tyre fittings, and inspections right at your doorstep or roadside. Wherever you are, help is just a call away.",
    },
    {
      id: 3,
      image: "/3.webp",
      title: "Tyre Replacement",
      description:
        "When your tyres are beyond repair, we’ve got you covered with top-quality new tyre replacements. Choose from a wide selection of branded tyres suited for all types of vehicles. Our skilled technicians ensure safe fitting and balancing for a smooth and secure driving experience.",
    },
    {
      id: 4,
      image: "/4.webp",
      title: "Customer Satisfaction",
      description:
        "At Tyre Service - Battery Replace, we prioritize your safety and comfort above all. Every service is carried out with professionalism, transparency, and care. From repairs to replacements, our focus is on delivering trusted solutions that give you confidence behind the wheel.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger animation when 30% of component is visible

  return (
    <section className="py-20 bg-gray-100 font-sans" id="features" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#0B5E5F] font-bold uppercase tracking-wider text-2xl block mb-2"
          >
            Why Choose Us
          </motion.span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 40px rgba(11,94,95,0.2)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden relative group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#0B5E5F] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Choose;
