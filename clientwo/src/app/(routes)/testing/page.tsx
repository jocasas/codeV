"use client";
import axios from "axios";
import { useState } from "react";
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  const [exercises, setExercises] = useState();
  const showExercise = async () => {
    console.log("Iniciando FETCH");
    try {
      const response = await axios.get("http://localhost:5000/apiGetExercise", {
        params: {
          language: "python",
          difficult: 1,
        },
      });
      setExercises(response.data);
      console.log("Se hizo fetch correctamente");
    } catch (error) {
      console.error(error);
      console.log("Hubo un problema en el fetch");
    }
  };

  return (
    <div>
      <button onClick={showExercise} className="bg-white m-40 p-5">
        presioname
      </button>
      <h1 className="text-gray-100">{exercises}</h1>
    </div>
  );
}
