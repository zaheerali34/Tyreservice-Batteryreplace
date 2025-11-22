import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, Users, Check } from "lucide-react";

function CounterSection() {
  const facts = [
    { icon: Check, number: 15, text: "Years of Service" },
    { icon: Users, number: 20, text: "Expert Technicians" },
    { icon: Users, number: 1200, text: "Satisfied Clients" },
    { icon: Car, number: 20, text: "No of Services" },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  return (
    <section
      className="relative py-20 overflow-hidden font-sans"
      ref={containerRef}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/12a.webp)`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="mb-4 text-white p-3 rounded-full bg-white/10"
              >
                <fact.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>

              <AnimatedCounter to={fact.number} duration={1500 + index * 100} />

              <p className="text-sm md:text-base font-medium uppercase tracking-wide text-gray-300 mt-2">
                {fact.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ to, duration }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = parseInt(to);
    if (start === end) return;
    let incrementTime = duration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [to, duration]);
  return (
    <span className="text-2xl md:text-4xl font-bold text-white">{count}</span>
  );
}

export default CounterSection;
