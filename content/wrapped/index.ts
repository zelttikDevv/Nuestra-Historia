import { wrappedChapterOne } from './chapters/01-beginning';
import { wrappedChapterTwo } from './chapters/02-language';
import { wrappedChapterThree } from './chapters/03-routines';
import { wrappedChapterFour } from './chapters/04-us';
import { wrappedChapterFive } from './chapters/05-future';

export interface TimelineItem {
  date: string;
  text: string;
}

export interface ComparisonBlock {
  label: string;
  value: string;
}

export interface WrappedSlide {
  id: string;
  type:
    | "cover"
    | "text"
    | "highlight"
    | "quote"
    | "timeline"
    | "stat"
    | "comparison"
    | "counter"
    | "ending";
  title: string;
  subtitle?: string;
  value?: string;
  description?: string;
  emoji?: string;
  gradient:
    | "rose"
    | "purple"
    | "blue"
    | "gold"
    | "night";
  items?: TimelineItem[];
  left?: ComparisonBlock;
  right?: ComparisonBlock;
  suffix?: string;
}

// El libro se ensambla capítulo a capítulo.
// Para añadir un nuevo capítulo: crear el archivo en /chapters e importarlo aquí.
export const wrapped: WrappedSlide[] = [
  ...wrappedChapterOne,
  ...wrappedChapterTwo,
  ...wrappedChapterThree,
  ...wrappedChapterFour,
  ...wrappedChapterFive,
];
