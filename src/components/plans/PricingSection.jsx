import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { theme, easeOut, plans, featureMatrix, customizationFeatures, redirectToWhatsApp } from "./data";

// Money Back Badge Component
function MoneyBackBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: easeOut, delay: 0.15 }}
      className="relative h-[110px] w-[110px] shrink-0 sm:h-[130px] sm:w-[130px]"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-[0_10px_20px_rgba(109,16,37,0.25)]">
          <defs>
            <linearGradient id="goldRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F3D98B" />
              <stop offset="50%" stopColor="#C9A24B" />
              <stop offset="100%" stopColor="#F3D98B" />
            </linearGradient>
            <path id="ringPath" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" fill="none" />
          </defs>
          <circle cx="100" cy="100" r="96" fill="url(#goldRing)" />
          <circle cx="100" cy="100" r="88" fill={theme.primary} stroke="url(#goldRing)" strokeWidth="2" />
          <circle cx="100" cy="100" r="66" fill="none" stroke="url(#goldRing)" strokeWidth="1.5" />
          <text fill="#F3D98B" fontSize="11.5" fontWeight={700} letterSpacing="2.5">
            <textPath href="#ringPath" startOffset="50%" textAnchor="middle">
              MONEY BACK &#8226; GUARANTEE &#8226;
            </textPath>
          </text>
          <text x="100" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontWeight={800}>
            30
          </text>
          <text x="100" y="118" textAnchor="middle" fill="#F3D98B" fontSize="13" fontWeight={700} letterSpacing="1.5">
            DAYS
          </text>
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function PricingSection() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-8 sm:pt-24">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <h1
              className="text-[2.25rem] font-extrabold leading-[1.1] tracking-tight sm:text-[3rem] lg:text-[3.4rem]"
              style={{ color: theme.heading }}
            >
              Pick The Plan That&apos;s Right For You
            </h1>
            <p className="mt-4 max-w-xl text-base sm:text-lg" style={{ color: theme.paragraph }}>
              Find your perfect subscription tier match that navigates your success story.
            </p>
          </motion.div>
          <MoneyBackBadge />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 sm:pb-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative flex flex-col rounded-[28px] border bg-white p-7"
              style={{
                borderColor: plan.popular ? theme.primary : theme.border,
                borderWidth: plan.popular ? 2 : 1,
                backgroundColor: plan.popular ? theme.lightMaroon : "#FFFFFF",
                boxShadow: "0 20px 60px rgba(0,0,0,.08)",
                transition: "box-shadow 0.5s ease, border-color 0.5s ease",
              }}
            >
              {plan.popular && (
                <motion.div
                  animate={{ opacity: [1, 0.75, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-[2px] right-6 origin-top-right rounded-b-md px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md"
                  style={{ backgroundColor: theme.success }}
                >
                  Popular
                </motion.div>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-wide" style={{ color: theme.heading }}>
                  {plan.name}
                </h3>
                <span style={{ color: plan.popular ? theme.primary : theme.accentBlue }}>{plan.icon}</span>
              </div>

              <p className="mt-3 min-h-[48px] text-sm" style={{ color: theme.paragraph }}>
                {plan.tagline}
              </p>

              <div className="my-5 h-px w-full" style={{ backgroundColor: theme.border }} />

              <div className="mb-2">
                <span className="text-4xl font-extrabold tracking-tight sm:text-[2.6rem]" style={{ color: theme.heading }}>
                  {plan.price}
                </span>
              </div>
              {plan.priceSuffix && (
                <p className="text-sm" style={{ color: theme.paragraph }}>
                  {plan.priceSuffix}
                </p>
              )}
              {plan.billing && (
                <p className="text-sm" style={{ color: theme.paragraph }}>
                  {plan.billing}
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mt-6 w-full rounded-full py-3.5 text-sm font-bold text-white shadow-md transition-colors"
                style={{ backgroundColor: theme.primary }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.secondary)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.primary)}
                onClick={redirectToWhatsApp}
              >
                {plan.cta}
              </motion.button>

              <p className="mt-6 text-sm font-semibold" style={{ color: theme.primary }}>
                Includes
              </p>
              <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: theme.paragraph }}>
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: theme.success }} strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customization Card */}
      <section className="py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="flex flex-col overflow-hidden rounded-[28px] border md:flex-row"
          style={{ borderColor: theme.border, boxShadow: "0 20px 60px rgba(0,0,0,.08)" }}
        >
          <div
            className="flex flex-col justify-center gap-4 px-8 py-10 md:w-[30%]"
            style={{ backgroundColor: theme.lightMaroon }}
          >
            <p className="text-sm font-bold tracking-wide" style={{ color: theme.primary }}>
              CUSTOMIZATION
            </p>
            <h3 className="text-3xl font-extrabold sm:text-4xl" style={{ color: theme.heading }}>
              Let&apos;s Talk
            </h3>
            <span
              className="inline-block w-fit rounded-full border bg-white px-4 py-1.5 text-xs font-semibold"
              style={{ borderColor: theme.border, color: theme.accentBlue }}
            >
              Tailor-Made Offer
            </span>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-8 px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
              {customizationFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm sm:text-base" style={{ color: theme.paragraph }}>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: theme.primary }} />
                  {f}
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="shrink-0 rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg"
              style={{ backgroundColor: theme.success }}
              onClick={redirectToWhatsApp}
            >
              Talk To Specialist
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Feature Matrix */}
      <section className="pb-16 sm:pb-20">
        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowAllFeatures((v) => !v)}
            aria-expanded={showAllFeatures}
            className="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 text-sm font-bold shadow-sm transition-transform hover:scale-105"
            style={{ borderColor: theme.primary, color: theme.primary }}
          >
            {showAllFeatures ? "Hide All Features" : "Show All Features"}
            <motion.span animate={{ rotate: showAllFeatures ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {showAllFeatures && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="overflow-hidden"
            >
              <div
                className="mt-8 overflow-x-auto rounded-[28px] border"
                style={{ borderColor: theme.border, boxShadow: "0 20px 60px rgba(0,0,0,.08)" }}
              >
                <table className="w-full min-w-[720px] border-collapse text-sm">
                  <thead>
                    <tr style={{ backgroundColor: theme.lightMaroon }}>
                      <th className="px-6 py-4 text-left font-semibold" style={{ color: theme.heading }}>
                        Feature
                      </th>
                      {plans.map((p) => (
                        <th key={p.key} className="px-6 py-4 text-left font-semibold" style={{ color: theme.primary }}>
                          {p.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureMatrix.map((row) => (
                      <tr key={row.label} style={{ borderTop: `1px solid ${theme.border}` }}>
                        <td className="px-6 py-4 font-medium" style={{ color: theme.heading }}>
                          {row.label}
                        </td>
                        {row.values.map((v, i) => (
                          <td key={i} className="px-6 py-4" style={{ color: theme.paragraph }}>
                            {v === "\u2713" ? (
                              <Check className="h-4 w-4" style={{ color: theme.success }} strokeWidth={2.5} />
                            ) : (
                              v
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}