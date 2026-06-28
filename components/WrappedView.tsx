'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { wrapped, type WrappedSlide } from '@/content/wrapped';

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

function ScreenContent({ slide }: { slide: WrappedSlide }) {
  switch (slide.type) {
    case 'cover':
      return (
        <div className="text-center space-y-6">
          {slide.emoji && <div className="text-7xl">{slide.emoji}</div>}
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight tracking-tight">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-lg md:text-xl text-white/70 max-w-md mx-auto leading-relaxed">
              {slide.subtitle}
            </p>
          )}
        </div>
      );

    case 'text':
      return (
        <div className="text-center space-y-6 max-w-lg mx-auto">
          {slide.emoji && <div className="text-5xl">{slide.emoji}</div>}
          <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
            {slide.title}
          </h2>
          {slide.description && (
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              {slide.description}
            </p>
          )}
          {slide.subtitle && (
            <p className="text-sm text-white/50 mt-4">{slide.subtitle}</p>
          )}
        </div>
      );

    case 'highlight':
      return (
        <div className="text-center space-y-6">
          {slide.emoji && <div className="text-6xl">{slide.emoji}</div>}
          {slide.value && (
            <div className="text-7xl md:text-8xl font-extralight text-white tracking-tight">
              {slide.value}
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-light text-white">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-base md:text-lg text-white/70 max-w-sm mx-auto leading-relaxed">
              {slide.subtitle}
            </p>
          )}
        </div>
      );

    case 'quote':
      return (
        <div className="text-center space-y-8 max-w-lg mx-auto">
          {slide.emoji && <div className="text-5xl">{slide.emoji}</div>}
          <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed italic">
            &ldquo;{slide.title}&rdquo;
          </blockquote>
          {slide.subtitle && (
            <p className="text-base text-white/60">{slide.subtitle}</p>
          )}
        </div>
      );

    case 'ending':
      return (
        <div className="text-center space-y-8">
          {slide.emoji && <div className="text-7xl">{slide.emoji}</div>}
          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-lg md:text-xl text-white/70 max-w-md mx-auto leading-relaxed">
              {slide.subtitle}
            </p>
          )}
          {slide.description && (
            <p className="text-base text-white/60 max-w-sm mx-auto">
              {slide.description}
            </p>
          )}
        </div>
      );

    default:
      return (
        <div className="text-center">
          <h2 className="text-3xl font-light text-white">{slide.title}</h2>
        </div>
      );
  }
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-30%' : '30%',
    opacity: 0,
  }),
};

export function WrappedView() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const totalSlides = wrapped.length;
  const currentSlide = wrapped[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, totalSlides]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

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
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, router]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) goNext();
      else goPrev();
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
      className="h-screen w-screen overflow-hidden relative select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 -z-10"
          style={{ background: gradientMap[currentSlide.gradient] }}
        />
      </AnimatePresence>

      {/* Progress bar */}
      <ProgressBar total={totalSlides} current={currentIndex} />

      {/* Back button */}
      <button
        onClick={() => (currentIndex === 0 ? router.push('/') : goPrev())}
        className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>

      {/* Slide counter */}
      <div className="fixed top-7 right-6 z-50 text-white/50 text-sm font-light">
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
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="h-full w-full flex items-center justify-center p-8 px-6"
          onClick={goNext}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <ScreenContent slide={currentSlide} />
          </motion.div>
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
          className="fixed bottom-10 left-0 right-0 text-center text-white/40 text-sm font-light"
        >
          Toca para continuar
        </motion.div>
      )}
    </div>
  );
          }
