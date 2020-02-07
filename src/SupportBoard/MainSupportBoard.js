import React from "react";
import QuestionComponent from "./QuestionComponents/QuestionComponent";
import { NavLink } from "react-router-dom";

function MainSupportBoard(props) {
  return (
    <div className="main-support-board">
      <div className="main-support-board-header">Help</div>
      <div className="main-support-board-subtitle">Most commmon questions</div>
      <QuestionComponent />
      <QuestionComponent />
      <QuestionComponent />
      <QuestionComponent />
      <div>
        <div className="main-support-board-subtitle">Contact us</div>
        <div className="main-support-board-contact-us-block">
          <div className="main-support-board-contact-us-subblock">
            <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-36af2c9cb0982d51807a907158e5e8c3.png" />
            <div>Need more help?</div>
          </div>
          <div className="main-support-board-contact-us-subblock">
            <img
              className="main-question-component-image"
              src="https://cdn0.iconfinder.com/data/icons/business-solid-style-1/22/Feedback-512.png"
            />
            <div>Send Feedback</div>
          </div>
          <div className="main-support-board-contact-us-subblock">
            <NavLink to="/video">
              <img
                className="main-question-component-image"
                src="https://cdn2.iconfinder.com/data/icons/lined-help/48/a-06-512.png"
              />
            </NavLink>
            <div>Watch helping video</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSupportBoard;
