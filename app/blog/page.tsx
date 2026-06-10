"use client"
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import HeroWithScroll from "../../components/sections/HeroWithScroll";
import NavigationDots from "../../components/ui/NavigationDots";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CTASection from "../../components/sections/CTASection";
import { api, mediaUrl } from "../../lib/api";

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

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activePage, setActivePage] = useState(0);

  const { data: blogList } = useQuery({
    queryKey: ["blog", "list"],
    queryFn: () => api.blog.list("published", 50),
  });

  const categories = useMemo(() => {
    if (!blogList?.data?.length) return ["All"];
    const cats = new Set(blogList.data.map((post) => post.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [blogList]);

  const blogs = useMemo(() => {
    if (!blogList?.data?.length) return [];
    return blogList.data.map((post) => ({
      slug: post.slug || post.id,
      image: mediaUrl(post.coverImageUrl),
      tag: post.category,
      title: post.title,
      desc: contentExcerpt(post.content),
      author: post.author,
      readTime: post.readingTime || "",
      date: formatPublishDate(post.publishDate),
    }));
  }, [blogList]);

  const filteredBlogs = activeFilter === "All"
    ? blogs
    : blogs.filter(blog => blog.tag === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroWithScroll
          title="Insights, Ideas & Innovation"
          description="Thinking from our team on AI, digital health, emergency technology, and building deep tech in Africa."
        />

        {/* Categories */}
        <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-colors cursor-pointer ${activeFilter === cat
                  ? 'border-zinc-700 bg-zinc-800/50 text-white'
                  : 'border-zinc-800 bg-transparent text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="max-w-[1400px] mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div className="group cursor-pointer flex flex-col bg-[#0a0a0a] border border-zinc-800/50 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 h-full">
                    <div className="w-full aspect-video overflow-hidden">
                      {blog.image && (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                      )}
                    </div>
                    <div className="p-8 space-y-6 flex-1 flex flex-col">
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

        {/* Progress Indicator */}
        <NavigationDots
          total={2}
          activeIndex={activePage}
          onChange={setActivePage}
          className="mb-24 mt-16"
        />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
