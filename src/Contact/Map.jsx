import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

function Map() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-[#F8F9FA] font-sans" id="contact-us" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-[#0B5E5F] font-bold uppercase tracking-widest text-sm mb-2 block">
            // CONTACT US //
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002A3A]">
            Contact For Any Query
          </h2>
          <div className="h-1 w-20 bg-[#0B5E5F] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Phone Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-sm shadow-md border-b-4 border-[#0B5E5F] hover:-translate-y-1 transition-transform duration-300"
          >
            <h4 className="text-[#0B5E5F] font-bold text-lg uppercase tracking-wider mb-4">
              // PHONE NO. //
            </h4>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="p-2 bg-[#0B5E5F] rounded-full text-white">
                <Phone className="w-5 h-5" />
              </div>
              <a
                href="tel:+971525623674"
                className="text-lg font-medium hover:text-[#0B5E5F] transition-colors"
              >
                +971 52 562 3674
              </a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-sm shadow-md border-b-4 border-[#0B5E5F] hover:-translate-y-1 transition-transform duration-300"
          >
            <h4 className="text-[#0B5E5F] font-bold text-lg uppercase tracking-wider mb-4">
              // EMAIL ADDRESS //
            </h4>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="p-2 bg-[#0B5E5F] rounded-full text-white">
                <Mail className="w-5 h-5" />
              </div>
              <a
                href="mailto:admin@tyreservice.ae"
                className="text-lg font-medium hover:text-[#0B5E5F] transition-colors"
              >
                admin@tyreservice.ae
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-sm shadow-md border-b-4 border-[#0B5E5F] hover:-translate-y-1 transition-transform duration-300"
          >
            <h4 className="text-[#0B5E5F] font-bold text-lg uppercase tracking-wider mb-4">
              // LOCATION //
            </h4>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="p-2 bg-[#0B5E5F] rounded-full text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium">
                Dubai, United Arab Emirates
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full h-[450px] rounded-sm overflow-hidden shadow-lg border-4 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011843013!2d54.947287526927106!3d25.076381466775672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};


export default Map;
