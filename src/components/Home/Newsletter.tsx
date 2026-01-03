// @ts-nocheck
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Heading from "../Shared/heading/Heading";
import Paragraph from "../Shared/heading/Paragraph";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handlebtn = (e) => {
    e.preventDefault();
    toast.success("Subscribed! Check your email");
    setEmail("");
  };

  return (
    <section className="bg-[#fafafa] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Subscribe to our newsletter
            </Heading>
            <Paragraph className="text-lg text-gray-600">
              Subscribe to our newsletter and never miss our latest news.
            </Paragraph>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Enter Your E-Mail Adress
            </label>
            <form onSubmit={handlebtn} className="flex gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-Mail Address"
                  className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                />
                <svg
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full px-5 cursor-pointer font-bold bg-primary text-white hover:bg-black hover:text-white transition-colors duration-300"
              >
                Get started
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
