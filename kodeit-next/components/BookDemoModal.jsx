"use client";

import { useEffect, useState } from "react";

const codes = [
  ["SA", "+966"],
  ["AE", "+971"],
  ["US", "+1"],
  ["GB", "+44"],
  ["IN", "+91"],
  ["QA", "+974"],
  ["KW", "+965"],
  ["BH", "+973"],
  ["OM", "+968"],
  ["JO", "+962"],
  ["EG", "+20"],
  ["LB", "+961"],
  ["IQ", "+964"],
  ["PK", "+92"],
  ["BD", "+880"],
  ["LK", "+94"],
  ["NP", "+977"],
  ["MY", "+60"],
  ["SG", "+65"],
  ["ID", "+62"],
  ["PH", "+63"],
  ["TH", "+66"],
  ["VN", "+84"],
  ["CN", "+86"],
  ["JP", "+81"],
  ["KR", "+82"],
  ["AU", "+61"],
  ["NZ", "+64"],
  ["CA", "+1"],
  ["MX", "+52"],
  ["BR", "+55"],
  ["AR", "+54"],
  ["CL", "+56"],
  ["CO", "+57"],
  ["PE", "+51"],
  ["DE", "+49"],
  ["FR", "+33"],
  ["ES", "+34"],
  ["IT", "+39"],
  ["PT", "+351"],
  ["NL", "+31"],
  ["BE", "+32"],
  ["CH", "+41"],
  ["AT", "+43"],
  ["SE", "+46"],
  ["NO", "+47"],
  ["DK", "+45"],
  ["FI", "+358"],
  ["IE", "+353"],
  ["PL", "+48"],
  ["CZ", "+420"],
  ["GR", "+30"],
  ["TR", "+90"],
  ["RU", "+7"],
  ["UA", "+380"],
  ["ZA", "+27"],
  ["NG", "+234"],
  ["KE", "+254"],
  ["GH", "+233"],
  ["MA", "+212"],
  ["TN", "+216"],
  ["DZ", "+213"],
  ["ET", "+251"],
  ["TZ", "+255"],
  ["UG", "+256"],
];

export default function BookDemoModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Any link pointing at /help#contact opens the modal instead
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href="/help#contact"]');
      if (a) {
        e.preventDefault();
        setSent(false);
        setOpen(true);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const submit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data.website) return; // honeypot: silently drop bots
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@kodeitglobal.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: data.name,
          Email: data.email,
          Phone: [data.code, data.phone].filter(Boolean).join(" "),
          Company: data.company || "-",
          Remark: data.remark || "-",
          _subject: "New Kodeit Ascend Demo Request",
          _template: "table",
          _replyto: data.email,
        }),
      });
      if (!res.ok) throw new Error("bad status");
      setSent(true);
    } catch {
      setError(
        "Something went wrong sending your request. Please try again or email us at info@kodeitglobal.com.",
      );
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="bd-overlay"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div
        className="bd-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bd-title"
      >
        <button
          className="bd-close"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {sent ? (
          <div className="bd-success">
            <span className="tick">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m4 12.5 5.5 5.5L20 6.5" />
              </svg>
            </span>
            <h3>Request received!</h3>
            <p>
              Thanks for your interest in Kodeit Ascend. Our team will reach out
              to you shortly.
            </p>
            <button className="btn-grad" onClick={() => setOpen(false)}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 id="bd-title">Book a Demo</h3>
            <p className="bd-sub">
              Tell us a little about yourself and we&rsquo;ll get in touch.
            </p>
            <form onSubmit={submit}>
              <label>
                Your Name <span className="req">*</span>
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Your Email <span className="req">*</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                />
              </label>
              <label>
                Mobile Number
                <span className="bd-phone">
                  <select
                    name="code"
                    defaultValue="+966"
                    aria-label="Country code"
                  >
                    {codes.map(([cc, dial]) => (
                      <option key={cc} value={dial}>
                        {cc} {dial}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel-national"
                    placeholder="5X XXX XXXX"
                  />
                </span>
              </label>
              <label>
                Company
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                Remark
                <textarea name="remark" rows={3} />
              </label>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="bd-hp"
                aria-hidden="true"
              />
              {error && <p className="bd-error">{error}</p>}
              <button
                type="submit"
                className="btn-grad bd-submit"
                disabled={sending}
              >
                {sending ? "Sending…" : "Submit Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
