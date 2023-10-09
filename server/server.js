const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = 5000;
    this.app.use(express.json());
    this.app.use(cors());

    this.app.post("/api", this.doPythonCompilation.bind(this));

    if (process.env.NODE_ENV !== "test") {
      this.app.listen(this.port, () => {
        console.log(`Server is listening on port ${this.port}`);
        console.log(`Visit http://localhost:${this.port}/api`);
      });
    }
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
