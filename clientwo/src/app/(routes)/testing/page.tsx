"use client";
import axios from "axios";
import { useEffect, useState } from "react";
// `app/page.tsx` is the UI for the `/` URL

interface Exercise {
  titulo: string;
  contexto: string;
  desarrollo: string;
  dificultad: number;
  id: number;
  idLenguaje: string;
  solucion: string;
}

export default function Page() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const showExercise = async () => {
    console.log("Iniciando FETCH");
    try {
      const response = await axios.get(
        "http://localhost:5000/apiGetAllExercises",
        {}
      );
      setExercises(response.data.exercise);
      console.log("Se hizo fetch correctamente");
    } catch (error) {
      console.error(error);
      console.log("Hubo un problema en el fetch");
    }
  };
  useEffect(() => {
    showExercise();
  }, []);

  useEffect(() => {
    if (exercises.length > 0) {
      console.log("Exercises updated:", exercises);
    }
  }, [exercises]);

  // Agrupar ejercicios
  const exercisesByLanguage: Record<string, Exercise[]> = {};
  exercises.forEach((exercise) => {
    const languageId = exercise.idLenguaje;
    if (!exercisesByLanguage[languageId]) {
      exercisesByLanguage[languageId] = [];
    }
    exercisesByLanguage[languageId].push(exercise);
  });

  return (
    <div>
      <h1>Exercise List</h1>
      <div className="mt-28">
        {Object.entries(exercisesByLanguage).map(([languageId, exercises]) => (
          <div className="text-gray-300" key={languageId}>
            <h2>Language ID: {languageId}</h2>
            <ul>
              {exercises.map((exercise) => (
                <li key={exercise.id}>
                  <div className="p-1">
                    <h1 className="bg-lime-400 text-neutral-950">
                      {exercise.titulo}
                    </h1>
                    <div className="m-5 bg-zinc-950 p-2">
                      <h3>Ejercicio: {exercise.contexto}</h3>
                      <p>Desarrollo: {exercise.desarrollo}</p>
                      <p>Dificultad: {exercise.dificultad}</p>
                      <p>Solución: {exercise.solucion}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
