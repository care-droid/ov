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

const XIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.6l-5.2-6.8L5.7 22H2.4l7.7-8.8L1.5 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20Z" />
  </svg>
);

const LinkedinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
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

const CONTACT_INFO = [
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
    <h4 className="mb-6 text-[12px] font-bold uppercase tracking-widest text-[#C6485C]">
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#060405] text-[#F2ECEA] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          
          {/* Section 1: Logo & About */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src="oventra.png" alt="" className="h-30 w-50 mt-0 pt-0" />
            </div>
            <p className="text-[15px] leading-relaxed text-[#8C7A7D] max-w-sm">
              We build the calm operating layer for growing teams — connecting 
              the tools you already use so decisions move faster and work becomes effortless.
            </p>
            
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <SectionHeading>Quick Links</SectionHeading>
            <ul className="space-y-4">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-[#D8CFCE] hover:text-[#C6485C] transition-colors duration-200"
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
            <ul className="space-y-6">
              {CONTACT_INFO.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <item.icon className="h-5 w-5 shrink-0 text-[#C6485C] mt-0.5" />
                  {item.href ? (
                    <a href={item.href} className="text-[15px] text-[#D8CFCE] hover:text-white transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[15px] text-[#D8CFCE]">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B5D5F]">
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