import ModuleHero from "@/components/ModuleHero";
import ModuleCta from "@/components/ModuleCta";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Competencies Framework",
  description:
    "Internationally credible competency frameworks — CCSS, NGSS, PIRLS, TIMSS, PISA, CEFR, and national — pre-loaded and pre-tagged to the item bank.",
};

const extensions = [
  [
    "ext-timss.svg",
    "TIMSS Mathematics and Science",
    "for international benchmarking against content + cognition dimensions",
  ],
  [
    "ext-pisa.svg",
    "PISA Reading, Mathematics, and Science Literacy",
    "for upper-grade literacy and applied reasoning measurement",
  ],
  ["ext-cefr.svg", "CEFR", "for English language proficiency banding (A1–C2)"],
  ["ext-uk.svg", "UK National Curriculum", "for British international schools"],
  [
    "ext-au.svg",
    "Australian Curriculum v9.0",
    "for Australian-aligned schools",
  ],
  [
    "ext-national.svg",
    "National curriculum overlays",
    "for any country-specific framework a school operates under",
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

        {/* ============ Built to extend ============ */}
        <section className="kd-section" id="frameworks">
          <div className="container">
            <div className="ext-head">
              <h2 className="ext-title">
                Built to Extend, <span>Not Replace</span>
              </h2>
              <p className="ext-intro">
                Schools and networks rarely operate under a single curriculum
                framework. Kodeit Ascend&rsquo;s architecture supports layering
                additional frameworks on top of the global spine as overlays
                &mdash; the core item tagging and reporting structure remains
                intact, while local curriculum mappings extend it.
              </p>
            </div>
            <p className="ext-lead">Supported extensions include:</p>
            <div className="ext-grid">
              {extensions.map(([icon, title, desc]) => (
                <article className="ext-card" key={title}>
                  <img src={`/images/${icon}`} alt="" width={56} height={56} />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
            <p className="ext-close">
              New overlays plug into the existing hierarchy rather than
              replacing it. A school running CCSS as its core reporting spine
              can layer its national curriculum on top and generate reports
              against both perspectives from the same assessment data.
            </p>
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
