export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const floatUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: -6, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};
