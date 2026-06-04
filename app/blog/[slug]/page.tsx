"use client"
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import HeroWithScroll from "../../../components/sections/HeroWithScroll";
import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import CTASection from "../../../components/sections/CTASection";


const blogData: Record<string, {
  title: string;
  heroTitle: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  sections: { heading: string; body: string }[];
}> = {

  uds: {
    title: "Ubuzima Digital System — Intelligent Clinical Infrastructure",
    heroTitle: "Ubuzima Digital System — Intelligent Clinical Infrastructure",
    readTime: "8 mins read",
    date: "June 2025",
    author: "Patrick Ngoga",
    image: "/UDS.jpg",
    sections: [
      {
        heading: "The Problem Is Not Just a Lack of Resources",
        body: "When you walk into a typical public hospital in Kigali, Nairobi, or Kampala, you do not encounter a shortage of dedicated professionals. What you encounter is a system overwhelmed by paper. Patient records stored in physical folders. Drug inventory tracked in handwritten ledgers. Clinical decisions made without access to a patient's history because that history exists somewhere in a filing cabinet three floors away. This is not a technology problem. It is a systems problem — and systems problems require systems thinking. That is the foundation on which we built UDS, the Ubuzima Digital System.",
      },
      {
        heading: "What Intelligent Clinical Infrastructure Actually Looks Like",
        body: "UDS is not an electronic health record in the traditional sense. It is a clinical intelligence platform — designed from the ground up for the realities of East African healthcare. It works offline. Because connectivity in district hospitals is unreliable, we built UDS to function fully without an internet connection, syncing intelligently when connectivity is restored. It is fast. A nurse at a facility in rural Rwanda can pull up a patient's complete medical history in under three seconds. It is built for decision support. UDS does not just store data — it surfaces insights. When a clinician enters a patient's symptoms and vitals, the system flags potential diagnoses, drug interactions, and care protocols based on clinical evidence. The result is not just efficiency. It is accuracy. And in healthcare, accuracy saves lives.",
      },
      {
        heading: "The Numbers That Matter",
        body: "Since deploying UDS across 18 healthcare facilities in Rwanda, we have observed measurable improvements in clinical workflow speed, a reduction in medication errors, and a significant decrease in the time clinicians spend on administrative tasks versus direct patient care. These are not abstract improvements. Every minute a nurse saves on paperwork is a minute spent with a patient. Every flagged drug interaction is a potential adverse event avoided. Every digitized record is a piece of continuity of care that would otherwise be lost. Africa deserves a healthcare system that works. We are building the infrastructure to make that possible.",
      },
    ],
  },

  nexun: {
    title: "NEXUN Inc. — Engineering the Next Layer of Intelligence",
    heroTitle: "NEXUN Inc. — Engineering the Next Layer of Intelligence",
    readTime: "7 mins read",
    date: "June 2025",
    author: "Patrick Ngoga",
    image: "/NEXUN.jpg",
    sections: [
      {
        heading: "Beyond the Current Horizon",
        body: "NEXUN Inc. exists to solve problems that do not yet have established solutions. From advanced AI systems and medical automation to emerging research in energy and next-generation computation, NEXUN operates at the frontier of what is technically possible. Our work is not incremental — it is architectural. We are building the intelligence layer that will power the next generation of African and global technology platforms.",
      },
      {
        heading: "AI Research with African Context",
        body: "The most powerful AI models in the world were trained on data that does not reflect the realities of 1.4 billion Africans. Disease burden profiles, clinical language, demographic patterns — these differ profoundly from the datasets that underpin most commercial AI systems today. NEXUN is building AI models trained on African patient data, and decision-support tools designed for the high-burden disease profiles common across the continent. This is not charity. It is accuracy. AI that works for African clinicians must be trained on African clinical realities.",
      },
      {
        heading: "What We Are Building Next",
        body: "NEXUN's current research pipeline spans three core domains: clinical automation — intelligent systems that extend the effective capacity of every clinician without replacing their judgment; energy intelligence — predictive systems for grid management and off-grid energy optimization across sub-Saharan Africa; and computational research — exploring new architectures in low-power inference for resource-constrained environments. The future is not being built somewhere else for us. We are building it ourselves.",
      },
    ],
  },

  resas: {
    title: "RESAS — When Every Second Is a Life",
    heroTitle: "RESAS — When Every Second Is a Life",
    readTime: "6 mins read",
    date: "June 2025",
    author: "Patrick Ngoga",
    image: "/RESAS.png",
    sections: [
      {
        heading: "Speed Is Not a Feature. It Is the Point.",
        body: "Road traffic accidents are among the leading causes of death across sub-Saharan Africa. In many cases, the difference between survival and death is not the severity of the crash — it is the time it takes for a response to arrive. RESAS, the Road Emergency Safety Automation System, is built around a single principle: intelligent automation should compress that window to as close to zero as possible.",
      },
      {
        heading: "How RESAS Works",
        body: "RESAS combines sensor networks, real-time event detection software, and automated dispatch coordination into a unified safety platform. When a crash is detected, the system automatically classifies severity, triangulates the location to within meters, and initiates coordinated emergency response without requiring a human to make the call. Simultaneously, it surfaces real-time situational intelligence to first responders — vehicle type, estimated number of occupants, terrain data, nearest medical facilities — so that by the time they arrive on scene, they are already prepared for what they will find.",
      },
      {
        heading: "The Infrastructure Behind the Response",
        body: "RESAS is not a single device or a mobile app. It is a distributed infrastructure layer. Roadside sensor nodes communicate with regional processing hubs. Those hubs feed into a central coordination platform that interfaces directly with emergency dispatch systems and hospital intake queues. The architecture is designed to operate reliably in low-connectivity environments, with edge processing that ensures the critical first moments of response are never dependent on a cloud connection. Every second counts when lives are on the line. RESAS is built to count every one of them.",
      },
    ],
  },

  // ── Editorial blog slugs ───────────────────────────────────────────────────
  "ai-powered-clinical-decision-support": {
    title: "How AI-Powered Clinical Decision Support Is Transforming Healthcare in Africa",
    heroTitle: "How AI-Powered Clinical Decision Support Is Transforming Healthcare in Africa",
    readTime: "8 mins read",
    date: "June 18th 2020",
    author: "John Doe",
    image: "/Heart-Beat-Measure.jpg",
    sections: [
      {
        heading: "The Problem Is Not Just a Lack of Resources",
        body: "When you walk into a typical public hospital in Kigali, Nairobi, or Kampala, you do not encounter a shortage of dedicated professionals. What you encounter is a system overwhelmed by paper. Patient records stored in physical folders. Drug inventory tracked in handwritten ledgers. Clinical decisions made without access to a patient's history because that history exists somewhere in a filing cabinet three floors away. This is not a technology problem. It is a systems problem — and systems problems require systems thinking. That is the foundation on which we built UDS, the Ubuzima Digital System.",
      },
      {
        heading: "What Intelligent Clinical Infrastructure Actually Looks Like",
        body: "UDS is not an electronic health record in the traditional sense. It is a clinical intelligence platform — designed from the ground up for the realities of East African healthcare. It works offline. Because connectivity in district hospitals is unreliable, we built UDS to function fully without an internet connection, syncing intelligently when connectivity is restored. It is fast. A nurse at a facility in rural Rwanda can pull up a patient's complete medical history in under three seconds. It is built for decision support. UDS does not just store data — it surfaces insights. When a clinician enters a patient's symptoms and vitals, the system flags potential diagnoses, drug interactions, and care protocols based on clinical evidence.",
      },
      {
        heading: "The Numbers That Matter",
        body: "Since deploying UDS across 18 healthcare facilities in Rwanda, we have observed measurable improvements in clinical workflow speed, a reduction in medication errors, and a significant decrease in the time clinicians spend on administrative tasks versus direct patient care. These are not abstract improvements. Every minute a nurse saves on paperwork is a minute spent with a patient. Every flagged drug interaction is a potential adverse event avoided. Every digitized record is a piece of continuity of care that would otherwise be lost. UDS is one piece of a larger vision. Through NEXUN Inc., our AI research company, we are developing the next generation of clinical intelligence tools. Africa deserves a healthcare system that works. We are building the infrastructure to make that possible.",
      },
    ],
  },

  "medical-automation-where-ai-meets-clinical-precision": {
    title: "Medical Automation: Where AI Meets Clinical Precision",
    heroTitle: "Medical Automation: Where AI Meets Clinical Precision",
    readTime: "8 mins read",
    date: "May 2025",
    author: "John Doe",
    image: "/NEXUN.jpg",
    sections: [
      {
        heading: "Automation That Supports, Not Replaces",
        body: "The fear around medical automation is understandable: will machines replace doctors? The answer, as we design it at NEXUN, is no. The goal is not replacement. The goal is augmentation. Every clinician carries an enormous cognitive load — diagnostic reasoning, treatment planning, drug interaction checks, documentation. Automation should absorb the mechanical parts of that load so the clinician can focus entirely on the judgment that only a human can provide.",
      },
      {
        heading: "Where Precision Matters Most",
        body: "Medication administration is one of the highest-risk moments in clinical care. A wrong dose, a missed interaction, an incorrectly labeled vial — each of these represents a preventable failure. NEXUN's automation research focuses specifically on these high-stakes moments: building systems that flag inconsistencies before they become incidents, and that present the right information to the right person at the right time. Precision is not about speed. It is about reliability.",
      },
      {
        heading: "The Road Ahead",
        body: "Medical automation is not a single product. It is a discipline. At NEXUN, we approach it with the same rigor we bring to all our research: grounded in evidence, validated in real clinical environments, and designed to earn the trust of the practitioners who will use it. The future of clinical care is one where technology and human expertise are deeply integrated — not competing, but cooperating at every level of the care pathway.",
      },
    ],
  },

  "data-security-in-clinical-systems": {
    title: "Data Security in Clinical Systems: Building Trust in Digital Health",
    heroTitle: "Data Security in Clinical Systems: Building Trust in Digital Health",
    readTime: "6 mins read",
    date: "May 2025",
    author: "John Doe",
    image: "/Frame 1000011649.png",
    sections: [
      {
        heading: "Trust Is Infrastructure",
        body: "A digital health system is only as powerful as the trust patients and clinicians place in it. If a patient fears that their HIV status, mental health history, or reproductive data could be accessed without consent, they will not engage honestly with the healthcare system. If a clinician does not trust that the system is secure, they will work around it. Trust, in this context, is not a soft value. It is infrastructure. Without it, nothing else works.",
      },
      {
        heading: "The Regulatory Landscape Is Complex — and Evolving",
        body: "Building digital health infrastructure in Africa means navigating a patchwork of regulatory environments. Data protection legislation varies dramatically across the continent — from Kenya's Data Protection Act to Rwanda's Law on the Protection of Personal Data to contexts where formal frameworks are still being developed. UDS is architected to comply with the most stringent applicable standards in each deployment environment, with role-based access controls, end-to-end encryption for data in transit and at rest, and full audit logging of every data access event.",
      },
      {
        heading: "Security by Design, Not by Afterthought",
        body: "Too often, security in healthcare software is treated as a compliance checkbox rather than a design principle. At INGOGA, we build security into the architecture from day one. That means threat modeling before a line of code is written. It means penetration testing before any deployment. It means training clinical staff not just on how to use the system, but on how to use it safely. The goal is not just to protect data. The goal is to build a system that patients and clinicians can trust unconditionally — because in healthcare, trust is the foundation of everything.",
      },
    ],
  },
};

// Related blogs shown at the bottom
const relatedBlogs = [
  {
    slug: "ai-powered-clinical-decision-support",
    image: "/Heart-Beat-Measure.jpg",
    tag: "AI & Health",
    title: "How AI-Powered Clinical Decision Support Is Transforming Healthcare in Africa",
    desc: "A deep dive into how intelligent systems are reducing diagnostic errors and improving patient outcomes across under-resourced healthcare settings.",
    author: "John Doe",
    readTime: "8min read",
    date: "May 2025",
  },
  {
    slug: "medical-automation-where-ai-meets-clinical-precision",
    image: "/NEXUN.jpg",
    tag: "Computer science",
    title: "Medical Automation: Where AI Meets Clinical Precision",
    desc: "NEXUN's research into automating routine clinical tasks without sacrificing accuracy or safety.",
    author: "John Doe",
    readTime: "8min read",
    date: "May 2025",
  },
  {
    slug: "data-security-in-clinical-systems",
    image: "/Frame 1000011649.png",
    tag: "Research",
    title: "Data Security in Clinical Systems: Building Trust in Digital Health",
    desc: "How we approach patient data protection in environments with varying regulatory frameworks.",
    author: "John Doe",
    readTime: "6min read",
    date: "May 2025",
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug ?? "";

  const post = blogData[slug];

  // ── 404 fallback ──────────────────────────────────────────────────────────
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center gap-6 text-center px-6">
          <h1 className="text-5xl font-bold text-white">404</h1>
          <p className="text-zinc-400 text-lg">This article doesn&apos;t exist yet.</p>
          <Link
            href="/blog"
            className="px-6 py-3 border border-zinc-700 rounded-md text-zinc-300 hover:text-white hover:border-zinc-500 transition text-sm font-medium"
          >
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Exclude current slug from related blogs, show max 3
  const related = relatedBlogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Article Header */}
        <HeroWithScroll
          title={post.heroTitle}
          description={
            <div className="flex items-center justify-between w-full text-white text-md mt-12 max-w-[800px] mx-auto">
              <span>{post.readTime}</span>
              <span>{post.date}</span>
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
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="max-w-[1260px] mx-auto text-zinc-300 text-[15px] leading-[1.8] space-y-12 mb-32 px-4">
          {post.sections.map((section, i) => (
            <div key={i} className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
                {section.heading}
              </h2>
              <p>{section.body}</p>
            </div>
          ))}

          <div className="pt-4 flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-500"></div>
            <p className="font-semibold text-white text-lg">{post.author}</p>
          </div>
        </div>

        {/* Read Other Blogs Divider */}
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Read Other Blogs
            </h2>
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
            {related.map((blog, i) => (
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
