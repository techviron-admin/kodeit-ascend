"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const productLinks = [
  ["/product", "Overview"],
  ["/dashboard", "Dashboard"],
  ["/assessments", "Assessments"],
  ["/question-bank", "Question Bank"],
  ["/reports", "Reports"],
  ["/competencies", "Competencies"],
  ["/curriculum", "Curriculum"],
  ["/schools", "Schools"],
  ["/users", "Users"],
  ["/analytics", "Analytics"],
  ["/settings", "Settings"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menuSuppressed, setMenuSuppressed] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();

  // Close the mobile menu when clicking/tapping outside the header
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpen(false);
        setSubOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Close menus after navigating to another page
  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  // Hide the dropdown right after a navigation click; re-arm on mouse leave.
  const closeMenu = (e) => {
    e.currentTarget.blur();
    setMenuSuppressed(true);
    setOpen(false);
    setSubOpen(false);
  };

  // In the mobile menu the Product row toggles its submenu instead of navigating
  const onProductClick = (e) => {
    if (open) {
      e.preventDefault();
      setSubOpen((v) => !v);
      return;
    }
    closeMenu(e);
  };

  return (
    <header ref={headerRef} className={`site-header${open ? " nav-open" : ""}`}>
      <div className="container nav-wrap">
        <Link href="/" className="logo-brand" aria-label="Kodeit Ascend home">
          <Image
            src="/images/logo-e64514.webp"
            alt="Kodeit"
            width={56}
            height={48}
            priority
          />
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <div className="nav-item">
            <Link
              href="/"
              className={`nav-link${pathname === "/" ? " is-current" : ""}`}
            >
              Home
            </Link>
          </div>
          <div
            className={`nav-item${menuSuppressed ? " menu-suppressed" : ""}${subOpen ? " sub-open" : ""}`}
            onMouseLeave={() => setMenuSuppressed(false)}
          >
            <Link
              href="/product"
              onClick={onProductClick}
              aria-expanded={subOpen}
              className={`nav-link${pathname.startsWith("/product") ? " is-current" : ""}`}
            >
              Product
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
            </Link>
            <div className="menu-panel">
              {productLinks.map(([href, label]) => (
                <Link key={href} href={href} onClick={closeMenu}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-item">
            <a href="#" className="nav-link">
              Solutions
            </a>
          </div>
          <div className="nav-item">
            <Link href="/about" className="nav-link">
              About Us
            </Link>
          </div>
        </nav>
        <div className="nav-actions">
          <Link href="/help#contact" className="btn btn-book">
            Book a Demo
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
