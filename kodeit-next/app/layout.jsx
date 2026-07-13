import { Inter } from "next/font/google";
import "./styles.css";
import "./home.css";
import "./product.css";
import "./modules.css";
import SiteHeader from "@/components/SiteHeader";
import BookDemoModal from "@/components/BookDemoModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font",
});

export const metadata = {
  metadataBase: new URL("https://kodeit-ascend.vercel.app"),
  title: {
    default:
      "Kodeit Ascend — A single, evidence-based system for academic governance",
    template: "%s — Kodeit Ascend",
  },
  description:
    "Kodeit Ascend is a web-based assessment and learning analytics platform for K–12 schools and multi-campus networks. Administer standards-aligned assessments, track growth, and generate insight at the learner, class, school, and network level.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <BookDemoModal />
      </body>
    </html>
  );
}
