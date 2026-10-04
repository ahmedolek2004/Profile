export const pulseHover = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: 1.02, transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] } },
};

export const drift = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] } },
};
