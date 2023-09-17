const express = require("express");
const { exec } = require("child_process"); //funcion de node para ejecutar comandos en shell de la maquina
const fs = require("fs");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  try {
    const pythonCode = 'print("hola\\n4")'; // Example code with double quotes

    /**
     * Escribe el codigo a un archivo temporal, esto lo hice para
       saltarme un problema, quizas lo quite al final si lo soluciono
     */
    fs.writeFileSync("temp.py", pythonCode);

    exec(`python temp.py`, (error, stdout, stderr) => {
      fs.unlinkSync("temp.py");

      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        /**
         * La siguiente funcion es experimental y estoy creando una funcion
           para ver si la integro, Limpia el output del \r \n que hace la 
           interpretacion por default cuando interpreta scripts
         * const CleanOutput = stdout.replace(/[\r\n]+/g, "");
        */
        console.log(stdout);
        res.json({ result: stdout });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor abierto en puerto ${port}`),
    console.log(`En el sitio http://localhost:${port}/api`);
});
