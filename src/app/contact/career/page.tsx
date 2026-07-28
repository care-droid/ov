"use client";

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   OVENTRA — CAREERS
   Same design system as the Oventra brand pages: near-black, maroon,
   warm white, dark blue accent. This page: culture imagery, a filterable
   open-roles list, benefits, and a team gallery — all animated + responsive.
------------------------------------------------------------------- */

/* ---------------------------- Data --------------------------------- */

const CULTURE_IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
  teamA:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  teamB:
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80",
  teamC:
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80",
  teamD:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  office:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
};

const VALUES = [
  {
    id: "honest",
    title: "We ship honest, not just fast",
    body: "Every feature earns its place by making an event easier to plan — not by looking impressive in a demo.",
    icon: <path d="M12 2l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V5l7-3z" />,
  },
  {
    id: "ownership",
    title: "Small team, real ownership",
    body: "You'll own a feature end to end — from the first sketch to the metric that tells you it worked.",
    icon: <path d="M4 4h16v16H4V4zm4 4h8M8 12h8M8 16h5" />,
  },
  {
    id: "customer",
    title: "Talk to real caterers and planners",
    body: "Everyone here, engineers included, spends time on support calls. Nobody builds in a vacuum.",
    icon: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />,
  },
];

const BENEFITS = [
  { id: "remote", title: "Remote-friendly", body: "Work from home, or from our Gurugram office — your call, day to day." },
  { id: "health", title: "Health cover", body: "Full health insurance for you and your immediate family from day one." },
  { id: "learning", title: "Learning budget", body: "Annual budget for courses, books, and conferences — no approval chain." },
  { id: "leave", title: "Flexible leave", body: "No fixed leave bank to track — take what you need, communicate early." },
  { id: "equity", title: "Real equity", body: "Every full-time hire gets equity, reviewed and topped up each year." },
  { id: "offsite", title: "Team offsites", body: "Twice a year, the whole team meets in person — trips, not just meetings." },
];

const DEPARTMENTS = ["All", "Engineering", "Design", "Operations", "Support"] as const;

const ROLES = [
  { id: "r1", title: "Senior Frontend Engineer", dept: "Engineering", location: "Remote / Gurugram", type: "Full-time" },
  { id: "r2", title: "Backend Engineer — Payments", dept: "Engineering", location: "Remote", type: "Full-time" },
  { id: "r3", title: "Product Designer", dept: "Design", location: "Gurugram", type: "Full-time" },
  { id: "r4", title: "Vendor Operations Associate", dept: "Operations", location: "Gurugram", type: "Full-time" },
  { id: "r5", title: "Customer Support Specialist", dept: "Support", location: "Remote", type: "Full-time" },
  { id: "r6", title: "Growth Marketing Intern", dept: "Operations", location: "Remote", type: "Internship" },
];

/* ------------------------- Reveal-on-scroll ------------------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.16 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* ----------------------------- Icon shell ---------------------------- */

function Icon({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ------------------------------- Page -------------------------------- */

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState<(typeof DEPARTMENTS)[number]>("All");

  const filteredRoles =
    activeDept === "All" ? ROLES : ROLES.filter((r) => r.dept === activeDept);

  const scrollToRoles = () => {
    document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ov-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .ov-root {
          --black: #0a0908;
          --black-soft: #14110f;
          --black-card: #17130f;
          --maroon: #5c1220;
          --maroon-bright: #9a2a3d;
          --maroon-line: #7a1d2c;
          --navy: #0d1526;
          --white: #f5f1ea;
          --muted: #a99c95;
          --hair: rgba(245, 241, 234, 0.1);
          --good: #4caf7d;
          font-family: 'Inter', -apple-system, sans-serif;
          background: var(--black);
          color: var(--white);
          overflow-x: hidden;
          position: relative;
          min-height: 100vh;
        }
        .ov-root * { box-sizing: border-box; }
        .ov-root h1, .ov-root h2, .ov-root h3 {
          font-family: 'Fraunces', serif;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--maroon-bright);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.1rem;
        }
        .eyebrow::before {
          content: '';
          width: 22px;
          height: 1px;
          background: var(--maroon-bright);
          display: inline-block;
        }
        .container { max-width: 1180px; margin: 0 auto; padding: 0 clamp(1.25rem, 4vw, 3rem); }
        .icon { width: 22px; height: 22px; }

        /* -------- nav -------- */
        .nav {
          position: sticky; top: 0; z-index: 20;
          background: rgba(10, 9, 8, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--hair);
        }
        .nav__row { display: flex; align-items: center; justify-content: space-between; padding: 1.1rem 0; }
        .nav__brand { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.15rem; }
        .nav__brand em { color: var(--maroon-bright); font-style: normal; }
        .nav__cta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--black); background: var(--white); border: none;
          padding: 0.65rem 1.15rem; border-radius: 999px; cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .nav__cta:hover { background: var(--maroon-bright); color: var(--white); transform: translateY(-2px); }

        /* -------- hero -------- */
        .hero {
          position: relative;
          min-height: 78vh;
          display: flex;
          align-items: center;
          border-radius: 0;
          overflow: hidden;
        }
        .hero__bg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          filter: saturate(0.9);
        }
        .hero__scrim {
          position: absolute; inset: 0;
          background:
            linear-gradient(180deg, rgba(10,9,8,0.55) 0%, rgba(10,9,8,0.88) 78%, var(--black) 100%),
            radial-gradient(60% 60% at 85% 15%, rgba(13, 21, 38, 0.5) 0%, transparent 70%);
        }
        .hero__copy { position: relative; z-index: 2; padding: clamp(4rem, 10vw, 6rem) 0; }
        .hero h1 { font-size: clamp(2.4rem, 5.6vw, 4rem); font-weight: 600; line-height: 1.05; max-width: 16ch; }
        .hero h1 em { font-style: italic; font-weight: 500; color: var(--maroon-bright); }
        .hero__sub { margin-top: 1.4rem; max-width: 50ch; font-size: clamp(1rem, 1.3vw, 1.1rem); line-height: 1.75; color: var(--muted); }
        .hero__ctas { margin-top: 2.2rem; display: flex; gap: 0.9rem; flex-wrap: wrap; }
        .hero__cta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.95rem 1.5rem; border-radius: 999px; cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .hero__cta--solid { color: var(--black); background: var(--white); border: none; }
        .hero__cta--solid:hover { background: var(--maroon-bright); color: var(--white); transform: translateY(-2px); }
        .hero__cta--ghost { color: var(--white); background: transparent; border: 1px solid var(--maroon-line); }
        .hero__cta--ghost:hover { background: var(--maroon); border-color: var(--maroon-bright); transform: translateY(-2px); }

        .hero__stats {
          margin-top: 3rem;
          display: flex;
          gap: clamp(1.6rem, 4vw, 3.2rem);
          flex-wrap: wrap;
        }
        .hero__stat { }
        .hero__stat strong {
          display: block;
          font-family: 'Fraunces', serif;
          font-size: clamp(1.5rem, 2.6vw, 2rem);
          font-weight: 600;
          color: var(--white);
        }
        .hero__stat span {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--muted);
        }

        /* -------- generic section -------- */
        section { position: relative; padding: clamp(3.5rem, 7vw, 6.5rem) 0; }
        .section-head { max-width: 640px; margin-bottom: 2.6rem; }
        .section-head h2 { font-size: clamp(1.6rem, 2.8vw, 2.3rem); font-weight: 600; }
        .section-head p { margin-top: 0.9rem; color: var(--muted); line-height: 1.75; }

        /* -------- values -------- */
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.6rem; }
        .value-card {
          background: var(--black-card);
          border: 1px solid var(--hair);
          border-radius: 6px;
          padding: 2rem 1.7rem;
          transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
        }
        .value-card:hover { border-color: var(--maroon-line); transform: translateY(-6px); background: #1b1410; }
        .value-icon { width: 28px; height: 28px; color: var(--maroon-bright); margin-bottom: 1.3rem; }
        .value-card h3 { font-size: 1.08rem; font-weight: 600; margin-bottom: 0.6rem; }
        .value-card p { color: var(--muted); font-size: 0.94rem; line-height: 1.7; }

        /* -------- gallery -------- */
        .section--gallery { background: linear-gradient(180deg, var(--black) 0%, var(--navy) 50%, var(--black) 100%); }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 190px;
          gap: 1rem;
        }
        .gallery-item {
          position: relative; border-radius: 6px; overflow: hidden; border: 1px solid var(--hair);
        }
        .gallery-item img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 1.3s cubic-bezier(.16,1,.3,1);
        }
        .gallery-item:hover img { transform: scale(1.08); }
        .gallery-item--tall { grid-row: span 2; }
        .gallery-item--wide { grid-column: span 2; }

        /* -------- benefits -------- */
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.3rem; }
        .benefit-card {
          border: 1px solid var(--hair);
          border-radius: 6px;
          padding: 1.7rem 1.5rem;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .benefit-card:hover { border-color: var(--maroon-line); transform: translateY(-4px); }
        .benefit-card h3 {
          font-size: 0.72rem;
          font-family: 'IBM Plex Mono', monospace;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--maroon-bright);
          margin-bottom: 0.7rem;
        }
        .benefit-card p { color: var(--muted); font-size: 0.92rem; line-height: 1.65; }

        /* -------- open roles -------- */
        .roles-filter {
          display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 2.2rem;
        }
        .filter-chip {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--muted);
          background: transparent;
          border: 1px solid var(--hair);
          padding: 0.55rem 1.05rem;
          border-radius: 999px;
          cursor: pointer;
          transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
        }
        .filter-chip:hover { border-color: var(--maroon-line); color: var(--white); }
        .filter-chip--active {
          background: var(--white); color: var(--black); border-color: var(--white);
        }
        .filter-chip--active:hover { color: var(--black); }

        .role-list { display: flex; flex-direction: column; }
        .role-row {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 0.7fr;
          align-items: center;
          gap: 1rem;
          padding: 1.3rem 1.4rem;
          border: 1px solid var(--hair);
          border-radius: 6px;
          margin-bottom: 0.9rem;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }
        .role-row:hover { border-color: var(--maroon-line); background: var(--black-card); transform: translateX(4px); }
        .role-title { font-family: 'Fraunces', serif; font-weight: 500; font-size: 1.02rem; }
        .role-meta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.05em; color: var(--muted);
        }
        .role-apply {
          justify-self: end;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--white);
          border-bottom: 1px solid var(--maroon-line);
          padding-bottom: 3px;
          white-space: nowrap;
          transition: color 0.25s ease, border-color 0.25s ease;
        }
        .role-row:hover .role-apply { color: var(--maroon-bright); border-color: var(--maroon-bright); }
        .roles-empty {
          color: var(--muted);
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.85rem;
          padding: 2rem 0;
          text-align: center;
          border: 1px dashed var(--hair);
          border-radius: 6px;
        }

        /* -------- closing cta -------- */
        .closing {
          text-align: center;
          border-top: 1px solid var(--hair);
        }
        .closing h2 { font-size: clamp(1.8rem, 3.4vw, 2.5rem); font-weight: 600; max-width: 20ch; margin: 0 auto; }
        .closing p { margin: 1.1rem auto 0; max-width: 50ch; color: var(--muted); line-height: 1.75; }
        .closing__cta {
          margin-top: 2rem;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--black); background: var(--white); border: none;
          padding: 1rem 1.7rem; border-radius: 999px; cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .closing__cta:hover { background: var(--maroon-bright); color: var(--white); transform: translateY(-2px); }

        /* -------- footer -------- */
        .footer { border-top: 1px solid var(--hair); padding: clamp(2.5rem, 5vw, 3.5rem) 0 2.5rem; }
        .footer__row {
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 1rem;
          color: var(--muted);
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.06em;
        }

        /* -------- reveal -------- */
        .reveal { opacity: 0; transform: translateY(26px); transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1); }
        .reveal--visible { opacity: 1; transform: translateY(0); }

        /* -------- responsive -------- */
        @media (max-width: 1020px) {
          .values-grid, .benefits-grid { grid-template-columns: 1fr 1fr; }
          .gallery-grid { grid-template-columns: repeat(3, 1fr); grid-auto-rows: 160px; }
        }
        @media (max-width: 780px) {
          .role-row { grid-template-columns: 1fr; align-items: flex-start; gap: 0.5rem; }
          .role-apply { justify-self: start; margin-top: 0.4rem; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 150px; }
          .gallery-item--wide { grid-column: span 2; }
          .gallery-item--tall { grid-row: span 1; }
        }
        @media (max-width: 640px) {
          .values-grid, .benefits-grid { grid-template-columns: 1fr; }
          .roles-filter { gap: 0.5rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .gallery-item img { transition: none !important; }
        }
      `}</style>

      {/* ---------------- Nav ---------------- */}
      <nav className="nav">
        <div className="container nav__row">
          <div className="nav__brand">Oventra <em>Careers</em></div>
          <button className="nav__cta" onClick={scrollToRoles}>View Open Roles</button>
        </div>
      </nav>

      {/* ---------------- Hero ---------------- */}
      <header className="hero">
        <img className="hero__bg" src={CULTURE_IMAGES.hero} alt="The Oventra team working together in the office" loading="lazy" />
        <div className="hero__scrim" />
        <div className="container hero__copy">
          <div className="eyebrow">Careers at Oventra</div>
          <h1>
            Help us make event catering <em>honest</em>
          </h1>
          <p className="hero__sub">
            We're a small team building the tool we wished existed when we
            couldn't get a straight answer from a single caterer. Come build
            it with us.
          </p>
          <div className="hero__ctas">
            <button className="hero__cta hero__cta--solid" onClick={scrollToRoles}>
              See open roles
            </button>
            <a className="hero__cta hero__cta--ghost" href="mailto:careers@oventra.com">
              Email the team
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat"><strong>18</strong><span>People, today</span></div>
            <div className="hero__stat"><strong>6</strong><span>Open roles</span></div>
            <div className="hero__stat"><strong>3</strong><span>Cities represented</span></div>
          </div>
        </div>
      </header>

      {/* ---------------- Values ---------------- */}
      <section>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">How We Work</div>
            <h2>What it's actually like here</h2>
          </Reveal>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.id} delay={i * 100} className="value-card">
                <Icon className="value-icon">{v.icon}</Icon>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Gallery ---------------- */}
      <section className="section--gallery">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">The Team</div>
            <h2>A few faces you'd be working with</h2>
          </Reveal>
          <div className="gallery-grid">
            <Reveal className="gallery-item gallery-item--tall">
              <img src={CULTURE_IMAGES.teamA} alt="Team members collaborating at a desk" loading="lazy" />
            </Reveal>
            <Reveal delay={80} className="gallery-item gallery-item--wide">
              <img src={CULTURE_IMAGES.office} alt="The Oventra office space" loading="lazy" />
            </Reveal>
            <Reveal delay={160} className="gallery-item">
              <img src={CULTURE_IMAGES.teamB} alt="A team member presenting during a meeting" loading="lazy" />
            </Reveal>
            <Reveal delay={240} className="gallery-item">
              <img src={CULTURE_IMAGES.teamC} alt="Coworkers reviewing a design on a laptop" loading="lazy" />
            </Reveal>
            <Reveal delay={320} className="gallery-item gallery-item--wide">
              <img src={CULTURE_IMAGES.teamD} alt="The team having an informal discussion" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Benefits ---------------- */}
      <section>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Benefits</div>
            <h2>What you get, beyond the paycheck</h2>
          </Reveal>
          <div className="benefits-grid">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.id} delay={i * 70} className="benefit-card">
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Open Roles ---------------- */}
      <section id="open-roles">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Open Roles</div>
            <h2>Come build the honest version with us</h2>
          </Reveal>

          <div className="roles-filter">
            {DEPARTMENTS.map((d) => (
              <button
                key={d}
                className={`filter-chip ${activeDept === d ? "filter-chip--active" : ""}`}
                onClick={() => setActiveDept(d)}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="role-list">
            {filteredRoles.length > 0 ? (
              filteredRoles.map((r, i) => (
                <Reveal key={r.id} delay={i * 60}>
                  <a
                    className="role-row"
                    href={`mailto:careers@oventra.com?subject=${encodeURIComponent(
                      `Application: ${r.title}`
                    )}`}
                  >
                    <span className="role-title">{r.title}</span>
                    <span className="role-meta">{r.dept}</span>
                    <span className="role-meta">{r.location} · {r.type}</span>
                    <span className="role-apply">Apply →</span>
                  </a>
                </Reveal>
              ))
            ) : (
              <div className="roles-empty">No open roles in this department right now — check back soon.</div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="closing">
        <div className="container">
          <Reveal>
            <h2>Don't see your role listed?</h2>
            <p>
              We're always open to meeting people who care about the same
              problem. Send us a note and tell us what you'd want to work on.
            </p>
            <a className="closing__cta" href="mailto:careers@oventra.com">
              Introduce yourself
            </a>
          </Reveal>
        </div>
      </section>

      
    </div>
  );
}