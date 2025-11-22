import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, ArrowRight, MessageCircle } from 'lucide-react';

const HeroSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      bgImage: "/12a.webp", 
      floatingImage: "/19a.webp", 
      subtitle: "// CAR SERVICING //",
      title: "Fast Tyre Service & Battery Replacement - 24/7 Support in Dubai",
      description: "Stay safe on the road with our round-the-clock tyre repair. Quick response and expert care, anytime you need us."
    },
    {
      id: 2,
      bgImage: "/11a.webp",
      // Oil bottles PNG example
      floatingImage: "/26a.webp", 
      subtitle: "// OIL CHANGE //",
      title: "Your Trusted 24/7 Partner for Tyre Repairs & Battery Assistance in Dubai",
    }
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [0, -20, 0], 
      transition: {
        duration: 4, 
        repeat: Infinity,   
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-slate-900 group overflow-hidden">
      
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect={'fade'}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full">
                
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                >
                   <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
                </div>

                <div className="w-full relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 lg:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    
                    <div className="text-white max-w-2xl">
                      <motion.div
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                        variants={textVariants}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-4 font-bold text-sm tracking-wider uppercase italic text-[#006d77]"
                      >
                        {slide.subtitle}
                      </motion.div>

                      <motion.h1
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                        variants={textVariants}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight mb-6"
                      >
                        {slide.title} <br />
                        <span className="text-gray-300">{slide.highlight}</span>
                      </motion.h1>

                      <motion.p
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                        variants={textVariants}
                        transition={{ delay: 0.6 }}
                        className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.8 }}
                        className="bg-[#006d77] hover:bg-[#005f6b] text-white font-bold py-4 px-8 rounded-sm flex items-center gap-2 transition-all uppercase tracking-wider"
                      >
                        Call Us Now
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>

                    <div className="hidden lg:flex justify-center items-center relative">
                         <div className="absolute w-[400px] h-[400px] bg-[#006d77]/20 rounded-full blur-3xl"></div>

                        
                         
                         {isActive && (
                            <motion.div
                                className="absolute inset-0 flex justify-center items-center pointer-events-none"
                                variants={floatingAnimation}
                                initial="initial"
                                animate="animate"
                            >
                            </motion.div>
                         )}
                         
                         {isActive && (
                             <motion.img
                                src={slide.floatingImage}
                                className="relative z-20 w-[80%] object-contain drop-shadow-2xl"
                                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1, 
                                    x: 0,
                                    y: [0, -15, 0] 
                                }}
                                transition={{
                                    opacity: { duration: 0.5 },
                                    x: { duration: 0.5 },
                                    y: { 
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                             />
                         )}
                    </div>

                  </div>
                </div>

              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="fixed left-6 bottom-20 z-20 flex flex-col gap-2">
        <a href="#" className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-md shadow-lg"><MessageCircle className="w-6 h-6" /></a>
        <a href="#" className="bg-[#006d77] hover:bg-[#005f6b] text-white p-3 rounded-md shadow-lg"><Phone className="w-6 h-6" /></a>
      </div>
      <button onClick={() => swiperRef.current?.slidePrev()} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white p-2 hidden md:block"><ChevronLeft className="w-12 h-12" /></button>
      <button onClick={() => swiperRef.current?.slideNext()} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white p-2 hidden md:block"><ChevronRight className="w-12 h-12" /></button>

    </div>
  );
};

export default HeroSlider;