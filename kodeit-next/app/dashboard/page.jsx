import ModuleHero from "@/components/ModuleHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Dashboard",
  description:
    "One dashboard per remit, one underlying truth — every role sees the lens that matches its remit, drawn from the same item calibrations and competency tags.",
};

const sw = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const views = [
  {
    tint: "#dde7f7",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Network administrators",
    desc: "Total schools, students, assessments, and items at a glance; a schools overview with performance monitoring; top-performing schools ranked by average student performance; and completion rates per school.",
  },
  {
    tint: "#e1f8fb",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="M9 20v-8h6v8" />
        <path d="M4 20v-5h5M15 20v-11h5v11" />
        <path d="M3 20h18" />
      </svg>
    ),
    title: "School leaders",
    desc: "The school’s performance against the network and its own prior years, grade-level growth trends, and competency distributions.",
  },
  {
    tint: "#e7fbe7",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4.5V3h6v1.5" />
        <path d="M9 10h6M9 14h6M9 18h3.5" />
      </svg>
    ),
    title: "Teachers",
    desc: "Class vs school vs network on each competency, BOY-to-EOY growth per learner, and which standards the class has mastered and which need re-teaching.",
  },
  {
    tint: "#fff2e2",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="m12 4-9 4.5L12 13l9-4.5L12 4Z" />
        <path d="M6.5 10.8V15c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.2" />
        <path d="M21 8.5V14" />
      </svg>
    ),
    title: "Learners",
    desc: "Active and completed assessments by subject, delivered one item at a time with a full-assessment timer.",
  },
];

export default function DashboardPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="analytics"
          circles
          eyebrow="Dashboard"
          title="One dashboard per remit, one underlying truth"
          sub="Every role sees the lens that matches its remit, drawn from the same item calibrations and competency tags."
          primaryHref="/help#contact"
          primaryLabel="Book a Demo"
          secondaryHref="/analytics"
          secondaryLabel="View Analytics"
          imageAlt="Kodeit Ascend dashboard overview"
        />

        {/* ============ Role dashboards ============ */}
        <section className="kd-section aw-section" id="views">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 380, width: 210 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">ROLE-BASED DASHBOARDS</span>
              <h2>A view built for every level of decision</h2>
            </div>
            <div className="um-rows">
              {views.map(({ tint, icon, title, desc }) => (
                <article className="um-card" key={title}>
                  <span className="md-badge" style={{ background: tint }}>
                    {icon}
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
      </main>
      <SiteFooter />
    </div>
  );
}
