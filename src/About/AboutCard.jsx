import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Wrench, ShieldCheck } from "lucide-react";

function AboutCard() {
  const highlights = [
    {
      id: 1,
      icon: <Clock className="w-10 h-10" />,
      title: "24/7 Roadside Assistance",
      text: "Car troubles don’t wait for the right time, and neither do we. With our 24/7 roadside support, you can count on us anytime, anywhere in Dubai. Whether it’s a flat tyre, dead battery, or emergency breakdown, we’re just a call away to get you back on the road.",
    },
    {
      id: 2,
      icon: <Users className="w-10 h-10" />,
      title: "Expert & Reliable Team",
      text: "Our strength lies in our people. With years of hands-on experience, our dedicated technicians deliver professional and trustworthy tyre and battery services. From quick fixes to complex jobs, you can always rely on our expertise and commitment.",
    },
    {
      id: 3,
      icon: <Wrench className="w-10 h-10" />,
      title: "Advanced Tools & Equipment",
      text: "We believe precision comes with the right tools. That’s why we use modern, high-tech equipment to provide accurate, efficient, and reliable services for your vehicle. Enjoy the peace of mind that comes with cutting-edge technology.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default AboutCard;
