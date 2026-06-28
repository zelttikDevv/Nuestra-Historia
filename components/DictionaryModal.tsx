'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import { DictionaryEntry } from '@/content/dictionary';

interface DictionaryModalProps {
  entry: DictionaryEntry | null;
  onClose: () => void;
}

export function DictionaryModal({ entry, onClose }: DictionaryModalProps) {
  if (!entry) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card/90 backdrop-blur-md rounded-3xl border border-primary/10 shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="text-6xl">{entry.emotion}</div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted/50 transition-colors"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-light text-foreground mb-2">
                  {entry.word}
                </h2>
                {entry.alias && entry.alias.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    También: {entry.alias.join(', ')}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Definición
                  </h3>
                  <p className="text-foreground leading-relaxed">{entry.definition}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Origen
                  </h3>
                  <p className="text-foreground leading-relaxed">{entry.origin}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Historia
                  </h3>
                  <p className="text-foreground leading-relaxed">{entry.story}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Uso
                  </h3>
                  <p className="text-foreground leading-relaxed whitespace-pre-line italic">
                    {entry.usage}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    {entry.category}
                  </span>
                  {entry.favorite && (
                    <Heart className="w-4 h-4 text-primary fill-primary" />
                  )}
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: entry.importance }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                  ))}
                </div>
              </div>

              {entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground bg-muted/30 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
                  }
