"use client";
import { useEffect } from "react";
import AceEditor from "../../../components/AceEditor/AceEditor";

export default function Page({ params }: { params: { problem: string } }) {
  useEffect(() => {
    console.log("");
  }, []);

  return (
    <section className="mt-10">
      <h1>aa</h1>
      <div className=" bg-blue-50">
        <div className=" text-gray-300">
          <h1 className="text-center">Problema Id: {params.problem}</h1>
        </div>
        <div className="">
          <AceEditor />
        </div>
      </div>
    </section>
  );
}
