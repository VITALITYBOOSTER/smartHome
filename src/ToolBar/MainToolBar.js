import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MainToolBar(props) {
  const to = ["/support", "/"];
  const changeButtontContent = ["Help", "Main"];
  const urls = [
    "https://cdn0.iconfinder.com/data/icons/material-design-10/48/62-512.png",
    "https://cdn0.iconfinder.com/data/icons/user-interface-material-2/26/76-512.png"
  ];
  let [isClicked, click] = useState(false);
  let [isMode, handler] = useState(urls[0]);
  const handlerChange = () => {
    handler(isMode = urls[0]);
  }
  const handlerChangeReverse = () => {
    handler(isMode = urls[1])
  }
  return (
    <div className="main-tool-bar">
      <div>
        <div className="main-tool-bar-account">
          <img
            className="cabinet-avatar-image"
            src="https://icon-library.net/images/material-design-user-icon/material-design-user-icon-5.jpg"
          ></img>
          <div>ыва@gmail.com</div>
          <NavLink to={isClicked ? to[0] : to[1]}>
            <button
              className="main-tool-bar-switch-button"
              onClick={() => click(!isClicked)}
            >
              {isClicked ? changeButtontContent[0] : changeButtontContent[1]}
            </button>
          </NavLink>
        </div>
        <div className="main-tool-bar-block"></div>
      </div>
      <hr></hr>
      <img
        onMouseOver={handlerChange}
        onMouseOut={handlerChangeReverse}
        className="exit-door"
        title="Exit"
        src={isMode}
      ></img>
    </div>
  );
}

export default MainToolBar;
