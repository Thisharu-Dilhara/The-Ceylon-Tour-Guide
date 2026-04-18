"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
    return (
        <section className="relative py-20 md:py-32 bg-[#F3F4F6] overflow-hidden">

            {/* Background Map Watermark */}
            <div className="absolute right-[5%] lg:right-[15%] top-1/2 -translate-y-1/2 w-[60%] lg:w-[40%] opacity-[0.05] pointer-events-none z-0">
                <img src="/sl-map-outline.png" alt="Map Watermark" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col lg:flex-row items-center w-full relative z-10">

                {/* LEFT SIDE: Image (Bleeds to left edge, rounded on right) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-[95%] lg:w-[45%] xl:w-[50%] h-[450px] md:h-[600px] relative rounded-r-[40px] md:rounded-r-[60px] overflow-hidden shadow-2xl"
                >
                    <img
                        src="/images/tea-plucker.jpg"
                        alt="Traveler in Tea Plantation"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark Overlay for bottom text clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Image Inside Text */}
                    <div className="absolute bottom-10 left-8 md:bottom-12 md:left-12 text-white z-10">
                        <p className="font-black text-2xl md:text-3xl uppercase tracking-widest drop-shadow-lg mb-1">
                            ELIVA ROLLEN
                        </p>
                        <p className="text-[#EAB308] font-bold text-sm md:text-base tracking-[0.2em] drop-shadow-md">
                            ITALY
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT SIDE: Quote Content (Directly on section background) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-[55%] xl:w-[50%] px-6 md:px-12 lg:px-20 mt-16 lg:mt-0"
                >
                    {/* Quote Icon */}
                    <div className="mb-8">
                        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V13" stroke="#D4C39B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.01702 21L3.01702 18C3.01702 16.8954 3.91245 16 5.01702 16H8.01702C9.12159 16 10.017 15.1046 10.017 14V9C10.017 7.89543 9.12159 7 8.01702 7H5.01702C3.91245 7 3.01702 7.89543 3.01702 9V13" stroke="#D4C39B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Quote Text */}
                    <h2 className="text-3xl md:text-5xl lg:text-[42px] xl:text-[50px] font-[900] text-[#1A1A1A] leading-[1.2] uppercase tracking-tighter">
                        FROM STUNNING BEACHES TO LUXURY ESCAPES AND <span className="text-[#B48F00]">UNFORGETTABLE</span> ADVENTURES, SRI LANKA EXCEEDED <span className="text-[#B48F00]">EVERY EXPECTATION</span>.
                    </h2>

                    {/* Author Info */}
                    <div className="mt-12 pt-8 border-t-2 border-gray-200">
                        <p className="font-black text-[#1A1A1A] text-xl uppercase tracking-tight mb-2">
                            ELIVA ROLLEN, ITALY
                        </p>
                        <p className="text-gray-500 text-sm md:text-base font-medium">
                            International Travel Consultant | Luxury Travel Specialist
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}