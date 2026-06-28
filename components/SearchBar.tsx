'use client';

import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar en nuestro diccionario..."
        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/30 transition-all duration-300"
      />
    </motion.div>
  );
}
