import ModuleHero from "@/components/ModuleHero";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "User Management",
  description:
    "Role-based access for network leaders, principals, teachers, learners, and parents — each seeing the lens that matches their remit.",
};

const sw = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const roles = [
  {
    tint: "#fff2e2",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.6 4-1.2 7-5.2 7-9.6V6l-7-3Z" />
        <circle cx="12" cy="10.5" r="2" />
        <path d="M9 15.5c.6-1.2 1.7-2 3-2s2.4.8 3 2" />
      </svg>
    ),
    title: "Admins",
    desc: "Manage system settings, permissions, and platform-wide controls.",
  },
  {
    tint: "#e7fbe7",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="M9 20v-8h6v8" />
        <path d="M4 20v-5h5M15 20v-11h5v11" />
        <path d="M3 20h18" />
      </svg>
    ),
    title: "Network Leaders",
    desc: "Oversee performance and management across multiple schools.",
  },
  {
    tint: "#dde7f7",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="m12 4-9 4.5L12 13l9-4.5L12 4Z" />
        <path d="M6.5 10.8V15c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.2" />
        <path d="M21 8.5V14" />
      </svg>
    ),
    title: "Students",
    desc: "Access assessments, track progress, and view personal results.",
  },
  {
    tint: "#f8edfb",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <path d="m14.5 5.5 4 4L8 20H4v-4L14.5 5.5Z" />
        <path d="m12.5 7.5 4 4" />
        <path d="M4 20h16" strokeWidth="1.4" />
      </svg>
    ),
    title: "Principals",
    desc: "Monitor school-wide performance and manage staff and classes.",
  },
  {
    tint: "#e1f8fb",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4.5V3h6v1.5" />
        <path d="M9 10h6M9 14h6M9 18h3.5" />
      </svg>
    ),
    title: "Teachers",
    desc: "Create assessments, manage classes, and track student growth.",
  },
  {
    tint: "#e6f0ff",
    icon: (
      <svg viewBox="0 0 24 24" {...sw}>
        <circle cx="9" cy="5.5" r="2.2" />
        <circle cx="16.5" cy="8" r="1.7" />
        <path d="M6 21v-6l-1.5-4C5.6 9.6 7.2 9 9 9s3.4.6 4.5 2L12 15v6" />
        <path d="M15 21v-4l-1-2.5c.7-.9 1.6-1.3 2.5-1.3 1 0 1.9.4 2.5 1.3L18 17v4" />
      </svg>
    ),
    title: "Parents",
    desc: "Personal growth trajectory, competency-by-competency feedback, and strengths and growth needs with specific study guidance.",
  },
];

export default function UsersPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="usersm"
          eyebrow="User Management"
          title="User Management"
          sub="Every stakeholder, one aligned view of the evidence. Role-based access for network leaders, principals, teachers, learners, and parents — each seeing the lens that matches their remit, drawn from the same underlying data. SSO integration and bulk CSV imports keep administration light at network scale."
          primaryHref="#roles"
          primaryLabel="Explore Roles"
          secondaryHref="/reports"
          secondaryLabel="View Reports"
          imageAlt="Kodeit Ascend user management portal"
          image="/images/hero-users.webp"
        />

        {/* ============ User roles ============ */}
        <section className="kd-section aw-section" id="roles">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 380, width: 210 }}
          />
          <img
            className="kd-deco"
            src="/images/module-blurb-br.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "1%", bottom: 60, width: 110 }}
          />
          <div className="container">
            <div className="um-rows">
              {roles.map(({ tint, icon, title, desc }) => (
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
