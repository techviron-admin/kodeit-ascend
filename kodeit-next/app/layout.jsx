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
      "Kodeit Ascend — See every student clearly with AI-driven competency data",
    template: "%s — Kodeit Ascend",
  },
  description:
    "Kodeit Ascend replaces guesswork with precision. Map assessments to standards, generate questions instantly, and watch school performance emerge from the noise.",
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
