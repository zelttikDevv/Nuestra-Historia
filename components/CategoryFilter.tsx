'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex flex-wrap gap-2 justify-center"
    >
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
          selected === null
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-card/60 text-foreground hover:bg-card/80 border border-primary/10"
        )}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            selected === category
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-card/60 text-foreground hover:bg-card/80 border border-primary/10"
          )}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}
