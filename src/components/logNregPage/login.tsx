import "src/components/styles.css";

import React from "react";
const login: React.FC = () => {
  return (
    <div>
      <div id="header_inner">
        <a href="http://www.naver.com" className="logo">
          <img className="img" src="src/img/googleimg.png" />
        </a>
      </div>
      <div id="container">
        <div className="app-container">
          <div className="form-switch-container"></div>
          <div className="form-content"></div>
        </div>
      </div>
    </div>
  );
};

export default login;
