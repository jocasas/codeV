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
    // Configurar el editor de CodeMirror
    const editor = CodeMirror(this.editorContainer.current, {
      //mode: 'python', // Establecer el lenguaje del editor
      theme: 'ambiance', //Tema CSS
      lineNumbers: true,
    });

    //Establecer un texto por defecto
    editor.setValue(this.props.defaultCode);

    // Configura un evento para manejar cambios en el contenido del editor
    editor.on('change', (cm) => {

      // Accede al contenido actual del editor con cm.getValue()
      const code = cm.getValue();
      this.props.onCodeChange(code);
    });
  }

  render() {
    return (
      <div>
        {/* <textarea ref={(textarea) => (this.textarea = textarea)} /> */}
        <div ref={this.editorContainer}></div>
      </div>
    );
  }
}

export default CodeMirrorComponent;