"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Zoom Animation */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/image.png"
                    alt="Elephants"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-3xl">

                    {/* TOP SMALL TEXT - Mobile වලදී text-base */}
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-white text-base md:text-xl font-light mb-2"
                    >
                        Welcome to <span className="font-bold">The Ceylon Tour Guide</span>
                    </motion.p>

                    {/* MAIN HEADING - Responsive Sizes (text-4xl for Mobile, 8xl for Desktop) */}
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter uppercase"
                    >
                        <motion.span
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.05, delayChildren: 0.5 },
                                },
                            }}
                            className="inline-block"
                        >
                            {"JOURNEYS TO".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                            className="text-[#EAB308]"
                        >
                            SRI LANKA
                        </motion.span>
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                        className="text-gray-100 mt-6 md:mt-8 text-sm md:text-xl max-w-xs md:max-w-xl leading-relaxed font-medium"
                    >
                        Our safaris exemplify the qualities of modern adventure travel —
                        remote, exclusive and seamless.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                        className="mt-8 md:mt-10"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(234, 179, 8, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#EAB308] px-8 py-3 md:px-10 md:py-4 rounded-full text-black font-bold uppercase tracking-wide shadow-lg text-sm md:text-base"
                        >
                            Plan Your Tour
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Sri Lanka Map Outline - Mobile වලදී hide කිරීම වඩාත් සුදුසුයි */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1.5, delay: 2 }}
                className="absolute right-[-100px] top-1/2 -translate-y-1/2 z-0 h-[80%] aspect-[0.7] hidden lg:block"
            >

            </motion.div>
        </section>
    );
}