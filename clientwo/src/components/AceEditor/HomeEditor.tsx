import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-terminal"; // You can choose a different theme
import { relative } from "path";

function App() {
  const [codeString, setCodeString] = useState(`print('Pruebalo!')`);

  const handleCodeChange = (newCode: React.SetStateAction<string>) => {
    setCodeString(newCode);
  };

  const homeEditor = (
    <div className="w-full h-full border-8 border-black">
      <AceEditor
        mode="python"
        theme="terminal"
        onChange={handleCodeChange}
        value={codeString}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        style={{ width: "100%", height: "100%", position: "relative" }}
        showPrintMargin={false}
        fontSize={16}
      />
    </div>
  );

  return <>{homeEditor}</>;
}

export default App;
