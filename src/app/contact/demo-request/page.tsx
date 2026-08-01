"use client";

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   Book a Demo — TRV Sports
   Same design system as the "Why We Built TRV" story page:
   near-black, maroon, warm white, dark blue accent.
   Purpose: let distributors, event planners, and bulk buyers book
   a walkthrough of the live carton-ordering platform.
------------------------------------------------------------------- */

/* ---------------------------- Data --------------------------------- */

const WHAT_YOU_GET = [
  {
    id: "walkthrough",
    title: "A live walkthrough, not a slide deck",
    body: "We screen-share the actual platform — live carton stock, size-run filters, and the order flow — using a real event as the example.",
    icon: <path d="M4 5h16v11H4V5zm4 15h8M10 16v4M14 16v4" />,
  },
  {
    id: "fit",
    title: "A fit check for your volume",
    body: "Tell us your typical order size and event cadence; we'll show you exactly where TRV saves time versus your current process.",
    icon: <path d="M12 2l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V5l7-3z" />,
  },
  {
    id: "pricing",
    title: "Straight answers on pricing",
    body: "No 'contact sales' loop after the call — you'll leave the demo with real carton pricing tiers for your volume.",
    icon: <path d="M4 4h16v16H4V4zm4 4h8M8 12h8M8 16h5" />,
  },
];

const STEPS = [
  { id: "01", title: "Book a slot", body: "Pick a 20-minute window that works for you — no back-and-forth over email." },
  { id: "02", title: "We prep your case", body: "We pull sample stock for a size run close to your typical order before the call." },
  { id: "03", title: "You see it live", body: "Live screen-share of the dial, live stock, and a real quote for your numbers." },
  { id: "04", title: "Decide, no pressure", body: "Take the pricing sheet away with you. No lock-in required to try a first order." },
];

const LOGOS_PLACEHOLDER = [
  "Marathon Collective",
  "Vantage Corporate Gifting",
  "Northline Events",
  "Wedding Row Studio",
];

const GALLERY = {
  hero:
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=80",
  side:
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80",
};

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
      { threshold: 0.18 }
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

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="value-icon"
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

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ov-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

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
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .eyebrow {
          font-family: 'Inter', sans-serif;
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
        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 3rem);
        }

        /* -------- nav -------- */
        .nav {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(10, 9, 8, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--hair);
        }
        .nav__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 0;
        }
        .nav__brand {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 1.15rem;
          letter-spacing: 0.02em;
        }
        .nav__brand em { color: var(--maroon-bright); font-style: normal; }
        .nav__cta {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--white);
          border: none;
          padding: 0.65rem 1.15rem;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .nav__cta:hover { background: var(--maroon-bright); color: var(--white); transform: translateY(-2px); }

        /* -------- hero -------- */
        .hero {
          position: relative;
          padding: clamp(3.5rem, 8vw, 6rem) 0 clamp(2.5rem, 6vw, 4rem);
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(55% 55% at 85% 15%, rgba(13, 21, 38, 0.85) 0%, transparent 70%),
            radial-gradient(45% 45% at 5% 95%, rgba(92, 18, 32, 0.3) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero__copy { position: relative; z-index: 2; }
        .hero h1 {
          font-size: clamp(2.3rem, 5vw, 3.6rem);
          font-weight: 600;
          line-height: 1.06;
        }
        .hero h1 em { font-style: italic; font-weight: 500; color: var(--maroon-bright); }
        .hero__sub {
          margin-top: 1.4rem;
          max-width: 46ch;
          font-size: clamp(1rem, 1.3vw, 1.1rem);
          line-height: 1.7;
          color: var(--muted);
        }
        .hero__cta {
          margin-top: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--white);
          border: none;
          padding: 0.95rem 1.5rem;
          border-radius: 999px;
          cursor: pointer;
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        .hero__cta:hover { background: var(--maroon-bright); color: var(--white); transform: translateY(-2px); }
        .hero__meta {
          margin-top: 1.1rem;
          display: flex;
          gap: 1.4rem;
          flex-wrap: wrap;
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          color: var(--muted);
        }
        .hero__meta span { display: flex; align-items: center; gap: 0.45rem; }
        .hero__meta svg { width: 13px; height: 13px; color: var(--good); }

        .hero__media { position: relative; z-index: 2; }
        .media-frame {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          aspect-ratio: 4 / 3.4;
          border: 1px solid var(--hair);
          box-shadow: 0 30px 60px -30px rgba(0,0,0,0.7);
        }
        .media-frame img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .media-frame::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(10,9,8,0.6) 100%);
        }
        .media-badge {
          position: absolute;
          bottom: 1.2rem; left: 1.2rem; right: 1.2rem;
          z-index: 2;
          background: rgba(10,9,8,0.75);
          border: 1px solid var(--hair);
          border-radius: 6px;
          padding: 0.9rem 1.1rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          color: var(--white);
        }

        /* -------- logos -------- */
        .logos {
          border-top: 1px solid var(--hair);
          border-bottom: 1px solid var(--hair);
          padding: 1.8rem 0;
        }
        .logos__row {
          display: flex;
          flex-wrap: wrap;
          gap: 2.4rem;
          justify-content: space-between;
          align-items: center;
        }
        .logos__label {
          font-family: 'Inter', sans-serif;
          font-size: 0.66rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .logos__item {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: 1rem;
          color: var(--muted);
          opacity: 0.85;
        }

        /* -------- generic section -------- */
        section { position: relative; padding: clamp(4rem, 8vw, 6.5rem) 0; }
        .section-head { max-width: 640px; margin-bottom: 2.8rem; }
        .section-head h2 { font-size: clamp(1.7rem, 3vw, 2.3rem); font-weight: 600; }
        .section-head p { margin-top: 0.9rem; color: var(--muted); line-height: 1.75; }

        /* -------- what you get -------- */
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

        /* -------- steps -------- */
        .section--steps { background: linear-gradient(180deg, var(--black) 0%, var(--navy) 50%, var(--black) 100%); }
        .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.4rem; }
        .step-card { position: relative; padding-top: 0.4rem; }
        .step-num {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: var(--maroon-bright);
          letter-spacing: 0.05em;
          margin-bottom: 0.9rem;
        }
        .step-card h3 { font-size: 1.05rem; font-weight: 600; margin-bottom: 0.5rem; }
        .step-card p { color: var(--muted); font-size: 0.9rem; line-height: 1.65; }

        /* -------- demo form -------- */
        .demo-section { }
        .demo-card {
          background: var(--black-card);
          border: 1px solid var(--maroon-line);
          border-radius: 10px;
          padding: clamp(2rem, 5vw, 3.5rem);
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: start;
        }
        .demo-card__text h2 { font-size: clamp(1.6rem, 2.8vw, 2.1rem); font-weight: 600; }
        .demo-card__text p { margin-top: 1rem; color: var(--muted); line-height: 1.8; }
        .demo-perks { list-style: none; margin: 1.6rem 0 0; padding: 0; display: grid; gap: 0.7rem; }
        .demo-perks li {
          display: flex; align-items: center; gap: 0.6rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.76rem; letter-spacing: 0.03em; color: var(--white);
        }
        .demo-perks li::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--maroon-bright); flex-shrink: 0;
        }

        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 1.2rem; }
        .form-grid .full { grid-column: 1 / -1; }
        .field { margin-bottom: 1.1rem; }
        .field label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.66rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.4rem;
        }
        .field input, .field select, .field textarea {
          width: 100%;
          background: var(--black);
          border: 1px solid var(--hair);
          color: var(--white);
          padding: 0.75rem 0.9rem;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
        }
        .field textarea { resize: vertical; min-height: 84px; }
        .field input:focus, .field select:focus, .field textarea:focus {
          outline: none; border-color: var(--maroon-bright);
        }
        .demo-submit {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--white);
          border: none;
          padding: 1rem 1.2rem;
          border-radius: 999px;
          cursor: pointer;
          margin-top: 0.4rem;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .demo-submit:hover { background: var(--maroon-bright); color: var(--white); transform: translateY(-2px); }

        .success-panel {
          text-align: center;
          padding: 2.5rem 1.5rem;
        }
        .success-icon {
          width: 44px; height: 44px;
          margin: 0 auto 1.2rem;
          color: var(--good);
        }
        .success-panel h3 { font-size: 1.3rem; font-weight: 600; }
        .success-panel p { margin-top: 0.7rem; color: var(--muted); line-height: 1.7; }

        /* -------- footer -------- */
        .footer { border-top: 1px solid var(--hair); padding: clamp(2.5rem, 5vw, 3.5rem) 0 2.5rem; }
        .footer__row {
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 1rem;
          color: var(--muted);
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.06em;
        }

        /* -------- reveal -------- */
        .reveal { opacity: 0; transform: translateY(26px); transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1); }
        .reveal--visible { opacity: 1; transform: translateY(0); }

        /* -------- responsive -------- */
        @media (max-width: 960px) {
          .hero { grid-template-columns: 1fr; }
          .hero__media { margin-top: 1rem; }
          .values-grid { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: 1fr 1fr; }
          .demo-card { grid-template-columns: 1fr; }
          .logos__row { justify-content: flex-start; }
        }
        @media (max-width: 560px) {
          .form-grid { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}</style>

      {/* ---------------- Nav ---------------- */}
      <nav className="nav">
        <div className="container nav__row">
          <div className="nav__brand">TRV <em>Sports</em></div>
          <button className="nav__cta" onClick={scrollToForm}>Request Demo</button>
        </div>
      </nav>

      {/* ---------------- Hero ---------------- */}
      <header className="hero container">
        <div className="hero__copy">
          <div className="eyebrow">Book a Demo</div>
          <h1>
            See your event&apos;s carton order, <em>live</em>
          </h1>
          <p className="hero__sub">
            Book a 20-minute walkthrough of the TRV platform. We&apos;ll pull real
            stock for a size run close to yours and show you the exact quote
            you&apos;d get for your next event — no generic sales deck.
          </p>
          <button className="hero__cta" onClick={scrollToForm}>
            Book your slot
          </button>
          <div className="hero__meta">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              No card required
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              20-minute call
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Real pricing, same day
            </span>
          </div>
        </div>
        <div className="hero__media">
          <div className="media-frame">
            <img src={GALLERY.hero} alt="Sneaker cartons stacked on a warehouse shelf" loading="lazy" />
            <div className="media-badge">Live stock preview shown on every demo call</div>
          </div>
        </div>
      </header>

      {/* ---------------- Logos ---------------- */}
      <div className="logos">
        <div className="container logos__row">
          <span className="logos__label">Trusted by event teams at</span>
          {LOGOS_PLACEHOLDER.map((l) => (
            <span key={l} className="logos__item">{l}</span>
          ))}
        </div>
      </div>

      {/* ---------------- What you get ---------------- */}
      <section>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">What You Get</div>
            <h2>Not a pitch. A working demo of your actual order.</h2>
          </Reveal>
          <div className="values-grid">
            {WHAT_YOU_GET.map((v, i) => (
              <Reveal key={v.id} delay={i * 100} className="value-card">
                <Icon>{v.icon}</Icon>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="section--steps">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">How It Works</div>
            <h2>From booking to quote in four steps</h2>
          </Reveal>
          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.id} delay={i * 90} className="step-card">
                <div className="step-num">{s.id}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Demo Form ---------------- */}
      <section id="demo-form" className="demo-section">
        <div className="container">
          <Reveal>
            <div className="demo-card">
              <div className="demo-card__text">
                <div className="eyebrow">Book Your Slot</div>
                <h2>Tell us about your event, we&apos;ll take it from there</h2>
                <p>
                  Fill this in and our team will confirm a time within one
                  business day. Bring your rough size run and event date —
                  everything else, we&apos;ll figure out together on the call.
                </p>
                <ul className="demo-perks">
                  <li>No commitment to buy after the demo</li>
                  <li>Pricing sheet emailed same day</li>
                  <li>Works for one-off events and recurring orders</li>
                </ul>
              </div>

              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="fullName">Full name</label>
                      <input id="fullName" name="fullName" type="text" placeholder="Your name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Company / event name</label>
                      <input id="company" name="company" type="text" placeholder="Optional" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Work email</label>
                      <input id="email" name="email" type="email" placeholder="you@company.com" required />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 9XXXXXXXXX" required />
                    </div>
                    <div className="field">
                      <label htmlFor="eventDate">Event date</label>
                      <input id="eventDate" name="eventDate" type="date" required />
                    </div>
                    <div className="field">
                      <label htmlFor="cartons">Estimated cartons</label>
                      <input id="cartons" name="cartons" type="number" min={1} placeholder="e.g. 5" required />
                    </div>
                    <div className="field full">
                      <label htmlFor="useCase">What&apos;s the event for?</label>
                      <select id="useCase" name="useCase" defaultValue="corporate">
                        <option value="corporate">Corporate gifting</option>
                        <option value="wedding">Wedding / celebration</option>
                        <option value="marathon">Marathon / sports event</option>
                        <option value="team">Team kit / uniform</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="notes">Anything else we should know?</label>
                      <textarea id="notes" name="notes" placeholder="Size run, brand preferences, budget range…" />
                    </div>
                  </div>
                  <button type="submit" className="demo-submit">Request my demo</button>
                </form>
              ) : (
                <div className="success-panel">
                  <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l3 3 5-6" />
                  </svg>
                  <h3>Request received</h3>
                  <p>
                    We&apos;ll email a confirmed time within one business day.
                    Keep an eye on your inbox for a calendar invite from the
                    TRV team.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="footer">
        <div className="container footer__row">
          <span>TRV SPORTS</span>
          <span>© {new Date().getFullYear()} TRV Sports. Honest stock, always.</span>
        </div>
      </footer>
    </div>
  );
}