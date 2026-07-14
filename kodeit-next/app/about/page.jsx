import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "About Us",
  description:
    "Kodeit Ascend is an AI-powered Learning Intelligence Platform that helps K–12 schools move beyond traditional testing to truly understand how students learn.",
};

export default function AboutPage() {
  return (
    <div className="page-home">
      <main id="main">
        <section className="kd-section" id="about">
          <div className="container">
            <div className="kd-head" style={{ marginBottom: 28 }}>
              <span className="kd-eyebrow">About Us</span>
              <h2>Learning intelligence for every school</h2>
            </div>
            <div className="about-copy">
              <p>
                Kodeit Ascend is an AI-powered Learning Intelligence Platform
                that helps schools move beyond traditional testing to truly
                understand how students learn. More than an assessment platform,
                it enables educators to create formative, summative, diagnostic,
                benchmark, adaptive, and competency-based assessments while
                capturing critical thinking, problem-solving, reasoning, and
                knowledge application. By combining AI-powered evaluation with
                rich learning analytics, Ascend transforms assessment data into
                meaningful insights that support better teaching, personalized
                learning, and continuous student growth.
              </p>
              <p>
                Designed for K–12 schools, Kodeit Ascend provides a unified
                ecosystem for digital and paper-based assessments, AI-assisted
                grading, competency mapping, growth tracking, benchmarking, and
                predictive analytics. School leaders gain real-time visibility
                into learning outcomes, teachers receive actionable
                recommendations to address misconceptions and learning gaps, and
                students benefit from targeted support based on their individual
                progress. By making learning visible and measurable, Kodeit
                Ascend empowers schools to make informed academic decisions and
                build a culture of continuous improvement.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
