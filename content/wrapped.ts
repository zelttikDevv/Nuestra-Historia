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
  },
  // === NUEVOS SLIDES V2 ===
  {
    id: "heartbeat",
    type: "text",
    title: "No fueron los grandes momentos.",
    description: "Fueron los pequeños.\nLos que se repetían todos los días.",
    gradient: "night"
  },
  {
    id: "goodmorning",
    type: "highlight",
    title: "Nuestro ritual favorito",
    value: "☀️ Buenos días",
    description: "Había días que empezaban mejor únicamente porque llegaba ese mensaje.",
    emoji: "☀️",
    gradient: "gold"
  },
  {
    id: "goodnight",
    type: "highlight",
    title: "Y siempre terminaban con un",
    value: "🌙 Buenas noches",
    description: "Porque incluso despedirse también era una forma de quererse.",
    emoji: "🌙",
    gradient: "night"
  },
  {
    id: "photos-memory",
    type: "text",
    title: "Cada foto tenía una misión.",
    description: "No era presumir un lugar.\nEra invitar al otro a vivir ese momento.",
    gradient: "purple"
  },
  {
    id: "inside-jokes",
    type: "highlight",
    title: "Creamos bromas",
    value: "Que nadie más entendería",
    description: "Y eso las hizo todavía más especiales.",
    emoji: "😂",
    gradient: "blue"
  },
  {
    id: "safe-place",
    type: "text",
    title: "Con el tiempo...",
    description: "El chat dejó de ser una aplicación.\nSe convirtió en un lugar seguro.",
    gradient: "rose"
  },
  {
    id: "ordinary-days",
    type: "text",
    title: "Descubrimos algo importante.",
    description: "Los días normales también pueden convertirse en recuerdos extraordinarios.",
    gradient: "gold"
  },
  {
    id: "future",
    type: "highlight",
    title: "Todavía quedan",
    value: "Muchísimas páginas",
    description: "Porque esta historia apenas comenzó a escribirse.",
    emoji: "📖",
    gradient: "purple"
  },
  {
    id: "thankyou",
    type: "quote",
    title: "Gracias.",
    description: "Por cada mensaje.\nCada audio.\nCada llamada.\nCada risa.\nCada momento.",
    gradient: "rose"
  },
  {
    id: "to-be-continued",
    type: "ending",
    title: "Continuará...",
    subtitle: "Nos vemos en el próximo Wrapped ❤️",
    gradient: "night"
  }
];
