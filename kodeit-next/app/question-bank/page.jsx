import ModuleHero from "@/components/ModuleHero";
import ModuleCta from "@/components/ModuleCta";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Question Bank",
  description:
    "18,000+ curated, standards-aligned items across English, Math, and Science, Grades 1–12 — operational from day one.",
};

const stats = [["qb-stat-questions.svg", "18,000 +", "Questions"]];

const features = [
  ["qb-subjects.svg", "Subjects", "Browse and manage questions by subjects."],
  ["qb-grades.svg", "Grades", "Filter and organize questions by grade levels."],
  [
    "qb-competencies.svg",
    "Competencies",
    "Align questions with specific competencies and outcomes",
  ],
  [
    "qb-dok.svg",
    "DOK Levels",
    "Classify questions by Depth of Knowledge levels.",
  ],
  [
    "qb-difficulty.svg",
    "Difficulty",
    "Set and filter questions by difficulty levels.",
  ],
  [
    "qb-qtypes.svg",
    "Question Types",
    "Choose from multiple question types to suit your needs.",
  ],
  [
    "qb-tags.svg",
    "Tags",
    "Use tags to categorize and quickly find relevant questions",
  ],
];

export default function QuestionBankPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="qbank"
          deco
          eyebrow="Question Bank"
          title="Question Bank"
          sub="18,000+ curated, standards-aligned items, operational from day one. Most assessment platforms ship as empty repositories; schools spend the first year populating them. Kodeit Ascend delivers 500+ items per grade per subject across English, Math, and Science, Grades 1–12, projected to grow past 25,000 items in Year 1."
          primaryHref="/help#contact"
          primaryLabel="Create Questions"
          secondaryHref="#explore"
          secondaryLabel="Explore Question Bank"
          imageAlt="Kodeit Ascend question bank portal dashboard"
        />

        {/* ============ Stats band ============ */}
        <section className="qs-wrap">
          <img
            className="kd-deco"
            src="/images/module-blurb-sm.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "22%", top: 20, width: 49 }}
          />
          <div className="container">
            <div className="qs-band qs-band--single">
              {stats.map(([icon, value, label]) => (
                <div className="qs-item" key={label}>
                  <span className="qs-icon">
                    <img
                      src={`/images/${icon}`}
                      alt=""
                      width={56}
                      height={56}
                    />
                  </span>
                  <div>
                    <span className="n">{value}</span>
                    <span className="l">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Feature cards ============ */}
        <section className="kd-section aw-section" id="explore">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 320, width: 210 }}
          />
          <img
            className="kd-deco"
            src="/images/sparkle-1.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "6%", top: 30, width: 54 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">ORGANIZE AND FIND QUESTIONS</span>
              <h2>Everything you need in one place</h2>
            </div>
            <div className="qb-grid">
              {features.map(([icon, title, desc]) => (
                <article className="qb-card" key={title}>
                  <span className="md-badge">
                    <img
                      src={`/images/${icon}`}
                      alt=""
                      width={58}
                      height={58}
                    />
                  </span>
                  <div className="copy">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ModuleCta
          title="Extend the library your way"
          sub="Expand through manual authoring, bulk CSV upload, or AI-assisted generation. Every item moves through a managed lifecycle — Draft, Operational, Retired — with a reviewer approval gate for AI-generated content."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
