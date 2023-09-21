import Editor from '@monaco-editor/react';
import './App.css';
import { useState, useEffect, useRef } from 'react';

const languageOptions = [
  'javascript',
  'python',
]

const App = () => {
  // Agregar un estado para el lenguaje seleccionado
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  // Agregar un estado para el código
  const [content, setContent] = useState('// Escribe tu código aquí');

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  }

  const handleSave = () => {
    const content = editorRef.current.getValue();
    console.log(content);
  }

  // Agregar un efecto secundario para actualizar el lenguaje del editor Monaco
  useEffect(() => {
    // Verificar si el editor Monaco está disponible
    if (window.monaco && window.monaco.editor) {
      // Obtener el editor actual
      const editor = window.monaco.editor.getModels()[0];
      // Actualizar el lenguaje del editor Monaco
      window.monaco.editor.setModelLanguage(editor, selectedLanguage);
    }
  }, [selectedLanguage]);

  return (
    <>
      {/* Agregar un menú desplegable para seleccionar el lenguaje */}
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}>
        {languageOptions.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      <button onClick={handleSave} >Save</button>


      <div className='editor-container'>
        {/* Agregar el editor Monaco */}
        <Editor
          height='97.5vh'
          theme='vs-dark'
          defaultLanguage='javascript'
          Language={selectedLanguage}
          defaultValue="// Escribe tu código aquí"
          value={content}
          onChange={(value) => setContent(value)}
          onMount={handleEditorDidMount}
        />
        <div className='ouput-container'>
          <h2>Output:</h2>
          <pre>{content}</pre>
        </div>
      </div>
    </>
  )
}
export default App