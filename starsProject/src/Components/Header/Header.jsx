import React from "react";
import "../Header/Header.css";

/**
 * The Header component is responsible for rendering the header of the application.
 */

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerText">
        <h1 className="header">Traversing the Stars</h1>
        <h4 className="subTitle">It's easier than you might Think!</h4>
      </div>
    </div>
  );
};

export default Header;
