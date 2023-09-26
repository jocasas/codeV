import React from "react";
import LoginUser from "../../components/loginBackground/loginForm";
import Layout from "../../hocs/layout";

const App = () => {
    return (
        <div>
            <Layout>
                <LoginUser />
            </Layout>
        </div>
    );
};

export default App;
