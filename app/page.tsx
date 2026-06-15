"use client"
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  HeroSection,
  InnovationSection,
  ProductsSection,
  BlogsSection,
  TeamSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
  RecentActivitiesSection
} from "../components/sections";





export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden selection:bg-red-500/30 transition-colors duration-300">
      <div className="relative w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat opacity-30"
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      <main className="flex-1 w-full relative justify-center items-center">
        <InnovationSection />
        <ProductsSection />
        <BlogsSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
