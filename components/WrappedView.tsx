'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { wrapped, type WrappedSlide } from '@/content/wrapped';

const AUTO_ADVANCE_MS = 6000;

const gradientMap: Record<WrappedSlide['gradient'], string> = {
  rose: 'linear-gradient(135deg, hsl(350 60% 75%) 0%, hsl(340 50% 60%) 100%)',
  purple: 'linear-gradient(135deg, hsl(280 50% 60%) 0%, hsl(260 40% 40%) 100%)',
  blue: 'linear-gradient(135deg, hsl(220 60% 50%) 0%, hsl(200 50% 30%) 100%)',
  gold: 'linear-gradient(135deg, hsl(45 80% 60%) 0%, hsl(30 70% 40%) 100%)',
  night: 'linear-gradient(135deg, hsl(240 30% 20%) 0%, hsl(260 20% 10%) 100%)',
};

function ProgressBar({ total, current }: { total: number; current: number }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex gap-1 p-4 pt-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-[3px] flex-1 rounded-full bg-white/20 overflow-hidden"
        >
          <motion.div
            className="h-full bg-white/90 rounded-full"
            initial={{ width: i < current ? '100%' : '0%' }}
            animate={{ width: i <= current ? '100%' : '0%' }}
            transition={{
              duration: i === current ? 0.5 : 0,
              ease: 'easeOut',
            }}
          />
        </div>
      ))}
    </div>
  );
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 12, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ScreenContent({ slide }: { slide: WrappedSlide }) {
  switch (slide.type) {
    case 'cover':
      return (
        <motion.div
          className="text-center space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {slide.emoji && (
            <motion.div variants={staggerItem} className="text-7xl">
              {slide.emoji}
            </motion.div>
          )}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-6xl font-light text-white leading-tight tracking-tight"
          >
            {slide.title}
          </motion.h1>
          {slide.subtitle && (
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-white/70 max-w-md mx-auto leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>
          )}
        </motion.div>
      );

    case 'text':
      return (
        <motion.div
          className="text-center space-y-6 max-w-lg mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {slide.emoji && (
            <motion.div variants={staggerItem} className="text-5xl">
              {slide.emoji}
            </motion.div>
          )}
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl font-light text-white leading-tight"
          >
            {slide.title}
          </motion.h2>
          {slide.description && (
            <motion.p
              variants={staggerItem}
              className="text-base md:text-lg text-white/70 leading-relaxed whitespace-pre-line"
            >
              {slide.description}
            </motion.p>
          )}
          {slide.subtitle && (
            <motion.p
              variants={staggerItem}
              className="text-sm text-white/50 mt-4"
            >
              {slide.subtitle}
            </motion.p>
          )}
        </motion.div>
      );

    case 'highlight':
      return (
        <motion.div
          className="text-center space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {slide.emoji && (
            <motion.div variants={staggerItem} className="text-6xl">
              {slide.emoji}
            </motion.div>
          )}
          {slide.value && (
            <motion.div
              variants={staggerItem}
              className="text-5xl md:text-7xl font-extralight text-white tracking-tight"
            >
              {slide.value}
            </motion.div>
          )}
          <motion.h2
            variants={staggerItem}
            className="text-2xl md:text-3xl font-light text-white"
          >
            {slide.title}
          </motion.h2>
          {slide.description && (
            <motion.p
              variants={staggerItem}
              className="text-base md:text-lg text-white/70 max-w-sm mx-auto leading-relaxed"
            >
              {slide.description}
            </motion.p>
          )}
        </motion.div>
      );

    case 'quote':
      return (
        <motion.div
          className="text-center space-y-8 max-w-lg mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {slide.emoji && (
            <motion.div variants={staggerItem} className="text-5xl">
              {slide.emoji}
            </motion.div>
          )}
          <div className="space-y-4">
            {slide.value ? (
              <>
                <motion.h3
                  variants={staggerItem}
                  className="text-xl md:text-2xl font-light text-white/80"
                >
                  {slide.title}
                </motion.h3>
                <motion.blockquote
                  variants={staggerItem}
                  className="text-3xl md:text-4xl font-light text-white leading-relaxed italic"
                >
                  &ldquo;{slide.value}&rdquo;
                </motion.blockquote>
              </>
            ) : (
              <motion.blockquote
                variants={staggerItem}
                className="text-3xl md:text-4xl font-light text-white leading-relaxed italic"
              >
                &ldquo;{slide.title}&rdquo;
              </motion.blockquote>
            )}
            {slide.description && (
              <motion.p
                variants={staggerItem}
                className="text-base text-white/60 whitespace-pre-line"
              >
                {slide.description}
              </motion.p>
            )}
          </div>
          {slide.subtitle && (
            <motion.p
              variants={staggerItem}
              className="text-base text-white/60"
            >
              {slide.subtitle}
            </motion.p>
          )}
        </motion.div>
      );

    case 'ending':
      return (
        <motion.div
          className="text-center space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {slide.emoji && (
            <motion.div variants={staggerItem} className="text-7xl">
              {slide.emoji}
            </motion.div>
          )}
          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight"
          >
            {slide.title}
          </motion.h1>
          {slide.subtitle && (
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-white/70 max-w-md mx-auto leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>
          )}
          {slide.description && (
            <motion.p
              variants={staggerItem}
              className="text-base text-white/60 max-w-sm mx-auto"
            >
              {slide.description}
            </motion.p>
          )}
        </motion.div>
      );

    default:
      return (
        <div className="text-center">
          <h2 className="text-3xl font-light text-white">{slide.title}</h2>
        </div>
      );
  }
}

// Story-style transition: fade + subtle zoom
const slideVariants = {
  enter: (direction: number) => ({
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
  exit: (direction: number) => ({
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
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const totalSlides = wrapped.length;
  const currentSlide = wrapped[currentIndex];

  const clearTimers = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (progressRef.current !== null) {
      cancelAnimationFrame(progressRef.current);
      progressRef.current = null;
    }
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
      startTimeRef.current = Date.now();
    }
  }, [currentIndex, totalSlides]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
      startTimeRef.current = Date.now();
    }
  }, [currentIndex]);

  // Auto-advance timer
  useEffect(() => {
    clearTimers();

    if (!isPlaying) return;

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
  }, [currentIndex, isPlaying, totalSlides, goNext, clearTimers]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, [goNext, goPrev, router]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    // Pause on touch
    setIsPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) goNext();
      else goPrev();
    }
    // Resume after a brief pause
    setTimeout(() => {
      startTimeRef.current = Date.now() - progress * AUTO_ADVANCE_MS;
      setIsPlaying(true);
    }, 1500);
  };

  const handleTap = () => {
    // Tap to pause/resume
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
      {/* Dynamic background - smooth crossfade */}
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

      {/* Progress bar with per-slide progress */}
      <div className="fixed top-0 left-0 right-0 z-50 flex gap-1 p-4 pt-6">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className="h-[3px] flex-1 rounded-full bg-white/20 overflow-hidden"
          >
            {i < currentIndex && (
              <div className="h-full w-full bg-white/90 rounded-full" />
            )}
            {i === currentIndex && (
              <motion.div
                className="h-full bg-white/90 rounded-full"
                style={{ width: `${progress * 100}%` }}
              />
            )}
          </div>
        ))}
      </div>

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

      {/* Slide counter */}
      <div className="fixed top-7 right-6 z-50 text-white/60 text-sm font-light tabular-nums">
        {currentIndex + 1} / {totalSlides}
      </div>

      {/* Slide content with story-style transition */}
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
          <ScreenContent slide={currentSlide} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows (desktop only) */}
      {currentIndex > 0 && (
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
      {currentIndex < totalSlides - 1 && (
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
      {currentIndex === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="fixed bottom-10 left-0 right-0 text-center text-white/40 text-sm font-light pointer-events-none"
        >
          Toca para pausar · Desliza para navegar
        </motion.div>
      )}
    </div>
  );
            }
