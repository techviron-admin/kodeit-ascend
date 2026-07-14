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
    "Post Assessment Report",
    "Analyze assessments results and question-level insights.",
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

      </main>
      <SiteFooter />
    </div>
  );
}
