"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COLORS, fadeUp, stagger, SwingTag, StitchDivider, heroHeadingClass, bodyLgClass } from './Shared';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND — full-bleed image with parallax */}
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y: imgY, scale: imgScale }}
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2070"
          alt="Footwear production line"
          className="h-[120%] w-full object-cover"
        />
        {/* cinematic gradient — dark base so white text reads cleanly */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(115deg, ${COLORS.maroon}E6 0%, ${COLORS.maroon}66 32%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* CONTENT — sits on top of the image */}
      <div className="relative z-20 w-full px-6 md:px-20 py-28 md:py-0">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl  mx-auto md:mx-0"
        >


          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className={`mt-8 font-display text-white ${heroHeadingClass}`}
          >
            DIGITIZING THE FUTURE OF{" "}
            <span style={{ color: COLORS.blue }}>B2B ORDERING</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className={`text-white/75 max-w-xl mt-8 ${bodyLgClass}`}
          >
            Every successful business reaches a point where manual processes
            begin to slow growth. Orders start coming through multiple
            channels, product catalogues become difficult to manage, and
            sales teams spend more time handling paperwork than building
            customer relationships.
          </motion.p>

           <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA",
                  "_blank"
                )
              }
              className="group h-12 min-w-[178px] rounded-[10px] border-0 bg-[#1b5399] px-7 text-base font-semibold text-white hover:from-[#A8325A] hover:to-[#7A1F3D]"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* floating credential chip — reads over the image, bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute z-20 bottom-24 right-6 md:right-16 md:bottom-16"
      >
        <div
          className="px-5 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/25 text-white text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-semibold"
        >
          Track · Book · Verify
        </div>
      </motion.div>

      {/* divider sits at the base of the hero, over the darkened image edge */}
      <div className="absolute inset-x-0 bottom-0 z-20 px-6 md:px-20 pb-6">
        <StitchDivider />
      </div>
    </section>
  );
};