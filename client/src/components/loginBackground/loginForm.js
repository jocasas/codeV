import { connect } from "react-redux";
import Metaballs from "react-metaballs-js";
import "./loginCss.css";

function LoginUser() {
    return (
        <div class="wrapper grad">
            <div class="dots"></div>
            <div className="wrapper">
                <Metaballs
                    numMetaballs={120}
                    minRadius={3}
                    maxRadius={7.5}
                    speed={3}
                    color="#b1376c"
                    backgroundColor="#00121212"
                    interactive="canvas"
                    className="metaball-layout"
                />
                <Metaballs
                    numMetaballs={20}
                    minRadius={3}
                    maxRadius={7.5}
                    speed={3}
                    color="#152a8e"
                    backgroundColor="#00121212"
                    interactive="canvas"
                    className="metaball-layout"
                />
                <div className="terminalLogin">
                    <div className="barrita">
                        Login
                        <button className="bottonX"></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(LoginUser);
