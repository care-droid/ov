"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Product",
    href: "#features",
    children: [
      { label: "Features", href: "#features", description: "Everything Oventra does, at a glance" },
      { label: "Integrations", href: "#integrations", description: "Connect the tools you already use" },
      { label: "How it works", href: "#process", description: "Setup to launch in three steps" },
    ],
  },
  { label: "Resources", href: "#blog" },
  {label:"Plans", href:"/plans"},
  {label:"Blogs", href:"/blog"},

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      id="top"
      className="fixed inset-x-0 top-0 z-50 flex w-full justify-center pt-4 sm:px-6"
    >
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
  "flex h-20 w-full items-center justify-between rounded-full border border-navbar-border bg-navbar px-4 py-2.5 shadow-xl transition-all duration-300 sm:px-6"
)}
        aria-label="Primary"
      >
        <Link href="#top" className="flex items-center gap-2 focus-ring" aria-label="Oventra home">
          <Image src="/logo2.png" alt="Oventra" width={144} height={56} className="h-12 w-auto sm:h-14" priority />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <Link href={link.href} className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-black transition-colors hover:text-foreground focus-ring">
                {link.label}
                {link.children && (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      openDropdown === link.label && "rotate-180"
                    )}
                  />
                )}
              </Link>
              <AnimatePresence>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-navbar-border bg-navbar p-2 shadow-2xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-navbar-hover hover:text-[var(--button-text)] focus-ring"
                      >
                        <p className="text-sm font-semibold text-foreground">
                          {child.label}
                        </p>
                        {child.description && (
                          <p className="mt-0.5 text-xs text-muted">
                            {child.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {/* <Button size="sm" className="group">
            Sign Up
          </Button> */}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong focus-ring"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--brand-ink)]/45 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="glass absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-2 border-l border-border-strong p-6 pt-24"
            >
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-surface-2 focus-ring">
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-foreground focus-ring"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="mt-4 w-full">Sign Up</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
