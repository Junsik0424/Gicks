import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/account/LoginPage";
import SignUpPage from "./pages/account/SignUpPage";
import HomePage from "./pages/home/HomePage";
// import RegisterForm from "./components/RegisterForm";
// import login from "./login";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/register" element={<RegisterForm />} /> */}
        {/* <Route path="/login" element={<login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
