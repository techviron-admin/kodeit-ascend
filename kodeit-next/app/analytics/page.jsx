import Image from "next/image";
import ModuleHero from "@/components/ModuleHero";
import ModuleCta from "@/components/ModuleCta";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Analytics",
  description:
    "Measure growth, diagnose skill gaps, enable fair cross-campus comparison, and support regulatory reporting from the same assessment data.",
};

const sw = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const tabs = [
  [
    "Dashboard",
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </svg>,
  ],
  [
    "Trends",
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>,
  ],
  [
    "Growth",
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <path d="M4 19v-4M9 19v-8M14 19v-6M19 19V5" />
      <path d="M4 9c4-1 8-4 10-7" />
    </svg>,
  ],
  [
    "Competency Health",
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </svg>,
  ],
  [
    "Benchmarking",
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <path d="M5 21V4" />
      <path d="M5 4h13l-2.5 4L18 12H5" />
    </svg>,
  ],
  [
    "Performance",
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m12 12 3.5-3.5" />
      <path d="M7.5 12H6M18 12h-1.5M12 6v1.5" />
    </svg>,
  ],
  [
    "AI Insights",
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
    </svg>,
  ],
  [
    "Comparisons",
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <path d="M12 3v18" />
      <path d="M8 6H4v12h4M16 6h4v12h-4" />
    </svg>,
  ],
];

const checks = [
  "Real-time data updates",
  "Custom filters and drill-downs",
  "Visualize what matters most",
  "Exports and share reports",
];

const bandFeats = [
  [
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <path d="M3 17v3M8 13v7M13 15v5M18 9v11" />
      <path d="m4 9 5-4 4 3 6-5" />
      <path d="M15 3h4v4" />
    </svg>,
    "Statistical rigor",
    "Average, range, and standard deviation accompany every growth calculation.",
  ],
  [
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
    </svg>,
    "AI insights",
    "Learner strengths, improvement areas, and study tips, with the reasoning behind every AI grade.",
  ],
  [
    <svg key="i" viewBox="0 0 24 24" {...sw}>
      <path d="M4 20v-4h4v-4h4V8h4V4h4" />
    </svg>,
    "Difficulty progression",
    "See how item difficulty adapted through each assessment.",
  ],
];

export default function AnalyticsPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="analytics"
          circles
          eyebrow="Analytics"
          title="Analytics"
          sub="Turn test results into institutional intelligence. Measure growth, diagnose skill gaps, enable fair cross-campus comparison, and support regulatory reporting — from the same underlying assessment data."
          primaryHref="#insights"
          primaryLabel="Explore Analytics"
          secondaryHref="/dashboard"
          secondaryLabel="View Dashboard"
          imageAlt="Kodeit Ascend analytics dashboard"
          image="/images/hero-analytics.webp"
        />

        {/* ============ Insight explorer ============ */}
        <section className="kd-section aw-section" id="insights">
          <img
            className="kd-deco"
            src="/images/module-blurb-sm.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "14%", top: 30, width: 49 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">EXPLORE KEY INSIGHTS</span>
              <h2>What would you like to analyze?</h2>
            </div>
            <div className="ax-tabs" role="presentation">
              {tabs.map(([label, icon], i) => (
                <span
                  className={`ax-tab${i === 0 ? " is-active" : ""}`}
                  key={label}
                >
                  {icon}
                  {label}
                </span>
              ))}
            </div>
            <div className="ax-panel">
              <div>
                <h3>Dashboard</h3>
                <p className="desc">
                  Get a real time overview of a performance and key metrics at a
                  glance.
                </p>
                <ul className="ax-checks">
                  {checks.map((c) => (
                    <li key={c}>
                      <svg viewBox="0 0 24 24" {...sw} strokeWidth={2.6}>
                        <path d="m4 12.5 5.5 5.5L20 6.5" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shot">
                <Image
                  src="/images/module-hero.webp"
                  alt="Kodeit Ascend admin dashboard overview"
                  width={1162}
                  height={716}
                  quality={90}
                  sizes="(max-width: 900px) 100vw, 620px"
                />
              </div>
            </div>
          </div>
        </section>

        <ModuleCta
          title="Need custom report?"
          sub="Our team can help you build reports tailored to your goals and metrics."
          label="Request a Demo"
        />

        {/* ============ Blue feature band ============ */}
        <section className="md-band-wrap">
          <div className="container">
            <div className="md-band ax-band">
              <h2 className="ax-band-title">
                Powerful Analytics.
                <br />
                Smarter Decisions.
              </h2>
              {bandFeats.map(([icon, title, desc]) => (
                <div className="ax-feat" key={title}>
                  {icon}
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
