import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-terminal"; // You can choose a different theme

function App() {
  const [codeString, setCodeString] = useState("print('aa')");

  const handleCodeChange = (newCode: React.SetStateAction<string>) => {
    setCodeString(newCode);
  };

  return (
    <div>
      <div className="pr-10 pl-10 flex flex-col sm:flex-row">
        <div className="flex-1 p-2 rounded overflow-auto bg-black text-white border-8 border-black">
          {/* Another div parallel to the editor */}
          <h2 className="text-center">Problema</h2>
          <p>Content of the new pane...</p>
        </div>
        <div className="border-8 border-black rounded flex-1 ml-2 mb-2 sm:mb-0">
          <AceEditor
            mode="python"
            theme="terminal"
            onChange={handleCodeChange}
            value={codeString}
            name="code-editor"
            editorProps={{ $blockScrolling: true }}
            style={{ width: "100%" }}
            showPrintMargin={false}
            fontSize={16}
          />
        </div>
      </div>
      {/* New pane below the parallel panes */}
      <div className="pr-10 pl-10 flex flex-col sm:flex-row">
        <div className="flex-1 mt-2 p-2 rounded overflow-auto bg-black text-white border-8 border-black">
          {/* Another div parallel to the editor */}
          <h1 className="text-gray-50 text-center">Output</h1>
          <p className="text-green-400">$ Your terminal-like text here...</p>
          <p className="text-gray-300">Output: Something cool!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
