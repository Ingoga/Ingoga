"use client"
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { api, mediaUrl, resolveFeaturedTeam, type TeamMember } from "../../lib/api";
import { DEFAULT_TEAM, TEAM_FALLBACK_IMAGES } from "../../lib/defaults";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

type TeamSectionProps = {
  scope?: "featured" | "all";
};

function toDisplayMembers(members: TeamMember[]) {
  return members.map((member, i) => ({
    name: member.name,
    role: member.role,
    img: mediaUrl(member.photoUrl) || TEAM_FALLBACK_IMAGES[i % TEAM_FALLBACK_IMAGES.length],
    text: member.bio || member.role,
    linkedin: member.linkedinUrl,
    twitter: member.twitterUrl,
  }));
}

export default function TeamSection({ scope = "featured" }: TeamSectionProps) {
  const { data: members = [] } = useQuery({
    queryKey: scope === "all" ? ["about", "team-members"] : ["homepage", "featured-team"],
    queryFn: () =>
      scope === "all"
        ? api.about.teamMembers(50).then((res) => res.data)
        : resolveFeaturedTeam(),
  });

  const teamMembers =
    members.length > 0
      ? toDisplayMembers(members)
      : DEFAULT_TEAM.map((m) => ({ ...m, linkedin: undefined, twitter: undefined }));

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto transition-colors duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-12 gap-6">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >Meet Our team</motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 text-[14px] font-medium transition text-foreground"
        >
          Meet the entire team <span className="text-xs -rotate-45">→</span>
        </motion.button>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {teamMembers.map((member, i) => (
          <motion.div
            key={`${member.name}-${i}`}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="cursor-pointer group relative rounded-xl overflow-hidden bg-black/5 dark:bg-[#0a0a0a]"
            style={{ aspectRatio: '3/4' }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 ease-in-out"
              onError={(e) => {
                const target = e.currentTarget;
                const fallback = TEAM_FALLBACK_IMAGES[i % TEAM_FALLBACK_IMAGES.length];
                if (target.src !== fallback && !target.src.endsWith(fallback)) {
                  target.src = fallback;
                }
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/20"></div>

            <div className="absolute inset-x-1 bottom-2 p-4 h-42 rounded-lg bg-transparent border border-white/20 flex flex-col justify-end backdrop-blur-[2px]">
              <p className="text-white font-medium text-sm md:text-md leading-tight mb-6">
                {member.text}
              </p>
              <div className="space-y-1 mb-3">
                <p className="text-white font-semibold text-[16px] md:text-[16px]">{member.name}</p>
                <p className="text-gray-300 text-[13px] md:text-[14px]">{member.role}</p>
              </div>

              <div className="flex items-center gap-5">
                <motion.a href={member.linkedin || "#"} whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </motion.a>
                <motion.a href={member.twitter || "#"} whileHover={{ scale: 1.1 }} className="text-white/80 hover:text-white transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
