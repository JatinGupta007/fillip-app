"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsStarFill, BsQuote } from "react-icons/bs";
import { TbSparkles } from "react-icons/tb";
import { RiMedalLine } from "react-icons/ri";
import { LuQuote } from "react-icons/lu";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    company: "FitLife Pro",
    category: "Health & Fitness",
    avatar: "SM",
    avatarlinear: "from-pink-400 to-purple-500",
    cardlinear: "from-pink-200 to-purple-200",
    accentColor: "text-pink-500",
    borderColor: "border-white",
    shadowColor: "shadow-pink-200",
    rating: 5,
    review:
      "AppFillip completely transformed our app's trajectory. We went from 10K users to 2.5M in just 6 months. Their full-funnel strategy and data-driven approach delivered results beyond our wildest expectations. Absolutely game-changing!",
    metric: "2.5M Users",
    metricLabel: "+340% Growth",
    metricColor: "bg-linear-to-r from-pink-500 to-purple-500",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Head of Growth",
    company: "ShopEase",
    category: "E-Commerce",
    avatar: "JC",
    avatarlinear: "from-blue-400 to-cyan-500",
    cardlinear: "from-blue-200 to-cyan-100",
    accentColor: "text-blue-500",
    borderColor: "border-white",
    shadowColor: "shadow-cyan-200",
    rating: 5,
    review:
      "The ROI we achieved with AppFillip is unmatched. Our ROAS jumped to 450% within 8 months. Their team understood our e-commerce niche perfectly and built campaigns that drove not just downloads but loyal, high-value users.",
    metric: "450% ROAS",
    metricLabel: "+180% Revenue",
    metricColor: "bg-linear-to-r from-blue-500 to-cyan-400",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Product Director",
    company: "LearnHub",
    category: "Education",
    avatar: "PS",
    avatarlinear: "from-emerald-400 to-teal-500",
    cardlinear: "from-emerald-200 to-teal-100",
    accentColor: "text-emerald-600",
    borderColor: "border-white",
    shadowColor: "shadow-teal-200",
    rating: 5,
    review:
      "We struggled with user retention until AppFillip stepped in. Their content strategy and user onboarding campaigns pushed our retention to 85%. The team is proactive, creative, and genuinely invested in your success.",
    metric: "85% Retention",
    metricLabel: "+62% Engagement",
    metricColor: "bg-linear-to-r from-emerald-500 to-teal-400",
  },
  {
    id: 4,
    name: "Daniel Reeves",
    role: "Co-Founder",
    company: "TravelNest",
    category: "Travel & Lifestyle",
    avatar: "DR",
    avatarlinear: "from-orange-400 to-yellow-500",
    cardlinear: "from-orange-200 to-yellow-100",
    accentColor: "text-orange-500",
    borderColor: "border-white",
    shadowColor: "shadow-orange-200",
    rating: 5,
    review:
      "From day one, the AppFillip team felt like an extension of our own team. Their influencer marketing campaigns drove our app to the #1 spot in the Travel category within 4 months. Simply outstanding work and communication.",
    metric: "#1 in Travel",
    metricLabel: "+510% Installs",
    metricColor: "bg-linear-to-r from-orange-500 to-yellow-400",
  },
  {
    id: 5,
    name: "Ava Thompson",
    role: "CMO",
    company: "FinTrack",
    category: "Fintech",
    avatar: "AT",
    avatarlinear: "from-violet-400 to-indigo-500",
    cardlinear: "from-violet-200 to-indigo-100",
    accentColor: "text-violet-600",
    borderColor: "border-violet-100",
    shadowColor: "shadow-indigo-200",
    rating: 5,
    review:
      "AppFillip's expertise in the fintech space is remarkable. Compliance-safe creatives, razor-sharp targeting, and a team that truly listens. We scaled from 50K to 800K users in under a year — results that speak for themselves.",
    metric: "800K Users",
    metricLabel: "+16x Growth",
    metricColor: "bg-linear-to-r from-violet-500 to-indigo-500",
  },
  {
    id: 6,
    name: "Liam Nguyen",
    role: "CEO",
    company: "GameOn",
    category: "Gaming",
    avatar: "LN",
    avatarlinear: "from-red-400 to-pink-500",
    cardlinear: "from-red-200 to-pink-100",
    accentColor: "text-red-500",
    borderColor: "border-red-100",
    shadowColor: "shadow-pink-200",
    rating: 5,
    review:
      "For gaming apps, user quality is everything. AppFillip's targeted acquisition campaigns brought in players who actually stayed and spent. Our Day-30 retention is at 42% — almost double the industry average. Incredible results!",
    metric: "42% D30 Retention",
    metricLabel: "+290% LTV",
    metricColor: "bg-linear-to-r from-red-500 to-pink-500",
  },
];

const AUTO_INTERVAL = 3500;

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const [visible, setVisible] = useState(3);

  const router = useRouter();

  const maxIndex = reviews.length - visible;

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(Math.max(0, Math.min(index, maxIndex)));
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, maxIndex],
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current === maxIndex ? 0 : current + 1);

  // Auto-advance
  useEffect(() => {
    if (isHovered) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isHovered, maxIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-linear-to-br from-[#f0f5ff] via-white to-[#f8f0ff] py-20 overflow-x-hidden px-5 md:px-10 xl:px-16">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-14">
        <div
          data-aos="fade-down"
          className="inline-flex items-center gap-2 bg-linear-to-l from-[#DFF2FE] to-[#F3E8FF] text-gray-500 text-sm font-semibold px-4 py-2 rounded-full shadow-sm mb-6"
        >
          <LuQuote className="text-purple-400 text-[14px]" />
          Client Reviews
        </div>
        <h2
          data-aos="fade-left"
          className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
        >
          What Our{" "}
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
        <p data-aos="fade-right" className="mt-4 text-gray-600 text-lg">
          Trusted by 500+ apps worldwide — here's what founders and growth teams
          say about us
        </p>
      </div>

      {/* Carousel */}
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cards viewport */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out p-4"
            style={{
              transform: `translateX(calc(-${current} * (100% / ${visible})))`,
            }}
          >
            {reviews.map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            <FiChevronLeft className="text-lg" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 h-2.5 bg-linear-to-r from-blue-500 to-purple-500"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-200"
          >
            <FiChevronRight className="text-lg" />
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div data-aos="zoom-in" className="max-w-4xl mx-auto mt-16">
        <div className="bg-linear-to-r from-pink-50 to-blue-50 border border-gray-100 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <p className="text-gray-900 font-bold text-lg">
              Ready to write your success story?
            </p>
            <p className="text-gray-500 text-sm mt-0.5">
              Join 500+ successful apps that chose AppFillip for their growth
              journey
            </p>
          </div>
          <button
            onClick={() => router.push("audit")}
            className="flex items-center gap-2 active:scale-95 bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-200 transition-all duration-200 whitespace-nowrap"
          >
            <TbSparkles />
            Get Free Audit
          </button>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`shrink-0 w-full sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-32px)/3)] min-w-[300px] rounded-3xl border-2 p-8 flex flex-col gap-4 shadow-md transition-all duration-300 cursor-default
        ${
          hovered
            ? "-translate-y-2 shadow-[0_0_40px] bg-linear-to-br " +
              review.cardlinear +
              " " +
              review.shadowColor +
              " " +
              review.borderColor
            : "bg-white border-gray-100"
        }`}
    >
      {/* Top: avatar + name + metric badge */}
      <div className="flex flex-col items-start justify-start gap-5">
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(review.rating)].map((_, i) => (
            <BsStarFill key={i} className="text-yellow-400 text-xl" />
          ))}
        </div>

        {/* Quote icon + Review text */}
        <div className="relative flex-1">
          <FaQuoteRight
            className={`absolute -top-10 -left-1 text-8xl opacity-12 ${review.accentColor}`}
          />
          <p className="text-gray-700 leading-relaxed italic">
            "{review.review}"
          </p>
        </div>
      </div>
      {/* Metric badge */}
      <div
        className={`${review.metricColor} text-white text-[10px] font-bold px-4 py-2.5 my-4 rounded-2xl text-center shadow-md shrink-0 w-fit`}
      >
        <p className="text-xl font-bold leading-none">{review.metric}</p>
        <p className="opacity-80 text-sm mt-0.5">{review.metricLabel}</p>
      </div>

      {/* Footer: category tag */}
      <div className="flex items-center justify-between pt-5 border-t-2 border-gray-100">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className={`w-15 h-15 rounded-full bg-linear-to-br ${review.avatarlinear} flex items-center justify-center text-white font-bold text-sm shadow-lg shrink-0`}
          >
            {review.avatar}
          </div>
          <div>
            <p className="text-gray-900 font-bold text-lg mb-2 leading-tight">
              {review.name}
            </p>
            <p className="text-gray-500 text-sm">
              {review.role} at{" "}
              <span className={`text-sm font-bold ${review.accentColor}`}>
                {review.company}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
