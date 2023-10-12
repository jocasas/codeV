/**
 * @name Interpreter
 * @type Unitario
 * @author josepablo
 * Check | El interpretador de python este instalado
 * @param {any} 'supertest'
 * @returns {any}
 */
const { execSync } = require("child_process"); //para ejecutar el comando que encuentra el interpretador
const path = require("path"); //para sacar el nombrebase de la ruta

test("Python interpreter name is valid", () => {
  const pythonInterpreterName = getPythonInterpreterName();
  console.log(`Interpreter_name : ${pythonInterpreterName}`);
  // Check if the interpreter name is one of "python," "py," or "py3"
  const validInterpreterNames = ["python", "py", "py3"];
  expect(validInterpreterNames.includes(pythonInterpreterName)).toBe(true);
});

function getPythonInterpreterName() {
  try {
    // Use 'py -c "import sys; print(sys.executable)"' for Windows
    if (process.platform === "win32") {
      const fullExecutablePath = execSync(
        'py -c "import sys; print(sys.executable)"',
        { encoding: "utf-8" }
      ).trim();
      const baseName = path.basename(fullExecutablePath); // Extract just the executable name
      return baseName.replace(/\.exe$/, ""); // Remove the ".exe" extension
    }
    // Use 'python3 -c "import sys; print(sys.executable)"' for Unix-based systems
    const fullExecutablePath = execSync(
      'python3 -c "import sys; print(sys.executable)"',
      { encoding: "utf-8" }
    ).trim();
    const baseName = path.basename(fullExecutablePath); // Extract just the executable name
    return baseName;
  } catch (error) {
    return "";
  }
}
