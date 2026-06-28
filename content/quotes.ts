export const randomPhrases = [
  "Cada conversación nos trajo hasta aquí.",
  "Algunas palabras sólo existen porque las inventamos juntos.",
  "Los recuerdos más importantes casi siempre parecen cotidianos.",
  "Aquí viven los pequeños momentos que construyeron algo enorme.",
  "No recordamos cada día, recordamos cómo nos hacíamos sentir.",
];

export function getRandomPhrase(): string {
  const randomIndex = Math.floor(Math.random() * randomPhrases.length);
  return randomPhrases[randomIndex];
}
