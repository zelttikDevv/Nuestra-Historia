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

export const wrapped: WrappedSlide[] = [
  {
    id: "cover",
    type: "cover",
    title: "Nuestra Historia",
    subtitle: "Wrapped 2026",
    emoji: "❤️",
    gradient: "rose"
  },
  {
    id: "welcome",
    type: "text",
    title: "Todo comenzó",
    description: "Algunas historias empiezan con una conversación.\nLa nuestra comenzó con miles.",
    gradient: "night"
  },
  {
    id: "language",
    type: "highlight",
    title: "Creamos nuestro propio idioma",
    value: "50 palabras",
    description: "Y apenas estamos empezando a documentarlo.",
    emoji: "📖",
    gradient: "purple"
  },
  {
    id: "care",
    type: "quote",
    title: "Las palabras más importantes",
    value: "¿Ya comiste?",
    description: "A veces cuidar a alguien empieza con una pregunta muy sencilla.",
    gradient: "blue"
  },
  {
    id: "distance",
    type: "text",
    title: "Aunque hubiera distancia",
    description: "Nunca dejamos de encontrarnos en una conversación.",
    gradient: "night"
  },
  {
    id: "laugh",
    type: "highlight",
    title: "Nuestro superpoder",
    value: "Hacernos reír",
    description: "Algunas bromas sólo nosotros las entendemos.",
    emoji: "😂",
    gradient: "gold"
  },
  {
    id: "photos",
    type: "highlight",
    title: "Compartimos momentos",
    value: "📸",
    description: "Una foto siempre fue mucho más que una imagen.",
    gradient: "purple"
  },
  {
    id: "routine",
    type: "text",
    title: "Lo cotidiano también construye recuerdos",
    description: "Los buenos días.\nLos ya llegaste.\nLos descansa.\nTodo fue formando un hogar.",
    gradient: "rose"
  },
  {
    id: "dictionary",
    type: "highlight",
    title: "Nuestro idioma sigue creciendo",
    value: "50 entradas",
    description: "Cada palabra guarda una historia.",
    emoji: "📚",
    gradient: "blue"
  },
  {
    id: "ending",
    type: "ending",
    title: "Y esto apenas comienza.",
    subtitle: "Nos vemos en el próximo capítulo ❤️",
    gradient: "rose"
  }
];
