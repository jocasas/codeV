import Editor from "@monaco-editor/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

const languageOptions = ["python", "javascript"];

const App = () => {
  // Agregar un estado para el lenguaje seleccionado
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  // Agregar un estado para el código
  const [content, setContent] = useState("// Escribe tu código aquí\n\n");
  const [result, setResult] = useState("// Aqui van tu Output");

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleSave = async () => {
    const content = editorRef.current.getValue();
    try {
      console.log("haciendo post-------------------");
      const response = await axios.post("http://localhost:5000/api", {
        code: content,
      });

      if (response.status === 200) {
        const result = response.data.result;
        console.log(result);
        setResult(result);
      } else {
        console.error("Failed to compile Python code");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Agregar un efecto secundario para actualizar el lenguaje del editor Monaco
  useEffect(() => {
    // Verificar si el editor Monaco está disponible
    if (window.monaco && window.monaco.editor) {
      // Obtener el editor actual
      const editor = window.monaco.editor.getModels()[0];
      if (editor) {
        // Asegurarse de que el editor exista antes de intentar cambiar el lenguaje
        window.monaco.editor.setModelLanguage(editor, selectedLanguage);
      }
    }

    axios.get("http://localhost:5000/apiGetExercise", {
      params: {
        language: "python"/* selectedLanguage */, 
        difficult: 1
      }
    }).then((response) => {
        // Maneja la respuesta aquí
        console.log(JSON.stringify(response.data.exercise));
        setContent(response.data.exercise.desarrollo);
    }).catch((error) => {
        // Maneja el error aquí
    });

  }, [selectedLanguage]);

  // Save a reference to the original ResizeObserver
  const OriginalResizeObserver = window.ResizeObserver;

  // esto es para que el editor se actualice cuando se cambia el tamaño de la ventana
  window.ResizeObserver = function (callback) {
    const wrappedCallback = (entries, observer) => {
      window.requestAnimationFrame(() => {
        callback(entries, observer);
      });
    };

    // crea una instancia de la clase original ResizeObserver
    // con la función de devolución de llamada envuelta
    return new OriginalResizeObserver(wrappedCallback);
  };

  // Copy over static methods, if any
  for (let staticMethod in OriginalResizeObserver) {
    if (OriginalResizeObserver.hasOwnProperty(staticMethod)) {
      window.ResizeObserver[staticMethod] =
        OriginalResizeObserver[staticMethod];
    }
  }

  return (
    <div className="main">
      {/* Agregar un menú desplegable para seleccionar el lenguaje */}
      <div className="left-container">
        <div div className="editor-btn-container">
          <Link to="/">Home</Link>
          <select
            id="LanguageSelect"
            className="lenguage-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {languageOptions.map((language) => (
              <option
                className="lenguage-option"
                key={language}
                value={language}
              >
                {language}
              </option>
            ))}
          </select>
          <button id="saveBtn" className="save-btn" onClick={handleSave}>
            {" "}
            ⟫{" "}
          </button>
        </div>
        <div className="editor-container">
          {/* Agregar el editor Monaco */}
          <Editor
            height="80vh"
            width="100%"
            theme="vs-dark"
            className="overflow-hidden"
            defaultLanguage="python"
            Language={selectedLanguage}
            value={content.toString()}
            onChange={(value) => setContent(value)}
            onMount={handleEditorDidMount}
          />
        </div>
      </div>
      <div className="right-container">
        <div className="header-container"></div>
        <div className="output-container">
          <h3>
            <strong>Output:</strong>
          </h3>
          <pre className="output">{result}</pre>
        </div>
      </div>
    </div>
  );
};
export default App;
