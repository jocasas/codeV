"use client";
import React from "react";
import { ParticlesBackground } from "../../../Components/ParticleBg/ParticlesBackground";
import axios from "axios";

const App = () => {
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    var { username, password } = document.forms[0];

    try {
      console.log("haciendo post-------------------");
      const response = await axios.post("http://localhost:5000/apiRegister", {
        user: username.value,
        password: password.value,
      });

      if (response.status === 200) {
        console.log("Se guardo el usuario");
      } else {
        console.error("Error al guardar el usuario");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ParticlesBackground />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Usuario</label>
            <input type="text" name="username" required />
          </div>
          <div className="input-container">
            <label>Contraseña</label>
            <input type="password" name="password" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
