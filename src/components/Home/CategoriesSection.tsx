import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Music, Mic, Heart, Coffee, Monitor } from "lucide-react";
import { Link } from "react-router";

const categories = [
  {
    id: 1,
    name: "Conferences",
    icon: Briefcase,
    count: "120 Events",
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  {
    id: 2,
    name: "Concerts",
    icon: Music,
    count: "50 Events",
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  {
    id: 3,
    name: "Workshops",
    icon: Monitor,
    count: "85 Events",
    bg: "bg-indigo-100",
    text: "text-indigo-700",
  },
  {
    id: 4,
    name: "Networking",
    icon: Coffee,
    count: "90 Events",
    bg: "bg-amber-100",
    text: "text-amber-700",
  },
  {
    id: 5,
    name: "Seminars",
    icon: Mic,
    count: "45 Events",
    bg: "bg-rose-100",
    text: "text-rose-700",
  },
  {
    id: 6,
    name: "Charity",
    icon: Heart,
    count: "30 Events",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Explore by Category
            </h2>
            <p className="text-gray-500">
              Discover events that match your professional and personal
              interests.
            </p>
          </div>
          <Link
            to={"/events"}
            className="btn btn-outline border-slate-200 hover:border-primary hover:bg-primary hover:text-white rounded-full normal-case"
          >
            View All Categories
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer group text-center"
            >
              <div
                className={`w-14 h-14 mx-auto ${cat.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <cat.icon size={26} className={cat.text} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-400 font-medium">{cat.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
