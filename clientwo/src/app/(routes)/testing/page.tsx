"use client";
import axios from "axios";
import { useEffect, useState } from "react";
// `app/page.tsx` is the UI for the `/` URL

interface Exercise {
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

  return (
    <div>
      <h1>Exercise List</h1>
      <ul className="text-gray-300 m-40">
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <div className="m-10 bg-zinc-950">
              <h2>Ejercicio: {exercise.contexto}</h2>
              <p>Desarrollo: {exercise.desarrollo}</p>
              <p>Dificultad: {exercise.dificultad}</p>
              <p>ID del Lenguaje: {exercise.idLenguaje}</p>
              <p>Solución: {exercise.solucion}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
