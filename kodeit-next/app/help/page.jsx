import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata = { title: "Help Centre" };

export default function Page() {
  return (
    <div className="page-home">
      <main id="main">
        <section className="kd-section" style={{ minHeight: "52vh" }}>
          <div className="container">
            <div className="kd-head" style={{ marginBottom: 32 }}>
              <span className="kd-eyebrow">Kodeit Ascend</span>
              <h2>Help Centre</h2>
              <p className="sub">
                Guides, documentation, and support for Kodeit Ascend. This page
                is being redesigned and will be available soon.
              </p>
            </div>
            <div className="kd-actions">
              <Link href="/" className="btn-grad">
                Back to Home
              </Link>
              <Link href="/help#contact" className="btn-grad">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
