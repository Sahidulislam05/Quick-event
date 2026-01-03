import React from "react";
import { Search, CalendarCheck, Zap, Ticket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: Search,
        title: "Discover",
        description: "Find events that spark your interest in seconds.",
        color: "bg-blue-50 text-blue-600",
    },
    {
        icon: Ticket,
        title: "Book",
        description: "Secure your tickets instantly with our fast checkout.",
        color: "bg-purple-50 text-purple-600",
    },
    {
        icon: CalendarCheck,
        title: "Attend",
        description: "Receive updates and check-in seamlessly at the venue.",
        color: "bg-indigo-50 text-indigo-600",
    },
    {
        icon: Zap,
        title: "Manage",
        description: "Organizers can track real-time analytics and checking.",
        color: "bg-amber-50 text-amber-600",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 mb-4">
                        How QuickEvent Works
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        The fastest path from discovery to experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-6 text-xl group-hover:scale-110 transition-transform duration-300`}
                            >
                                <step.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {step.description}
                            </p>

                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-200">
                                    →
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
