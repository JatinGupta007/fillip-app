/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";

const CATEGORY_COLORS = {
  ASO: "bg-emerald-500",
  "Paid UA": "bg-blue-500",
  "Creative Strategy": "bg-purple-500",
  Analytics: "bg-orange-500",
  "Case Studies": "bg-teal-500",
  "Growth Marketing": "bg-pink-500",
};

const TAGS = [
  "#ASO",
  "#Facebook Ads",
  "#Google UAC",
  "#TikTok",
  "#Creative Testing",
  "#Attribution",
  "#Retention",
  "#Keywords",
  "#UGC",
  "#iOS",
  "#Android",
];

const FILTERS = [
  { label: "All Articles", count: 47 },
  { label: "ASO", count: 12 },
  { label: "Paid UA", count: 15 },
  { label: "Creative Strategy", count: 8 },
  { label: "Analytics", count: 7 },
  { label: "Case Studies", count: 5 },
];

function getCategoryFromTags(tags, categories) {
  if (categories?.includes(17)) return "Growth Marketing";
  return "ASO";
}

function estimateReadTime(content) {
  const text = content?.replace(/<[^>]+>/g, "") || "";
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function stripHtml(html) {
  return html?.replace(/<[^>]+>/g, "") || "";
}

function getAuthorInitial(name) {
  return name ? name.charAt(0).toUpperCase() : "A";
}

const AUTHORS = [
  "Sarah Chen",
  "Marcus Johnson",
  "Priya Patel",
  "David Kim",
  "Lisa Wang",
  "Alex Rodriguez",
];

// Stock placeholder images from picsum
const IMAGES = [
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
];

const AVATAR_COLORS = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-teal-500",
];

function Skeleton({ className }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />;
}

function ArticleCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  );
}

function FeaturedSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
      <Skeleton className="md:w-1/2 h-72 md:h-auto rounded-none" />
      <div className="p-8 md:w-1/2 space-y-4">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
        <div className="flex items-center gap-3 pt-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
        <Skeleton className="h-10 w-40 rounded-lg" />
      </div>
    </div>
  );
}

function ArticleCard({ post, index }) {
  const author = AUTHORS[index % AUTHORS.length];
  const imgUrl = IMAGES[index % IMAGES.length];
  const avatarColor = AVATAR_COLORS[index % AVATAR_COLORS.length];
  const category = getCategoryFromTags(post.tags, post.categories);
  const badgeColor = CATEGORY_COLORS[category] || "bg-gray-500";
  const readTime = estimateReadTime(post.content?.rendered);
  const excerpt = stripHtml(post.excerpt?.rendered).slice(0, 100) + "...";

  return (
    <div
      data-aos="flip-right"
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col"
    >
      <div className="relative">
        <img
          src={imgUrl}
          alt={post.title?.rendered}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-3 left-3 ${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
        >
          {category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-gray-400 text-xs mb-2">
          <span className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                ry="2"
                strokeWidth="2"
              />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
            </svg>
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <polyline points="12 6 12 12 16 14" strokeWidth="2" />
            </svg>
            {readTime} min read
          </span>
        </div>
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 line-clamp-2">
          {post.title?.rendered}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full ${avatarColor} flex items-center justify-center text-white text-xs font-bold`}
            >
              {getAuthorInitial(author)}
            </div>
            <span className="text-gray-700 text-xs font-medium">{author}</span>
          </div>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-xs font-semibold hover:underline flex items-center gap-1"
          >
            Read →
          </a>
        </div>
      </div>
    </div>
  );
}

function FeaturedArticle({ post }) {
  const author = AUTHORS[0];
  const imgUrl = IMAGES[0];
  const readTime = estimateReadTime(post.content?.rendered);
  const excerpt = stripHtml(post.excerpt?.rendered).slice(0, 160) + "...";
  const TAGS_FEATURED = ["ASO", "iOS", "App Store", "Algorithm"];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row mb-20">
      <div data-aos="fade-left" className="relative md:w-1/2">
        <img
          src={imgUrl}
          alt={post.title?.rendered}
          className="w-full h-64 md:h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          ASO
        </span>
      </div>
      <div data-aos="fade-right" className="p-8 md:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-3 text-gray-400 text-lg mb-4">
          <span className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                ry="2"
                strokeWidth="2"
              />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
            </svg>
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <polyline points="12 6 12 12 16 14" strokeWidth="2" />
            </svg>
            {readTime} min read
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold text-gray-900 leading-tight mb-5">
          {post.title?.rendered}
        </h2>
        <p className="text-gray-500 text-xl leading-relaxed mb-5">{excerpt}</p>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {getAuthorInitial(author)}
          </div>
          <div>
            <div className="font-semibold text-gray-800 text-sm">{author}</div>
            <div className="text-gray-400 text-xs">Head of ASO</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {TAGS_FEATURED.map((t) => (
            <span
              key={t}
              className="bg-gray-100 font-bold text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-linear-to-r from-[#0084D1] to-[#0092B8] hover:scale-105 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all w-fit"
        >
          Read Full Article →
        </a>
      </div>
    </div>
  );
}

export default function AppFillipBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://appfillip.com/wp-json/wp/v2/posts?per_page=20",
        );
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (e) {
        // fallback: use the sample post from props
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const featured = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero */}
      <div className="relative overflow-hidden bg-linear-to-br from-[#F0F9FF] via-[#FAF5FF] to-[#FFFFFF] py-20 px-5 md:px-10 xl:px-16 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(120,119,198,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,100,200,0.12) 0%, transparent 50%)",
          }}
        />
        {/* Bottom Left Soft Pink-Lilac Blob */}
        <div className="absolute bottom-10 left-16 w-96 h-96 rounded-3xl bg-pink-300 opacity-35 blur-3xl pointer-events-none"></div>

        {/* Top Right Soft Sky Blue Blob */}
        <div className="absolute top-8 right-10 w-96 h-96 rounded-3xl bg-cyan-300 opacity-35 blur-3xl pointer-events-none"></div>
        <div className="relative mx-auto">
          <span
            data-aos="zoom-in-left"
            className="inline-flex items-center gap-2 bg-white border border-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            App Growth Insights & Strategies
          </span>
          <h1
            data-aos="zoom-out-left"
            className="text-3xl md:text-5xl xl:text-7xl font-bold text-gray-900 mb-5 leading-tight"
          >
            The AppFillip{" "}
            <span className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Growth Blog
            </span>
          </h1>
          <p
            data-aos="zoom-out-right"
            className="text-gray-500 text-md xl:text-xl mb-12 max-w-2xl mx-auto"
          >
            Actionable guides, case studies, and expert insights to help you
            grow your mobile app-from ASO to paid UA and beyond.
          </p>
          <div data-aos="fade-down" className="relative max-w-2xl mx-auto">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path
                d="m21 21-4.35-4.35"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl shadow-sm border border-gray-100 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm font-semibold text-gray-600"
          >
            {["47 Articles", "Weekly Updates", "10K+ Monthly Readers"].map(
              (s) => (
                <span key={s} className="flex items-center gap-2 text-lg">
                  <FiCheckCircle className="text-green-500" />
                  {s}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-5 md:px-10 xl:px-16 py-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 xl:gap-5 items-center justify-center mb-12">
          {FILTERS.map((f) => (
            <button
              data-aos="zoom-in"
              key={f.label}
              onClick={() => setActiveFilter(f.label)}
              className={`flex items-center gap-2 lg:px-9 px-6 py-2.5 lg:py-3.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === f.label
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {f.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${activeFilter === f.label ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}
              >
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            Featured Article
          </div>
          {loading ? (
            <FeaturedSkeleton />
          ) : featured ? (
            <FeaturedArticle post={featured} />
          ) : null}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ArticleCardSkeleton key={i} />
              ))
            : gridPosts
                .filter(
                  (p) =>
                    search === "" ||
                    p.title?.rendered
                      ?.toLowerCase()
                      .includes(search.toLowerCase()) ||
                    stripHtml(p.excerpt?.rendered)
                      .toLowerCase()
                      .includes(search.toLowerCase()),
                )
                .slice(0, 6)
                .map((post, i) => (
                  <ArticleCard key={post.id} post={post} index={i} />
                ))}
        </div>

        {/* Popular Topics */}
        <div className="py-16 max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            className="flex items-center gap-2 font-bold text-gray-800 text-4xl mb-7"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            Popular Topics
          </div>
          <div data-aos="fade-down" className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                className="bg-white border border-gray-200 text-gray-600 text-sm px-4 py-1.5 rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div
          data-aos="zoom-in-left"
          className="rounded-2xl overflow-hidden mb-10 max-w-7xl mx-auto"
          style={{
            background:
              "linear-gradient(135deg, #024A70 0%, #59168B 50%, #861043 100%)",
          }}
        >
          <div className="p-10 text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-8">
              ✦ Never Miss an Update
            </span>
            <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white mb-8">
              Get Weekly Growth Insights
            </h2>
            <p className="text-white/80 text-md xl:text-xl mb-12 max-w-3xl mx-auto">
              Join 10,000+ app marketers receiving actionable strategies, case
              studies, and industry news every Tuesday.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:bg-white/20"
              />
              <button className="bg-white text-indigo-700 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-white/50 text-xs mt-8">
              ✓ No spam • Unsubscribe anytime
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-16">
          <h2
            data-aos="fade-right"
            className="text-3xl md:text-4xl xl:text-6xl font-bold text-gray-900 mb-7"
          >
            Want Personalized{" "}
            <span className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Growth Advice?
            </span>
          </h2>
          <p data-aos="fade-left" className="text-gray-500 text-md xl:text-xl mb-10 mx-auto">
            Our team can provide custom strategies tailored to your app's unique
            challenges and opportunities.
          </p>
          <div data-aos="zoom-out" className="flex flex-col sm:flex-row items-center justify-center gap-7">
            <button className="bg-linear-to-r from-[#0084D1] to-[#0092B8] hover:scale-105 transition-all text-white font-semibold text-sm px-9 py-4 rounded-xl">
              Book Free Consultation →
            </button>
            <button className="bg-white border border-gray-200 hover:border-gray-400 text-gray-700 font-semibold text-sm px-9 py-4 rounded-xl transition-colors">
              Get Free App Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
