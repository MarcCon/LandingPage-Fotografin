// FadeInUpAnimation.js

import React from "react";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const FadeInUpAnimation = ({ children }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUpVariants}>
      {children}
    </motion.div>
  );
};

export default FadeInUpAnimation;
