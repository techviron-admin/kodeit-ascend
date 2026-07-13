import ModuleHero from "@/components/ModuleHero";
import ModuleCta from "@/components/ModuleCta";
import SiteFooter from "@/components/SiteFooter";
import FrameworkCarousel from "@/components/FrameworkCarousel";

export const metadata = {
  title: "Competencies Framework",
  description:
    "Internationally credible competency frameworks — CCSS, NGSS, PIRLS, TIMSS, PISA, CEFR, and national — pre-loaded and pre-tagged to the item bank.",
};

const frameworks = [
  [
    "CCSS",
    "Common Core State Standards — ELA + Mathematics, Grades 1–12, full parent-child hierarchy to grade-level sub-skills.",
  ],
  [
    "NGSS",
    "Next Generation Science Standards — Science, complete 3D learning model.",
  ],
  [
    "PIRLS",
    "Progress in International Reading Literacy Study — primary-grade reading processes.",
  ],
  [
    "TIMSS",
    "Trends in International Mathematics and Science Study — content + cognition, for international benchmarking.",
  ],
  [
    "PISA",
    "Programme for International Students Assessment — upper-grade literacy and applied reasoning.",
  ],
  [
    "CEFR",
    "Common European Framework of Reference — English proficiency banding A1–C2.",
  ],
  [
    "National",
    "National Curriculum Framework — country-specific overlays that plug into the existing hierarchy.",
  ],
];

const manage = [
  [
    "comp-domains.svg",
    "Domains",
    "Organize competencies under broad learning domains.",
  ],
  [
    "comp-subskills.svg",
    "Sub Skills",
    "Break down competencies under measurable sub skills.",
  ],
  [
    "comp-standards.svg",
    "Standards",
    "Align with national and international learning standards.",
  ],
  [
    "comp-growth.svg",
    "Growth Metrics",
    "Track progress and measure growth over time.",
  ],
  [
    "comp-frameworks.svg",
    "Frameworks",
    "Use structured frameworks to ensure consistency and alignment.",
  ],
  [
    "comp-competencies.svg",
    "Competencies",
    "Create, update, and manage competencies with full control.",
  ],
];

export default function CompetenciesPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="comp"
          deco
          eyebrow="Competencies"
          title="Competencies Framework"
          sub="Define, manage, track competencies to build stronger learning outcomes and future ready skills."
          primaryHref="/help#contact"
          primaryLabel="Create Competency"
          secondaryHref="#frameworks"
          secondaryLabel="Explore Frameworks"
          imageAlt="Kodeit Ascend competencies portal dashboard"
        />

        {/* ============ Popular frameworks ============ */}
        <section className="kd-section" id="frameworks">
          <img
            className="kd-deco"
            src="/images/module-blurb-sm.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "18%", top: 10, width: 49 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">POPULAR FRAMEWORKS</span>
              <h2>Build on trusted competencies frameworks</h2>
            </div>
            <FrameworkCarousel items={frameworks} />
          </div>
        </section>

        {/* ============ Manage competencies ============ */}
        <section className="kd-section aw-section" id="manage">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 220, width: 210 }}
          />
          <img
            className="kd-deco"
            src="/images/sparkle-1.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "6%", top: 0, width: 54 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">MANAGE COMPETENCIES</span>
              <h2>Organize and align competencies with ease</h2>
            </div>
            <div className="cm-grid">
              {manage.map(([icon, title, desc]) => (
                <article className="cm-card" key={title}>
                  <span className="md-badge">
                    <img
                      src={`/images/${icon}`}
                      alt=""
                      width={54}
                      height={54}
                    />
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

        <ModuleCta
          title="Need help building your competencies framework?"
          sub="Our team is here to help you define competencies and strengthen learning outcomes."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
