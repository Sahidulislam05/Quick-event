// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import FuzzyText from "../Shared/FuzzyText";

const stats = [
  { label: "Active Events", value: "10K" },
  { label: "Happy Users", value: "2M" },
  { label: "Satisfaction", value: "99%" },
];

const StatsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20 bg-white border-y border-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-600 mb-6 shadow-sm">
            Creating moments that matter
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-[2rem] hover:border-gray-300 transition-colors duration-300 group cursor-default"
            >
              <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
                <FuzzyText
                  fontSize="clamp(3rem, 5vw, 4rem)"
                  fontWeight={900}
                  fontFamily="inherit"
                  color="#1A1A1A"
                  enableHover={true}
                  baseIntensity={0.05}
                  hoverIntensity={0.4}
                >
                  {stat.value}
                </FuzzyText>
              </div>
              <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
