import React, { Component } from 'react';
//Codemirror npm i codemirror
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/ambiance.css'; // Importa un tema de CodeMirror
import 'codemirror/mode/python/python'; // Importa el modo Python

class CodeMirrorComponent extends Component {
    constructor(props) {
        super(props);
        this.editorContainer = React.createRef();
        }

  componentDidMount() {
    // Configura el editor de CodeMirror
    const editor = CodeMirror(this.editorContainer.current, {
      //mode: 'python', // Establece el lenguaje del editor (puedes cambiarlo)
      theme: 'ambiance', // Establece el tema (puedes cambiarlo)
      lineNumbers: true, // Muestra números de línea
    });

    //Establecer un texto por defecto
    editor.setValue("function ola como estamos gente\n return ola");

    // Configura un evento para manejar cambios en el contenido del editor
    editor.on('change', (cm) => {
      // Accede al contenido actual del editor con cm.getValue()
      //const code = cm.getValue();
      // Puedes hacer algo con el código aquí, como guardarlo en el estado del componente.
    });
  }

  render() {
    // <textarea ref={(textarea) => (this.textarea = textarea)} />
    return (
      <div>
        {/* <textarea ref={(textarea) => (this.textarea = textarea)} /> */}
        <div ref={this.editorContainer}></div>
      </div>
    );
  }
}

export default CodeMirrorComponent;