"use client";

import { motion } from "framer-motion";

const categories = [
    { name: "BEAUTY", img: "/images/beauty.jpg", tag: "TIMELESS" },
    { name: "EXPERIENCES", img: "/images/experiences.jpg", tag: "SIGNATURE" },
    { name: "HERITAGE", img: "/images/heritage.jpg", tag: "RICH" },
    { name: "CUISINE", img: "/images/cuisine.jpg", tag: "AUTHENTIC" },
    { name: "WILDLIFE", img: "/images/wildlife.jpg", tag: "UNTAMED" },
    { name: "WELLNESS", img: "/images/wellness.jpg", tag: "RELAXING" },
];

export default function Categories() {
    return (
        <section id="why-srilanka" className="py-20 md:py-24 bg-white relative overflow-hidden">

            {/* ======= IMPROVED BACKGROUND WATERMARK ======= */}
            <div className="absolute top-0 left-0 w-[80%] md:w-[60%] lg:w-[45%] h-full z-0 pointer-events-none">
                <img
                    src="/images/moonstone-bg.jpg"
                    className="w-full h-full object-cover object-left-top opacity-[0.08] mix-blend-multiply grayscale"
                    alt="Background Carving"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90"></div>
            </div>
            {/* ================================================== */}

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16 gap-6 md:gap-10">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-[900] tracking-tighter leading-[1.1] uppercase drop-shadow-sm whitespace-nowrap">
                        <span className="text-[#1A1A1A]">WHY</span>{" "}
                        <span className="text-[#B48F00]">SRILANKA</span>
                    </h2>

                    <div className="max-w-xl space-y-4 pt-2 md:pt-4">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                            Sri Lanka is a small island filled with endless experiences, from golden
                            beaches and misty mountains to ancient temples and vibrant wildlife.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                            Discover rich culture, warm hospitality, luxury stays, delicious cuisine,
                            and unforgettable adventures — all in one beautiful destination.
                        </p>
                    </div>
                </div>

                {/* Horizontal Scrollable Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-10 pt-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {categories.map((item, index) => (
                        <motion.div
                            key={item.name}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="relative h-[400px] md:h-[480px] w-[85vw] sm:w-[300px] lg:w-[320px] flex-shrink-0 snap-center rounded-[30px] overflow-hidden group shadow-xl cursor-grab active:cursor-grabbing"
                        >
                            <img
                                src={item.img}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt={item.name}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-4">
                                <p className="text-[#EAB308] text-xs font-black tracking-widest mb-2 uppercase drop-shadow-md">
                                    {item.tag}
                                </p>
                                <h3 className="text-white text-3xl md:text-4xl font-[900] tracking-tighter uppercase drop-shadow-lg">
                                    {item.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="relative z-20 mt-8 md:mt-12 w-full flex justify-center pb-8">
                    <div className="w-32 md:w-64 h-2 md:h-3 bg-[#D4C39B] rounded-full shadow-sm"></div>
                </div>
            </div>

            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}