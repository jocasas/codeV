const express = require("express");
const { exec } = require("child_process");
const fs = require("fs"); //Libreria fs para manejar datos en json
const cors = require("cors");
const bcrypt = require("bcrypt"); //para encriptar la contraseña | npm install bcrypt
const dotenv = require("dotenv"); //para el archivo .env
const jwt = require("jsonwebtoken"); //Para el token de inicio de sesion del usuario

//Recoger .env
dotenv.config();
//Para crear el token que almacene en .env
//console.log(require('crypto').randomBytes(64).toString('hex'))
class Server {
  constructor() {
    this.app = express();
    this.port = 5000;
    this.app.use(express.json());
    this.app.use(cors());

    //ENDPOINTS Lenguajes
    this.app.post("/api", this.doPythonCompilation.bind(this));

    //ENDPOINTS Usuario
    this.app.post("/apiLogin", this.loginUser.bind(this));
    this.app.post("/apiRegister", this.registerUser.bind(this));
    this.app.get("/apiGetUser", this.getUser.bind(this));

    //ENDPOINTS Ejercicios
    this.app.get("/apiGeRandomExcercise", this.getRandomExercise.bind(this));
    this.app.get("/apiGetAllExercises", this.getAllExercises.bind(this));
    this.app.get("/apiGetSpefExercise", this.getSpefExercise.bind(this));

    if (process.env.NODE_ENV !== "test") {
      this.app.listen(this.port, () => {
        console.log(`Server is listening on port ${this.port}`);
        console.log(`Visit http://localhost:${this.port}/api`);
      });
    }
  }

  getUser(req, res) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401); // si no hay token, devuelve un error 401

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // si el token es inválido, devuelve un error 403

      let userData = user.username;

      //req.user = user;

      res
        .status(200)
        .send({ message: "Se rescato la informacion del usuario", userData });
    });
  }

  loginUser(req, res) {
    let logUser = req.body.user;
    let logPass = req.body.password;
    console.log("usuario " + logUser + " contraseña " + logPass);

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

      //Como el inicio de sesion fue exitoso, crear el token
      const secretToken = process.env.TOKEN_SECRET;
      const userData = {
        // Datos necesarios para el usuario de manera local
        id: userRecord.id,
      };

      const token = jwt.sign(userData, secretToken);
      //Devolver un status 200, junto a un mensaje (porsiacaso) y el token que almacenara el usuario
      res
        .status(200)
        .send({ message: "Inicio de sesión exitoso", accessToken: token });
    });
  }

  registerUser(req, res) {
    let resUser = req.body.user;
    let resPass = req.body.password;

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
      const newUser = { id, user: resUser, pass: hash };
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

      //Escribir el codigo de python en un archivo temporal
      fs.writeFileSync("temp.py", pythonCode);

      exec(`python temp.py`, (error, stdout, stderr) => {
        fs.unlinkSync("temp.py");

        if (error) {
          console.log(error.message);
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

  getRandomExercise(req, res) {
    const language = req.query.language;
    const difficult = parseInt(req.query.difficult); //El valor al ser pasado quedo como un str

    const dataFilePath = "data/exercises.json";
    let exDatas = [];

    //Cargar todos los ejercicios del json
    try {
      exDatas = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    } catch (error) {
      return res.status(500).send("error al rescatar los ejercicios");
    }

    // Filtramos los ejercicios por lenguaje
    let exLanguage = exDatas.filter(
      (exDatas) => exDatas.idLenguaje === language
    ); //Si utilizamos el mismo array sin declarar uno nuevo da error y queda vacio
    exDatas = null;
    //Filtramos los ejercicios ahora por la dificultad
    let exDiff = exLanguage.filter(
      (exLanguage) => exLanguage.dificultad === difficult
    );
    exLanguage = null;

    //Ahora se selecciona un ejercicio al azar
    const exData = exDiff[Math.floor(Math.random() * exDiff.length)];

    //Devolver el ejercicio
    res
      .status(200)
      .send({ message: "Se rescato el ejercicio", exercise: exData });
  }

  getAllExercises(req, res) {
    const dataFilePath = "data/exercises.json";
    let exDatas = [];

    //Cargar todos los ejercicios del json
    try {
      exDatas = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    } catch (error) {
      return res.status(500).send("error al rescatar los ejercicios");
    }

    //Devolver el ejercicio
    res.status(200).send({ exercise: exDatas });
  }

  getSpefExercise(req, res) {
    const key1 = req.query.key1;
    const dataFilePath = "data/exercises.json";
    let exDatas = [];

    try {
      exDatas = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    } catch (error) {
      return res.status(500).send("error al rescatar los ejercicios");
    }

    let exSpef = exDatas.filter((exData) => exData.id === parseInt(key1, 10));
    console.log(exSpef);

    res
      .status(200)
      .send({ message: "Se rescato el ejercicio", exercise: exSpef });
  }
}

new Server();
module.exports = Server;
