"use client";

import { motion } from "framer-motion";

export default function WhyChooseGuide() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#F3F4F6] overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">

                {/* LEFT SIDE: Asymmetric Image Grid */}
                <div className="relative w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
                    {/* Leopard Image (Full height on the left) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-span-1 row-span-2 h-[350px] md:h-[500px] mt-12"
                    >
                        <img
                            src="/images/leopard-2.jpg"
                            className="w-full h-full object-cover rounded-[30px] shadow-xl"
                            alt="Sri Lankan Leopard"
                        />
                    </motion.div>

                    {/* Stilt Fishermen Image (Top Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-[180px] md:h-[260px]"
                    >
                        <img
                            src="/images/stilt-fishermen-small.jpg"
                            className="w-full h-full object-cover rounded-[30px] shadow-lg"
                            alt="Stilt Fishermen"
                        />
                    </motion.div>

                    {/* Bird Image (Bottom Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-[180px] md:h-[260px]"
                    >
                        <img
                            src="/images/exotic-bird.jpg"
                            className="w-full h-full object-cover rounded-[30px] shadow-lg"
                            alt="Exotic Bird"
                        />
                    </motion.div>
                </div>

                {/* RIGHT SIDE: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 text-left"
                >
                    <h2 className="text-5xl md:text-7xl font-[900] text-[#1A1A1A] leading-[1.1] uppercase tracking-tighter mb-8">
                        WHY CHOOSE <br />
                        <span className="text-[#B48F00]">TOUR GUIDE</span>
                    </h2>

                    <div className="space-y-6 max-w-lg">
                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            Tour Guide independence allows us to remain fully dedicated
                            to designing bespoke experiences that reflect the unique
                            preferences of each client, free from the influence of external
                            shareholders or corporate constraints.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            Our emphasis on personalization is complemented by long-standing
                            relationships with trusted local partners. These enduring
                            connections enable us to craft meaningful African journeys
                            that deeply resonate with our clients.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 bg-[#B48F00] px-10 py-4 rounded-xl text-white font-bold uppercase text-sm shadow-lg shadow-yellow-900/20"
                    >
                        About Us
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}