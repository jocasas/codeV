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
    <div className='main'>
      {/* Agregar un menú desplegable para seleccionar el lenguaje */}
      <div className='left-container'>
        <div div className='editor-btn-container'>
          <select id='LanguageSelect' className='lenguage-select'
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}>
            {languageOptions.map((language) => (
              <option className='lenguage-option' key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
          <button id='saveBtn' className='save-btn' onClick={handleSave} > > </button>
        </div>
        <div className='editor-container'>
          {/* Agregar el editor Monaco */}
          <Editor
            height='80vh'
            width='40vw'
            theme='vs-dark'
            defaultLanguage='javascript'
            Language={selectedLanguage}
            defaultValue="// Escribe tu código aquí"
            value={content}
            onChange={(value) => setContent(value)}
            onMount={handleEditorDidMount}
          />
        </div>
      </div>
      <div className='right-container'>
        <div className='header-container'>
        </div>
        <div className='output-container'>
          <h3><strong>Output:</strong></h3>
          <pre>{content}</pre>
        </div>
      </div>
    </div>
  )
}
export default App