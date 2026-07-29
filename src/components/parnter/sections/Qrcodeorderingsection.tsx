        "use client";

        import Image from "next/image";
        import { motion } from "framer-motion";
        import { ArrowUpRight } from "lucide-react";

        /**
         * Section 8 — "Why QR Code Ordering Makes a Difference"
         * Light/cream editorial layout (mirrors the WinOrder-style reference),
         * recolored into OVENTRA maroon accents. Image on the LEFT this time,
         * text column on the right — reverse of the reference.
         *
         * Expects /public/QR.webp
         */

        const MAROON = "#741A34";
        const MAROON_BRIGHT = "#A82242";
        const CREAM = "#F3EEE7";
        const INK = "#1A1512";

        const steps = ["Size", "Color", "Quantity"];

        export default function QRCodeOrderingSection() {
        return (
            <section className="relative w-full py-20 sm:py-28" style={{ background: "efe6e8" }}>
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16">
                {/* Image — left */}
                <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative order-2 h-72 w-full overflow-hidden rounded-2xl sm:h-96 lg:order-1 lg:h-[520px]"
                >
                <Image
                    src="/partner/QR.webp"
                    alt="Distributor scanning a QR code on a shoe to place an order"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />
                </motion.div>

                {/* Text — right */}
                <div className="order-1 lg:order-2">
                

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[2rem] leading-[1.15] sm:text-[2.5rem] lg:text-[2.7rem]"
                    style={{ color: INK }}
                >
                    Why QR Code Ordering Makes a Difference
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="mt-6 max-w-md text-[15px] leading-relaxed"
                    style={{ color: `${INK}99` }}
                >
                    Imagine a showroom displaying hundreds of footwear styles. Instead of
                    searching manually, your distributor simply scans the QR code attached
                    to the shoe. Within seconds, the product opens on the mobile app. They
                    select
                </motion.p>

                <motion.ul
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, delay: 0.18 }}
                    className="mt-5 max-w-md space-y-2"
                >
                    {steps.map((step) => (
                    <li key={step} className="flex items-center gap-3 text-[15px] font-medium" style={{ color: INK }}>
                        <span
                        className="grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold text-white"
                        style={{ background: `linear-gradient(135deg, ${MAROON}, ${MAROON_BRIGHT})` }}
                        >
                        &#10003;
                        </span>
                        {step}
                    </li>
                    ))}
                </motion.ul>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, delay: 0.24 }}
                    className="mt-5 max-w-md text-[15px] leading-relaxed"
                    style={{ color: `${INK}99` }}
                >
                    and add it directly to their order. This simple workflow eliminates
                    article number mistakes while making ordering significantly faster.
                </motion.p>

                <motion.a
  href="https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Book a Demo on WhatsApp"
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.55, delay: 0.32 }}
  whileHover={{ x: 3 }}
  className="mt-9 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg"
  style={{
    background: `linear-gradient(135deg, ${MAROON}, ${MAROON_BRIGHT})`,
  }}
>
  Book A Demo
  <ArrowUpRight className="h-4 w-4" />
</motion.a>
                </div>
            </div>
            </section>
        );
        }