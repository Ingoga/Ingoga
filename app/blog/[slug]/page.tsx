"use client"
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import HeroWithScroll from "../../../components/sections/HeroWithScroll";
import Link from "next/link";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import CTASection from "../../../components/sections/CTASection";
import { api, mediaUrl, type BlogPost } from "../../../lib/api";

type BlogPostShape = {
  title: string;
  heroTitle: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  sections: { heading: string; body: string }[];
};

function formatPublishDate(date?: string): string {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  } catch {
    return date;
  }
}

function contentExcerpt(content?: string | null, maxLen = 160): string {
  if (!content) return "";
  const text = content.replace(/\n+/g, " ").trim();
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen).trim()}...`;
}

function contentToSections(content?: string | null): { heading: string; body: string }[] {
  if (!content) return [];
  const trimmed = content.trim();
  if (!trimmed) return [];

  if (/^##\s/m.test(trimmed)) {
    const parts = trimmed.split(/^##\s+/m).filter(Boolean);
    return parts.map((part) => {
      const lines = part.split("\n");
      const heading = lines[0].trim();
      const body = lines.slice(1).join("\n").trim();
      return { heading, body };
    });
  }

  const parts = trimmed.split(/\n\n+/).filter((p) => p.trim());
  if (parts.length <= 1) {
    return [{ heading: "", body: trimmed }];
  }

  return parts.map((part) => {
    const lines = part.split("\n");
    if (lines.length > 1 && lines[0].length < 120) {
      return { heading: lines[0].trim(), body: lines.slice(1).join("\n").trim() };
    }
    return { heading: "", body: part.trim() };
  });
}

function mapApiPostToShape(post: BlogPost): BlogPostShape {
  return {
    title: post.title,
    heroTitle: post.title,
    readTime: post.readingTime || "",
    date: formatPublishDate(post.publishDate),
    author: post.author,
    image: mediaUrl(post.coverImageUrl),
    sections: contentToSections(post.content),
  };
}

function mapApiPostToRelated(post: BlogPost) {
  return {
    slug: post.slug || post.id,
    image: mediaUrl(post.coverImageUrl),
    tag: post.category,
    title: post.title,
    desc: contentExcerpt(post.content),
    author: post.author,
    readTime: post.readingTime || "",
    date: formatPublishDate(post.publishDate),
  };
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug ?? "";

  const { data: apiPost, isLoading } = useQuery({
    queryKey: ["blog", "bySlug", slug],
    queryFn: () => api.blog.bySlug(slug),
    enabled: Boolean(slug),
    retry: false,
  });

  const { data: blogList } = useQuery({
    queryKey: ["blog", "list"],
    queryFn: () => api.blog.list("published", 50),
  });

  const post = useMemo(() => {
    if (!apiPost) return null;
    return mapApiPostToShape(apiPost);
  }, [apiPost]);

  const related = useMemo(() => {
    if (!blogList?.data?.length) return [];
    return blogList.data
      .map(mapApiPostToRelated)
      .filter((b) => b.slug !== slug)
      .slice(0, 3);
  }, [blogList, slug]);

  if (!post && !isLoading) {
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

  if (!post) {
    return null;
  }

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
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="max-w-[1260px] mx-auto text-zinc-300 text-[15px] leading-[1.8] space-y-12 mb-32 px-4">
          {post.sections.map((section, i) => (
            <div key={i} className="space-y-4">
              {section.heading && (
                <h2 className="text-2xl font-bold text-white tracking-tight mb-6">
                  {section.heading}
                </h2>
              )}
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
                      {blog.image && (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                      )}
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
