import "src/components/styles.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const login: React.FC = () => {
  return (
    <div>
      <div id="header_inner">
        <a href="http://www.naver.com" className="logo">
          <img className="img" src="src/img/googleimg.png" />
        </a>
      </div>
      <div id="container">
        <Router>
          <div className="app-container">
            <div className="form-switch-container"></div>
            <div className="form-content">
              <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default login;
