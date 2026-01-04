import React from "react";
import { Zap, Users, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative px-6 max-w-7xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 mt-4">
            We are <span className="text-primary">QuickEvent</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The ultimate platform for seamless event management. We empower you
            to organize, connect, and celebrate with efficiency and style.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Community gathering"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At QuickEvent, we believe time is your most valuable asset. Our
              platform is designed to streamline every aspect of event planning,
              from ticketing to attendee management, so you can focus on the
              experience.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether it's a corporate conference or a local meetup, we provide
              the speed and tools you need to host successful, professional
              events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats / Values */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">1M+</h3>
              <p className="text-gray-500">Events Created</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">5M+</h3>
              <p className="text-gray-500">Active Users</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">50+</h3>
              <p className="text-gray-500">Countries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">99.9%</h3>
              <p className="text-gray-500">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Ready to scale?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of organizers who use QuickEvent to power their
          experiences. Start free today.
        </p>
        <Link
          to={"/"}
          className="btn bg-primary text-white hover:bg-emerald-700 rounded-full px-8 border-none"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default About;
