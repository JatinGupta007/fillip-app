"use client";

/* ════════════════════════════════════════
   RICH PARAGRAPH — renders mixed bold/plain inline parts
   parts: Array<{ type: 'text' | 'bold', content: string }>
════════════════════════════════════════ */
function RichParagraph({ parts = [], className = "" }) {
  return (
    <p className={`text-sm sm:text-lg leading-relaxed ${className}`}>
      {parts.map((part, i) =>
        part.type === "bold" ? (
          <span key={i} className="font-bold text-gray-900">
            {part.content}
          </span>
        ) : (
          <span key={i}>{part.content}</span>
        ),
      )}
    </p>
  );
}

/* ════════════════════════════════════════
   MAIN COMPONENT
   ALL content comes from props — nothing hardcoded.
════════════════════════════════════════ */
export default function PrivacyHeroSection({
  bg,
  badge,
  headline,
  subtext,
  dates,
  infoCard,
}) {
  return (
    <section
      className="relative w-full overflow-hidden py-20 px-5 md:px-10 xl:px-16"
      style={{ background: bg.gradient }}
    >
      {/* Background blobs */}
      <div
        className={`absolute -top-20 -left-16 w-72 h-72 rounded-full ${bg.blob1} opacity-50 blur-3xl pointer-events-none`}
      />
      <div
        className={`absolute top-0 -right-16 w-64 h-64 rounded-full ${bg.blob2} opacity-40 blur-3xl pointer-events-none`}
      />
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full ${bg.blob3} opacity-60 blur-2xl pointer-events-none`}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        {/* ── Badge ── */}
        <div
          className="inline-flex items-center gap-2 border backdrop-blur text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:brightness-95 transition-all duration-200"
          style={{
            background: badge.bg,
            borderColor: badge.border,
            color: badge.textColor,
          }}
        >
          <span className={`text-base font-semibold ${badge.iconColor}`}>
            {badge.icon}
          </span>
          {badge.text}
        </div>

        {/* ── Headline ── */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0d1f3c] leading-tight tracking-tight">
          {headline}
        </h1>

        {/* ── Subtext ── */}
        <p className="text-gray-500 text-lg leading-relaxed max-5w-xl">
          {subtext}
        </p>

        {/* ── Dates ── */}
        {dates?.length > 0 && (
          <div className="flex flex-col items-center gap-1 text-sm mt-2">
            {dates.map((d, i) => (
              <p key={i}>
                <span className="font-bold text-gray-700">{d.label}</span>{" "}
                <span className="text-gray-500">{d.value}</span>
              </p>
            ))}
          </div>
        )}

        {/* ── Info card ── */}
        <div
          className="w-full mt-6 rounded-2xl px-6 sm:px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 text-left flex gap-4 items-start border"
          style={{ background: infoCard.bg, borderColor: infoCard.border }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = infoCard.hoverBorder)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = infoCard.border)
          }
        >
          {/* Icon circle */}
          <div
            className={`flex-shrink-0 mt-0.5 w-8 h-8 rounded-full ${infoCard.iconWrapBg} flex items-center justify-center`}
          >
            <span className={`${infoCard.iconColor} text-2xl font-bold`}>
              {infoCard.icon}
            </span>
          </div>

          {/* Rich paragraphs */}
          <div className="flex flex-col">
            {infoCard.paragraphs.map((para, i) => (
              <RichParagraph
                key={i}
                parts={para.parts}
                className={para.className ?? "text-gray-700"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
