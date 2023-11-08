"use client";
import React, { FormEvent } from "react";
import { ParticlesBackground } from "../../../Components/ParticleBg/ParticlesBackground";
import axios from "axios";

export default function Page() {
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Handling form submission");
    var { username, password } = document.forms[0];
    console.log("Username:", username.value);
    console.log("Password:", password.value);
    try {
      console.log("haciendo post login-------------------");
      const response = await axios.post("http://localhost:5000/apiLogin", {
        user: username.value,
        password: password.value,
      });

      if (response.status === 200) {
        console.log("Se logueo al usuario");
        console.log("token supersecreto: " + response.data.accessToken);
        //Almacenar el token del usuario para la persistencia
        localStorage.setItem("token", response.data.accessToken);
      } else {
        console.error("Error al iniciar sesion");
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
}
