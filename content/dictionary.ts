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
    | "Historia"
    | "Audio"
    | "Comida";
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
  },
  {
    id: "ya-llegaste",
    word: "¿Ya llegaste?",
    category: "Cariño",
    definition: "La forma oficial de confirmar que el otro está bien.",
    origin: "Nació de la costumbre de avisarse cuando salían o regresaban.",
    story: "Con el tiempo dejó de ser una simple pregunta. Era tranquilidad.",
    usage: "Avísame cuando llegues ❤️",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["cuidado", "rutina", "amor"]
  },
  {
    id: "que-haces",
    word: "¿Qué haces?",
    category: "Costumbre",
    definition: "Pregunta diaria cuyo verdadero significado es 'quiero compartir contigo este momento'.",
    origin: "Aparecía prácticamente todos los días.",
    story: "Nunca buscaba una respuesta larga. Solo iniciar otra conversación.",
    usage: "¿Qué haces? 🙈",
    emotion: "🥹",
    importance: 4,
    favorite: false,
    tags: ["diario", "rutina"]
  },
  {
    id: "sigues-vivo",
    word: "¿Sigues vivo?",
    category: "Broma",
    definition: "Forma cariñosa de reclamar que alguien tardó demasiado en contestar.",
    origin: "Nació después de varios silencios largos.",
    story: "Nunca significó preocupación extrema; significaba 'ya háblame'.",
    usage: "¿Sigues vivo? 😂",
    emotion: "😂",
    importance: 4,
    favorite: true,
    tags: ["whatsapp", "humor"]
  },
  {
    id: "presumir-comida",
    word: "Presumir comida",
    category: "Costumbre",
    definition: "Enviar fotos de comida únicamente para darle envidia al otro.",
    origin: "Se volvió tradición.",
    story: "Ninguna comida estaba completa hasta ser presumida.",
    usage: "Mira lo que estoy comiendo 🤤",
    emotion: "📸",
    importance: 3,
    favorite: false,
    tags: ["comida", "fotos"]
  },
  {
    id: "lugar-feliz",
    word: "Lugar feliz",
    category: "Lugar",
    definition: "Cualquier sitio donde alguno quisiera quedarse para siempre.",
    origin: "Comenzó durante viajes y vacaciones.",
    story: "Generalmente implicaba piscina, comida o simplemente estar juntos.",
    usage: "Este hotel ya es mi lugar feliz.",
    emotion: "❤️",
    importance: 4,
    favorite: true,
    tags: ["viajes", "vacaciones"]
  },
  {
    id: "vacaciones",
    word: "Vacaciones",
    category: "Viaje",
    definition: "Palabra utilizada para presumir discretamente que alguien la estaba pasando increíble.",
    origin: "Bastaba una sola palabra.",
    story: "A veces no hacía falta explicar nada más.",
    usage: "Vacaciones 😌",
    emotion: "✈️",
    importance: 3,
    favorite: false,
    tags: ["viajes"]
  },
  {
    id: "sin-ti",
    word: "¿Sin ti?",
    category: "Cariño",
    definition: "Forma juguetona de reclamar cualquier plan donde el otro no estaba incluido.",
    origin: "Nació como coqueteo.",
    story: "Siempre escondía un 'yo también quiero ir'.",
    usage: "¿Te fuiste sin mí? ¿Sin ti? 🙄",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["amor", "viajes"]
  },
  {
    id: "ya-callate",
    word: "Ya cállate",
    category: "Broma",
    definition: "Petición cuyo verdadero significado era 'sigue diciéndome cosas bonitas'.",
    origin: "Sarcasmo convertido en cariño.",
    story: "Una contradicción que terminó siendo parte del idioma.",
    usage: "Ay ya cállate 😂",
    emotion: "😂",
    importance: 3,
    favorite: false,
    tags: ["sarcasmo"]
  },
  {
    id: "jajajaja-largo",
    word: "JAJAJAJAJA",
    category: "Expresión",
    definition: "Nivel máximo de risa registrado entre ustedes.",
    origin: "La cantidad de 'JA' indicaba el nivel de diversión.",
    story: "Mientras más largo, más difícil era dejar de reír.",
    usage: "JAJAJAJAJAJAJAJA",
    emotion: "😂",
    importance: 4,
    favorite: false,
    tags: ["humor"]
  },
  {
    id: "foto-random",
    word: "Foto random",
    category: "WhatsApp",
    definition: "Fotografía enviada sin contexto únicamente para compartir el momento.",
    origin: "Con el tiempo cualquier foto tenía valor.",
    story: "Un techo, una calle, un café... todo era digno de compartirse.",
    usage: "*envía foto*",
    emotion: "📸",
    importance: 4,
    favorite: false,
    tags: ["fotos", "diario"]
  },
  {
    id: "buenos-dias",
    word: "Buenos días",
    category: "Rutina",
    definition: "No era un saludo; era el inicio oficial del día juntos.",
    origin: "Se volvió un ritual diario.",
    story: "Muchos días comenzaban con un simple mensaje que cambiaba todo.",
    usage: "Buenos días ❤️",
    emotion: "🥹",
    importance: 5,
    favorite: true,
    tags: ["mañanas"]
  },
  {
    id: "buenas-noches",
    word: "Buenas noches",
    category: "Rutina",
    definition: "Nunca era solo una despedida.",
    origin: "Con frecuencia terminaba en otra conversación.",
    story: "Era difícil despedirse cuando siempre quedaba algo más por contar.",
    usage: "Buenas noches ❤️",
    emotion: "😴",
    importance: 4,
    favorite: false,
    tags: ["noche"]
  },
  {
    id: "te-presumo",
    word: "Te voy a presumir...",
    category: "Costumbre",
    definition: "Introducción oficial antes de enviar algo bonito.",
    origin: "Principalmente comida, vistas o lugares.",
    story: "La felicidad aumentaba cuando podía compartirse.",
    usage: "Te voy a presumir algo 🙈",
    emotion: "📸",
    importance: 3,
    favorite: false,
    tags: ["viajes", "comida"]
  },
  {
    id: "emoji-corazon",
    word: "❤️",
    category: "Emoji",
    definition: "El emoji más importante del idioma.",
    origin: "Presente en miles de conversaciones.",
    story: "A veces un solo corazón decía más que un párrafo.",
    usage: "❤️",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["emoji", "amor"]
  },
  {
    id: "idioma-propio",
    word: "Nuestro idioma",
    category: "Historia",
    definition: "Conjunto de palabras, bromas y expresiones que sólo ustedes entienden.",
    origin: "Se construyó conversación tras conversación.",
    story: "No apareció de un día para otro. Se fue formando poco a poco hasta convertirse en algo único.",
    usage: "Eso ya es parte de nuestro idioma.",
    emotion: "🥹",
    importance: 5,
    favorite: true,
    tags: ["historia", "relación"]
  },
  // === NUEVAS ENTRADAS V3 ===
  {
    id: "te-extrano",
    word: "Te extraño",
    category: "Cariño",
    definition: "Forma de acortar cualquier distancia.",
    origin: "Aparecía incluso después de pocas horas.",
    story: "No siempre hablaba de kilómetros; muchas veces hablaba de ganas.",
    usage: "Ya te extraño ❤️",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["amor", "distancia"]
  },
  {
    id: "ya-despertaste",
    word: "¿Ya despertaste?",
    category: "Rutina",
    definition: "La primera misión del día: saber si el otro ya estaba despierto.",
    origin: "Se volvió parte de todas las mañanas.",
    story: "Muchos días comenzaban exactamente con esa pregunta.",
    usage: "¿Ya despertaste? ☀️",
    emotion: "🥹",
    importance: 4,
    favorite: false,
    tags: ["mañanas"]
  },
  {
    id: "bebito",
    word: "Bebito",
    category: "Apodo",
    definition: "Apodo cariñoso utilizado en momentos tiernos.",
    origin: "Nació naturalmente entre conversaciones.",
    story: "Con el tiempo se volvió una forma muy dulce de llamarse.",
    usage: "Buenos días, bebito ❤️",
    emotion: "❤️",
    importance: 4,
    favorite: true,
    tags: ["apodo"]
  },
  {
    id: "amorcito",
    word: "Amorcito",
    category: "Apodo",
    definition: "Uno de los nombres más especiales entre ustedes.",
    origin: "Con el tiempo sustituyó muchas veces el nombre real.",
    story: "Decir 'Amorcito' siempre tenía un tono diferente.",
    usage: "¿Cómo estás, Amorcito?",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["amor", "apodo"]
  },
  {
    id: "dramatico",
    word: "Drama",
    category: "Broma",
    definition: "Exagerar una situación únicamente para hacer reír al otro.",
    origin: "Ambos aprendieron a jugar con el drama.",
    story: "Mientras más absurdo era el drama, mejor funcionaba.",
    usage: "Ya empezó el drama 🙄",
    emotion: "😂",
    importance: 3,
    favorite: false,
    tags: ["humor"]
  },
  {
    id: "audio-largo",
    word: "Audio eterno",
    category: "Audio",
    definition: "Ese audio que dura tanto que parece podcast.",
    origin: "Cuando escribir ya no era suficiente.",
    story: "Algunas historias necesitaban escucharse.",
    usage: "Prepárate para este audio 😂",
    emotion: "🥹",
    importance: 3,
    favorite: false,
    tags: ["audio"]
  },
  {
    id: "sticker",
    word: "Sticker",
    category: "WhatsApp",
    definition: "Respuesta completa sin escribir una sola palabra.",
    origin: "Con el tiempo sustituyó mensajes enteros.",
    story: "Había stickers para absolutamente todo.",
    usage: "*envía sticker*",
    emotion: "😂",
    importance: 4,
    favorite: false,
    tags: ["whatsapp"]
  },
  {
    id: "te-cuido",
    word: "Cuídate",
    category: "Cariño",
    definition: "Despedida cargada de preocupación bonita.",
    origin: "Antes de salir o regresar.",
    story: "Nunca era una palabra vacía.",
    usage: "Cuídate mucho ❤️",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["cuidado"]
  },
  {
    id: "maneja-con-cuidado",
    word: "Maneja con cuidado",
    category: "Cariño",
    definition: "Recordatorio de regresar sano y salvo.",
    origin: "Cada vez que alguno manejaba.",
    story: "Una frase sencilla que escondía mucho amor.",
    usage: "Maneja con cuidado ❤️",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["seguridad"]
  },
  {
    id: "orgullo",
    word: "Estoy orgulloso de ti",
    category: "Cariño",
    definition: "Reconocimiento sincero a los logros del otro.",
    origin: "Aparecía después de metas importantes.",
    story: "Una frase capaz de cambiar un día entero.",
    usage: "Estoy muy orgulloso de ti ❤️",
    emotion: "🥹",
    importance: 5,
    favorite: true,
    tags: ["apoyo"]
  },
  {
    id: "equipo",
    word: "Nosotros",
    category: "Historia",
    definition: "El momento en que dejaron de pensar como dos personas separadas.",
    origin: "Fue apareciendo poco a poco.",
    story: "Sin darse cuenta empezaron a hablar como un equipo.",
    usage: "Lo resolveremos nosotros.",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["historia"]
  },
  {
    id: "foto-comida",
    word: "Foto de comida",
    category: "Comida",
    definition: "Antes de comer había que presumirla.",
    origin: "Tradición no escrita.",
    story: "Era casi obligatorio.",
    usage: "Espérame, primero la foto 😂",
    emotion: "📸",
    importance: 3,
    favorite: false,
    tags: ["comida"]
  },
  {
    id: "te-espero",
    word: "Te espero",
    category: "Cariño",
    definition: "Promesa silenciosa de permanecer ahí.",
    origin: "Nació naturalmente.",
    story: "Dos palabras con muchísimo peso.",
    usage: "Aquí te espero ❤️",
    emotion: "🥹",
    importance: 4,
    favorite: true,
    tags: ["amor"]
  },
  {
    id: "buen-provecho",
    word: "Buen provecho",
    category: "Costumbre",
    definition: "Nunca faltaba antes de comer.",
    origin: "Pequeños detalles diarios.",
    story: "Otra forma de cuidar.",
    usage: "Buen provecho ❤️",
    emotion: "🥹",
    importance: 3,
    favorite: false,
    tags: ["comida"]
  },
  {
    id: "videollamada",
    word: "Videollamada",
    category: "Historia",
    definition: "Cuando escribir ya no era suficiente.",
    origin: "Aparecieron para sentirse más cerca.",
    story: "Las llamadas también construyen recuerdos.",
    usage: "¿Hacemos videollamada?",
    emotion: "❤️",
    importance: 4,
    favorite: false,
    tags: ["llamadas"]
  },
  {
    id: "tecuento",
    word: "Te cuento algo",
    category: "Costumbre",
    definition: "Introducción oficial antes de cualquier historia.",
    origin: "Así empezaban muchas conversaciones.",
    story: "Siempre valía la pena escuchar lo que seguía.",
    usage: "Te cuento algo...",
    emotion: "🥹",
    importance: 3,
    favorite: false,
    tags: ["diario"]
  },
  {
    id: "jajaja",
    word: "Jajajaja",
    category: "Expresión",
    definition: "La banda sonora oficial del chat.",
    origin: "Prácticamente presente todos los días.",
    story: "Las risas fueron construyendo la relación.",
    usage: "JAJAJAJAJA",
    emotion: "😂",
    importance: 5,
    favorite: false,
    tags: ["humor"]
  },
  {
    id: "feliz",
    word: "Hazme feliz",
    category: "Cariño",
    definition: "Compartir un momento bonito con el otro.",
    origin: "No siempre se decía literalmente.",
    story: "Muchas acciones significaban exactamente eso.",
    usage: "Ven conmigo ❤️",
    emotion: "❤️",
    importance: 4,
    favorite: false,
    tags: ["amor"]
  },
  {
    id: "emoji-risa",
    word: "😂",
    category: "Emoji",
    definition: "Emoji oficial de las conversaciones caóticas.",
    origin: "Presente en miles de bromas.",
    story: "Cuando aparecía, era imposible seguir serio.",
    usage: "😂😂😂",
    emotion: "😂",
    importance: 3,
    favorite: false,
    tags: ["emoji"]
  },
  {
    id: "siempre",
    word: "Siempre",
    category: "Historia",
    definition: "Promesa de permanencia.",
    origin: "Comenzó siendo una palabra y terminó siendo una intención.",
    story: "No hablaba del tiempo, hablaba del compromiso.",
    usage: "Siempre ❤️",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["promesa"]
  },
  {
    id: "abrazo",
    word: "Abrazo",
    category: "Cariño",
    definition: "La solución imaginaria para casi cualquier problema.",
    origin: "Aparecía cuando no podían verse.",
    story: "Muchas veces un mensaje intentaba convertirse en abrazo.",
    usage: "Te mando un abrazo ❤️",
    emotion: "🥹",
    importance: 4,
    favorite: true,
    tags: ["amor"]
  },
  {
    id: "tequierover",
    word: "Quiero verte",
    category: "Cariño",
    definition: "Las ganas de convertir el chat en un encuentro.",
    origin: "Después de varios días sin verse.",
    story: "Una frase que siempre emocionaba.",
    usage: "Ya quiero verte ❤️",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["amor"]
  },
  {
    id: "emoji-corazones",
    word: "🥹",
    category: "Emoji",
    definition: "Emoji oficial de los momentos tiernos.",
    origin: "Comenzó apareciendo ocasionalmente.",
    story: "Terminó representando exactamente cómo se sentían muchos momentos.",
    usage: "🥹❤️",
    emotion: "🥹",
    importance: 4,
    favorite: false,
    tags: ["emoji"]
  },
  {
    id: "existir-juntos",
    word: "Compartir el día",
    category: "Historia",
    definition: "Hablar sin un tema importante, solo por el gusto de estar presentes.",
    origin: "Sucedió naturalmente.",
    story: "Ahí fue cuando la conversación dejó de ser novedad y se convirtió en hogar.",
    usage: "¿Qué haces?",
    emotion: "🥹",
    importance: 5,
    favorite: true,
    tags: ["historia", "rutina"]
  },
  {
    id: "hogar",
    word: "Hogar",
    category: "Historia",
    definition: "La sensación de tranquilidad que encontraron el uno en el otro.",
    origin: "No apareció de golpe; se construyó mensaje a mensaje.",
    story: "El chat dejó de ser una aplicación y empezó a sentirse como un lugar seguro.",
    usage: "Contigo me siento en casa ❤️",
    emotion: "❤️",
    importance: 5,
    favorite: true,
    tags: ["amor", "historia"]
  }
];
