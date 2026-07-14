import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

export default function SiteFooter({ tint = false }) {
  return (
    <footer className={`kd-footer${tint ? " kd-footer--tint" : ""}`}>
      <div className="container">
        <div className="kd-footer-top">
          <div className="kd-foot-brand">
            <Link href="/" aria-label="Kodeit Ascend home">
              <Image
                className="logo"
                src="/images/logo-e64514.webp"
                alt="Kodeit logo"
                width={82}
                height={70}
              />
            </Link>
            <p>
              Kodeit Ascend is a web-based assessment and learning analytics
              platform for K–12 schools and multi-campus networks.
            </p>
            <div className="kd-social">
              <a href="#" aria-label="Social media">
                <img src="/images/social-1.svg" alt="" width={27} height={27} />
              </a>
              <a href="#" aria-label="Social media">
                <img src="/images/social-2.svg" alt="" width={27} height={27} />
              </a>
              <a href="#" aria-label="Social media">
                <img src="/images/social-3.svg" alt="" width={27} height={27} />
              </a>
              <a href="#" aria-label="Social media">
                <img src="/images/social-4.svg" alt="" width={27} height={27} />
              </a>
            </div>
          </div>
          <div className="kd-foot-cols">
            <nav className="kd-foot-col" aria-label="Product">
              <h4>Product</h4>
              <Link href="/product">Overview</Link>
              <Link href="/assessments">Assessments</Link>
              <Link href="/reports">Reports</Link>
              <Link href="/analytics">Analytics</Link>
              <Link href="/settings">Integrations</Link>
            </nav>
            <nav className="kd-foot-col" aria-label="Solutions">
              <h4>Solutions</h4>
              <Link href="/schools">For Schools</Link>
              <Link href="/schools">For Districts</Link>
              <Link href="/users">For Educators</Link>
              <Link href="/users">For Students</Link>
            </nav>
            <nav className="kd-foot-col" aria-label="Company">
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <a href="#">Careers</a>
              <a href="#">Partners</a>
              <Link href="/help#contact">Contact Us</Link>
            </nav>
          </div>
          <div className="kd-news">
            <h4>Newsletter</h4>
            <p className="note">
              Stay updated with the latest news and updates.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div className="kd-footer-bottom">
          <span className="copy">
            &copy; 2026 KODEIT | All Rights Reserved.
          </span>
          <div className="kd-footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
