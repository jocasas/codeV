"use client";
import { useEffect, useState } from "react";
import AceEditor from "../../../components/AceEditor/ChallengeEditor";
import axios from "axios";
import { Exercise } from "./challenge";

export default function Page({ params }: { params: { problem: string } }) {
  //H00KS
  const [exercise, setExercise] = useState<Exercise | null>(null);

  const showExercise = async () => {
    const parametros = {
      key1: params.problem,
    };
    console.log("Iniciando FETCH ESPECIFICO");
    try {
      const response = await axios.get(
        "http://localhost:5000/apiGetSpefExercise",
        { params: parametros }
      );
      console.log("API Response:", response.data);
      setExercise(response.data.exercise);
      console.log("Se hizo fetch correctamente");
    } catch (error) {
      console.error(error);
      console.log("Hubo un problema en el fetch");
    }
  };

  useEffect(() => {
    console.log(exercise);
    showExercise();
  }, []);

  return (
    <section className="mt-20">
      <div className="">
        <div className=" text-gray-300">
          <h1 className="text-center">Problema Id: {params.problem}</h1>
        </div>
        <div className="">
          {exercise && (
            <AceEditor
              param1={exercise[0]?.titulo}
              param2={exercise[0]?.instrucciones}
            />
          )}
        </div>
      </div>
    </section>
  );
}
