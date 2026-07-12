import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export default function PagePlaceholder({ title, description }) {
  return (
    <div className="page-home">
      <main id="main">
        <section className="kd-section" style={{ minHeight: "52vh" }}>
          <div className="container">
            <div className="kd-head" style={{ marginBottom: 32 }}>
              <span className="kd-eyebrow">Kodeit Ascend</span>
              <h2>{title}</h2>
              <p className="sub">{description}</p>
            </div>
            <div className="kd-actions">
              <Link href="/" className="btn-grad">
                Back to Home
              </Link>
              <Link href="/product" className="link-orange">
                Explore the product
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
