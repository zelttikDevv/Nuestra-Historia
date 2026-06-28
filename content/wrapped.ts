export interface WrappedSlide {
  id: string;
  type:
    | "cover"
    | "text"
    | "highlight"
    | "quote"
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
}

export const wrapped: WrappedSlide[] = [];
