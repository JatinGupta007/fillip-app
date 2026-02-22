"use client";

/* ════════════════════════════════════════
   FAQ SECTION — matches image exactly
   Clean list style, no borders on items,
   just dividers between, question bold,
   answer grey below when open.

   Props:
     title        — string (dark part)
     titleColored — string (gradient colored part)
     titleGradient — CSS gradient string
     faqs         — Array<{ question: string, answer: string }>
     bg           — optional CSS background
════════════════════════════════════════ */
export default function FAQSection({
  title = "Frequently Asked ",
  titleColored = "Questions",
  titleGradient = "linear-gradient(to right, #3b82f6, #8b5cf6)",
  subtitle = "Everything you need to know about paid user acquisition",
  faqs = [],
  bg = "#ffffff",
}) {
  return (
    <section
      className="w-full py-16 px-5 sm:px-10 xl:px-16"
      style={{ background: bg }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0d1f3c] leading-tight">
            {title}
            <span
              className="bg-clip-text text-transparent ml-1"
              style={{ backgroundImage: titleGradient }}
            >
              {titleColored}
            </span>
          </h2>
          <p className="text-lg mt-4 text-gray-500">{subtitle}</p>
        </div>

        {/* ── FAQ List ── */}
        <div className="flex flex-col max-w-6xl mx-auto">
          {faqs.map((faq, i) => {
            return (
              <div
                key={i}
                className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white hover:shadow-sm transition-shadow duration-200"
              >
                {/* Question row */}
                <button className="w-full text-left px-6 py-5 group">
                  <span className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
                    {faq.question}
                  </span>
                </button>

                {/* Answer — smooth expand */}
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 opacity-100">
                  <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   DATA — matches image content exactly
════════════════════════════════════════ */
