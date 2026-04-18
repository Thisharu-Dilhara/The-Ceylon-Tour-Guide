"use client";

import { motion } from "framer-motion";

export default function Approach() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#F3F4F6] overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 md:gap-24">

                {/* LEFT SIDE: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <h4 className="text-gray-900 font-bold text-lg md:text-2xl mb-2">
                        Our <span className="text-[#B48F00]">Approach</span>
                    </h4>

                    <h2 className="text-5xl md:text-7xl font-[900] text-[#1A1A1A] leading-[1.1] uppercase tracking-tighter mb-8">
                        REMOTE, <span className="text-[#B48F00]">EXCLUSIVE,</span> <br />
                        SEAMLESS
                    </h2>

                    <div className="space-y-6 max-w-xl">
                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            At Tour Guide, we believe direct dialogue is essential in tailoring your travel
                            experience. We favour engaging conversations over digital exchanges,
                            ensuring your travel vision is clearly understood and promptly supported.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            Our team is committed to a human-led process from start to finish, that
                            goes beyond the online realm. Whether over the phone or in person, we
                            work closely with you to develop a journey plan that is both thoughtfully
                            considered and expertly executed.
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-10 bg-[#B48F00] px-10 py-4 rounded-xl text-white font-bold uppercase text-sm shadow-lg shadow-yellow-900/20"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>

                {/* RIGHT SIDE: Image (with rounded corners) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 h-[400px] md:h-[600px]"
                >
                    <img
                        src="/images/colombo-view.jpg"
                        className="w-full h-full object-cover rounded-[40px] md:rounded-[60px] shadow-2xl"
                        alt="Colombo City View"
                    />
                </motion.div>

            </div>
        </section>
    );
}