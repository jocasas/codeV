import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./container/pages/pageLogin";

function App() {
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
