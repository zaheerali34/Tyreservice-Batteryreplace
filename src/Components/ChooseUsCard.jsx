import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Wrench, ShieldCheck } from "lucide-react";

function ChooseUsCard() {
  const highlights = [
    {
      id: 1,
      icon: <Clock className="w-10 h-10" />,
      title: "24/7 Car Tyre & Battery Help in Dubai",
      text: "Flat tyre or dead battery? No need to stress. With our round-the-clock mobile service in Dubai, help is always nearby. We specialize in both tyre repair/replacement and on-site battery support, so you can get back on the road without delays.",
    },
    {
      id: 2,
      icon: <Users className="w-10 h-10" />,
      title: "Always Available Team",
      text: "Day or night, our responsive crew is ready to handle emergencies quickly. We don't just fix problems, we restore your peace of mind with fast, reliable roadside solutions wherever you are in Dubai.",
    },
    {
      id: 3,
      icon: <Wrench className="w-10 h-10" />,
      title: "Smart Tools & Mobile Vans",
      text: "Our service vans are fully equipped with the latest diagnostic tools and repair gear. From advanced tyre-changing machines to portable battery testers, we bring the workshop directly to your location.",
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Trusted Quality, Every Time",
      text: "We believe in providing dependable solutions that last. That's why we use only tested, high-quality tyres and genuine batteries, ensuring safety, durability, and value for every customer we serve.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#0B5E5F] font-bold uppercase tracking-wider text-sm">
            Why We Are Different
          </span>

          <div className="h-1 w-20 bg-[#0B5E5F] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-[#F8F9FA] p-8 rounded-lg group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0B5E5F] transition-colors duration-300">
                <div className="text-[#0B5E5F] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-[#002A3A] mb-4 leading-tight min-h-[3.5rem] flex items-center">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {item.text}
              </p>

              <a
                href="#"
                className="inline-flex items-center text-[#0B5E5F] font-bold text-sm hover:underline mt-auto group-hover:translate-x-1 transition-transform"
              >
                WhatsApp Us
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseUsCard;
