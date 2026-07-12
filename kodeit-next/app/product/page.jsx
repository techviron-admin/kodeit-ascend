import Link from "next/link";
import Image from "next/image";
import Arrow from "@/components/Arrow";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Product Overview",
  description:
    "Explore the complete suite of tools and features designed to streamline assessment, learning, and growth across your organization.",
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
                Explore the complete suite of tools and features designed to
                streamline assessment, learning, and growth across your
                organization.
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

        {/* ============ Scale ============ */}
        <section className="pd-scale">
          <div className="container">
            <div className="pd-scale-box">
              <div>
                <h2>Designed to scale with your institution</h2>
                <p className="sub">
                  Kodeit Ascend adapts to your needs&mdash;whether you&rsquo;re
                  a single school or a large organization.
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

        {/* ============ Trusted by ============ */}
        <section className="pd-trusted">
          <img
            className="kd-deco"
            src="/images/blurb-4.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "2%", top: -140, width: 200 }}
          />
          <img
            className="kd-deco"
            src="/images/blurb-2.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "3%", top: -220, width: 150 }}
          />
          <div className="container">
            <p className="lbl">Trusted by educational institution worldwide</p>
            <div className="logos" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src="/images/partner-logo.png"
                  alt=""
                  width={119}
                  height={20}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter tint />
    </div>
  );
}
