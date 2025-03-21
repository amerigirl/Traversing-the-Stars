import React from "react";
import "./Suggest.css";

const Suggestion = () => {
  return (
    <div className="sug-container">
      <div className="inputText">
        <p>
          Do you have a favorite constellation that you'd like added to the
          list? Fill out the form below to make a suggestion!
        </p>
        <div className="input-fields">
          <input />
          <input />
          <textarea/>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
