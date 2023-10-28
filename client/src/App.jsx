import React from "react";
import { Routes, Route } from "react-router-dom";
import Editor from "./views/editor/App";
import Home from "./views/home/App";
import Login from "./views/login/App";
import Register from "./views/register/App";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
