'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { DictionaryEntry } from '@/content/dictionary';
import { cn } from '@/lib/utils';

interface DictionaryCardProps {
  entry: DictionaryEntry;
  onClick: () => void;
  index: number;
}

export function DictionaryCard({ entry, onClick, index }: DictionaryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-2xl bg-card/60 backdrop-blur-md border border-primary/10 p-6 shadow-sm",
        "hover:shadow-md hover:border-primary/20 transition-all duration-300",
        "relative overflow-hidden"
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{entry.emotion}</div>
        {entry.favorite && (
          <Heart className="w-5 h-5 text-primary fill-primary" />
        )}
      </div>

      <h3 className="text-xl font-medium text-foreground mb-2">{entry.word}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
        {entry.definition}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
          {entry.category}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: entry.importance }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
