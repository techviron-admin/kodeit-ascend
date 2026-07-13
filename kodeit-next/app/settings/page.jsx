import ModuleHero from "@/components/ModuleHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Settings",
  description:
    "Administration that stays out of the way — configure schools, grades, subjects, competencies, and reporting from one place.",
};

const sw = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const options = [
  {
    tint: "#dde7f7",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <circle cx="8" cy="12" r="4" />
        <path d="M12 12h9M18 12v3.5M15 12v2" />
      </svg>
    ),
    title: "SSO integration",
    desc: "Single sign-on across the network.",
  },
  {
    tint: "#e7fbe7",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
        <path d="M12 3v12M8 7l4-4 4 4" />
      </svg>
    ),
    title: "Bulk operations",
    desc: "CSV imports for students and items, plus targeted assignment workflows.",
  },
  {
    tint: "#fff2e2",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <rect x="3.5" y="4.5" width="17" height="16" rx="2" />
        <path d="M3.5 9h17M8 3v3M16 3v3" />
        <path d="M12 12.5V15l1.8 1" />
      </svg>
    ),
    title: "Automated reporting",
    desc: "Scheduled reports reduce administrative load across the network.",
  },
];

export default function SettingsPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="usersm"
          eyebrow="Settings"
          title="Administration that stays out of the way"
          sub="Configure schools, grades, subjects, competencies, and reporting from one place."
          primaryHref="/help#contact"
          primaryLabel="Book a Demo"
          secondaryHref="/users"
          secondaryLabel="Manage Users"
          imageAlt="Kodeit Ascend settings and administration"
        />

        {/* ============ Administration ============ */}
        <section className="kd-section aw-section" id="admin">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 300, width: 210 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">ADMINISTRATION</span>
              <h2>Configure the network from one place</h2>
            </div>
            <div className="um-rows">
              {options.map(({ tint, icon, title, desc }) => (
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
