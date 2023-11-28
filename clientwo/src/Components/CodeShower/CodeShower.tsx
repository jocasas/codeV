import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import hljs from "highlight.js";
hljs.registerLanguage("python", require("highlight.js/lib/languages/python"));
import { SetStateAction, useState } from "react";

function App() {
  const [codeString, setCodeString] = useState("print('aa')");

  const handleCodeChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCodeString(event.target.value);
  };

  return (
    <div className="p-10">
      <div className="flex">
        <textarea
          className="mr-4 p-2 w-1/2 resize-none"
          value={codeString}
          onChange={handleCodeChange}
          placeholder="Enter your code here"
        />
        <SyntaxHighlighter
          language="python"
          style={gruvboxDark}
          className="w-1/2 overflow-auto"
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;
