import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Categories from "@/components/Categories";
import Testimonial from "@/components/Testimonial";
import HowItWorks from "@/components/HowItWorks";
import Inspiration from "@/components/Inspiration";
import WhyChoose from "@/components/WhyChoose";
import OurApproach from "@/components/OurApproach";
import Review from "@/components/Review";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <Categories />
      <Testimonial />
      <HowItWorks />
      <Inspiration />
      <WhyChoose />
      <OurApproach />
      <Review />
      <Footer />
    </main>
  );
}