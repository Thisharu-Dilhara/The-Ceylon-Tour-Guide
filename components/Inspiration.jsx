"use client";

import { motion } from "framer-motion";
import { User, DollarSign, Users, Calendar } from "lucide-react";

const packages = [
    {
        title: "Wilpaththu: Safari Tour Package",
        image: "/images/leopard.jpg",
        type: "Private",
        price: "$19,824",
        guests: "4 Guests",
        days: "11 Days",
    },
    {
        title: "Ella: Scenic Highlands & Tea Country",
        image: "/images/ella-train.jpg",
        type: "Family / Private",
        price: "$12,450",
        guests: "2-6 Guests",
        days: "7 Days",
    }
];

export default function Inspiration() {
    return (
        <section id="packages" className="py-24 bg-white px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* HEADER SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-[900] tracking-tighter leading-none"
                    >
                        <span className="text-[#1A1A1A]">LOOKING FOR</span> <br />
                        <span className="text-[#B48F00]">INSPIRATION</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl space-y-4"
                    >
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Sri Lanka is a small island filled with endless experiences, from golden beaches and misty mountains to ancient temples and vibrant wildlife.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Discover rich culture, warm hospitality, luxury stays, delicious cuisine, and unforgettable adventures — all in one beautiful destination.
                        </p>
                    </motion.div>
                </div>

                {/* ======= HORIZONTAL SCROLL CONTAINER ======= */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 pt-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="relative h-[500px] md:h-[650px] w-[90vw] md:w-[700px] lg:w-[900px] flex-shrink-0 snap-center rounded-[40px] overflow-hidden group shadow-2xl cursor-grab active:cursor-grabbing"
                        >
                            {/* Background Image */}
                            <img
                                src={pkg.image}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                alt={pkg.title}
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

                            {/* Card Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
                                <p className="text-[#EAB308] font-bold tracking-widest uppercase mb-4 text-sm md:text-base drop-shadow-md">
                                    WHERE TO <span className="text-white">EXPLORE</span>
                                </p>

                                <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-tight max-w-2xl lg:max-w-3xl mb-8 md:mb-10 drop-shadow-lg">
                                    {pkg.title}
                                </h3>

                                {/* Info Grid */}
                                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-12 mb-8 md:mb-10 border-t border-white/20 pt-8 md:pt-10">
                                    <div className="flex items-center gap-2 md:gap-3 text-white">
                                        <User className="text-[#EAB308] w-4 h-4 md:w-5 md:h-5" />
                                        <span className="font-medium text-sm md:text-lg">{pkg.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3 text-white">
                                        <DollarSign className="text-[#EAB308] w-4 h-4 md:w-5 md:h-5" />
                                        <span className="font-medium text-sm md:text-lg">From <span className="text-[#EAB308]">{pkg.price}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3 text-white">
                                        <Users className="text-[#EAB308] w-4 h-4 md:w-5 md:h-5" />
                                        <span className="font-medium text-sm md:text-lg">{pkg.guests}</span>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3 text-white">
                                        <Calendar className="text-[#EAB308] w-4 h-4 md:w-5 md:h-5" />
                                        <span className="font-medium text-sm md:text-lg">{pkg.days}</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <button className="bg-[#B48F00] text-black font-black uppercase py-3 px-8 md:py-4 md:px-10 rounded-xl w-fit text-xs md:text-sm tracking-widest shadow-lg hover:bg-yellow-600 transition-colors">
                                    View Package
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}