"use client";

import { useEffect, useRef, useState } from "react";

const codes = [
  ["Saudi Arabia", "+966"],
  ["United Arab Emirates", "+971"],
  ["United States", "+1"],
  ["United Kingdom", "+44"],
  ["India", "+91"],
  ["Qatar", "+974"],
  ["Kuwait", "+965"],
  ["Bahrain", "+973"],
  ["Oman", "+968"],
  ["Jordan", "+962"],
  ["Egypt", "+20"],
  ["Lebanon", "+961"],
  ["Iraq", "+964"],
  ["Pakistan", "+92"],
  ["Bangladesh", "+880"],
  ["Sri Lanka", "+94"],
  ["Nepal", "+977"],
  ["Malaysia", "+60"],
  ["Singapore", "+65"],
  ["Indonesia", "+62"],
  ["Philippines", "+63"],
  ["Thailand", "+66"],
  ["Vietnam", "+84"],
  ["China", "+86"],
  ["Japan", "+81"],
  ["South Korea", "+82"],
  ["Australia", "+61"],
  ["New Zealand", "+64"],
  ["Canada", "+1"],
  ["Mexico", "+52"],
  ["Brazil", "+55"],
  ["Argentina", "+54"],
  ["Chile", "+56"],
  ["Colombia", "+57"],
  ["Peru", "+51"],
  ["Germany", "+49"],
  ["France", "+33"],
  ["Spain", "+34"],
  ["Italy", "+39"],
  ["Portugal", "+351"],
  ["Netherlands", "+31"],
  ["Belgium", "+32"],
  ["Switzerland", "+41"],
  ["Austria", "+43"],
  ["Sweden", "+46"],
  ["Norway", "+47"],
  ["Denmark", "+45"],
  ["Finland", "+358"],
  ["Ireland", "+353"],
  ["Poland", "+48"],
  ["Czechia", "+420"],
  ["Greece", "+30"],
  ["T\u00fcrkiye", "+90"],
  ["Russia", "+7"],
  ["Ukraine", "+380"],
  ["South Africa", "+27"],
  ["Nigeria", "+234"],
  ["Kenya", "+254"],
  ["Ghana", "+233"],
  ["Morocco", "+212"],
  ["Tunisia", "+216"],
  ["Algeria", "+213"],
  ["Ethiopia", "+251"],
  ["Tanzania", "+255"],
  ["Uganda", "+256"],
];

export default function BookDemoModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [ccOpen, setCcOpen] = useState(false);
  const [country, setCountry] = useState(codes[0]);
  const [query, setQuery] = useState("");
  const ccRef = useRef(null);

  // Close the country dropdown when clicking outside of it
  useEffect(() => {
    if (!ccOpen) return;
    const onDown = (e) => {
      if (ccRef.current && !ccRef.current.contains(e.target)) {
        setCcOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [ccOpen]);

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
      const res = await fetch(
        "https://formsubmit.co/ajax/info@kodeitglobal.com",
        {
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
        },
      );
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
                  <span
                    className={`bd-cc${ccOpen ? " is-open" : ""}`}
                    ref={ccRef}
                  >
                    <button
                      type="button"
                      className="bd-cc-btn"
                      aria-haspopup="listbox"
                      aria-expanded={ccOpen}
                      aria-label={`Country code: ${country[0]} ${country[1]}`}
                      onClick={() => {
                        setCcOpen((v) => !v);
                        setQuery("");
                      }}
                    >
                      {country[1]}
                      <svg
                        className="chev"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {ccOpen && (
                      <span className="bd-cc-panel">
                        <input
                          type="text"
                          className="bd-cc-search"
                          placeholder="Search country…"
                          value={query}
                          autoFocus
                          onChange={(e) => setQuery(e.target.value)}
                        />
                        <ul role="listbox" aria-label="Country codes">
                          {codes
                            .filter(
                              ([name, dial]) =>
                                name
                                  .toLowerCase()
                                  .includes(query.trim().toLowerCase()) ||
                                dial.includes(query.trim()),
                            )
                            .map(([name, dial]) => (
                              <li key={name}>
                                <button
                                  type="button"
                                  role="option"
                                  aria-selected={name === country[0]}
                                  className={
                                    name === country[0] ? "is-on" : ""
                                  }
                                  onClick={() => {
                                    setCountry([name, dial]);
                                    setCcOpen(false);
                                    setQuery("");
                                  }}
                                >
                                  <span>{name}</span>
                                  <em>{dial}</em>
                                </button>
                              </li>
                            ))}
                        </ul>
                      </span>
                    )}
                    <input type="hidden" name="code" value={country[1]} />
                  </span>
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
