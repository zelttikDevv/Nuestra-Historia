'use client';

import { motion } from 'framer-motion';
import { type WrappedSlide } from '@/content/wrapped';

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

function valueHasEmoji(value: string): boolean {
  return /^[\p{Emoji_Presentation}\p{Emoji}]/u.test(value);
}

interface SlideRendererProps {
  slide: WrappedSlide;
}

export function SlideRenderer({ slide }: SlideRendererProps) {
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

    case 'highlight': {
      const hasValueEmoji = slide.value ? valueHasEmoji(slide.value) : false;
      return (
        <motion.div
          className="text-center space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {slide.emoji && !hasValueEmoji && (
            <motion.div variants={staggerItem} className="text-6xl">
              {slide.emoji}
            </motion.div>
          )}
          {slide.value && (
            <motion.div
              variants={staggerItem}
              className="text-4xl md:text-6xl font-extralight text-white tracking-tight leading-tight"
            >
              {slide.value}
            </motion.div>
          )}
          <motion.h2
            variants={staggerItem}
            className="text-xl md:text-2xl font-light text-white/80"
          >
            {slide.title}
          </motion.h2>
          {slide.description && (
            <motion.p
              variants={staggerItem}
              className="text-base text-white/60 max-w-sm mx-auto leading-relaxed"
            >
              {slide.description}
            </motion.p>
          )}
        </motion.div>
      );
    }

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

    case 'timeline':
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
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl font-light text-white leading-tight"
          >
            {slide.title}
          </motion.h2>
          {slide.items && slide.items.length > 0 ? (
            <motion.div
              variants={staggerItem}
              className="space-y-4 text-left mt-8"
            >
              {slide.items.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start border-l-2 border-white/20 pl-4"
                >
                  <div className="text-sm text-white/50 font-light whitespace-nowrap pt-1">
                    {item.date}
                  </div>
                  <div className="text-base text-white/80 leading-relaxed">
                    {item.text}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              variants={staggerItem}
              className="text-base text-white/40 italic"
            >
              Contenido próximamente...
            </motion.p>
          )}
        </motion.div>
      );

    case 'stat':
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
              className="text-6xl md:text-8xl font-extralight text-white tracking-tight"
            >
              {slide.value}
              {slide.suffix && (
                <span className="text-3xl md:text-4xl text-white/60 ml-2">
                  {slide.suffix}
                </span>
              )}
            </motion.div>
          )}
          <motion.h2
            variants={staggerItem}
            className="text-xl md:text-2xl font-light text-white/80"
          >
            {slide.title}
          </motion.h2>
          {slide.description && (
            <motion.p
              variants={staggerItem}
              className="text-base text-white/60 max-w-sm mx-auto leading-relaxed"
            >
              {slide.description}
            </motion.p>
          )}
        </motion.div>
      );

    case 'comparison':
      return (
        <motion.div
          className="text-center space-y-8 max-w-2xl mx-auto w-full px-4"
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
          {slide.left && slide.right ? (
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 gap-4 md:gap-6 mt-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-light text-white mb-2">
                  {slide.left.value}
                </div>
                <div className="text-sm text-white/60">{slide.left.label}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-light text-white mb-2">
                  {slide.right.value}
                </div>
                <div className="text-sm text-white/60">{slide.right.label}</div>
              </div>
            </motion.div>
          ) : (
            <motion.p
              variants={staggerItem}
              className="text-base text-white/40 italic"
            >
              Contenido próximamente...
            </motion.p>
          )}
        </motion.div>
      );

    case 'counter':
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
              className="text-7xl md:text-9xl font-extralight text-white tracking-tight"
            >
              {slide.value}
            </motion.div>
          )}
          <motion.h2
            variants={staggerItem}
            className="text-2xl md:text-3xl font-light text-white/80 uppercase tracking-widest"
          >
            {slide.title}
          </motion.h2>
          {slide.description && (
            <motion.p
              variants={staggerItem}
              className="text-base text-white/60 max-w-sm mx-auto leading-relaxed"
            >
              {slide.description}
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
