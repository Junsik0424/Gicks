import "src/components/styles.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginForm from "./components/logNregPage/LoginForm";
// import RegisterForm from "./components/RegisterForm";
// import login from "./login";

const App: React.FC = () => {
  return (
    // <div id="whole">
    //   <div className="left-navigation">
    //     <div id="1-section">
    //       <div id="icon-home"></div>
    //     </div>
    //     <div id="2-section">
    //       <div id="icon-study"></div>
    //       <div id="icon-taxi"></div>
    //       <div id="icon-purchase"></div>
    //       <div id="icon-etc"></div>
    //     </div>
    //     <div id="3-section">
    //       <div id="chatroom"></div>
    //     </div>
    //     <div id="4-section">
    //       <div id="writing"></div>
    //     </div>
    //   </div>
    //   <div className="top">
    //     <div className="top-search"></div>
    //     <div className="login-btn">
    //       <Router>
    //         <Routes>
    //           <Route path="/login" element={<LoginForm />} />
    //         </Routes>
    //       </Router>
    //     </div>
    //     <div className="tags">
    //       <div id="all-tag"></div>
    //       <div id="study-tag"></div>
    //       <div id="taxi-tag"></div>
    //       <div id="purchase-tag"></div>
    //       <div id="delivery-tag"></div>
    //     </div>
    //   </div>
    //   <div></div>
    // </div>
  );
};

export default App;
