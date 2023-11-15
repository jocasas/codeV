export interface Exercise {
  titulo: string;
  contexto: string;
  instrucciones: string;
  desarrollo: string;
  dificultad: number;
  id: number;
  idLenguaje: string;
  solucion: string;
}

export function getPrefixedTitle(exercise: Exercise): string {
  const formattedTitle = exercise.titulo.replace(/\s+/g, "_");
  const suffix = getSuffix(exercise.idLenguaje);
  return `${formattedTitle}${suffix}`;
}

export function getSuffix(languageId: string): string {
  switch (languageId) {
    case "python":
      return ".py";
    case "sql":
      return ".sql";
    // Add more cases for other languages if needed
    default:
      return ".txt"; // Default case, use '.txt' as suffix
  }
}
