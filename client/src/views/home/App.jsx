import { React, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";

import "./App.css";
import { ParticlesBackground } from "../../components/ParticleBg/ParticlesBackground";
import Editor from "@monaco-editor/react";

const App = () => {
  const [content, setContent] = useState(
    "//Javascript\nfunction generatePyramid() {\n\tvar totalNumberofRows = 5;\n\tvar output='';\n\tfor (var i = 1; i <= totalNumberofRows; i++) {\n\t\tfor (var j = 1; j <= i; j++) {\n\t\t\toutput += j + ' ';\n\t\t}\n\t\tconsole.log(output);\n\t\toutput = '';\n\t}\n}\ngeneratePyramid();"
  );

  return (
    <div className="Main">
      <Navbar />
      <ParticlesBackground />
      <div className="Slogan">Aqui va el Slogan</div>
      <div className="slide-info-1">
        <div className="card1-container">
          <div class="circle"></div>
          <div class="circle"></div>
          <div className="card1">
            <div className="card-header">
              <div className="img"></div>
              <h2>Titulo</h2>
            </div>
            <div className="card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              magni distinctio unde odit voluptate perferendis reprehenderit
              eaque, rerum doloremque veritatis consequuntur recusandae quam
              vero architecto possimus officiis tenetur voluptatum voluptates.
            </div>
          </div>
        </div>
        <div className="card2-container">
          <div class="circle2"></div>
          <div class="circle2"></div>
          <div className="card2">
            <div className="card-header">
              <div className="img"></div>
              <h2>Titulo</h2>
            </div>
            <div className="card-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              corporis nemo animi, distinctio laborum ullam suscipit quia
              debitis quos inventore est iusto, veritatis eos harum aut ipsa
              itaque accusantium repudiandae?
            </div>
          </div>
        </div>
      </div>
      <div className="ranking-info">
        <div className="example-editor">
          <h3>Pruebalo!</h3>
          <Editor
            height="45vh"
            width="50vh"
            theme="vs-dark"
            className="overflow-hidden"
            defaultLanguage="javascript"
            value={content.toString()}
          />
        </div>
        <div className="ranking-ranges">
          <div className="card-content">
            aqui va el ranking quiza o algo asi
          </div>
        </div>
      </div>
      <div className="slide-info-2">Aqui va info 2</div>
    </div>
  );
};

export default App;
