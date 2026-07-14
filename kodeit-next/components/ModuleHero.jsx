import Link from "next/link";
import Image from "next/image";
import Arrow from "@/components/Arrow";

export default function ModuleHero({
  variant,
  deco = false,
  circles = false,
  eyebrow,
  title,
  sub,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imageAlt,
  image = "/images/module-hero.webp",
}) {
  return (
    <section className={`md-hero md-hero--${variant}`}>
      <img
        className="kd-deco deco-bg"
        src="/images/module-bg-hero.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="kd-deco deco-blurb"
        src="/images/module-blurb-hero.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="kd-deco deco-tr"
        src="/images/module-blurb-tr.svg"
        alt=""
        aria-hidden="true"
      />
      <div className="container md-hero-inner">
        <div className="md-hero-copy">
          <span className="kd-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="sub">{sub}</p>
          <div className="md-hero-actions">
            <Link href={primaryHref} className="btn-grad">
              {primaryLabel}
            </Link>
            {secondaryLabel && (
              <Link href={secondaryHref} className="link-orange">
                {secondaryLabel}
                <Arrow />
              </Link>
            )}
          </div>
        </div>
        <div
          className={`md-hero-visual${deco ? " has-deco" : ""}${circles ? " has-circles" : ""}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={1162}
            height={716}
            priority
            quality={90}
            sizes="(max-width: 980px) 100vw, 640px"
          />
        </div>
      </div>
    </section>
  );
}
