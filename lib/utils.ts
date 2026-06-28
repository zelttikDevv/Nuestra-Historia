import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateRelationshipDuration(startDate: Date): {
  years: number;
  months: number;
  days: number;
} {
  const today = new Date();
  const start = new Date(startDate);

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

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
