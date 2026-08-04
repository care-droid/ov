"use client";

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------
   OVENTRA — SUPPORT CENTER
   Same design system as the OVENTRA brand pages: near-black, maroon,
   warm white, dark blue accent. This page: help categories with
   imagery, an animated FAQ accordion, and contact channels.
------------------------------------------------------------------- */

/* ---------------------------- Data --------------------------------- */

const CATEGORIES = [
  {
    id: "booking",
    title: "Booking & Availability",
    body: "Checking live caterer availability, holding a date, and changing your event details after booking.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
    icon: <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />,
  },
  {
    id: "payments",
    title: "Payments & Invoices",
    body: "Deposits, final invoices, refund timelines, and what happens if a caterer cancels on you.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    icon: <path d="M3 7h18M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l2-4h14l2 4M7 14h4" />,
  },
  {
    id: "vendors",
    title: "Vendors & Menus",
    body: "Comparing menus, dietary requirements, tasting requests, and messaging a caterer directly.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    icon: <path d="M12 2l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V5l7-3z" />,
  },
  {
    id: "account",
    title: "Account & Settings",
    body: "Updating your details, managing saved events, notification preferences, and closing your account.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    icon: <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM3 21a9 9 0 0118 0" />,
  },
];

const FAQS = [
  {
    q: "How do I know a caterer is actually free for my date?",
    a: "Every caterer's calendar on OVENTRA updates in real time. When you open a listing, the availability you see is live — if a date shows as open, you can book it immediately without waiting for a confirmation call.",
  },
  {
    q: "What happens after I pay the deposit?",
    a: "Your deposit locks your date with the caterer and generates a single confirmation covering menu, headcount, and price. The remaining balance is due per the schedule shown at checkout, and you'll get a reminder before each due date.",
  },
  {
    q: "Can I change my headcount after booking?",
    a: "Yes — head to your event dashboard and adjust the guest count up to the cutoff date shown on your booking (usually 5–7 days before the event, depending on the caterer's policy). Pricing recalculates automatically.",
  },
  {
    q: "What if my caterer cancels?",
    a: "This is rare since every vendor is verified, but if it happens you're refunded in full within 3–5 business days and our team proactively reaches out with backup caterers who are available for your date.",
  },
  {
    q: "Do you support dietary restrictions and custom menus?",
    a: "Most caterers on OVENTRA let you filter by dietary need (vegetarian, vegan, halal, gluten-free, and more) before you even open a listing, and you can message any vendor directly to request custom adjustments.",
  },
  {
    q: "How do I contact my caterer directly?",
    a: "Every booking includes a messaging thread with your caterer, visible from your event dashboard. Messages are logged alongside your booking so there's always a record of what was agreed.",
  },
];

const CHANNELS = [
  {
    id: "chat",
    title: "Live chat",
    body: "Fastest way to reach us — average reply under 3 minutes during business hours.",
    action: "Start a chat",
    icon: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />,
  },
  {
    id: "email",
    title: "Email us",
    body: "For anything detailed — attach screenshots, invoices, or booking references.",
    action: "support@OVENTRA.com",
    icon: <path d="M4 4h16v16H4V4zm0 0l8 8 8-8" />,
  },
  {
    id: "phone",
    title: "Call support",
    body: "Available for urgent, event-day issues — same-day bookings and last-minute changes.",
    action: "+91 12345 67890",
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
  },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80";

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

/* ------------------------------ FAQ item ------------------------------ */

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (panelRef.current) {
      setMaxHeight(isOpen ? `${panelRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{q}</span>
        <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="faq-panel" ref={panelRef} style={{ maxHeight }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

/* ------------------------------- Page -------------------------------- */

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase())
  );

  const scrollToFaqs = () => {
    document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" });
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
        .nav__brand { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1.15rem; }
        .nav__brand em { color: var(--maroon-bright); font-style: normal; }
        .nav__cta {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--black); background: var(--white); border: none;
          padding: 0.65rem 1.15rem; border-radius: 999px; cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .nav__cta:hover { background: var(--maroon-bright); color: var(--white); transform: translateY(-2px); }

        /* -------- hero -------- */
        .hero {
          position: relative;
          padding: clamp(3rem, 7vw, 5rem) 0 clamp(2.5rem, 6vw, 4rem);
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }
        .hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(55% 55% at 88% 12%, rgba(13, 21, 38, 0.85) 0%, transparent 70%),
            radial-gradient(45% 45% at 5% 95%, rgba(92, 18, 32, 0.3) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero__copy { position: relative; z-index: 2; }
        .hero h1 { font-size: clamp(2.2rem, 4.6vw, 3.3rem); font-weight: 600; line-height: 1.08; }
        .hero h1 em { font-style: italic; font-weight: 500; color: var(--maroon-bright); }
        .hero__sub { margin-top: 1.3rem; max-width: 48ch; font-size: clamp(1rem, 1.3vw, 1.08rem); line-height: 1.7; color: var(--muted); }

        .search-bar {
          margin-top: 1.8rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          background: var(--black-card);
          border: 1px solid var(--hair);
          border-radius: 999px;
          padding: 0.4rem 0.4rem 0.4rem 1.2rem;
          max-width: 480px;
          transition: border-color 0.25s ease;
        }
        .search-bar:focus-within { border-color: var(--maroon-line); }
        .search-bar svg { width: 18px; height: 18px; color: var(--muted); flex-shrink: 0; }
        .search-bar input {
          flex: 1; background: transparent; border: none; color: var(--white);
          font-family: 'Inter', sans-serif; font-size: 0.95rem; padding: 0.6rem 0;
        }
        .search-bar input:focus { outline: none; }
        .search-bar button {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--black); background: var(--white); border: none;
          padding: 0.65rem 1.1rem; border-radius: 999px; cursor: pointer; white-space: nowrap;
          transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;
        }
        .search-bar button:hover { background: var(--maroon-bright); color: var(--white); transform: translateY(-1px); }

        .hero__media { position: relative; z-index: 2; }
        .media-frame {
          position: relative; border-radius: 6px; overflow: hidden;
          aspect-ratio: 4 / 3.2; border: 1px solid var(--hair);
          box-shadow: 0 30px 60px -30px rgba(0,0,0,0.7);
        }
        .media-frame img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 1.4s cubic-bezier(.16,1,.3,1);
        }
        .media-frame:hover img { transform: scale(1.05); }
        .media-frame::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(10,9,8,0.6) 100%);
        }
        .media-badge {
          position: absolute; bottom: 1.1rem; left: 1.1rem; right: 1.1rem; z-index: 2;
          background: rgba(10,9,8,0.75); border: 1px solid var(--hair); border-radius: 6px;
          padding: 0.85rem 1rem;
          font-family: 'Inter', sans-serif; font-size: 0.68rem; letter-spacing: 0.06em; color: var(--white);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .media-badge svg { width: 14px; height: 14px; color: var(--good); flex-shrink: 0; }

        /* -------- generic section -------- */
        section { position: relative; padding: clamp(3.5rem, 7vw, 6rem) 0; }
        .section-head { max-width: 640px; margin-bottom: 2.6rem; }
        .section-head h2 { font-size: clamp(1.6rem, 2.8vw, 2.2rem); font-weight: 600; }
        .section-head p { margin-top: 0.9rem; color: var(--muted); line-height: 1.75; }

        /* -------- categories -------- */
        .cat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.4rem; }
        .cat-card {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--hair);
          aspect-ratio: 3 / 3.6;
          cursor: pointer;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .cat-card:hover { border-color: var(--maroon-line); transform: translateY(-6px); }
        .cat-card img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          transition: transform 1.2s cubic-bezier(.16,1,.3,1);
          filter: saturate(0.85);
        }
        .cat-card:hover img { transform: scale(1.08); }
        .cat-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(10,9,8,0.35) 0%, rgba(10,9,8,0.95) 78%);
          z-index: 1;
        }
        .cat-card__body {
          position: relative; z-index: 2;
          height: 100%;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 1.4rem;
        }
        .cat-card__icon {
          width: 34px; height: 34px;
          color: var(--maroon-bright);
          background: rgba(10,9,8,0.6);
          border: 1px solid var(--hair);
          border-radius: 50%;
          padding: 8px;
          margin-bottom: 0.9rem;
        }
        .cat-card h3 { font-size: 1.02rem; font-weight: 600; margin-bottom: 0.5rem; }
        .cat-card p { color: var(--muted); font-size: 0.85rem; line-height: 1.6; }

        /* -------- faqs -------- */
        .section--faqs { background: linear-gradient(180deg, var(--black) 0%, var(--navy) 50%, var(--black) 100%); }
        .faq-list { max-width: 820px; }
        .faq-item {
          border-bottom: 1px solid var(--hair);
        }
        .faq-question {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem;
          background: transparent; border: none; text-align: left; cursor: pointer;
          padding: 1.35rem 0.2rem;
          font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 500;
          color: var(--white);
        }
        .faq-chevron {
          width: 18px; height: 18px; flex-shrink: 0; color: var(--maroon-bright);
          transition: transform 0.3s ease;
        }
        .faq-item--open .faq-chevron { transform: rotate(180deg); }
        .faq-panel {
          overflow: hidden;
          max-height: 0px;
          transition: max-height 0.4s cubic-bezier(.16,1,.3,1);
        }
        .faq-panel p {
          margin: 0 0.2rem 1.35rem;
          color: var(--muted);
          line-height: 1.8;
          font-size: 0.96rem;
          max-width: 68ch;
        }
        .faq-empty {
          color: var(--muted);
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          padding: 1.5rem 0.2rem;
        }

        /* -------- channels -------- */
        .channels-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; }
        .channel-card {
          background: var(--black-card);
          border: 1px solid var(--hair);
          border-radius: 8px;
          padding: 1.9rem 1.7rem;
          transition: border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
        }
        .channel-card:hover { border-color: var(--maroon-line); transform: translateY(-6px); background: #1b1410; }
        .channel-icon-wrap {
          width: 42px; height: 42px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--hair);
          border-radius: 50%;
          margin-bottom: 1.2rem;
          color: var(--maroon-bright);
        }
        .channel-card h3 { font-size: 1.05rem; font-weight: 600; margin-bottom: 0.6rem; }
        .channel-card p { color: var(--muted); font-size: 0.9rem; line-height: 1.65; margin-bottom: 1.1rem; }
        .channel-action {
          font-family: 'Inter', sans-serif;
          font-size: 0.74rem; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--white);
          display: inline-flex; align-items: center; gap: 0.4rem;
          border-bottom: 1px solid var(--maroon-line);
          padding-bottom: 3px;
          transition: color 0.25s ease, border-color 0.25s ease;
        }
        .channel-card:hover .channel-action { color: var(--maroon-bright); border-color: var(--maroon-bright); }

        /* -------- footer -------- */
        .footer { border-top: 1px solid var(--hair); padding: clamp(2.5rem, 5vw, 3.5rem) 0 2.5rem; }
        .footer__row {
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 1rem;
          color: var(--muted);
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem; letter-spacing: 0.06em;
        }

        /* -------- reveal -------- */
        .reveal { opacity: 0; transform: translateY(26px); transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1); }
        .reveal--visible { opacity: 1; transform: translateY(0); }

        /* -------- responsive -------- */
        @media (max-width: 1020px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
          .channels-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; }
          .hero__media { margin-top: 0.5rem; }
        }
        @media (max-width: 640px) {
          .cat-grid { grid-template-columns: 1fr; }
          .channels-grid { grid-template-columns: 1fr; }
          .search-bar { flex-wrap: wrap; padding: 0.8rem; border-radius: 16px; }
          .search-bar button { width: 100%; }
          .faq-question { font-size: 0.98rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .cat-card img, .media-frame img { transition: none !important; }
        }
      `}</style>

      {/* ---------------- Nav ---------------- */}
      <nav className="nav">
        <div className="container nav__row">
          <div className="nav__brand">OVENTRA <em>Support</em></div>
          <button className="nav__cta" onClick={scrollToFaqs}>Browse FAQs</button>
        </div>
      </nav>

      {/* ---------------- Hero ---------------- */}
      <header className="hero container">
        <div className="hero__copy">
          <div className="eyebrow">Support Center</div>
          <h1>
            How can we <em>help</em> today?
          </h1>
          <p className="hero__sub">
            Search our help articles, browse by topic, or reach a real person
            — whichever gets you back to planning your event fastest.
          </p>
          <div className="search-bar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for an answer…"
              onKeyDown={(e) => e.key === "Enter" && scrollToFaqs()}
            />
            <button onClick={scrollToFaqs}>Search</button>
          </div>
        </div>
        <div className="hero__media">
          <div className="media-frame">
            <img src={HERO_IMAGE} alt="An event support team reviewing a catering order" loading="lazy" />
            <div className="media-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Average first response under 3 minutes
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- Categories ---------------- */}
      <section>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Browse By Topic</div>
            <h2>Find your answer faster</h2>
          </Reveal>
          <div className="cat-grid">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.id} delay={i * 90} className="cat-card">
                <img src={c.image} alt={c.title} loading="lazy" />
                <div className="cat-card__body">
                  <Icon className="cat-card__icon">{c.icon}</Icon>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQs ---------------- */}
      <section id="faqs" className="section--faqs">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Frequently Asked</div>
            <h2>Quick answers to common questions</h2>
          </Reveal>
          <div className="faq-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <FaqItem
                    q={f.q}
                    a={f.a}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                </Reveal>
              ))
            ) : (
              <div className="faq-empty">No matches for &quot;{query}&quot; — try a different search, or reach out below.</div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- Contact channels ---------------- */}
      <section>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">Still Stuck?</div>
            <h2>Talk to a real person</h2>
          </Reveal>
          <div className="channels-grid">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.id} delay={i * 90} className="channel-card">
                <div className="channel-icon-wrap">
                  <Icon>{c.icon}</Icon>
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="channel-action">{c.action}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="footer">
        <div className="container footer__row">
          <span>OVENTRA</span>
          <span>© {new Date().getFullYear()} OVENTRA. Honest heat, always.</span>
        </div>
      </footer>
    </div>
  );
}