import React from "react";

import bibahlogo from "../images/a123.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <a className="logo" href="#">
          <img src={bibahlogo} alt="Logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
