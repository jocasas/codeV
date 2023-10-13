/**
 * @name NodeVer
 * @type Unitario
 * @author josepablo
 * Check | La version de node es superior a 18 en el equipo
 * @param {any} 'supertest'
 * @returns {any}
 */
test("Node.js version is above 18", () => {
  const nodeVersion = process.version; // Get the Node.js version as a string
  const nodeMajorVersion = parseInt(nodeVersion.slice(1), 10); // Parse the major version

  // Assert that the major version is greater than or equal to 18
  expect(nodeMajorVersion).toBeGreaterThanOrEqual(18);
});
