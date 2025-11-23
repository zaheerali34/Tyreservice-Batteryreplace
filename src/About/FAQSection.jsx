import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function FAQSection () {
    const [activeIndex, setActiveIndex] = useState(0); // First one open by default

    const faqs = [
        {
            question: "Do you really provide tyre repair services 24/7 in Dubai?",
            answer: "Yes, we operate round-the-clock to ensure you’re never stranded on the road. Whether it’s midnight on Sheikh Zayed Road or early morning in Jumeirah, our mobile team reaches your location quickly. Our 24/7 tyre repair in Dubai covers puncture fixes, tyre replacements, and emergency roadside assistance, so you can drive with confidence any time of the day."
        },
        {
            question: "What makes your mobile tyre service different from a regular tyre shop?",
            answer: "Unlike traditional tyre shops, we bring the workshop to you. Our mobile vans are fully equipped with state-of-the-art tools and modern equipment, allowing us to handle everything from flat tyre repair and new tyre installation to wheel balancing and battery replacements on-site. This saves you valuable time, eliminates towing hassles, and ensures the same level of quality you’d expect from a top tyre shop in Dubai."
        },
        {
            question: "How long does it take to replace or repair a tyre on-site?",
            answer: "In most cases, a standard tyre puncture repair or battery jump-start takes about 20–30 minutes, while a complete tyre replacement may take 30–45 minutes depending on the vehicle type and tyre size. Our team aims to provide fast yet precise service, ensuring you’re back on the road with minimal downtime."
        },
        {
            question: "Do you only offer tyre repair, or do you also provide battery services?",
            answer: "Along with tyre repair and replacement, we also specialize in battery-related services. These include battery testing, car jump-starts, and battery installation using high-quality products. Our technicians ensure that your car’s electrical system is working smoothly, and we provide guidance on choosing the right battery for your vehicle to avoid future breakdowns."
        },
        {
            question: "What areas of Dubai do you cover for emergency roadside tyre and battery services?",
            answer: "We provide emergency roadside assistance throughout Dubai, including key areas such as Dubai Marina, Jumeirah, JLT, JVC, Sports City, Emirates Hills, and Downtown. Our mobile vans are strategically positioned across the city, allowing us to respond quickly and efficiently no matter where you are located."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="py-24 bg-white font-sans" id="faq" ref={ref}>
            <div className="max-w-4xl mx-auto px-6">
                <motion.div 
                    initial="hidden" 
                    animate={isInView ? "visible" : "hidden"} 
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <span className="text-[#0B5E5F] font-bold uppercase tracking-widest text-sm mb-2 block">// HELP & SUPPORT //</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#002A3A]">Frequently Asked Questions</h2>
                    <div className="h-1 w-20 bg-[#0B5E5F] mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <motion.div 
                    initial="hidden" 
                    animate={isInView ? "visible" : "hidden"} 
                    variants={staggerContainer}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            variants={fadeInUp}
                            className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                                activeIndex === index ? 'border-[#0B5E5F] shadow-md' : 'border-gray-200'
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full flex items-center justify-between p-5 text-left font-bold transition-colors duration-300 ${
                                    activeIndex === index 
                                    ? 'bg-[#0B5E5F]/5 text-[#0B5E5F]' // Using Teal theme for active state instead of red to match site
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <span className="pr-8">Q{index + 1}: {faq.question}</span>
                                <ChevronDown 
                                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                                        activeIndex === index ? 'transform rotate-180 text-[#0B5E5F]' : 'text-gray-400'
                                    }`} 
                                />
                            </button>
                            
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed bg-[#0B5E5F]/5 border-t border-[#0B5E5F]/10">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } // Custom easing for smoothness
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

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: "backOut" }
  }
};

export default FAQSection;