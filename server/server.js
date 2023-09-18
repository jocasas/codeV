const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");

class PythonRunner {
  constructor() {
    this.app = express();
    this.port = 5000;

    this.app.get("/api", this.handleApiRequest.bind(this));

    this.app.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
      console.log(`Visit http://localhost:${this.port}/api`);
    });
  }

  handleApiRequest(req, res) {
    try {
      const pythonCode = 'print("hola\\n4")';

      // Write the Python code to a temporary file
      fs.writeFileSync("temp.py", pythonCode);

      exec(`python temp.py`, (error, stdout, stderr) => {
        fs.unlinkSync("temp.py");

        if (error) {
          res.status(500).json({ error: error.message });
        } else {
          console.log(stdout);
          res.json({ result: stdout });
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

new PythonRunner();
