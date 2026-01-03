import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Heading from "../Shared/heading/Heading";
import Paragraph from "../Shared/heading/Paragraph";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Events at the Speed of Life",
      description:
        "Create, manage, and scale your events with the world's fastest growing platform.",
      buttonText: "Find Events",
      buttonLink: "/events",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Powerful Management Tools",
      description:
        "Everything you need to host verified conferences, workshops, and meetups in one place.",
      buttonText: "Start Hosting",
      buttonLink: "/register",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Connect & Celebrate",
      description:
        "Join a global community of creators and attendees making memories every day.",
      buttonText: "Explore Now",
      buttonLink: "/events",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const textVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { y: -20, opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Professional Grade Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Title */}
            <motion.div variants={textVariants}>
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
                {slides[currentSlide].title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={textVariants} transition={{ delay: 0.2 }}>
              <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
                {slides[currentSlide].description}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={textVariants}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <Link
                to={slides[currentSlide].buttonLink}
                className="inline-flex items-center justify-center px-5 md:px-10 py-5 text-lg font-bold text-white bg-primary rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
              >
                {slides[currentSlide].buttonText}
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-5 md:px-10 py-5 text-lg font-bold text-white border-2 border-white/30 hover:border-white rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots - Dynamic Position */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20 hidden md:flex">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-primary h-12"
                  : "bg-white/40 h-3 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Mobile Dots */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center gap-3 md:hidden">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/40 w-2 hover:bg-white/60"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
