'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(ellipse at top, hsl(350 60% 95%) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, hsl(25 60% 92%) 0%, transparent 50%),
          linear-gradient(to bottom, hsl(30 50% 98%), hsl(30 40% 96%))
        `,
      }}
    />
  );
}
