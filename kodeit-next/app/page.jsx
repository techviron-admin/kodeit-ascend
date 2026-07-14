import Link from "next/link";
import Image from "next/image";
import Arrow from "@/components/Arrow";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="page-home">
      <main id="main">
        {/* ============ Hero ============ */}
        <section className="kd-hero">
          <img
            className="kd-deco deco-bg"
            src="/images/bg-hero.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="kd-deco deco-pattern-r"
            src="/images/pattern.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="kd-deco deco-sparkle-1"
            src="/images/sparkle-1.svg"
            alt=""
            aria-hidden="true"
          />
          <img
            className="kd-deco deco-sparkle-2"
            src="/images/sparkle-2.svg"
            alt=""
            aria-hidden="true"
          />
          <div className="container kd-hero-inner">
            <h1>A single, evidence-based system for academic governance.</h1>
            <p className="lead">
              Kodeit Ascend is a web-based assessment and learning analytics
              platform for K–12 schools and multi-campus networks. Administer
              consistent, standards-aligned assessments, track academic growth
              over time, and generate actionable insight at the learner, class,
              school, and network level.
            </p>
            <a href="#pilot" className="btn-grad">
              Request a demo
            </a>
            <div className="kd-hero-img">
              <Image
                src="/images/hero.webp"
                alt="Student learning on a tablet with hands-on activities"
                width={1612}
                height={856}
                priority
                sizes="(max-width: 1200px) 100vw, 1160px"
              />
            </div>
          </div>
        </section>

        {/* ============ Platform ============ */}
        <section className="kd-section" id="platform">
          <img
            className="kd-deco"
            src="/images/blurb-1.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -50, top: 40, width: 230 }}
          />
          <img
            className="kd-deco"
            src="/images/blurb-2.svg"
            alt=""
            aria-hidden="true"
            style={{ right: -30, top: -140, width: 170 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">Platform</span>
              <h2>One platform to build, measure, and grow competency</h2>
              <p className="sub">
                Kodeit Ascend replaces fragmented, single-event testing with a
                continuous cycle: assessment design and delivery, AI-assisted
                grading and competency tagging, growth analytics, and network
                benchmarking. All of it accessible to administrators, school
                leaders, teachers, and learners through one integrated portal.
              </p>
            </div>
            <div className="kd-cards">
              <article className="kd-card">
                <Image
                  src="/images/platform-1.webp"
                  alt="Teacher creating AI-powered assessments"
                  width={496}
                  height={248}
                  sizes="(max-width: 980px) 100vw, 360px"
                />
                <h3>An operational item bank from day one</h3>
                <p>
                  18,000+ standards-aligned items in English, Math, and Science
                  across Grades 1–12, with AI-assisted generation to expand the
                  library further.
                </p>
              </article>
              <article className="kd-card">
                <Image
                  src="/images/platform-2.webp"
                  alt="Competency mapping across frameworks"
                  width={496}
                  height={248}
                  sizes="(max-width: 980px) 100vw, 360px"
                />
                <h3>Frameworks delivered, not built from scratch</h3>
                <p>
                  CCSS, NGSS, and PIRLS ship pre-loaded, pre-calibrated, and
                  pre-tagged to the item bank, so competency-level reports
                  generate from the first assessment, not after a year of setup.
                </p>
              </article>
              <article className="kd-card">
                <Image
                  src="/images/platform-3.webp"
                  alt="Analytics revealing growth trends"
                  width={496}
                  height={248}
                  sizes="(max-width: 980px) 100vw, 360px"
                />
                <h3>Comparative intelligence at every level</h3>
                <p>
                  Growth trajectories, competency gaps, and cross-campus
                  comparisons, with statistical measures (average, range,
                  standard deviation) suitable for board review and regulatory
                  submission.
                </p>
              </article>
            </div>
            <div className="kd-actions mt">
              <Link href="/dashboard" className="btn-grad">
                Explore features
              </Link>
              <Link href="/analytics" className="link-orange">
                View a demo
                <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ Question bank ============ */}
        <section className="kd-section" id="question-bank">
          <img
            className="kd-deco"
            src="/images/blurb-3.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -70, top: 20, width: 190 }}
          />
          <div className="container">
            <div className="kd-head" style={{ marginBottom: 40 }}>
              <span className="kd-eyebrow">Question bank</span>
              <h2>A governed item bank, ready on day one</h2>
              <p className="sub">
                Every item carries full metadata: difficulty calibration (Growth
                Metric Score 100–350), Depth of Knowledge (DOK 1–4), standard
                codes, competency links, and feedback messages. AI-generated
                items enter as drafts behind a reviewer approval gate, so
                unapproved content never reaches a live assessment.
              </p>
            </div>
            <div className="kd-actions" style={{ marginBottom: 76 }}>
              <Link href="/question-bank" className="btn-grad">
                Try it now
              </Link>
              <Link href="/help" className="link-orange hide-sm">
                Learn more
                <Arrow />
              </Link>
            </div>
            <div className="kd-split">
              <div className="kd-feature-list">
                <div>
                  <h3>Instant standards alignment</h3>
                  <p>
                    Select any framework and the engine maps every question to
                    the exact standard. No manual tagging required.
                  </p>
                </div>
                <hr />
                <div>
                  <h3>Multiple question types</h3>
                  <p>
                    Generate multiple choice, short answer, essay prompts, and
                    file upload tasks from a single interface.
                  </p>
                </div>
                <hr />
                <div>
                  <h3>Difficulty and DOK control</h3>
                  <p>
                    Set the cognitive demand. The AI adjusts vocabulary,
                    complexity, and structure to match your exact
                    specifications.
                  </p>
                </div>
                <hr />
              </div>
              <div className="kd-split-visual">
                <Image
                  src="/images/qb-visual.webp"
                  alt="Students collaborating, shown in a colorful collage"
                  width={798}
                  height={798}
                  sizes="(max-width: 980px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ Reporting ============ */}
        <section className="kd-section" id="reporting">
          <div className="container kd-split">
            <div className="kd-report-copy">
              <span className="kd-eyebrow">Reporting</span>
              <h2>Aligned reporting for classroom and boardroom</h2>
              <p className="sub">
                When every stakeholder sees a different version of the truth,
                decisions disconnect. Kodeit Ascend ensures the superintendent’s
                board report and the teacher’s classroom dashboard read the same
                data at different levels of aggregation.
              </p>
              <div className="kd-actions">
                <Link href="/reports" className="btn-grad">
                  Explore
                </Link>
                <Link href="/analytics" className="link-orange">
                  Learn
                  <Arrow />
                </Link>
              </div>
            </div>
            <div className="kd-split-visual">
              <Image
                src="/images/reporting-visual.webp"
                alt="Reporting dashboards collage"
                width={798}
                height={798}
                sizes="(max-width: 980px) 100vw, 520px"
              />
            </div>
          </div>
        </section>

        {/* ============ Benefits ============ */}
        <section className="kd-section" id="benefits">
          <img
            className="kd-deco"
            src="/images/blurb-5.svg"
            alt=""
            aria-hidden="true"
            style={{ left: "18%", top: -30, width: 120 }}
          />
          <div className="container">
            <div className="kd-head" style={{ marginBottom: 0 }}>
              <span className="kd-eyebrow">Benefits</span>
              <h2>The work gets lighter</h2>
              <p className="sub">
                Good tools do not shout. They simply make the job possible.
              </p>
            </div>
            <div className="kd-benefits">
              <article className="kd-benefit teachers">
                <Image
                  src="/images/benefit-teachers.webp"
                  alt="Teacher guiding students in class"
                  width={700}
                  height={350}
                  sizes="(max-width: 980px) 100vw, 400px"
                />
                <span className="tag">Teachers</span>
                <h3>Reclaim the hours lost to manual grading</h3>
                <p>
                  AI scores the papers. Ascend transforms the results into
                  learning intelligence.
                </p>
                <Link href="/assessments" className="card-link">
                  Learn
                  <Arrow />
                </Link>
              </article>
              <article className="kd-benefit students">
                <Image
                  src="/images/benefit-students.webp"
                  alt="Students learning at their own pace"
                  width={700}
                  height={350}
                  sizes="(max-width: 980px) 100vw, 400px"
                />
                <span className="tag">Students</span>
                <h3>Paper or screen. One assessment ecosystem.</h3>
                <p>
                  Assessments can be delivered in print or online, with
                  AI-powered scoring, competency mapping, and analytics applied
                  consistently. Every result contributes to a single,
                  comprehensive learner record.
                </p>
                <Link href="/competencies" className="card-link">
                  Learn
                  <Arrow />
                </Link>
              </article>
              <article className="kd-benefit leaders">
                <Image
                  src="/images/benefit-leaders.webp"
                  alt="School leaders reviewing curriculum alignment"
                  width={700}
                  height={350}
                  sizes="(max-width: 980px) 100vw, 400px"
                />
                <span className="tag">Leaders</span>
                <h3>Institutional intelligence without operational burden</h3>
                <p>
                  Growth measured, skill gaps diagnosed, fair cross-campus
                  comparison enabled, and regulatory reporting supported —
                  without adding load to schools or teachers.
                </p>
                <Link href="/reports" className="card-link">
                  Learn
                  <Arrow />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ============ Process ============ */}
        <section className="kd-section" id="process">
          <img
            className="kd-deco"
            src="/images/blurb-4.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "6%", top: -60, width: 200 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">Process</span>
              <h2>Three steps forward</h2>
              <p className="sub">
                The distance between intention and impact is just three moves.
              </p>
            </div>
            <div className="kd-process">
              <article className="kd-step s1">
                <Image
                  className="bg-img"
                  src="/images/process-1.webp"
                  alt=""
                  fill
                  sizes="(max-width: 980px) 100vw, 380px"
                />
                <div className="kd-step-body">
                  <span className="step-label">Step 1</span>
                  <h3>Set the competencies that define mastery</h3>
                  <Link href="/competencies" className="card-link">
                    Learn
                    <Arrow />
                  </Link>
                </div>
              </article>
              <article className="kd-step s2">
                <Image
                  className="bg-img"
                  src="/images/process-2.webp"
                  alt=""
                  fill
                  sizes="(max-width: 980px) 100vw, 380px"
                />
                <div className="kd-step-body">
                  <span className="step-label">Step 2</span>
                  <h3>Deploy in the mode the decision requires</h3>
                  <Link href="/assessments" className="card-link">
                    Learn
                    <Arrow />
                  </Link>
                </div>
              </article>
              <article className="kd-step s3">
                <Image
                  className="bg-img"
                  src="/images/process-3-1d6405.webp"
                  alt=""
                  fill
                  sizes="(max-width: 980px) 100vw, 380px"
                />
                <div className="kd-step-body">
                  <span className="step-label">Step 3</span>
                  <h3>Analyze growth and act on the evidence</h3>
                  <Link href="/analytics" className="card-link">
                    Learn
                    <Arrow />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============ Pilot CTA ============ */}
        <section className="kd-section" id="pilot" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="kd-cta">
              <Image
                className="bg-img"
                src="/images/cta-bg-7d0dc7.webp"
                alt=""
                fill
                sizes="(max-width: 1200px) 100vw, 1160px"
              />
              <div className="kd-cta-inner">
                <h2>Book a demo</h2>
                <p>
                  The first step is a conversation, not a commitment. Talk to an
                  education specialist about a demo for your school or network.
                  Most assessment platforms measure where learners are. Kodeit
                  Ascend tells school leadership what to do about it.
                </p>
                <Link href="/help#contact" className="btn-grad">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
