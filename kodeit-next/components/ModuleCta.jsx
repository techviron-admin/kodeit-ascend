import Link from "next/link";

export default function ModuleCta({ title, sub, label = "Talk to an expert" }) {
  return (
    <section className="md-cta-wrap">
      <img
        className="kd-deco"
        src="/images/module-blurb-sm.svg"
        alt=""
        aria-hidden="true"
        style={{ left: "10%", top: -30, width: 49 }}
      />
      <img
        className="kd-deco"
        src="/images/module-blurb-br.svg"
        alt=""
        aria-hidden="true"
        style={{ right: "1%", top: -140, width: 120 }}
      />
      <div className="container">
        <div className="md-cta">
          <div className="md-cta-copy">
            <h2>{title}</h2>
            <p>{sub}</p>
          </div>
          <Link href="/help#contact" className="btn-grad">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
