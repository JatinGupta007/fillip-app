import { BsStarFill, BsQuote } from "react-icons/bs";
import { FiCheck, FiDownload, FiArrowRight } from "react-icons/fi";

/* ─── METRIC CARD ─── */
function MetricCard({ metric }) {
  return (
    <div
      data-aos="flip-up"
      className="bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:shadow-md hover:scale-[1.02] transition-all duration-200"
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className={`w-9 h-9 rounded-xl ${metric.iconBg} flex items-center justify-center shadow-sm`}
        >
          {metric.icon}
        </div>
        <span className="text-gray-500 text-xs font-semibold">
          {metric.label}
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs mb-1">
        <span className="text-red-400 font-bold">{metric.from}</span>
        <span className="text-gray-400">→</span>
        <span className="text-gray-800 font-bold">{metric.to}</span>
      </div>
      <p className={`text-xl font-bold ${metric.changeColor}`}>
        {metric.change}
      </p>
    </div>
  );
}

/* ─── RESULT ROW ─── */
function ResultRow({ text, accentColor }) {
  return (
    <div
      data-aos="fade-up-right"
      className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:bg-white hover:shadow-sm hover:scale-[1.01] transition-all duration-200"
    >
      <div
        className={`w-6 h-6 rounded-full bg-gradient-to-br ${accentColor} flex items-center justify-center flex-shrink-0 shadow-sm`}
      >
        <FiCheck className="text-white text-xs" />
      </div>
      <span className="text-gray-700 text-sm font-medium">{text}</span>
    </div>
  );
}

/* ─── CASE STUDY CARD ─── */
function CaseStudyCard({ data }) {
  return (
    <div
      data-aos="zoom-out-down"
      className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${data.borderTop}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* LEFT PANEL */}
        <div className="p-7 border-r border-gray-100 flex flex-col gap-5">
          {/* Header */}
          <div
            data-aos="fade-down-right"
            className="flex items-start justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{data.emoji}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{data.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`${data.tagColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-md`}
                  >
                    {data.tag}
                  </span>
                  <span className="text-gray-400 text-xs font-semibold">
                    {data.category}
                  </span>
                </div>
              </div>
            </div>
            <span className="text-3xl">{data.trophy}</span>
          </div>

          {/* Headline */}
          <p
            data-aos="fade-down-left"
            className="text-base font-bold text-gray-900 leading-snug"
          >
            {data.headline}
          </p>

          {/* Challenge */}
          <div
            data-aos="zoom-in-left"
            className="bg-red-50 border border-red-100 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <span className="text-red-600 text-xs font-bold tracking-widest">
                CHALLENGE
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.challenge}
            </p>
          </div>

          {/* Solution */}
          <div
            data-aos="zoom-in-right"
            className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-br ${data.accentColor} flex items-center justify-center flex-shrink-0`}
              >
                <FiCheck className="text-white text-xs" />
              </div>
              <span className="text-emerald-600 text-xs font-bold tracking-widest">
                SOLUTION
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.solution}
            </p>
          </div>

          {/* Duration + Investment */}
          <div
            data-aos="fade-down"
            className="flex gap-6 border-t border-gray-100 pt-4"
          >
            <div>
              <p className="text-gray-400 text-xs">Duration</p>
              <p className="text-gray-900 font-bold text-base">
                {data.duration}
              </p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="text-gray-400 text-xs">Investment</p>
              <p className="text-gray-900 font-bold text-base">
                {data.investment}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="p-7 flex flex-col gap-5">
          {/* Key Metrics */}
          <div>
            <p
              data-aos="fade-left"
              className="text-xs font-bold text-gray-400 tracking-widest mb-3"
            >
              KEY METRICS
            </p>
            <div className="grid grid-cols-2 gap-3">
              {data.metrics.map((metric, i) => (
                <MetricCard key={i} metric={metric} />
              ))}
            </div>
          </div>

          {/* Key Results */}
          <div>
            <p
              data-aos="fade-right"
              className="text-xs font-bold text-gray-400 tracking-widest mb-3"
            >
              KEY RESULTS
            </p>
            <div className="flex flex-col gap-2">
              {data.results.map((result, i) => (
                <ResultRow
                  key={i}
                  text={result}
                  accentColor={data.accentColor}
                />
              ))}
            </div>
          </div>

          {/* Review */}
          <div
            data-aos="zoom-in"
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${data.reviewBg} p-5`}
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <BsStarFill key={i} className="text-yellow-300 text-sm" />
              ))}
            </div>
            <BsQuote className="absolute top-3 right-4 text-white/20 text-5xl" />
            <p className="text-white text-sm leading-relaxed italic mb-4">
              "{data.reviewText}"
            </p>
            <div className="border-t border-white/20 pt-3">
              <p className="text-white font-bold text-sm">{data.reviewer}</p>
              <p className="text-white/70 text-xs">{data.reviewerRole}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN EXPORT ─── */
export default function CaseStudySection({ studies }) {
  return (
    <section className="w-full bg-gradient-to-b from-[#f4f8fc] to-white py-14 px-5 md:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {studies.map((study) => (
          <CaseStudyCard key={study.id} data={study} />
        ))}
      </div>
    </section>
  );
}
