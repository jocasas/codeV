"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// `app/page.tsx` is the UI for the `/` URL

interface Exercise {
  titulo: string;
  contexto: string;
  instrucciones: string;
  desarrollo: string;
  dificultad: number;
  id: number;
  idLenguaje: string;
  solucion: string;
}

type AsciiArt = {
  python: string;
  sql: string;
};

const asciiart: AsciiArt = {
  python: `
              __    __                         
             /\\ \\__/\\ \\                        
_____   __  __\\ \\ ,_\\ \\ \\___     ___     ___    
/\\ '__\`\\/\\ \\/\\ \\\\ \\ \\/\\ \\  _ \`\\  / __\`\\ /' _ \`\\  
\\ \\ \\L\\ \\ \\ \\_\\ \\\\ \\ \\_\\ \\ \\ \\ \\/\\ \\L\\ \\/\\ \\/\\ \\ 
\\ \\ ,__/\\/\\____ \\\\ \\__\\\\ \\_\\ \\_\\ \\____/\\ \\_\\ \\_\\
\\ \\ \\/  \`/___/> \\\\/__/ \\/_/\\/_/\\/__ /  \\/_/\\/_/
 \\ \\_\\     /\\___/                              
\\/_/      \\/__/                             
 `,

  sql: `
  ________  ________  ___          
  |\\   ____\\|\\   __  \\|\\  \\         
  \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\        
   \\ \\_____  \\ \\  \\\\\\  \\ \\  \\       
    \\|____|\\  \\ \\  \\\\\\  \\ \\  \\____  
      ____\\_\\  \\ \\_____  \\ \\_______\\
     |\\_________\\|___| \\__\\|_______|
     \\|_________|     \\|__|         
 `,
};

export default function Page() {
  //H00KS
  const [exercises, setExercises] = useState<Exercise[]>([]);

  //0N R3ND3R FUNC
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

  //AGRUPAR EJERCICIOS
  const exercisesByLanguage: Record<string, Exercise[]> = {};
  exercises.forEach((exercise) => {
    const languageId = exercise.idLenguaje;
    if (!exercisesByLanguage[languageId]) {
      exercisesByLanguage[languageId] = [];
    }
    exercisesByLanguage[languageId].push(exercise);
  });

  useEffect(() => {
    showExercise();
  }, []);

  useEffect(() => {
    if (exercises.length > 0) {
      console.log("Exercises updated:", exercises);
    }
  }, [exercises]);

  function getPrefixedTitle(exercise: Exercise): string {
    const formattedTitle = exercise.titulo.replace(/\s+/g, "_");
    const suffix = getSuffix(exercise.idLenguaje);
    return `${formattedTitle}${suffix}`;
  }

  function getSuffix(languageId: string): string {
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

  return (
    <div className="Main">
      <div>
        {Object.entries(exercisesByLanguage).map(([languageId, exercises]) => (
          <div className="text-gray-300" key={languageId}>
            <div className="pt-10 pb-10 bg-black">
              <div className="text-center">
                <pre
                  className="text-rose-600		"
                  dangerouslySetInnerHTML={{
                    __html: asciiart[languageId as keyof AsciiArt] || "",
                  }}
                />
              </div>
            </div>
            <ul>
              {exercises.map((exercise) => (
                <li key={exercise.id}>
                  <div className="p-1">
                    <h1 className="bg-zinc-950 text-neutral-950">
                      <span style={{ color: "#00ff00" }}>
                        guest@codev.editor.com:
                      </span>
                      <span style={{ color: "#02198B" }}> ~</span>
                      <span style={{ color: "#ffffff" }}>$ </span>
                      <span style={{ color: "#ffffff" }}> cat </span>

                      <span style={{ color: "#ffffff" }}>
                        {" "}
                        {getPrefixedTitle(exercise)}{" "}
                      </span>
                    </h1>
                    <div>
                      <div className="m-2 bg-zinc-950 p-2">
                        <p>{exercise.contexto}</p>
                        <Link
                          href="/[problem]"
                          as={"/" + exercise.id.toString()}
                          className="font-bold"
                        >
                          Abrir con el editor ¿{" "}
                          <span style={{ color: "#00FFFF" }}>[y/n]</span> ?
                        </Link>
                      </div>
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
