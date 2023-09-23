import React from "react";
import { Link } from "react-router-dom";
import NavbarFooter from "../../components/loginForm/loginForm";
import Layout from "../../hocs/layout";

const App = () => {
    return (
        <div>
            <Layout>
                <NavbarFooter />
            </Layout>
            <Link to="/editor">Editor</Link>
            <hr />
            <Link to="/">Home</Link>
        </div>
    );
};

export default App;
