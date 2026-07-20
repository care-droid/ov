import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { theme, redirectToWhatsApp } from "./data";

export default function CTASection() {
  return (
    <section className="-mx-6 sm:-mx-10 lg:-mx-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
        style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
      >
        <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-14 md:grid-cols-2 md:gap-0">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/25 md:block" />
          <span className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-white/80 backdrop-blur-sm md:block">
            OR
          </span>

          <div className="flex flex-col items-start gap-5 md:pr-16">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              Get Started Today
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Choose Our Platform.
              <br />
              Grow Faster.
            </h2>
            <p className="text-base font-medium text-white/85 sm:text-lg">
              Start Risk-Free. No Credit Card Required.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold shadow-lg"
              style={{ color: theme.primary }}
              onClick={redirectToWhatsApp}
            >
              Enquiry
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end md:pl-16 md:text-right">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              One Unified System
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Customization That Fits Your Business
            </h2>
            <p className="text-base font-medium text-white/85 sm:text-lg">
              Seamless integration with your workflow.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold shadow-lg"
              style={{ color: theme.primary }}
              onClick={redirectToWhatsApp}
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}