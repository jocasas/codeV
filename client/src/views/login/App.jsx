import React from 'react'
import { ParticlesBackground } from '../../components/ParticleBg/ParticlesBackground'
import axios from "axios";

const App = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        var { username, password } = document.forms[0];

        try {
            console.log("haciendo post login-------------------");
            const response = await axios.post("http://localhost:5000/apiLogin", {
            user: username.value, password: password.value,
            });

            if (response.status === 200) {
                console.log("Se logueo al usuario");
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
    )
}

export default App