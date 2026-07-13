import ModuleHero from "@/components/ModuleHero";
import ModuleCta from "@/components/ModuleCta";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Curriculum Frameworks",
  description:
    "Built to extend, not replace — a two-layer reporting architecture that keeps results internationally comparable while mapping to local curricula.",
};

const sw = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const layers = [
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sw} style={{ color: "#1b5cc4" }}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.4 3.9 5.6 3.9 9s-1.4 6.6-3.9 9c-2.5-2.4-3.9-5.6-3.9-9S9.5 5.4 12 3Z" />
      </svg>
    ),
    title: "Layer 1 — Global benchmarking spine",
    desc: "The core framework against which items are tagged: PIRLS and PISA for reading, TIMSS and PISA for mathematics, and TIMSS with NGSS/NRC 3D item design for science. It ensures results are internationally comparable.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" {...sw} style={{ color: "#c026a6" }}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 13 9 5 9-5" />
      </svg>
    ),
    title: "Layer 2 — Local alignment overlay",
    desc: "National or regional curriculum mapped on top of the spine: UK National Curriculum, Australian Curriculum v9.0, CCSS, IB frameworks, and country-specific curricula. New overlays plug into the existing hierarchy without rebuilding the core.",
  },
];

export default function CurriculumPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="comp"
          deco
          eyebrow="Curriculum Frameworks"
          title="Built to extend, not replace"
          sub="Schools and networks rarely operate under a single curriculum framework. Kodeit Ascend handles this through a two-layer reporting architecture."
          primaryHref="/help#contact"
          primaryLabel="Talk to an expert"
          secondaryHref="/competencies"
          secondaryLabel="Explore Frameworks"
          imageAlt="Kodeit Ascend curriculum framework mapping"
        />

        {/* ============ Two-layer architecture ============ */}
        <section className="kd-section aw-section" id="layers">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 220, width: 210 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">TWO-LAYER ARCHITECTURE</span>
              <h2>A benchmarking spine with a local overlay</h2>
            </div>
            <div className="sr-grid">
              {layers.map(({ icon, title, desc }) => (
                <article className="sr-card" key={title}>
                  {icon}
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ModuleCta
          title="Report against both perspectives from one dataset"
          sub="A school running CCSS as its reporting spine can layer its national curriculum on top and generate reports against both perspectives from the same assessment data."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
