"use client";
import Image from "next/image";
import { useState } from "react";

import { FaBolt, FaArrowRight } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { MdTrendingUp, MdGroups } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";

export default function HeroSection() {
  const [link, setLink] = useState("");

  return (
    <section className="w-full overflow-hidden bg-linear-to-br from-[#eaf4ff] via-[#f0f7ff] to-[#e8f0ff] flex items-center">
      {/* Background blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[340px] h-[340px] rounded-full bg-blue-100 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-purple-100 opacity-50 blur-3xl pointer-events-none" />

      <div className="w-full max-w-8xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-[#DFF2FE] backdrop-blur border border-blue-100 rounded-full px-4 py-2 w-fit shadow-lg mb-6">
            <span className="flex items-center gap-2 text-sm font-semibold text-[#0069A8]">
              <BsStars className="text-[#0069A8]" />
              Trusted by 500+ Apps Worldwide
            </span>
            <div className="flex">
              <span className="w-4 h-4 rounded-full bg-blue-500 inline-block border border-white" />
              <span className="w-4 h-4 rounded-full bg-blue-500 inline-block -ml-1 border border-white" />
              <span className="w-4 h-4 rounded-full bg-indigo-600 inline-block -ml-1 border border-white" />
            </div>
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900">
              Grow Your App to
            </h1>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight bg-linear-to-r from-[#00b4d8] via-[#6c63ff] to-[#a855f7] bg-clip-text text-transparent">
              1M+ Users
            </h1>
            <div className="mt-2 h-1 w-48 rounded-2xl bg-linear-to-r from-[#00b4d8] to-[#6c63ff]" />
          </div>

          {/* Subtext */}
          <p className="text-gray-600 text-xl leading-relaxed max-w-xl">
            Get a{" "}
            <a href="#" className="font-bold text-[#0084D1]">
              free app marketing audit
            </a>{" "}
            and discover how to scale your mobile app with proven growth
            strategies that work.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Data-driven strategies",
              "Full-funnel campaigns",
              "ROI-focused execution",
              "Expert team support",
            ].map((f) => (
              <div
                key={f}
                className="flex items-center gap-2 text-gray-700 text-sm font-medium"
              >
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 shrink-0">
                  <IoMdCheckmarkCircleOutline className="text-white text-xs" />
                </span>
                {f}
              </div>
            ))}
          </div>

          {/* CTA Input */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <div className="w-120 flex items-center bg-white border-2 border-gray-200 rounded-xl shadow-sm px-4 py-4 gap-2">
              <input
                type="text"
                placeholder="Enter your App Store or Play Store link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="flex-1 bg-transparent text-gray-700 text-sm outline-none placeholder-gray-400"
              />
              <FaBolt className="text-gray-400 text-lg shrink-0" />
            </div>
            <button className="flex items-center justify-center gap-2 bg-linear-to-l from-[#00A6F4] via-[#00B8DB] to-[#155DFC] hover:bg-linear-to-l hover:from-[#017ab2] hover:via-[#018da9] hover:to-[#083cab] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-300 transition-all duration-200 whitespace-nowrap">
              Get Free Audit <FaArrowRight />
            </button>
          </div>

          {/* Sub-CTA */}
          <div className="flex items-center gap-8 flex-wrap mb-8">
            <a
              href="#"
              className="text-[#0084D1] text-sm underline underline-offset-2 font-semibold"
            >
              I don&apos;t have an app yet
            </a>
            <div className="flex gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <BsStarFill key={i} className="text-yellow-400 text-xs" />
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                4.9/5 from 200+ reviews
              </span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-2">
            <div className="flex items-center gap-3 bg-white rounded-2xl shadow-md px-4 py-3">
              <span className="w-9 h-9 rounded-xl bg-linear-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                <RiMedalLine className="text-white text-lg" />
              </span>
              <div>
                <p className="text-xs font-bold text-gray-800 leading-tight">
                  Top Rated
                </p>
                <p className="text-xs text-gray-500">Clutch 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-2xl shadow-md px-4 py-3">
              <span className="w-9 h-9 rounded-xl bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <MdTrendingUp className="text-white text-lg" />
              </span>
              <div>
                <p className="text-xs font-bold text-gray-800 leading-tight">
                  500M+
                </p>
                <p className="text-xs text-gray-500">Users Acquired</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-2xl shadow-md px-4 py-3">
              <span className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <MdGroups className="text-white text-lg" />
              </span>
              <div>
                <p className="text-xs font-bold text-gray-800 leading-tight">
                  500+
                </p>
                <p className="text-xs text-gray-500">Apps Scaled</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT — Phone mockup */}
        <div className="mt-8 lg:mt-0">
          <Image
            src="/home-1.png"
            height={500}
            width={500}
            alt="App screenshot"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
