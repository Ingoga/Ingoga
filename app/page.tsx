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
      <Navbar />

      <main className="flex-1 w-full relative justify-center items-center">
        <HeroSection />
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
