"use client";

import Link from "next/link";
import Image from "next/image";
import { type SVGProps, type ReactNode } from "react";

// ---- Icons (Keep them minimal) ---------------------------------------------

type IconProps = SVGProps<SVGSVGElement>;

const MailIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const PhoneIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MapPinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ---- Data ------------------------------------------------------------------

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faq" },
  { label: "Pricing & Plans", href: "/plans" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

type ContactItem = {
  icon: (props: IconProps) => ReactNode;
  value: string;
  href?: string;
};

const CONTACT_INFO: ContactItem[] = [
  {
    icon: MapPinIcon,
    value: "DCG1-1105, DLF Corporate Greens, Tower-1, Sec-74A, Gurugram, India",
  },
  { icon: MailIcon, value: "care@oventra.in", href: "mailto:care@oventra.in" },
  { icon: PhoneIcon, value: "+91 97160 16012", href: "tel:+919716016012" },
];

// ---- UI Components ---------------------------------------------------------

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="mb-6 flex h-5 items-center text-[12px] font-bold uppercase tracking-widest text-[#C6485C]">
      {children}
    </h4>
  );
}

// Shared row height so Quick Links and Contact Info line up identically,
// regardless of whether the row is a plain link, an anchor, or an icon + text.
const ROW_HEIGHT = "h-6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#060405] text-[#F2ECEA] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">

        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Section 1: Logo & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex w-fit items-center" aria-label="Oventra home">
              <Image
                src="/oventra.png"
                alt="Oventra"
                width={160}
                height={54}
                className=""
              />
            </Link>
            <p className="max-w-sm text-[15px] leading-relaxed text-[#8C7A7D]">
              We build the calm operating layer for growing teams — connecting
              the tools you already use so decisions move faster and work becomes effortless.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <SectionHeading>Quick Links</SectionHeading>
            <ul className="space-y-4">
              {QUICK_LINKS.map((item) => (
                <li key={item.label} className={`flex ${ROW_HEIGHT} items-center`}>
                  <Link
                    href={item.href}
                    className="text-[15px] leading-none text-[#D8CFCE] transition-colors duration-200 hover:text-[#C6485C]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <SectionHeading>Contact Info</SectionHeading>
            <ul className="space-y-4">
              {CONTACT_INFO.map((item, idx) => (
                <li key={idx} className={`flex ${ROW_HEIGHT} items-center gap-4`}>
                  <item.icon className="h-5 w-5 shrink-0 text-[#C6485C]" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[15px] leading-none text-[#D8CFCE] transition-colors hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[15px] leading-none text-[#D8CFCE]">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-[#6B5D5F] md:flex-row">
          <p>© {new Date().getFullYear()} Oventra, Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}