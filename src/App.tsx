import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import ActivateUser from "./pages/activate-user/ActivateUser";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activate-user" element={<ActivateUser />} />
      </Routes>
    </Fragment>
  );
};

export default App;
