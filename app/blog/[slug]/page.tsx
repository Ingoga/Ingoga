"use client"
import { motion } from "framer-motion";
import HeroWithScroll from "../../../components/sections/HeroWithScroll";
import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import CTASection from "../../../components/sections/CTASection";

const blogs = [
  {
    slug: "ai-powered-clinical-decision-support",
    image: "/Heart-Beat-Measure.jpg",
    tag: "AI & Health",
    title: "How AI-Powered Clinical Decision Support Is Transforming Healthcare in Africa",
    desc: "A deep dive into how intelligent systems are reducing diagnostic errors and improving patient outcomes across under-resourced healthcare settings on the continent.",
    author: "John Doe",
    readTime: "8min read",
    date: "May 2025"
  },
  {
    slug: "medical-automation-where-ai-meets-clinical-precision",
    image: "/Frame 1000011649.png",
    tag: "Computer science",
    title: "How AI-Powered Clinical Decision Support Is Transforming Healthcare in Africa",
    desc: "A deep dive into how intelligent systems are reducing diagnostic errors and improving patient outcomes across under-resourced healthcare settings on the continent.",
    author: "John Doe",
    readTime: "8min read",
    date: "May 2025"
  },
  {
    slug: "data-security-in-clinical-systems",
    image: "/Frame 1000011649 (1).png",
    tag: "Research",
    title: "Data Security in Clinical Systems: Building Trust in Digital Health",
    desc: "How we approach patient data protection in environments with varying regulatory frameworks.",
    author: "John Doe",
    readTime: "6min read",
    date: "May 2025"
  }
];

export default function BlogDetailPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Article Header using HeroWithScroll */}
        <HeroWithScroll 
          title="How AI-Powered Clinical Decision Support Is Transforming Healthcare in Africa"
          description={
            <div className="flex items-center justify-between w-full text-white text-md mt-12 max-w-[800px] mx-auto">
              <span>7 mins read</span>
              <span>June 18th 2020</span>
            </div>
          }
        />

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[1260px] mx-auto px-2 mb-24"
        >
          <div className="w-full aspect-video md:aspect-21/10 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/Heart-Beat-Measure.jpg" 
              alt="Stethoscope on desk" 
              className="w-full h-full object-cover grayscale brightness-90"
            />
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="max-w-[1260px] mx-auto text-zinc-300 text-[15px] leading-[1.8] space-y-12 mb-32">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">The Problem Is Not Just a Lack of Resources</h2>
            <p>
              When you walk into a typical public hospital in Kigali, Nairobi, or Kampala, you do not encounter a shortage of dedicated professionals. What you encounter is a system overwhelmed by paper. Patient records stored in physical folders. Drug inventory tracked in handwritten ledgers. Clinical decisions made without access to a patient's history because that history exists somewhere in a filing cabinet three floors away. This is not a technology problem. It is a systems problem — and systems problems require systems thinking. That is the foundation on which we built UDS, the Ubuzima Digital System.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">What Intelligent Clinical Infrastructure Actually Looks Like</h2>
            <p>
              UDS is not an electronic health record in the traditional sense. It is a clinical intelligence platform — designed from the ground up for the realities of East African healthcare. It works offline. Because connectivity in district hospitals is unreliable, we built UDS to function fully without an internet connection, syncing intelligently when connectivity is restored. It is fast. A nurse at a facility in rural Rwanda can pull up a patient's complete medical history in under three seconds. It is built for decision support. UDS does not just store data — it surfaces insights. When a clinician enters a patient's symptoms and vitals, the system flags potential diagnoses, drug interactions, and care protocols based on clinical evidence. The result is not just efficiency. It is accuracy. And in healthcare, accuracy saves lives.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">The Numbers That Matter</h2>
            <p>
              Since deploying UDS across 18 healthcare facilities in Rwanda, we have observed measurable improvements in clinical workflow speed, a reduction in medication errors, and a significant decrease in the time clinicians spend on administrative tasks versus direct patient care. These are not abstract improvements. Every minute a nurse saves on paperwork is a minute spent with a patient. Every flagged drug interaction is a potential adverse event avoided. Every digitized record is a piece of continuity of care that would otherwise be lost. UDS is one piece of a larger vision. Through NEXUN Inc., our AI research company, we are developing the next generation of clinical intelligence tools — models trained on African patient data, diagnostic support systems designed for high-burden disease profiles common to the continent, and automation that can extend the effective capacity of every clinician without replacing their judgment. The goal is not to build technology that replaces the human at the center of care. The goal is to build technology that gives that human the information, the speed, and the support they need to do their job at the highest possible level. Africa deserves a healthcare system that works. We are building the infrastructure to make that possible.
            </p>
          </div>

          <div className="pt-4 flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-500"></div>
            <p className="font-semibold text-white text-lg">Patrick Ngoga</p>
          </div>
        </div>

        {/* Read other Blogs Divider */}
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Read Other Blogs</h2>
            <Link href="/blog">
              <div className="inline-flex items-center gap-4 px-6 py-2 border border-zinc-800 rounded-md text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer group text-sm font-medium">
                <span>Read other blogs</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Related Blogs Grid */}
        <div className="max-w-[1400px] mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div className="group cursor-pointer flex flex-col bg-[#0a0a0a] border border-zinc-800/50 rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300 h-full">
                    <div className="w-full aspect-video overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      />
                    </div>
                    <div className="p-6 space-y-6 flex-1 flex flex-col">
                      <div>
                        <span className="inline-block px-4 py-1.5 bg-[#1a0808] text-[#e84c4c] text-[12px] font-medium rounded-md mb-6">
                          {blog.tag}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-zinc-200 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {blog.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-400 text-[13px] mt-auto pt-6 border-t border-zinc-800/50">
                        <span>{blog.author}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                        <span>{blog.readTime}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
