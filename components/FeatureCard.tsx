'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
  delay?: number;
}

export function FeatureCard({ icon, title, subtitle, onClick, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-2xl bg-card/60 backdrop-blur-md border border-primary/10 p-8 shadow-sm",
        "hover:shadow-md hover:border-primary/20 transition-all duration-300"
      )}
    >
      <div className="space-y-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <h3 className="text-xl font-medium text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{subtitle}</p>
        </div>
        <div className="pt-4">
          <span className="text-sm text-primary font-medium">Entrar →</span>
        </div>
      </div>
    </motion.div>
  );
}
