'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { wrapped, chapterInterludes, type WrappedSlide } from '@/content/wrapped';
import { SlideRenderer } from '@/components/SlideRenderer';

const AUTO_ADVANCE_MS = 6000;
const INTERLUDE_MS = 2500;

const gradientMap: Record<WrappedSlide['gradient'], string> = {
  rose: 'linear-gradient(135deg, hsl(350 60% 75%) 0%, hsl(340 50% 60%) 100%)',
  purple: 'linear-gradient(135deg, hsl(280 50% 60%) 0%, hsl(260 40% 40%) 100%)',
  blue: 'linear-gradient(135deg, hsl(220 60% 50%) 0%, hsl(200 50% 30%) 100%)',
  gold: 'linear-gradient(135deg, hsl(45 80% 60%) 0%, hsl(30 70% 40%) 100%)',
  night: 'linear-gradient(135deg, hsl(240 30% 20%) 0%, hsl(260 20% 10%) 100%)',
};

// Detecta si un slide es portada de capítulo (cover y no es el primero)
function isChapterCover(slide: WrappedSlide, index: number): boolean {
  return slide.type === 'cover' && index > 0;
}

// Obtiene la frase de interludio correspondiente
function getInterludePhrase(slideIndex: number): string {
  // Contamos cuántos covers hemos pasado antes de este índice
  let coverCount = 0;
  for (let i = 1; i < slideIndex; i++) {
    if (wrapped[i].type === 'cover') coverCount++;
  }
  return chapterInterludes[coverCount] ?? chapterInterludes[0];
}

function SlideProgressBar({ total, current, progress }: { total: number; current: number; progress: number }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex gap-1 p-4 pt-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-[3px] flex-1 rounded-full bg-white/20 overflow-hidden"
        >
          {i < current && (
            <div className="h-full w-full bg-white/90 rounded-full" />
          )}
          {i === current && (
            <motion.div
              className="h-full bg-white/90 rounded-full"
              style={{ width: `${progress * 100}%` }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

const slideVariants = {
  enter: () => ({
    scale: 0.96,
    opacity: 0,
    filter: 'blur(4px)',
  }),
  center: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.4 },
      filter: { duration: 0.5 },
    },
  },
  exit: () => ({
    scale: 1.04,
    opacity: 0,
    filter: 'blur(6px)',
    transition: {
      scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.3 },
      filter: { duration: 0.4 },
    },
  }),
};

export function WrappedView() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showInterlude, setShowInterlude] = useState(false);
  const [interludePhrase, setInterludePhrase] = useState('');
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const progressRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const interludeTimerRef = useRef<number | null>(null);
  const pendingIndexRef = useRef<number | null>(null);

  const totalSlides = wrapped.length;
  const currentSlide = wrapped[currentIndex];
  const isInterludeActive = showInterlude;

  const clearTimers = useCallback(() => {
    if (progressRef.current !== null) {
      cancelAnimationFrame(progressRef.current);
      progressRef.current = null;
    }
    if (interludeTimerRef.current !== null) {
      clearTimeout(interludeTimerRef.current);
      interludeTimerRef.current = null;
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [currentIndex]);

  const goNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      const nextIndex = currentIndex + 1;
      const nextSlide = wrapped[nextIndex];
      
      // Si el siguiente slide es portada de capítulo, mostrar interludio primero
      if (isChapterCover(nextSlide, nextIndex)) {
        pendingIndexRef.current = nextIndex;
        setInterludePhrase(getInterludePhrase(nextIndex));
        setShowInterlude(true);
        setIsPlaying(false);
        setProgress(0);
      } else {
        goToSlide(nextIndex);
      }
    }
  }, [currentIndex, totalSlides, goToSlide]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }, [currentIndex, goToSlide]);

  // Auto-advance timer
  useEffect(() => {
    clearTimers();
    if (!isPlaying || isInterludeActive) return;

    startTimeRef.current = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / AUTO_ADVANCE_MS, 1);
      setProgress(pct);

      if (pct >= 1) {
        if (currentIndex < totalSlides - 1) {
          goNext();
        } else {
          setIsPlaying(false);
        }
      } else {
        progressRef.current = requestAnimationFrame(tick);
      }
    };

    progressRef.current = requestAnimationFrame(tick);
    return clearTimers;
  }, [currentIndex, isPlaying, totalSlides, goNext, clearTimers, isInterludeActive]);

  // Interlude auto-advance
  useEffect(() => {
    if (!showInterlude) return;

    interludeTimerRef.current = window.setTimeout(() => {
      if (pendingIndexRef.current !== null) {
        setShowInterlude(false);
        goToSlide(pendingIndexRef.current);
        pendingIndexRef.current = null;
        setIsPlaying(true);
      }
    }, INTERLUDE_MS);

    return () => {
      if (interludeTimerRef.current !== null) {
        clearTimeout(interludeTimerRef.current);
      }
    };
  }, [showInterlude, goToSlide]);

  const skipInterlude = useCallback(() => {
    if (interludeTimerRef.current !== null) {
      clearTimeout(interludeTimerRef.current);
    }
    if (pendingIndexRef.current !== null) {
      setShowInterlude(false);
      goToSlide(pendingIndexRef.current);
      pendingIndexRef.current = null;
      setIsPlaying(true);
    }
  }, [goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showInterlude) {
        if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'Enter') {
          e.preventDefault();
          skipInterlude();
        }
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Escape') {
        router.push('/');
      } else if (e.key === 'p' || e.key === 'P') {
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, router, showInterlude, skipInterlude]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    if (!showInterlude) setIsPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    if (showInterlude) {
      skipInterlude();
      return;
    }

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) goNext();
      else goPrev();
    }
    setTimeout(() => {
      startTimeRef.current = Date.now() - progress * AUTO_ADVANCE_MS;
      setIsPlaying(true);
    }, 1500);
  };

  const handleTap = () => {
    if (showInterlude) {
      skipInterlude();
      return;
    }
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      startTimeRef.current = Date.now() - progress * AUTO_ADVANCE_MS;
      setIsPlaying(true);
    }
  };

  if (totalSlides === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 relative">
        <div
          className="fixed inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse at top, hsl(350 60% 95%) 0%, transparent 50%),
              radial-gradient(ellipse at bottom, hsl(25 60% 92%) 0%, transparent 50%),
              linear-gradient(to bottom, hsl(30 50% 98%), hsl(30 40% 96%))
            `,
          }}
        />
        <div className="text-center space-y-4">
          <div className="text-6xl">❤️</div>
          <h1 className="text-4xl font-light text-foreground tracking-tight">
            Wrapped
          </h1>
          <p className="text-lg text-muted-foreground">Próximamente…</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 overflow-hidden select-none bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
          style={{ background: gradientMap[currentSlide.gradient] }}
        />
      </AnimatePresence>

      {/* Progress bar */}
      <SlideProgressBar total={totalSlides} current={currentIndex} progress={progress} />

      {/* Back button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          currentIndex === 0 ? router.push('/') : goPrev();
        }}
        className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>

      {/* Play/Pause button */}
      {!showInterlude && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (isPlaying) {
              setIsPlaying(false);
            } else {
              startTimeRef.current = Date.now() - progress * AUTO_ADVANCE_MS;
              setIsPlaying(true);
            }
          }}
          className="fixed top-6 left-16 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white" />
          )}
        </button>
      )}

      {/* Slide counter */}
      <div className="fixed top-7 right-6 z-50 text-white/60 text-sm font-light tabular-nums">
        {currentIndex + 1} / {totalSlides}
      </div>

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center p-8 px-6 pt-20 pb-24"
          onClick={handleTap}
        >
          <SlideRenderer slide={currentSlide} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows (desktop) */}
      {!showInterlude && currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}
      {!showInterlude && currentIndex < totalSlides - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Tap hint on first slide */}
      {currentIndex === 0 && !showInterlude && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="fixed bottom-10 left-0 right-0 text-center text-white/40 text-sm font-light pointer-events-none"
        >
          Toca para pausar · Desliza para navegar
        </motion.div>
      )}

      {/* Interlude overlay between chapters */}
      <AnimatePresence>
        {showInterlude && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={skipInterlude}
            className="fixed inset-0 z-[60] flex items-center justify-center p-8 cursor-pointer"
          >
            {/* Blurred background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
              style={{
                background: gradientMap[currentSlide.gradient],
                filter: 'blur(20px) brightness(0.7)',
                transform: 'scale(1.1)',
              }}
            />
            
            {/* Vignette */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-center max-w-lg"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed italic"
              >
                &ldquo;{interludePhrase}&rdquo;
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-8 text-white/40 text-xs font-light"
              >
                Toca para continuar
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
    }
