import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-terminal"; // You can choose a different theme
import axios from "axios";
import { usePathname } from "next/navigation";

interface AppProps {
  param1: string;
  param2: string;
}

function App({ param1, param2 }: AppProps) {
  const [codeString, setCodeString] = useState(`print('${param1}')`);
  const [codeResponse, setCodeResponse] = useState("");
  console.log("param1:", param1);
  console.log("param2:", param2);

  const pathname = usePathname();

  const handleCodeChange = (newCode: React.SetStateAction<string>) => {
    setCodeString(newCode);
  };

  const onSubmitClick = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api", {
        code: codeString,
      });
      console.log(response.data.result);
      setCodeResponse(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const challengeEditor = (
    <div>
      <div className="pr-10 pl-10 flex flex-col sm:flex-row w-full h-full">
        <div className="flex-1 p-2 rounded overflow-auto bg-black text-white border-8 border-black">
          <div className="bg-blue-900 w-full h-full">
            <h2 className="text-green-500 text-center">{param1}</h2>
            <p className="text-center">{param2}</p>
          </div>
        </div>
        <div className="border-8 border-black rounded flex-1 ml-2 mb-2 sm:mb-0">
          <AceEditor
            mode="python"
            theme="terminal"
            onChange={handleCodeChange}
            value={codeString}
            name="code-editor"
            editorProps={{ $blockScrolling: true }}
            style={{ width: "100%", height: "400px" }}
            showPrintMargin={false}
            fontSize={16}
          />
        </div>
      </div>
      <div className="pr-10 pl-10 flex flex-col sm:flex-row">
        <div className="flex-1 mt-2 pb-40 rounded overflow-auto bg-black text-white border-8 border-black">
          <h1 className="text-gray-50 text-center">Output</h1>
          <div className="text-center">
            <button onClick={onSubmitClick} className="bg-blue-800">
              submit
            </button>
          </div>
          <p className="text-green-400">$ [ Esperando una orden ]. . . . .</p>
          <div>
            <pre>
              <p>{codeResponse}</p>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div>{challengeEditor}</div>
    </div>
  );
}

export default App;
