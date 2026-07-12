"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="form-success">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12.5l5 5L20 6.5" />
        </svg>
        <span>You&rsquo;re on the list. See you next month.</span>
      </p>
    );
  }

  return (
    <form
      className="kd-news-form"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        required
      />
      <button type="submit" className="btn-grad">
        Subscribe
      </button>
    </form>
  );
}
