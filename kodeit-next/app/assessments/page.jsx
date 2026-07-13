import Image from "next/image";
import ModuleHero from "@/components/ModuleHero";
import ModuleCta from "@/components/ModuleCta";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Assessments",
  description:
    "Formative, summative, benchmark, and diagnostic assessments, delivered standard or adaptive, on screen or on paper.",
};

const workflow = [
  {
    icon: "wf-create.svg",
    tint: "#dde7f7",
    title: "1. Create Assessments",
    desc: "Build assessments tailored to your curriculum and learning goals.",
    chips: [
      ["chip-basic-details.svg", "Basic Details"],
      ["chip-subject.svg", "Subject"],
      ["chip-grades.svg", "Grades"],
      ["chip-difficulty.svg", "Difficulty"],
      ["chip-dok.svg", "DOK"],
      ["chip-competencies.svg", "Competencies"],
    ],
  },
  {
    icon: "wf-assign.svg",
    tint: "#e1f8fb",
    title: "2. Assign Assessments",
    desc: "Choose the right audience and schedule assessments effortlessly.",
    chips: [
      ["chip-school.svg", "School"],
      ["chip-classes.svg", "Classes"],
      ["chip-students.svg", "Students"],
      ["chip-schedule.svg", "Schedule"],
    ],
  },
  {
    icon: "wf-deliver.svg",
    tint: "#e7fbe7",
    title: "3. Assessment Delivery",
    desc: "Deliver in the mode the decision requires. Standard blueprints ensure coverage across DOK, standards, and difficulty; adaptive delivery pinpoints ability in 20–25 minutes; paper assessments export as print-ready OMR booklets, scanned in bulk into the same learner record.",
    chips: [
      ["chip-online.svg", "Online"],
      ["chip-offline.svg", "Offline"],
      ["chip-adaptive.svg", "Adaptive"],
      ["chip-practice.svg", "Practice"],
    ],
  },
  {
    icon: "wf-results.svg",
    tint: "#fff2e2",
    title: "4. Assessment Results",
    desc: "Results with the reasoning attached: accuracy and Growth Metric Score, question-by-question review with explanations, AI grading rationale for essays and short answers, per-skill competency labels, and a difficulty progression chart for adaptive tests.",
    chips: null,
  },
];

export default function AssessmentsPage() {
  return (
    <div className="page-home">
      <main id="main">
        <ModuleHero
          variant="assess"
          eyebrow="Assessments"
          title="Assessments Module"
          sub="Four assessment purposes, two delivery modes, one platform. Formative, summative, benchmark, and diagnostic assessments, delivered standard or adaptive, on screen or on paper. The same item bank, competency framework, and reporting layer power every mode, so growth data stays continuous."
          primaryHref="/help#contact"
          primaryLabel="Create Assessment"
          secondaryHref="/reports"
          secondaryLabel="View Reports"
          imageAlt="Kodeit Ascend assessment portal dashboard"
        />

        {/* ============ Assessment workflow ============ */}
        <section className="kd-section aw-section" id="workflow">
          <img
            className="kd-deco"
            src="/images/module-pattern.svg"
            alt=""
            aria-hidden="true"
            style={{ left: -60, top: 320, width: 210 }}
          />
          <img
            className="kd-deco"
            src="/images/sparkle-1.svg"
            alt=""
            aria-hidden="true"
            style={{ right: "6%", top: 30, width: 54 }}
          />
          <div className="container">
            <div className="kd-head">
              <span className="kd-eyebrow">ASSESSMENT WORKFLOW</span>
              <h2>Everything you need to manage assessment</h2>
            </div>
            <div className="aw-rows">
              {workflow.map(({ icon, tint, title, desc, chips }) => (
                <article className="aw-row" key={title}>
                  <div className="aw-left">
                    <span className="md-badge" style={{ background: tint }}>
                      <img
                        src={`/images/${icon}`}
                        alt=""
                        width={58}
                        height={58}
                      />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  </div>
                  <div className="aw-right">
                    {chips ? (
                      chips.map(([chipIcon, label]) => (
                        <div className="aw-chip" key={label}>
                          <img
                            src={`/images/${chipIcon}`}
                            alt=""
                            width={44}
                            height={44}
                          />
                          <span>{label}</span>
                        </div>
                      ))
                    ) : (
                      <div className="aw-results">
                        <Image
                          src="/images/results-strip-1e1b74.webp"
                          alt="Assessment results performance chart"
                          width={994}
                          height={110}
                          sizes="(max-width: 1020px) 100vw, 700px"
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ModuleCta
          title="Need help getting started?"
          sub="Our team is here to help you create impactful assessments and empower learning."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
