import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import SlierImage from "/slider imge.webp";

const PRIMARY_COLOR = "#0B5E5F";
const SECONDARY_COLOR = "#002A3A";

const clientsData = [
  {
    name: "Ahmed Al-Mansouri",
    location: "Dubai",
    testimonial:
      "My car battery died at 2 AM in the middle of nowhere. Called these guys and they arrived within 20 minutes! The technician was professional, tested my old battery, and installed a new one quickly. The quality battery they provided has been working perfectly for months. Excellent 24/7 emergency service!",
    Image: SlierImage,
  },
  {
    name: "Ahmed Al-Mansouri",
    location: "Dhabi",
    testimonial:
      "My car wouldn't start in a mall parking lot at 10 PM. Called for jump start service and they arrived in just 12 minutes! The technician was very professional, used proper tools to protect my car's electrical system, and had me running again instantly. Their 24/7 availability is a lifesaver. Excellent roadside assistance!",
    Image: SlierImage,
  },
  {
    name: "Mohammed Hassan",
    location: "Sharjah",
    testimonial:
      "Needed new tyres for my SUV and these guys provided the perfect solution. They helped me choose the right premium brand tyres for my vehicle. The professional installation was flawless - proper mounting, balancing, and alignment. The safety checks they performed gave me confidence. Great service and fair pricing!",
    Image: SlierImage,
  },
  {
    name: "Jennifer Rodriguez",
    location: "Dhabi",
    testimonial:
      "My car wouldn't start in a mall parking lot at 10 PM. Called for jump start service and they arrived in just 12 minutes! The technician was very professional, used proper tools to protect my car's electrical system, and had me running again instantly. Their 24/7 availability is a lifesaver. Excellent roadside assistance!",
    Image: SlierImage,
  },
];

const sortedClients = clientsData.sort((a, b) => a.name.localeCompare(b.name));

const TestimonialCard = ({ client, index }) => {
  const delay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-4 md:px-6 py-14 h-full rounded-3xl shadow-xl border border-gray-100 bg-white/95 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-center mb-6">
        <div
          className={`w-20 h-20 rounded-full bg-gray-200 mb-3 border-4 border-[${PRIMARY_COLOR}]/80 shadow-lg group-hover:border-yellow-400 transition-colors duration-300`}
        >
          <img
            src={client.Image}
            alt={client.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h4 className={`text-xl font-bold text-[${SECONDARY_COLOR}]`}>
          {client.name}
        </h4>
        <p className="text-sm font-medium text-gray-500">{client.location}</p>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-base italic leading-relaxed relative">
        <span className="text-6xl absolute -top-8 left-0 opacity-10 text-gray-400 font-serif transform -translate-x-full">
          “
        </span>
        {client.testimonial}
        <span className="text-6xl absolute -bottom-8 right-0 opacity-10 text-gray-400 font-serif transform translate-x-full">
          ”
        </span>
      </p>

      {/* Custom Background element (mimics the screenshot - subtle background gradient) */}
      <div
        className={`absolute inset-0 -z-10 rounded-3xl transition-opacity duration-300`}
        style={{
          background: `linear-gradient(to bottom right, ${PRIMARY_COLOR}0A, ${SECONDARY_COLOR}0A)`,
        }}
      ></div>
    </motion.div>
  );
};

function Slider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const swiperContainerRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  const prevButtonId = "custom-swiper-prev";
  const nextButtonId = "custom-swiper-next";
  const paginationId = "custom-swiper-pagination";

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const swiperJsUrl =
      "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
    const swiperCssUrl =
      "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";

    if (!document.querySelector(`link[href="${swiperCssUrl}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = swiperCssUrl;
      document.head.appendChild(link);
    }

    function initializeSwiper() {
      if (window.Swiper && swiperContainerRef.current) {
        const styleId = "custom-swiper-styles";
        if (!document.getElementById(styleId)) {
          const style = document.createElement("style");
          style.id = styleId;
          style.textContent = `
                        /* Custom CSS variables aur styles */
                        :root {
                            --primary-color: ${PRIMARY_COLOR};
                        }
                        
                        .custom-swiper-bullet {
                            background-color: #cbd5e1; /* Gray-300 */
                            width: 10px;
                            height: 10px;
                            opacity: 1;
                            transition: background-color 0.3s, width 0.3s;
                            border-radius: 50%;
                        }
                        .custom-swiper-bullet-active {
                            background-color: var(--primary-color);
                            width: 28px; /* Increase width for active bullet */
                            border-radius: 5px; /* Make it pill-shaped */
                        }
                        /* Swiper navigation buttons ko target karein */
                        .swiper-button-prev, .swiper-button-next {
                            color: var(--primary-color) !important;
                            background-color: white !important;
                            border-radius: 9999px;
                            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                            width: 48px;
                            height: 48px;
                            transition: all 0.3s;
                        }
                        .swiper-button-prev:hover, .swiper-button-next:hover {
                            background-color: var(--primary-color) !important;
                            color: white !important;
                            transform: scale(1.1);
                        }
                    `;
          document.head.appendChild(style);
        }

        const swiper = new window.Swiper(swiperContainerRef.current, {
          breakpoints: {
            640: { slidesPerView: 1.1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          },
          slidesPerView: 1.1,
          spaceBetween: 20,
          loop: true,
          centeredSlides: false,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          navigation: {
            prevEl: `#${prevButtonId}`,
            nextEl: `#${nextButtonId}`,
          },
          pagination: {
            el: `#${paginationId}`,
            clickable: true,
            bulletClass: "custom-swiper-bullet",
            bulletActiveClass: "custom-swiper-bullet-active",
          },
          on: {
            init: function () {
              this.slides.forEach((slide) => (slide.style.width = ""));
            },
          },
        });

        swiperInstanceRef.current = swiper;
      }
    }

    if (!document.querySelector(`script[src="${swiperJsUrl}"]`)) {
      const script = document.createElement("script");
      script.src = swiperJsUrl;
      script.onload = initializeSwiper;
      document.head.appendChild(script);
    } else {
      setTimeout(initializeSwiper, 100);
    }

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, []);

  const slidePrev = () => swiperInstanceRef.current?.slidePrev();
  const slideNext = () => swiperInstanceRef.current?.slideNext();

  return (
    <section className="py-24 bg-gray-50 font-sans overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 relative"
        >
          <span
            className={`text-[${PRIMARY_COLOR}] font-bold uppercase tracking-widest text-sm`}
          >
            // CLIENT FEEDBACK //
          </span>
          <h2
            className={`text-4xl md:text-3xl font-extrabold text-[${SECONDARY_COLOR}] mt-2`}
          >
            Our Clients Say!
          </h2>
        </motion.div>

        <div className="relative">
          <div ref={swiperContainerRef} className="swiper mySwiper pt-4 pb-12">
            <div className="swiper-wrapper">
              {sortedClients.map((client, index) => (
                <div key={client.name} className="swiper-slide h-auto">
                  <div className="h-full">
                    <TestimonialCard client={client} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 md:px-0 z-10">
            <motion.button
              id={prevButtonId}
              onClick={slidePrev}
              whileHover={{ scale: 1.1, backgroundColor: PRIMARY_COLOR }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full border-2 border-[${PRIMARY_COLOR}] text-[${PRIMARY_COLOR}] hover:text-white transition-colors duration-300 bg-white shadow-lg ml-[-1rem] md:ml-[-2rem]`}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              id={nextButtonId}
              onClick={slideNext}
              whileHover={{ scale: 1.1, backgroundColor: PRIMARY_COLOR }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full border-2 border-[${PRIMARY_COLOR}] text-[${PRIMARY_COLOR}] hover:text-white transition-colors duration-300 bg-white shadow-lg mr-[-1rem] md:mr-[-2rem]`}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div
            id={paginationId}
            className="swiper-pagination mt-4 flex justify-center space-x-2"
          ></div>
        </div>

        <style jsx="true">{`
          /* Custom styles are now dynamically injected in useEffect to ensure proper loading */
        `}</style>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[40vh] max-md:h-full bg-[url('/9a.webp')] bg-cover bg-center bg-no-repeat mt-20"
      >
        <div className="w-full h-full bg-[#000000d0] text-center flex flex-col justify-center items-center px-6">
          <h1 className="text-2xl font-bold text-white">Trusted by</h1>
          <div className="w-full flex flex-wrap justify-center items-center gap-6 mt-6 py-6">
            <img src="/logo/1.png" alt="" className="w-44" />
            <img src="/logo/2.png" alt="" className="w-44" />
            <img src="/logo/3.png" alt="" className="w-44" />
            <img src="/logo/4.png" alt="" className="w-44" />
            <img src="/logo/5.jpg" alt="" className="w-44" />
            <img src="/logo/6.png" alt="" className="w-44" />
            <img src="/logo/7.png" alt="" className="w-44" />
            <img src="/logo/8.png" alt="" className="w-44" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Slider;
