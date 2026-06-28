'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { RelationshipCard } from '@/components/RelationshipCard';
import { FeatureCard } from '@/components/FeatureCard';
import { Button } from '@/components/Button';
import { relationshipData } from '@/data/relationship';
import { getRandomPhrase } from '@/lib/utils';

export function Landing() {
  const router = useRouter();
  const [showCards, setShowCards] = useState(false);
  const [showPhrase, setShowPhrase] = useState(false);

  const handleEnter = () => {
    setShowPhrase(true);
    
    setTimeout(() => {
      setShowPhrase(false);
      setShowCards(true);
    }, 800);
  };

  const handleFeatureClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {showPhrase ? (
          <motion.div
            key="phrase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-md"
          >
            <p className="text-lg text-foreground/70 italic">
              {getRandomPhrase()}
            </p>
          </motion.div>
        ) : !showCards ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="text-6xl">❤️‍🩹</div>
              <h1 className="text-5xl font-light text-foreground tracking-tight">
                Nuestra Historia
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                {relationshipData.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-2xl font-light text-foreground">
                {relationshipData.person1}
              </div>
              <div className="text-3xl text-primary">♡</div>
              <div className="text-2xl font-light text-foreground">
                {relationshipData.person2}
              </div>
            </motion.div>

            <RelationshipCard />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg" onClick={handleEnter}>
                Entrar
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="text-6xl mb-4">❤️‍🩹</div>
              <h1 className="text-4xl font-light text-foreground tracking-tight mb-2">
                Nuestra Historia
              </h1>
              <p className="text-muted-foreground">
                {relationshipData.person1} ♡ {relationshipData.person2}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                icon="📖"
                title="Diccionario"
                subtitle="Nuestro idioma. Todas esas palabras que sólo nosotros entendemos."
                onClick={() => handleFeatureClick('/diccionario')}
                delay={0.2}
              />
              <FeatureCard
                icon="❤️"
                title="Wrapped"
                subtitle="El resumen de nuestra historia."
                onClick={() => handleFeatureClick('/wrapped')}
                delay={0.4}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
            }
