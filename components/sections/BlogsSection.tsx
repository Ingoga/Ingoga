"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { mediaUrl, resolveFeaturedBlogs } from "../../lib/api";
import { DEFAULT_BLOG_FEATURED, DEFAULT_BLOG_SIDE } from "../../lib/defaults";

const customEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: customEasing }
};

function contentExcerpt(content?: string | null, maxLen = 160): string {
  if (!content) return "";
  const text = content.replace(/\n+/g, " ").trim();
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen).trim()}...`;
}

function formatPublishDate(date?: string): string {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  } catch {
    return date;
  }
}

export default function BlogsSection() {
  const { data: blogs = [] } = useQuery({
    queryKey: ["homepage", "featured-blogs"],
    queryFn: resolveFeaturedBlogs,
  });

  const featured = blogs[0] ?? DEFAULT_BLOG_FEATURED;
  const sideBlogs = useMemo(() => {
    if (blogs.length > 1) return blogs.slice(1, 3);
    return DEFAULT_BLOG_SIDE;
  }, [blogs]);

  const featuredImage =
    mediaUrl(featured.coverImageUrl) ||
    (typeof featured.coverImageUrl === "string" && featured.coverImageUrl.startsWith("/")
      ? featured.coverImageUrl
      : "/Heart-Beat-Measure.jpg");

  const featuredSlug =
    "slug" in featured && featured.slug
      ? featured.slug
      : "id" in featured && featured.id
        ? String(featured.id)
        : DEFAULT_BLOG_FEATURED.slug;

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 md:mb-16 gap-6">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
        >Our Latest Blogs</motion.h2>
        <motion.a
          href="/blog"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition text-foreground"
        >
          View All blogs <span className="text-xs -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">→</span>
        </motion.a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="lg:col-span-7 group cursor-pointer flex flex-col bg-black/5 dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl overflow-hidden"
        >
          <Link href={`/blog/${featuredSlug}`}>
              <div className="w-full aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 z-10 pointer-events-none" />
                <motion.img
                  src={featuredImage}
                  alt={featured.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: customEasing }}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1500"
                  onError={(e) => { e.currentTarget.src = "/Heart-Beat-Measure.jpg"; }}
                />
              </div>
              <div className="p-6 md:p-8 space-y-6 md:space-y-8 flex-1 flex flex-col relative z-20">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <span className="inline-block px-4 md:px-5 py-2 bg-red-500/10 text-red-600 dark:text-red-400 text-[13px] font-medium rounded-md mb-6 md:mb-8">{featured.category}</span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 leading-tight transition-colors group-hover:text-[#E62505]">
                    {featured.title}
                  </h3>
                <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                  {contentExcerpt(featured.content)}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-foreground/80 text-sm font-light mt-auto pt-4 md:pt-0">
                <span>{featured.author}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
                <span>{featured.readingTime || "5min read"}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
                <span>{formatPublishDate(featured.publishDate)}</span>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
          {sideBlogs.map((blog, i) => (
            <motion.div
              key={"id" in blog ? blog.id : i}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="group cursor-pointer p-6 md:p-10 bg-black/5 dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-xl flex flex-col justify-between hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 h-auto lg:h-1/2"
            >
              <Link href={`/blog/${blog.slug || ("id" in blog ? blog.id : "")}`}>
                <div className="space-y-4 md:space-y-6 transform group-hover:-translate-y-1 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <span className="inline-block px-4 md:px-5 py-2 bg-red-500/10 text-red-600 dark:text-red-400 text-[13px] font-medium rounded-md mb-2 md:mb-4 transition-colors">
                    {blog.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 leading-tight transition-colors group-hover:text-[#E62505]">
                    {blog.title}
                  </h3>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                    {contentExcerpt(blog.content)}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-foreground/80 text-sm font-light mt-6 md:mt-8">
                  <span>{blog.author}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
                  <span>{blog.readingTime || "5min read"}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
                  <span>{formatPublishDate(blog.publishDate)}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
