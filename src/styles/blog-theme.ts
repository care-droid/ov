export const theme = {
  bg: "#FFFFFF",

  primary: "#6D1025",
  secondary: "#8F1538",

  accentBlue: "#214E8A",

  lightBlue: "#EAF1FB",
  lightMaroon: "#F9F3F5",

  border: "#E8E8E8",

  heading: "#161616",
  paragraph: "#5B5B5B",

  // Gradients
  primaryGradient: "linear-gradient(135deg, #6D1025 0%, #8F1538 50%, #214E8A 100%)",
  secondaryGradient: "linear-gradient(90deg, #6D1025, #214E8A)",
};

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: easeOut } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: easeOut } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: easeOut } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};