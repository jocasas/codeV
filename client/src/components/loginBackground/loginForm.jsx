import { connect } from "react-redux";
import Metaballs from "react-metaballs-js";
import "./loginCss.css";

function LoginUser() {
    return (
        <div className="wrapper grad">
            <div className="dots"></div>
            <div className="wrapper">
                <Metaballs
                    numMetaballs={80}
                    minRadius={3}
                    maxRadius={10.4}
                    speed={1}
                    color="#701616"
                    backgroundColor="#12121200"
                    className="metaball-layout"
                />

                <div className="form">
                    <div className="form-toggle"></div>
                    <div class="form-panel one">
                        <div className="form-header">
                            <h1>Inicio Sesión.</h1>
                        </div>
                        <div className="form-content">
                            <form>
                                <div className="form-group">
                                    <label for="username">Correo/Usuario</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        required="required"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="password">Contraseña</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required="required"
                                    />
                                </div>
                                <div className="form-group">
                                    <a class="form-recovery">
                                        Recuperar Contraseña
                                    </a>
                                </div>
                                <div className="form-group">
                                    <button type="submit">Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="form-panel two"></div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(LoginUser);
