import ModuleHero from "@/components/ModuleHero";
import ModuleCta from "@/components/ModuleCta";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Reports",
  description:
    "Statistical measures — average, range, and standard deviation — accompany growth calculations at every level, suitable for classroom action and regulatory submission.",
};

const categories = [
  [
    "icon-users.svg",
    "Students Reports",
    "Track students performance, progress, and learning outcomes.",
  ],
  [
    "icon-teachers.svg",
    "Teachers Reports",
    "Evaluate teacher effectiveness and instructional impact.",
  ],
  [
    "icon-teachers.svg",
    "Teachers Reports",
    "Evaluate teacher effectiveness and instructional impact.",
  ],
  [
    "icon-schools.svg",
    "School Reports",
    "Monitor school performance and key operational metrics.",
  ],
  [
    "icon-competencies.svg",
    "Competency Reports",
    "Proficiency distribution — Proficient / Developing / Struggling — per competency, by school, grade, and year.",
  ],
  [
    "icon-network.svg",
    "Network Reports",
    "Analyze performance across your entire educational network.",
  ],
  [
    "icon-analytics.svg",
    "Growth Reports",
    "BOY vs EOY comparison, multi-year trends, subject and grade filters, growth percentage with average, range, and standard deviation.",
  ],
  [
    "icon-comparative.svg",
    "Comparative Reports",
    "School vs school; school vs network or district average; learner vs class, school, or network.",
  ],
  [
    "icon-assessments.svg",
    "Assessments Reports",
    "Analyze assessments results and question-level insights.",
  ],
];

const bandStats = [
  [
    <svg
      key="i"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-4-4Z" />
      <path d="M15 3v4h4M9 12h6M9 16h6M9 8h2" />
    </svg>,
    "50+",
    "Report Types",
  ],
  [
    <svg
      key="i"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 17v3M8 13v7M13 15v5M18 9v11" />
      <path d="m4 9 5-4 4 3 6-5" />
      <path d="M15 3h4v4" />
    </svg>,
    "Real Time",
    "Data Updates",
  ],
  [
    <svg
      key="i"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>,
    "Multiple",
    "Export Formats",
  ],
  [
    <svg
      key="i"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.6 4-1.2 7-5.2 7-9.6V6l-7-3Z" />
      <circle cx="12" cy="11" r="1.6" />
      <path d="M12 12.6V15" />
    </svg>,
    "Secure",
    "And Compliant",
  ],
];

export default function ReportsPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="reports"
          circles
          eyebrow="Reports"
          title="Reports"
          sub="Reports suitable for classroom action and regulatory submission. Statistical measures — average, range, standard deviation — accompany growth calculations at every level, so the same evidence serves the teacher, the board, and the regulator."
          primaryHref="#categories"
          primaryLabel="Explore Reports"
          secondaryHref="/analytics"
          secondaryLabel="View Reports"
          imageAlt="Kodeit Ascend reports dashboard"
        />

        {/* ============ Report categories ============ */}
        <section className="kd-section aw-section" id="categories">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 320, width: 210 }}
          />
          <img
            className="kd-deco"
            src="/images/module-blurb-sm.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "10%", top: 20, width: 49 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">REPORT CATEGORIES</span>
              <h2>Comprehensive reports for every need</h2>
            </div>
            <div className="rp-grid">
              {categories.map(([icon, title, desc]) => (
                <article className="rp-card" key={title}>
                  <img src={`/images/${icon}`} alt="" width={44} height={44} />
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ModuleCta
          title="Need to export your data?"
          sub="Export reports in multiple formats and share insights with your team."
          label="Export Reports"
        />

        {/* ============ Blue stats band ============ */}
        <section className="md-band-wrap">
          <div className="container">
            <div className="md-band">
              <div className="rp-stats">
                {bandStats.map(([icon, n, l]) => (
                  <div className="rp-stat" key={l}>
                    <span className="ic">{icon}</span>
                    <div>
                      <span className="n">{n}</span>
                      <span className="l">{l}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
