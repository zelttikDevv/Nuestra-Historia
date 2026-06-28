export interface DictionaryEntry {
  id: string;
  word: string;
  alias?: string[];
  category:
    | "Frase"
    | "Expresión"
    | "Apodo"
    | "Cariño"
    | "Rutina"
    | "Costumbre"
    | "Emoji"
    | "Broma"
    | "Viaje"
    | "Lugar"
    | "WhatsApp"
    | "Historia";
  definition: string;
  origin: string;
  story: string;
  usage: string;
  emotion:
    | "❤️"
    | "🥹"
    | "😂"
    | "🙄"
    | "😴"
    | "✈️"
    | "📸";
  importance: 1 | 2 | 3 | 4 | 5;
  favorite: boolean;
  tags: string[];
}

export const dictionary: DictionaryEntry[] = [
  {
    id: "diceeeees",
    word: "Diceeeees",
    category: "Frase",
    definition: "Forma oficial de decir 'No te creo'.",
    origin: "Comenzó como una manera de molestarse mutuamente.",
    story: "Con el paso de las conversaciones dejó de ser una simple palabra y terminó convirtiéndose en parte del idioma oficial de la relación. Hoy basta con escribir 'Diceeeees' para entender exactamente el tono de la conversación.",
    usage: "—Ya no te extraño.\n—Diceeeees.",
    emotion: "😂",
    importance: 5,
    favorite: true,
    tags: ["sarcasmo", "amor", "broma"]
  },
  {
    id: "nadota",
    word: "Nadota",
    category: "Expresión",
    definition: "Versión exagerada de 'nada'.",
    origin: "Nació jugando con las palabras.",
    story: "Se convirtió en una respuesta clásica para bromear cuando alguno preguntaba si el otro lo extrañaba o pensaba en él.",
    usage: "¿Ya me extrañas o nadota?",
    emotion: "😂",
    importance: 5,
    favorite: true,
    tags: ["humor", "cotidiano"]
  },
  {
    id: "despierta-mas",
    word: "Despierta más",
    category: "Rutina",
    definition: "Respuesta automática cuando alguien dice que ya despertó.",
    origin: "Una frase absurda que terminó siendo un saludo.",
    story: "Nunca tuvo sentido... precisamente por eso terminó siendo tan de ustedes.",
    usage: "—Ya desperté.\n—Despierta más.",
    emotion: "🥹",
    importance: 5,
    favorite: true,
    tags: ["mañanas", "rutina"]
  },
  {
    id: "y-yo",
    word: "¿Y yo?",
    category: "Cariño",
    definition: "Forma de decir 'yo también quiero estar ahí'.",
    origin: "Aparecía cuando alguno presumía comida, vacaciones o lugares bonitos.",
    story: "Nunca fue una queja. Siempre fue una forma de decir 'quiero compartir ese momento contigo'.",
    usage: "Qué bonito hotel.\n¿Y yo?",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["viajes", "amor"]
  },
  {
    id: "a-mimir",
    word: "A mimir",
    category: "Rutina",
    definition: "La forma oficial de despedirse antes de dormir.",
    origin: "Una palabra infantil que terminó siendo costumbre.",
    story: "Era imposible simplemente decir 'buenas noches'.",
    usage: "Bueno... ya me voy a mimir.",
    emotion: "😴",
    importance: 4,
    favorite: false,
    tags: ["noche", "rutina"]
  },
  {
    id: "calmada-experta",
    word: "Calmada experta",
    category: "Broma",
    definition: "Respuesta cuando alguno presume saber demasiado.",
    origin: "Nació burlándose cariñosamente del otro.",
    story: "Se convirtió en una frase comodín para bajar los humos cuando alguien hablaba con demasiada seguridad.",
    usage: "Calmada experta.",
    emotion: "😂",
    importance: 4,
    favorite: true,
    tags: ["sarcasmo"]
  },
  {
    id: "ya-comiste",
    word: "¿Ya comiste?",
    category: "Cariño",
    definition: "Pregunta que realmente significa 'me importas'.",
    origin: "Parte de las conversaciones diarias.",
    story: "Es una de esas frases que parecen pequeñas, pero que esconden muchísimo cariño.",
    usage: "¿Ya comiste?",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["cuidado", "rutina"]
  },
  {
    id: "mandame-foto",
    word: "Mándame foto",
    category: "WhatsApp",
    definition: "Forma de compartir el momento aunque estén lejos.",
    origin: "Las fotografías eran una forma de sentirse cerca.",
    story: "No importaba si era comida, paisaje o una selfie. Lo importante era compartir el instante.",
    usage: "Mándame foto ❤️",
    emotion: "📸",
    importance: 4,
    favorite: false,
    tags: ["fotos"]
  },
  {
    id: "yo-mas",
    word: "Yo más",
    category: "Cariño",
    definition: "Competencia eterna por quién quiere más al otro.",
    origin: "Empezó después de cada 'te amo'.",
    story: "Nunca hubo un ganador. Ni lo habrá.",
    usage: "—Te amo.\n—Yo más.",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["amor"]
  },
  {
    id: "emoji-ojos",
    word: "🙄",
    category: "Emoji",
    definition: "Emoji oficial del falso enojo.",
    origin: "Mientras más aparecía, menos serio era el enojo.",
    story: "Con el tiempo dejó de representar molestia para convertirse en coqueteo.",
    usage: "🙄🙄🙄",
    emotion: "🙄",
    importance: 4,
    favorite: true,
    tags: ["emoji", "sarcasmo"]
  }
];
