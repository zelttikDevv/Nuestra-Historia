'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { dictionary, DictionaryEntry } from '@/content/dictionary';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { DictionaryCard } from '@/components/DictionaryCard';
import { DictionaryModal } from '@/components/DictionaryModal';

export default function DiccionarioPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<DictionaryEntry | null>(null);
  const [sortByImportance, setSortByImportance] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(dictionary.map(entry => entry.category));
    return Array.from(cats).sort();
  }, []);

  const filteredEntries = useMemo(() => {
    let filtered = dictionary;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(entry =>
        entry.word.toLowerCase().includes(query) ||
        entry.definition.toLowerCase().includes(query) ||
        entry.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(entry => entry.category === selectedCategory);
    }

    if (sortByImportance) {
      filtered = [...filtered].sort((a, b) => b.importance - a.importance);
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortByImportance]);

  return (
    <div className="min-h-screen p-6 pb-20">
      <div className="fixed inset-0 -z-10" style={{
        background: `
          radial-gradient(ellipse at top, hsl(350 60% 95%) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, hsl(25 60% 92%) 0%, transparent 50%),
          linear-gradient(to bottom, hsl(30 50% 98%), hsl(30 40% 96%))
        `,
      }} />

      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={() => router.push('/')}
            className="p-2 rounded-full hover:bg-card/60 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <div>
            <h1 className="text-4xl font-light text-foreground tracking-tight">
              Diccionario
            </h1>
            <p className="text-muted-foreground mt-1">
              Nuestro idioma. Todas esas palabras que sólo nosotros entendemos.
            </p>
          </div>
        </motion.div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-end"
        >
          <button
            onClick={() => setSortByImportance(!sortByImportance)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              sortByImportance
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-card/60 text-foreground hover:bg-card/80 border border-primary/10'
            }`}
          >
            Ordenar por importancia
          </button>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredEntries.map((entry, index) => (
            <DictionaryCard
              key={entry.id}
              entry={entry}
              index={index}
              onClick={() => setSelectedEntry(entry)}
            />
          ))}
        </motion.div>

        {filteredEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground">
              No se encontraron resultados
            </p>
          </motion.div>
        )}
      </div>

      <DictionaryModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
    </div>
  );
                               }
