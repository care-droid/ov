import { Star, Building2, Landmark, Infinity as InfinityIcon } from "lucide-react";
import type { Variants } from "framer-motion";

export const theme = {
  bg: "#FFFFFF",
  primary: "#6D1025",
  secondary: "#8F1538",
  accentBlue: "#214E8A",
  lightMaroon: "#F9F3F5",
  border: "#E8E8E8",
  heading: "#161616",
  paragraph: "#5B5B5B",
  success: "#22C55E",
};

export const easeOut = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/*  SHARED PREMIUM ANIMATION VARIANTS                                  */
/*  Import these into every section for a consistent scroll language.  */
/* ------------------------------------------------------------------ */

// Fade + rise + slight zoom-in — the default "chunk" entrance
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 46, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

// Pure zoom fade — good for badges, images, seals
export const zoomFade: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Slide + fade from the side — good for two-column layouts
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

// Orchestrator — put on a parent, children with variants stagger automatically
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const plans = [
  {
    key: "operate",
    name: "OPERATE",
    icon: <Star className="h-5 w-5" strokeWidth={1.75} />,
    tagline: "Billing as a governed team process",
    price: "\u20B93,000",
    priceSuffix: "/ month + 18% GST",
    billing: "Billed Annually (\u20B936,000/year + GST)",
    cta: "Enquiry",
    features: [
      "1 legal entity",
      "3,000 invoices / year",
      "5 users included",
      "100 clients included",
      "Core invoicing & recurring billing",
      "Single-step approval workflows",
      "QuickBooks, Xero, Stripe & Razorpay",
      "Base API access",
    ],
  },
  {
    key: "grow",
    name: "GROW",
    icon: <Building2 className="h-5 w-5" strokeWidth={1.75} />,
    tagline: "The billing operations platform for growing teams",
    price: "\u20B96,000",
    priceSuffix: "/ month + 18% GST",
    billing: "Billed Annually (\u20B972,000/year + GST)",
    cta: "Enquiry",
    features: [
      "Up to 3 legal entities",
      "12,000 invoices / year",
      "10 users included",
      "500 clients included",
      "Everything in Operate, plus",
      "Milestone & project-linked billing",
      "Multi-step approval workflows",
      "Collections management",
    ],
  },
  {
    key: "scale",
    name: "SCALE",
    icon: <Landmark className="h-5 w-5" strokeWidth={1.75} />,
    tagline: "Full platform for complex, multi-entity operations",
    price: "\u20B912,000",
    priceSuffix: "/ month + 18% GST",
    billing: "Billed Annually (\u20B9144,000/year + GST)",
    popular: true,
    cta: "Enquiry",
    features: [
      "Up to 10 legal entities",
      "48,000 invoices / year",
      "20 users included",
      "2,500 clients included",
      "Everything in Grow, plus",
      "Reconciliation workflows",
      "Advanced API & webhooks",
      "Managed implementation eligibility",
    ],
  },
  {
    key: "enterprise",
    name: "ENTERPRISE",
    icon: <InfinityIcon className="h-5 w-5" strokeWidth={1.75} />,
    tagline: "Custom scope for accounts at scale",
    price: "Custom",
    cta: "Enquiry",
    features: [
      "Custom entities & invoice allowance",
      "Custom user count",
      "Everything in Scale, plus",
      "Implementation support in scope",
      "Dedicated account management",
      "Custom SLA & integration scope",
    ],
  },
];

export const featureMatrix = [
  { label: "Legal entities", values: ["1", "Up to 3", "Up to 10", "Custom"] },
  { label: "Invoices / year", values: ["3,000", "12,000", "48,000", "Custom"] },
  { label: "Users included", values: ["5", "10", "20", "Custom"] },
  { label: "Clients included", values: ["100", "500", "2,500", "Custom"] },
  { label: "Approval workflows", values: ["Single-step", "Multi-step", "Multi-step", "Custom"] },
  { label: "Reconciliation workflows", values: ["\u2014", "\u2014", "\u2713", "\u2713"] },
  { label: "Advanced API & webhooks", values: ["\u2014", "\u2014", "\u2713", "\u2713"] },
  { label: "Dedicated account management", values: ["\u2014", "\u2014", "\u2014", "\u2713"] },
];

export const customizationFeatures = [
  "Legacy Integration",
  "Custom Reports",
  "Custom Workflow",
  "Dedicated Support",
  "Branded Invoices",
  "Self Hosted",
];

export const faqs = [
  "How long does setup take?",
  "Do you provide training?",
  "Is my data secure?",
  "Can OVENTRA integrate with ERP systems?",
  "What kind of support do you provide?",
];

export const faqAnswers: Record<number, string> = {
  0: "The normal setup takes around 7 business days. It includes online product training & assistance in setting up your products.",
  1: "Yes, online training is provided before launch. However, your team can also take it later.",
  2: "Absolutely. We use encrypted servers, daily backups, and cloud security protocols.",
  3: "Yes, custom integrations can be developed for enterprise clients as an add on feature.",
  4: "Dedicated online/telephonic support, 10 am\u20136 pm, 365 days a year.",
};

export const redirectToWhatsApp = () => {
  window.open(
    "https://wa.me/9716016012?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20OVENTRA.",
    "_blank"
  );
};