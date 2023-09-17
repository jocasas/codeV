const express = require("express");
const { exec } = require("child_process"); //funcion de node para ejecutar comandos en shell de la maquina
const app = express();

app.get("/api", (req, res) => {
  const string = ["print('hola mundo')"];
  const pythonCode = string;
  exec(`python -c"${pythonCode}"`, (error, stdout, stderr) => {
    if (error) {
      // Handle Python execution errors
      res.status(500).json({ error: error.message });
    } else {
      // Send the Python execution result back as a response
      console.log(stdout);
      res.json({ result: stdout });
    }
  });
});

app.listen(5000, () => {
  console.log("Servidor abierto en puerto 5000"),
    console.log("At site http://localhost:5000/api");
});
