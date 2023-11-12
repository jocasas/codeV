"use client";
import { useEffect } from "react";
import AceEditor from "../../../Components/AceEditor/AceEditor";

export default function Page({ params }: { params: { problem: string } }) {
  useEffect(() => {
    console.log("");
  }, []);

  return (
    <div>
      <h1>ss</h1>
      <div className="mt-28 text-gray-300">Problema Id: {params.problem}</div>
      <div className="">
        <AceEditor />
      </div>
    </div>
  );
}
