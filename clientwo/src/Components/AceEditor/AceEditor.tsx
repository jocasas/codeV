import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-terminal"; // You can choose a different theme
import axios from "axios";

interface AppProps {
  param1: string;
  param2: string;
}

function App({ param1, param2 }: AppProps) {
  const [codeString, setCodeString] = useState(`print('${param1}')`);
  const [codeResponse, setCodeResponse] = useState("");
  console.log("param1:", param1);
  console.log("param2:", param2);

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

  return (
    <div>
      <div className="pr-10 pl-10 flex flex-col sm:flex-row">
        <div className="flex-1 p-2 rounded overflow-auto bg-black text-white border-8 border-black">
          {/* Another div parallel to the editor */}
          <h2 className="text-green-500 text-center">{param1}</h2>
          <p className="text-center">{param2}</p>
          <div className="text-center">
            <button onClick={onSubmitClick} className="bg-blue-800">
              submit
            </button>
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
      {/* New pane below the parallel panes */}
      <div className="pr-10 pl-10 flex flex-col sm:flex-row">
        <div className="flex-1 mt-2 pb-40 rounded overflow-auto bg-black text-white border-8 border-black">
          {/* Another div parallel to the editor */}
          <h1 className="text-gray-50 text-center">Output</h1>
          <p className="text-green-400">$ Your terminal-like text here...</p>
          <p className="text-gray-300">Output: Something cool!</p>
          <div>
            <pre>
              <p>{codeResponse}</p>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
