import Link from "next/link";
import Image from "next/image";
import Arrow from "@/components/Arrow";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Product Overview",
  description:
    "One integrated portal covering the full assessment cycle: item authoring and governance, standard and adaptive delivery, AI-assisted grading, competency tagging, and growth analytics across your network.",
};

const tools = [
  [
    "/dashboard",
    "icon-dashboard.svg",
    "Dashboard",
    "Get a real-time overview of performance, activity, and key metrics.",
  ],
  [
    "/assessments",
    "icon-assessments.svg",
    "Assessments",
    "Create, manage, and deliver assessments with ease.",
  ],
  [
    "/question-bank",
    "icon-question-bank.svg",
    "Question Bank",
    "Access and organize a comprehensive library of questions.",
  ],
  [
    "/reports",
    "icon-reports.svg",
    "Reports",
    "Generate insightful reports to track and improve outcomes.",
  ],
  [
    "/competencies",
    "icon-competencies.svg",
    "Competencies",
    "Define, manage, and evaluate competencies effectively.",
  ],
  [
    "/curriculum",
    "icon-curriculum.svg",
    "Curriculum Frameworks",
    "Build and align structured curriculum frameworks seamlessly.",
  ],
  [
    "/schools",
    "icon-schools.svg",
    "Schools",
    "Manage school profiles, settings, and related activities.",
  ],
  [
    "/users",
    "icon-users.svg",
    "Users",
    "Manage users, roles, and permissions across the platform.",
  ],
  [
    "/analytics",
    "icon-analytics.svg",
    "Analytics",
    "Dive deep into data to make smarter, data-driven decisions.",
  ],
  [
    "/settings",
    "icon-settings.svg",
    "Settings",
    "Configure system preferences and platform settings.",
  ],
];

const sw = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const modes = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="44"
        height="44"
        style={{ color: "#1b5cc4" }}
        {...sw}
      >
        <path d="M6 9V3h12v6" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="7" rx="1" />
      </svg>
    ),
    title: "Print-Ready Generation",
    desc: "Generate assessment booklets with machine-readable OMR sheets while preserving blueprint, DOK levels, difficulty, and competency mapping.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="44"
        height="44"
        style={{ color: "#1b5cc4" }}
        {...sw}
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <path d="M3 12h18" />
      </svg>
    ),
    title: "Bulk Answer Sheet Scanning",
    desc: "Scan completed answer sheets in bulk with automatic learner identification and instant result processing.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="44"
        height="44"
        style={{ color: "#1b5cc4" }}
        {...sw}
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    title: "Handwritten Response Capture",
    desc: "Capture handwritten short-answer and essay responses for AI-assisted evaluation alongside digital submissions.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="44"
        height="44"
        style={{ color: "#1b5cc4" }}
        {...sw}
      >
        <path d="M3 3v18h18" />
        <path d="M8 17v-5M13 17V8M18 17v-8" />
      </svg>
    ),
    title: "Mixed-Mode Analytics",
    desc: "Combine paper-based and digital assessment results into unified reports, competency tracking, and growth analytics.",
  },
];

export default function ProductPage() {
  return (
    <div className="page-home">
      <main id="main">
        {/* ============ Product overview hero ============ */}
        <section className="pd-hero">
          <img
            className="kd-deco deco-bg"
            src="/images/bg-product.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="kd-deco deco-blurb"
            src="/images/blurb-product.svg"
            alt=""
            aria-hidden="true"
          />
          <div className="container pd-hero-inner">
            <div>
              <span className="kd-eyebrow">Product Overview</span>
              <h1>Kodeit Ascend</h1>
              <p className="sub">
                One integrated portal covering the full assessment cycle: item
                authoring and governance, standard and adaptive delivery,
                AI-assisted grading, competency tagging, and growth analytics
                across your network.
              </p>
              <Link href="/#pilot" className="btn-grad">
                Book a Demo
              </Link>
            </div>
            <div className="pd-hero-visual">
              <Image
                src="/images/product-hero.webp"
                alt="Kodeit Ascend dashboard preview"
                width={1162}
                height={716}
                priority
                quality={90}
                sizes="(max-width: 980px) 100vw, 640px"
              />
            </div>
          </div>
        </section>

        {/* ============ Tools grid ============ */}
        <section className="pd-tools" id="tools">
          <img
            className="kd-deco"
            src="/images/sparkle-1.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "8%", top: 40, width: 58 }}
          />
          <div className="container">
            <span className="kd-eyebrow">Everything you need</span>
            <h2>
              Powerful tools for every part of the learning and assessment
              journey
            </h2>
            <div className="pd-tools-grid">
              {tools.map(([href, icon, title, desc]) => (
                <Link key={title} href={href} className="pd-tool">
                  <img
                    className="icon"
                    src={`/images/${icon}`}
                    alt=""
                    width={54}
                    height={54}
                  />
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <Arrow className="arrow" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Flexible assessment modes ============ */}
        <section className="kd-section" id="modes">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 120, width: 210 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">ASSESSMENT DELIVERY</span>
              <h2>Flexible assessment modes</h2>
              <p className="sub">
                Deliver, capture, and analyze assessments across paper and
                digital formats using a unified assessment workflow.
              </p>
            </div>
            <div className="rp-grid">
              {modes.map(({ icon, title, desc }) => (
                <article className="rp-card" key={title}>
                  {icon}
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Scale ============ */}
        <section className="pd-scale">
          <div className="container">
            <div className="pd-scale-box">
              <div>
                <h2>Deployable wherever your schools are</h2>
                <p className="sub">
                  Kodeit Ascend works across curricula (CCSS, NGSS, IB, UK, and
                  national frameworks), languages, and connectivity contexts,
                  from urban metros to low-bandwidth campuses. Paper-based
                  delivery with bulk answer-sheet scanning extends the platform
                  to every grade and classroom.
                </p>
                <Link href="/help#contact" className="btn-grad">
                  Contact Us
                </Link>
              </div>
              <div>
                <Image
                  src="/images/scale-campus.webp"
                  alt="Modern school campus"
                  width={874}
                  height={422}
                  sizes="(max-width: 980px) 100vw, 620px"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter tint />
    </div>
  );
}
