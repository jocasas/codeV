"use client";
import { useEffect } from "react";
import AceEditor from "../../../components/AceEditor/AceEditor";

export default function Page({ params }: { params: { problem: string } }) {
  useEffect(() => {
    console.log("");
  }, []);

  return (
    <div className="Main">
      <h1>aaa</h1>
      <div className="">
        <div className=" text-gray-300">Problema Id: {params.problem}</div>
        <div className="mt-10">
          <AceEditor />
        </div>
      </div>
    </div>
  );
}
