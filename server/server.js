const express = require("express");
const { exec } = require("child_process");
const fs = require("fs"); //Libreria fs para manejar datos en json
const cors = require("cors");
const bcrypt = require("bcrypt"); //para encriptar la contraseña | npm install bcrypt

class Server {
  constructor() {
    this.app = express();
    this.port = 5000;
    this.app.use(express.json());
    this.app.use(cors());

    this.app.post("/api", this.doPythonCompilation.bind(this));
    this.app.post("/apiLogin", this.loginUser.bind(this));
    this.app.post("/apiRegister", this.registerUser.bind(this));
    //this.app.post("/apiRegister", this.nombreFuncion)

    if (process.env.NODE_ENV !== "test") {
      this.app.listen(this.port, () => {
        console.log(`Server is listening on port ${this.port}`);
        console.log(`Visit http://localhost:${this.port}/api`);
      });
    }
  }

  loginUser(req, res) {
    let logUser = req.body.user;
    let logPass = req.body.password;

    const dataFilePath = "data/users.json";

    //var fs = require('fs');//Usar la libreria fs para manejar datos en json
    let usersData = [];

    try {
      usersData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    } catch (error) {
      console.log("error al manejar el json");
      return res.status(500).send("error en el inicio de sesion");
    }

    const userRecord = usersData.find(
      (usersData) => usersData.user === logUser
    );

    if (!userRecord) {
      return res.status(401).send("datos invalidos");
    }

    //Comparar la contraseña con el hash almacenado
    bcrypt.compare(logPass, userRecord.pass, (err, result) => {
      if (err || !result) {
        return res.status(401).send("datos invalidos");
      }

      //Aqui el inicio de sesion fue exitoso, si hacemos un token lo creamos aqui
      //creo

      res.status(200).send("inicio de sesion exitoso");
    });
  }

  registerUser(req, res) {
    let resUser = req.body.user;
    let resPass = req.body.password;
    console.log("user: " + resUser + " pass: " + resPass);
    const dataFilePath = "data/users.json";

    //var fs = require('fs');//Usar la libreria fs para manejar datos en json

    let id = 1;
    let usersData = [];

    //Cargar los usuarios del json
    try {
      usersData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    } catch (error) {
      console.log("error al manejar el json");
      return res.status(500).send("error al registrar el usuario");
    }

    //Verificamos si el usuario ya existe
    const existingUser = usersData.find(
      (usersData) => usersData.user === resUser
    );
    if (existingUser) {
      return res.status(400).send("El usuario ya existe");
    }

    //Genero un hash para encriptar la contraseña antes de almacenarla
    //Si es existoso, se guarda directamente
    const saltRounds = 10; //numero de rondas para el hashing

    bcrypt.hash(resPass, saltRounds, (err, hash) => {
      if (err) {
        console.log("error al encriptar la contraseña");
        return res.status(500).send("error al registrar el usuario");
      }

      //Guardar el usuario
      id = usersData.length + 1; //crearle un id
      const newUser = { id, resUser, pass: hash };
      usersData.push(newUser);

      //Guardar los datos en el archivo
      fs.writeFileSync(
        dataFilePath,
        JSON.stringify(usersData, null, 2),
        "utf8"
      );

      res.status(200).send("Usuario registrado");
    });
  }

  doPythonCompilation(req, res) {
    if (process.env.NODE_ENV !== "test") {
      console.log("Recieved [POST] request at /api");
    }
    try {
      const pythonCode = req.body.code;

      // Write the Python code to a temporary file
      fs.writeFileSync("temp.py", pythonCode);

      exec(`python temp.py`, (error, stdout, stderr) => {
        fs.unlinkSync("temp.py");

        if (error) {
          res.status(500).json({ error: error.message });
        } else {
          if (process.env.NODE_ENV !== "test") {
            console.log(stdout);
          }
          res.status(200).json({ result: stdout });
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

new Server();
module.exports = Server;
