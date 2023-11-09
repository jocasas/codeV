"use client";
import axios from "axios";
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  const showExercise = async () => {
    console.log("Iniciando funcion de ejercicios");
    try {
      console.log("Intentando hacer fetch de los ejercicios");
      const response = await axios.get(
        "http://localhost:5000/apiGetExercise",
        {}
      );
      console.log(JSON.stringify(response.data));
      if (response.status === 200) {
        console.log("Se recibieron los ejercicios");
      } else {
        console.error("Error al recibir ejercicio");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={showExercise} className="bg-white p-5">
        presioname
      </button>
      <h1>Hello, Home page!</h1>
    </div>
  );
}
