import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Whatsapp icon ko MessageSquare se badal diya gaya hai taaki Lucide-React mein compatibility error theek ho sake.
import { MapPin, Phone, Clock, ChevronUp, MessageSquare, PhoneCall } from 'lucide-react';

const Footer = () => {
    // Current year nikalne ke liye
    const currentYear = new Date().getFullYear();
    // Scroll to Top button ki visibility control karne ke liye state
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    // Scroll event listener for "Scroll to Top" button
    useEffect(() => {
        const handleScroll = () => {
            // Agar 300px se zyada scroll kiya hai, toh button dikhao
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup function for event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Page ko smoothly top par scroll karne ka function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Animation variants for footer sections (Staggered fade-in)
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    // Animation variants for floating buttons (Slide-in from left)
    const floatButtonVariants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.8 } }
    };

    // WhatsApp aur Call links (Kripya in numbers ko update karein)
    const whatsappLink = "https://wa.me/+971525623674"; 
    const callLink = "tel:+971525623674"; 

    return (
        // Footer Component: Initial hidden, animate when in view
        <motion.footer 
            className="bg-gray-950 text-gray-300 relative py-16 md:pt-24 pb-8 overflow-hidden font-inter"
            initial="hidden"
            // Jab user footer tak scroll karega tab animation shuru hogi
            whileInView="visible"
            // Viewport settings: ek baar animate ho aur 30% dikhne par shuru ho
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Background pattern - (Aapki photo ke dark theme ko aur behtar banane ke liye) */}
            <div className="absolute inset-0 z-0 opacity-5" style={{ 
                backgroundImage: `url('/footer.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}></div>

            {/* Main Content Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                {/* 1. Address Section */}
                <motion.div variants={sectionVariants} className="flex flex-col items-start">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006D77] mb-6 border-b-2 border-[#006D77] pb-2">Address</h3>
                    <address className="not-italic space-y-4">
                        {/* Map Location */}
                        <motion.div whileHover={{ x: 5 }} className="flex items-start text-lg transition-transform duration-200">
                            <MapPin className="w-6 h-6 mr-3 text-[#006D77] flex-shrink-0" />
                            <span>Dubai, United Arab Emirates</span>
                        </motion.div>
                        {/* Phone Contact */}
                        <motion.div whileHover={{ x: 5 }} className="flex items-center text-lg transition-transform duration-200">
                            <Phone className="w-6 h-6 mr-3 text-[#006D77]" />
                            <a href={callLink} className="hover:text-white transition-colors">+971 52 562 3674</a>
                        </motion.div>
                        {/* WhatsApp Contact */}
                        <motion.div whileHover={{ x: 5 }} className="flex items-center text-lg transition-transform duration-200">
                            <MessageSquare className="w-6 h-6 mr-3 text-[#006D77]" /> {/* Icon change: MessageSquare */}
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+971 52 562 3674</a>
                        </motion.div>
                    </address>
                </motion.div>

                {/* 2. Opening Hours Section */}
                <motion.div 
                    variants={sectionVariants} 
                    transition={{ delay: 0.1, ...sectionVariants.visible.transition }}
                >
                    <h3 className="text-xl md:text-2xl font-bold text-[#006D77] mb-6 border-b-2 border-[#006D77] pb-2">Opening Hours</h3>
                    <motion.div whileHover={{ x: 5 }} className="flex items-center text-lg transition-transform duration-200">
                        <Clock className="w-6 h-6 mr-3 text-[#006D77]" />
                        <span>Available 24/7 for<br />Emergency Car Services in Dubai</span>
                    </motion.div>
                </motion.div>

                {/* 3. Our Services Section */}
                <motion.div 
                    variants={sectionVariants} 
                    transition={{ delay: 0.2, ...sectionVariants.visible.transition }}
                >
                    <h3 className="text-xl md:text-2xl font-bold text-[#006D77] mb-6 border-b-2 border-[#006D77] pb-2">Our Services</h3>
                    <ul className="space-y-3">
                        {['Mobile Tire Replacement', 'Flat Tire Assistance', 'Battery Boost & Replacement', 'Pre-RTA Vehicle Inspection', 'New Tire Installation', 'General Auto Repairs', 'Car Wash & Detailing'].map((service, index) => (
                            <motion.li key={index} whileHover={{ x: 5 }} className="flex items-center text-lg transition-transform duration-200">
                                <span className="text-[#006D77] text-xl mr-3">&gt;</span>
                                <a href="#" className="hover:text-white transition-colors">{service}</a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* 4. About Us Section */}
                <motion.div 
                    variants={sectionVariants} 
                    transition={{ delay: 0.3, ...sectionVariants.visible.transition }}
                >
                    <h3 className="text-xl md:text-2xl font-bold text-[#006D77] mb-6 border-b-2 border-[#006D77] pb-2">About Us</h3>
                    <p className="text-lg leading-relaxed">
                        We are one of the leading car service and tyre trading companies in the Middle East. Over the years, we have built a strong reputation for reliability, quality, and customer satisfaction. With a wide network of authorized distributors, we proudly cater to the automotive needs of customers across the UAE.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Bar: Copyright and Navigation */}
            <div className="relative z-10 border-t border-gray-700 mt-16 md:mt-24 pt-8 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
                    <p className="mb-4 md:mb-0">
                        &copy; {currentYear} TyreServiceBatteryReplace. All Right Reserved. Website Development By <a href="https://adevis.in" target="_blank" rel="noopener noreferrer" className="text-[#006D77] hover:text-white transition-colors">ADevIss</a>
                    </p>
                    <nav>
                        <ul className="flex space-x-6">
                            <motion.li whileHover={{ y: -3 }}><a href="#" className="hover:text-white transition-colors">Home</a></motion.li>
                            <motion.li whileHover={{ y: -3 }}><a href="#" className="hover:text-white transition-colors">About</a></motion.li>
                            <motion.li whileHover={{ y: -3 }}><a href="#" className="hover:text-white transition-colors">Services</a></motion.li>
                            <motion.li whileHover={{ y: -3 }}><a href="#" className="hover:text-white transition-colors">Contact</a></motion.li>
                        </ul>
                    </nav>
                </div>
            </div>

            <AnimatePresence>
                {showScrollToTop && (
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-20 right-8 z-50 bg-[#006D77] p-4 rounded-full shadow-lg hover:bg-teal-700 transition duration-300"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="w-8 h-8 text-white" />
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.footer>
    );
};

export default Footer;