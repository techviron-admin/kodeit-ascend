import ModuleHero from "@/components/ModuleHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Schools",
  description:
    "Standardised blueprints, difficulty calibration, DOK tagging, and standards alignment make results comparable across every school in a network.",
};

const sw = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const reporting = [
  {
    color: "#b2ccff",
    icon: (
      <svg viewBox="0 0 24 24" {...sw} style={{ color: "#b2ccff" }}>
        <path d="M3 21V10l4-3V4h4v1.5" />
        <path d="m11 8 5-4 5 4v13" />
        <path d="M3 21h18" />
        <path d="M13.5 12h1M18 12h1M13.5 16h1M18 16h1M6.5 13h1M6.5 17h1" />
      </svg>
    ),
    title: "School Curriculum View",
    desc: "Track student mastery and learning gaps against local curriculum standards to support planning and targeted intervention.",
  },
  {
    color: "#ffbcf9",
    icon: (
      <svg viewBox="0 0 24 24" {...sw} style={{ color: "#ffbcf9" }}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.4 3.9 5.6 3.9 9S14.5 18.6 12 21c-2.5-2.4-3.9-5.6-3.9-9S9.5 5.4 12 3Z" />
      </svg>
    ),
    title: "Global Benchmark View",
    desc: "Compare student performance using international benchmarks with percentile-based insights across schools.",
  },
];

const english = [
  [
    "CCSS Reporting",
    "Generate standards-based English reports aligned with Common Core learning outcomes.",
  ],
  [
    "CEFR Reporting",
    "Measure English language proficiency using internationally recognized CEFR levels.",
  ],
  [
    "National Standards",
    "Support reporting aligned with each school's national English curriculum requirements.",
  ],
];

const curricula = [
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="M12 6c-2-1.6-4.7-2.2-8-2.2v14.4c3.3 0 6 .6 8 2.2 2-1.6 4.7-2.2 8-2.2V3.8c-3.3 0-6 .6-8 2.2Z" />
        <path d="M12 6v14.4" />
      </svg>
    ),
    title: "Saudi Curriculum",
    desc: "Support Saudi curriculum standards and reporting requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="m12 4-9 4.5L12 13l9-4.5L12 4Z" />
        <path d="M6.5 10.8V15c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.2" />
        <path d="M21 8.5V14" />
      </svg>
    ),
    title: "US Curriculum",
    desc: "Align assessments and reporting with Common Core standards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M4 21h16" />
        <path d="M8 21v-9h8v9" />
        <path d="M12 12v9" />
      </svg>
    ),
    title: "UK Curriculum",
    desc: "Support curriculum planning and reporting for UK schools.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.4 3.9 5.6 3.9 9s-1.4 6.6-3.9 9c-2.5-2.4-3.9-5.6-3.9-9s1.4-6.6 3.9-9Z" />
      </svg>
    ),
    title: "IB Curriculum",
    desc: "Deliver assessments and reporting aligned with IB programmes.",
  },
];

export default function SchoolsPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="school"
          deco
          eyebrow="Schools"
          title="Schools"
          sub="Fair comparison across every campus. Standardised blueprints, difficulty calibration, DOK tagging, and standards alignment ensure results are comparable across all schools in a network — the foundation for cross-campus benchmarking leadership can trust."
          primaryHref="/help#contact"
          primaryLabel="Manage Schools"
          secondaryHref="#reporting"
          secondaryLabel="Explore Features"
          imageAlt="Kodeit Ascend schools administration portal"
        />

        {/* ============ School reporting ============ */}
        <section className="kd-section aw-section" id="reporting">
          <img
            className="kd-deco"
            src="/images/module-blurb-sm.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "16%", top: 40, width: 49 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">SCHOOL REPORTING</span>
              <h2>Reporting built for school leadership</h2>
              <p className="sub">
                Generate curriculum-aligned and benchmark reports to monitor
                performance, identify learning gaps, and support data-driven
                decisions.
              </p>
            </div>
            <div className="sr-grid">
              {reporting.map(({ icon, title, desc }) => (
                <article className="sr-card" key={title}>
                  {icon}
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ English reporting ============ */}
        <section className="kd-section aw-section" id="english">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 120, width: 210 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">ENGLISH REPORTING</span>
              <h2>Standards-based English reporting</h2>
            </div>
            <div className="er-grid">
              {english.map(([title, desc]) => (
                <article className="er-card" key={title}>
                  <span className="cf-icon">
                    <img
                      src="/images/comp-framework.svg"
                      alt=""
                      width={60}
                      height={60}
                    />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Curriculum support ============ */}
        <section className="kd-section aw-section" id="curriculum">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ right: -60, bottom: 40, width: 210 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">CURRICULUM SUPPORT</span>
              <h2>Support multiple curriculum frameworks</h2>
            </div>
            <div className="cs-grid">
              {curricula.map(({ icon, title, desc }) => (
                <article className="cm-card" key={title}>
                  <span className="md-badge" style={{ background: "#dde7f7" }}>
                    {icon}
                  </span>
                  <div className="copy">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <img
                    className="cm-arrow"
                    src="/images/comp-arrow.svg"
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
