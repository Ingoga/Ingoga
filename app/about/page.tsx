"use client"
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const stats = [
  { value: "000+", label: "Active Projects" },
  { value: "000+", label: "Clients Served" },
  { value: "00+", label: "Team members" },
  { value: "0", label: "Year of Excellence" }
];

const teamMembers = [
  {
    name: "Leandro African deep-tech Innovators",
    role: "Founder & CEO",
    image: "/Man.jpg",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Leandro technical Leadership",
    role: "Chief Technology Officer",
    image: "/Boy.jpg",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Ensuring data protection & security",
    role: "Chief Information Security Officer",
    image: "/Girl.jpg",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white overflow-hidden">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8 flex flex-col items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Redefine What Emerging Nations Can Build
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Ingoga Technologies Group is a pioneering deep-tech company headquartered in Kigali, Rwanda — engineering intelligent systems that address critical challenges in healthcare, safety, and infrastructure.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-zinc-700 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-red-500 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Hey Section with Image */}
        <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/Heart-Beat-Measure.jpg"
                  alt="Healthcare Technology"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-red-500 mb-2">Hey!</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  We are Ingoga Technologies
                </h2>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed">
                Ingoga Technologies Group is an African deep-tech company building intelligent systems that solve real-world problems. We specialize in developing cutting-edge digital health platforms, AI-powered emergency response systems, and intelligent infrastructure solutions.
              </p>

              <p className="text-zinc-300 text-lg leading-relaxed">
                Founded in Rwanda, we're on a mission to prove that world-class technology can be built in Africa, for Africa — and eventually, for the world. Our platforms are designed to work in resource-constrained environments while delivering enterprise-grade performance and reliability.
              </p>

              <p className="text-zinc-300 text-lg leading-relaxed">
                We integrate with AI tools, frameworks and the best of our core business, growing at a rapid pace. We're backed by leading investors and supported by a team of world-class engineers, designers, and domain experts.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-all duration-300"
              >
                Meet with us →
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-8 border-y border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us - Mission, Vision, Values */}
        <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20"
          >
            About Us
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Who we are */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-6xl font-bold text-zinc-800">1</div>
              <h3 className="text-2xl font-bold">Who we are</h3>
              <p className="text-zinc-400 leading-relaxed">
                We are a team of engineers, designers, and domain experts building intelligent systems that transform how nations operate, respond, and thrive.
              </p>
            </motion.div>

            {/* Center Image */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img
                  src="/Heart-Beat-Measure.jpg"
                  alt="Medical Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-6xl font-bold text-zinc-800">2</div>
              <h3 className="text-2xl font-bold">MISSION</h3>
              <p className="text-zinc-400 leading-relaxed">
                To build world-class technology solutions that address Africa's most critical challenges in healthcare, safety, and infrastructure — proving that innovation knows no borders.
              </p>
            </motion.div>
          </div>

          {/* Core Values & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-6xl font-bold text-zinc-800">3</div>
              <h3 className="text-2xl font-bold">Core Values</h3>
              <p className="text-zinc-400 leading-relaxed">
                Excellence in execution. Integrity in every interaction. Innovation without compromise. We believe in building systems that work reliably in the real world, not just in demos.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-6xl font-bold text-zinc-800">4</div>
              <h3 className="text-2xl font-bold">VISION</h3>
              <p className="text-zinc-400 leading-relaxed">
                To become Africa's leading deep-tech company, setting the standard for intelligent systems that empower nations, save lives, and drive sustainable development across the continent.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Meet Our Team
            </motion.h2>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="hidden sm:flex items-center gap-2 text-zinc-400 hover:text-white transition"
            >
              <span>View all team →</span>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-zinc-900"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-zinc-400 mb-2">{member.role}</p>
                  <h3 className="text-xl font-bold mb-4">{member.name}</h3>
                  
                  <div className="flex gap-3">
                    <a href={member.socials.twitter} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href={member.socials.linkedin} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href={member.socials.github} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to manage your team like a pro?
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
              Ingoga is an all-in-one platform that makes it easy to track everything from a single central hub. Get started today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
