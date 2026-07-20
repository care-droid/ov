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
  { label: "Plans", href: "/plans" },
  { label: "Blogs", href: "/blog" },
];

const ACCENT = "#15407c";

// Stagger container for mobile drawer links
const drawerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const drawerItem = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

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
        animate={{
          y: 0,
          opacity: 1,
          boxShadow: scrolled
            ? "0 10px 30px -10px rgba(21,64,124,0.35)"
            : "0 6px 20px -12px rgba(21,64,124,0.15)",
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "flex h-20 w-full items-center justify-between rounded-full border border-navbar-border bg-navbar px-4 py-2.5 transition-colors duration-300 sm:px-6"
        )}
        style={{
          borderColor: scrolled ? `${ACCENT}33` : undefined,
        }}
        aria-label="Primary"
      >
        {/* Logo with hover pulse */}
        <Link href="#top" className="flex items-center gap-2 focus-ring" aria-label="Oventra home">
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
            <Image src="/logo2.png" alt="Oventra" width={144} height={56} className="h-12 w-auto sm:h-14" priority />
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <motion.div whileTap={{ scale: 0.94 }}>
                <Link
                  href={link.href}
                  className="group relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-black transition-colors focus-ring"
                >
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-[#15407c]">
                    {link.label}
                  </span>
                  {link.children && (
                    <ChevronDown
                      className={cn(
                        "relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:text-[#15407c]",
                        openDropdown === link.label && "rotate-180"
                      )}
                    />
                  )}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-1 left-4 right-4 h-[2px] origin-left rounded-full"
                    style={{ backgroundColor: ACCENT }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>

              <AnimatePresence>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-navbar-border bg-navbar p-2 shadow-2xl"
                  >
                    {link.children.map((child, i) => (
                      <motion.div
                        key={child.label}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.04 }}
                        whileHover={{ x: 4 }}
                      >
                        <Link
                          href={child.href}
                          className="block rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-[#15407c]/10 focus-ring"
                        >
                          <p className="text-sm font-semibold text-foreground transition-colors duration-200 hover:text-[#15407c]">
                            {child.label}
                          </p>
                          {child.description && (
                            <p className="mt-0.5 text-xs text-muted">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {/* <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Button size="sm" className="group" style={{ backgroundColor: ACCENT }}>
              Sign Up
            </Button>
          </motion.div> */}
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <motion.button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            whileHover={{ scale: 1.08, borderColor: ACCENT }}
            whileTap={{ scale: 0.9 }}
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
          </motion.button>
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
              <motion.div variants={drawerContainer} initial="hidden" animate="show" className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.label} variants={drawerItem}>
                    <motion.div whileTap={{ scale: 0.97 }}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-[#15407c]/10 hover:text-[#15407c] focus-ring"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                    {link.children && (
                      <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                        {link.children.map((child) => (
                          <motion.div key={child.label} whileTap={{ scale: 0.97 }}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-200 hover:bg-[#15407c]/10 hover:text-[#15407c] focus-ring"
                            >
                              {child.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                variants={drawerItem}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4"
              >
                <Button className="w-full" style={{ backgroundColor: ACCENT }}>
                  Sign Up
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}