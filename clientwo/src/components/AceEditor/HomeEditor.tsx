import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-terminal"; // You can choose a different theme

function App() {
  const [codeString, setCodeString] = useState(`print('Pruebalo!')`);

  const handleCodeChange = (newCode: React.SetStateAction<string>) => {
    setCodeString(newCode);
  };


  const homeEditor = (
    <div>        
    <div className="border-8 border-black rounded">
          <AceEditor
            mode="python"
            theme="terminal"
            onChange={handleCodeChange}
            value={codeString}
            name="code-editor"
            editorProps={{ $blockScrolling: true }}
            style={{ width: "360px", height: "340px" }}
            showPrintMargin={false}
            fontSize={16}
          />
        </div>
    </div>)

    return (
    <div>
     <div>{homeEditor}</div> 
    </div>
  );
}

export default App;