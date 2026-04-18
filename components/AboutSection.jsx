"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-[#F3F4F6] overflow-hidden relative">

            {/* Background Map Watermark */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] opacity-10 pointer-events-none hidden lg:block z-0">
                <img src="/images/sl-map-outline.png" alt="Sri Lanka Map" className="w-full h-full object-contain" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16 relative z-10"
            >

                {/* LEFT SIDE: Overlapping Images */}
                <div className="relative w-full lg:w-1/2 h-[450px] md:h-[550px] flex items-center">

                    {/* Big Image (Elephant) */}
                    <div className="absolute top-0 left-0 w-[80%] h-[400px] md:h-[480px] rounded-[40px] overflow-hidden shadow-xl z-0">
                        <img src="/images/elephant-safari.jpg" className="w-full h-full object-cover" alt="Elephant Safari" />

                        {/* Dark Gradient Overlay for Top Text */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70 via-black/20 to-transparent"></div>

                        {/* Big Image Text */}
                        <div className="absolute top-8 left-8 z-10 drop-shadow-md">
                            <p className="text-[#EAB308] font-black uppercase text-[11px] md:text-sm tracking-widest mb-1">
                                PRIVATE SAFARI
                            </p>
                            <p className="text-white font-black uppercase text-[11px] md:text-sm tracking-widest">
                                TAILOR MADE
                            </p>
                        </div>
                    </div>

                    {/* Small Image (Tourist) */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="absolute bottom-0 right-0 w-[65%] h-[260px] md:h-[300px] rounded-[30px] overflow-hidden shadow-2xl border-8 md:border-[12px] border-white z-10"
                    >
                        <img src="/images/tourist-safari.jpg" className="w-full h-full object-cover" alt="Tourist" />

                        {/* Dark Gradient Overlay for Top Text */}
                        <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>

                        {/* Small Image Text */}
                        <div className="absolute top-6 left-6 right-4 z-10 drop-shadow-md">
                            <p className="text-[#EAB308] font-black uppercase text-[9px] md:text-[11px] tracking-widest leading-relaxed mb-1">
                                NAVIGATING ACCESS TO
                            </p>
                            <p className="text-white font-black uppercase text-[9px] md:text-[11px] tracking-widest leading-relaxed">
                                CHALLENGING DESTINATIONS
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE: Content */}
                <div className="w-full lg:w-1/2 text-left mt-10 lg:mt-0 lg:pl-10">
                    <h4 className="text-gray-900 font-bold text-lg md:text-xl mb-3">
                        Why Choose <span className="text-[#B48F00]">The Ceylon Tour Guide</span>
                    </h4>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-[900] text-[#1A1A1A] leading-[1.05] uppercase tracking-tighter mb-8">
                        EXCLUSIVE JOURNEYS TO THE REMOTE CORNERS OF SRI LANKA
                    </h2>

                    <div className="space-y-6 max-w-lg">
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                            We specialise in providing curious travellers with access to regions
                            and communities that would otherwise prove challenging.
                        </p>
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                            We are committed to offering unique travel opportunities, to unusual
                            destinations, that are mutually beneficial to all involved.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-12 bg-[#B48F00] px-10 py-4 rounded-xl text-white font-bold uppercase text-sm shadow-xl shadow-[#B48F00]/20 tracking-wider transition-all hover:bg-yellow-700"
                    >
                        Contact Us
                    </motion.button>
                </div>

            </motion.div>
        </section>
    );
}