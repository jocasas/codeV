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
    <div className="p-10 flex">
      <div className="w-1/2">
        <AceEditor
          mode="python"
          theme="terminal"
          onChange={handleCodeChange}
          value={codeString}
          name="code-editor"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div className="w-1/2 p-2 border rounded overflow-auto">
        {/* Another div parallel to the editor */}
        <h1 className="text-gray-50 text-center">holaaa</h1>
      </div>
    </div>
  );
}

export default App;
