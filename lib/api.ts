const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2000/api/v1";

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    let errorMsg = `API error: ${res.status}`;
    try {
      const errorJson = await res.json();
      if (errorJson.errors) {
        errorMsg = Array.isArray(errorJson.errors)
          ? errorJson.errors.join(', ')
          : errorJson.errors;
      } else if (errorJson.message) {
        errorMsg = Array.isArray(errorJson.message)
          ? errorJson.message.join(', ')
          : errorJson.message;
      }
    } catch (e) {
      // ignore parsing errors
    }
    throw new Error(errorMsg);
  }

  const json: ApiResponse<T> = await res.json();
  return json.data;
}

export function mediaUrl(url?: string | null): string {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("data:")) return url;
  // Backend-uploaded files
  if (url.startsWith("/uploads") || url.startsWith("uploads/")) {
    const base = API_BASE.replace("/api/v1", "");
    return `${base}${url.startsWith("/") ? url : `/${url}`}`;
  }
  // Local Next.js public folder assets (e.g. /UDS.jpg, /Girl.jpg)
  if (url.startsWith("/")) return url;
  return `/${url}`;
}

// Types
export interface HomepageHero {
  heading: string;
  subheading: string;
  content: string;
  button1: string;
  button2: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoUrl?: string;
  websiteUrl?: string;
  order: number;
}

export interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  content: string;
  author: string;
  category: string;
  coverImageUrl?: string;
  readingTime?: string;
  status: string;
  publishDate?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  photoUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl?: string;
  websiteUrl?: string;
}

export interface PageHero {
  heading: string;
  content: string;
}

export interface AboutSection {
  heading: string;
  subheading?: string;
  content: string;
  stats?: { label: string; value: number; suffix: string }[];
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption?: string;
  order: number;
}

export interface ContactDetails {
  heading: string;
  content: string;
  location: string;
  contacts: string;
  email: string;
  instagramUrl?: string;
  facebookUrl?: string;
  twitterUrl?: string;
}

export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface RecentActivity {
  id: string;
  title: string;
  category?: string;
  date?: string;
  location?: string;
  excerpt?: string;
  description?: string;
  image?: string;
  tag?: string;
  exploreLink?: string;
  highlight?: boolean;
  order?: number;
}

export const api = {
  homepage: {
    hero: () => apiFetch<HomepageHero>("/homepage/hero"),
    featuredProducts: () => apiFetch<{ itemIds: string[] }>("/homepage/featured-products"),
    featuredBlogs: () => apiFetch<{ itemIds: string[] }>("/homepage/featured-blogs"),
    featuredTeam: () => apiFetch<{ itemIds: string[] }>("/homepage/featured-team"),
    testimonials: () => apiFetch<Testimonial[]>("/homepage/testimonials"),
    faqs: () => apiFetch<FAQ[]>("/homepage/faqs"),
  },
  about: {
    hero: () => apiFetch<AboutSection>("/about/hero"),
    whoWeAre: () => apiFetch<AboutSection>("/about/who-we-are"),
    ingoga: () => apiFetch<AboutSection>("/about/ingoga"),
    teamMembers: (limit = 50) =>
      apiFetch<Paginated<TeamMember>>(`/about/team-members?limit=${limit}`),
  },
  products: {
    hero: () => apiFetch<PageHero>("/products/hero"),
    featured: () => apiFetch<FeaturedProduct[]>("/products/featured"),
  },
  blog: {
    list: (status = "published", limit = 50) =>
      apiFetch<Paginated<BlogPost>>(`/blog-posts?status=${status}&limit=${limit}`),
    bySlug: (slug: string) => apiFetch<BlogPost>(`/blog-posts/slug/${slug}`),
    byId: (id: string) => apiFetch<BlogPost>(`/blog-posts/${id}`),
  },
  gallery: {
    hero: () => apiFetch<PageHero>("/gallery/hero"),
    items: (limit = 50) => apiFetch<Paginated<GalleryItem>>(`/gallery/items?limit=${limit}`),
  },
  contact: {
    hero: () => apiFetch<PageHero>("/contact/hero"),
    details: () => apiFetch<ContactDetails>("/contact/details"),
    submit: (data: { name: string; email: string; message: string }) =>
      apiFetch("/contact/submit", { method: "POST", body: JSON.stringify(data) }),
  },
  partners: {
    list: (limit = 50) =>
      apiFetch<Paginated<Partner>>(`/partners?limit=${limit}`).then((res) => res.data),
  },
  recentActivities: {
    list: () => apiFetch<RecentActivity[]>("/recent-activities"),
  },
};

export async function resolveFeaturedProducts(): Promise<FeaturedProduct[]> {
  const [config, all] = await Promise.all([
    api.homepage.featuredProducts(),
    api.products.featured(),
  ]);
  const ids = config?.itemIds || [];
  if (ids.length === 0) return all.slice(0, 3);
  return ids.map((id) => all.find((p) => p.id === id)).filter(Boolean) as FeaturedProduct[];
}

export async function resolveFeaturedBlogs(): Promise<BlogPost[]> {
  const [config, list] = await Promise.all([
    api.homepage.featuredBlogs(),
    api.blog.list("published", 50),
  ]);
  const ids = config?.itemIds || [];
  const posts = list.data;
  if (ids.length === 0) return posts.slice(0, 3);
  return ids.map((id) => posts.find((p) => p.id === id)).filter(Boolean) as BlogPost[];
}

export async function resolveFeaturedTeam(): Promise<TeamMember[]> {
  const [config, list] = await Promise.all([
    api.homepage.featuredTeam(),
    api.about.teamMembers(50),
  ]);
  const ids = config?.itemIds || [];
  const members = list.data;
  if (ids.length > 0) {
    const resolved = ids.map((id) => members.find((m) => m.id === id)).filter(Boolean) as TeamMember[];
    if (resolved.length > 0) return resolved;
  }
  if (members.length > 0) return members.slice(0, 4);
  return [];
}
