"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "John Doe",
        role: "Accountant",
        image: "/images/user.jpg",
        review: "Our trip to Sri Lanka was absolutely amazing. From Sigiriya to Mirissa, everything was perfectly organized. The safari in Yala was the highlight of our journey!",
    },
    {
        name: "John Smith",
        role: "Journalist, HWO News",
        image: "/images/user.jpg",
        review: "The train ride from Kandy to Ella was breathtaking. The team made everything smooth and stress-free. Highly recommended for anyone visiting Sri Lanka.",
    },
    {
        name: "Tamara B.",
        role: "Managing Director",
        image: "/images/user.jpg",
        review: "Beautiful beaches and rich culture. The cultural tour in Polonnaruwa was insightful. Will definitely visit again with my family!",
    }
];

export default function Reviews() {
    return (
        <section className="py-24 bg-white px-6 md:px-12 relative overflow-hidden">

            {/* Background Watermark (Moonstone/Sandakadapahana design) */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <img src="/images/moonstone-bg.png" className="w-full h-full object-contain object-right" alt="" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-[900] text-black tracking-tighter uppercase leading-none">
                        TRAVELER'S <span className="text-[#B48F00]">EXPERIENCES</span>
                    </h2>
                    <p className="text-gray-600 text-xl mt-4 font-medium">
                        Hear what our guests say about their Sri Lanka journey.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-[#F3F4F6] p-8 md:p-10 pt-16 rounded-[30px] shadow-sm hover:shadow-xl transition-all group"
                        >
                            {/* Floating User Image */}
                            <div className="absolute -top-10 left-10 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                                <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                                "{item.review}"
                            </p>

                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#B48F00] text-[#B48F00]" />
                                ))}
                            </div>

                            {/* User Info */}
                            <div>
                                <h4 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter">
                                    {item.name}
                                </h4>
                                <p className="text-gray-500 font-medium text-sm uppercase tracking-widest">
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Buttons (Bottom Right) */}
                <div className="flex justify-end gap-4 mt-16">
                    <button className="p-4 bg-[#0B1508] text-white rounded-xl hover:bg-black transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="p-4 bg-[#B48F00] text-black rounded-xl hover:bg-yellow-600 transition-colors">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

            </div>
        </section>
    );
}