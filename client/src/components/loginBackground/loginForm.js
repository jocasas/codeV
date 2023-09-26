import { connect } from "react-redux";
import Metaballs from "react-metaballs-js";
import "./loginCss.css";

function LoginUser() {
    return (
        <div class="wrapper grad">
            <div class="dots"></div>
            <div className="wrapper">
                <Metaballs
                    numMetaballs={100}
                    minRadius={3}
                    maxRadius={10.4}
                    speed={1}
                    color="#701616"
                    backgroundColor="#12121200"
                    interactive="window"
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
