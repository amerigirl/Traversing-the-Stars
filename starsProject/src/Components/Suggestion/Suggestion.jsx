import React from "react";
import "./Suggest.css";
import { useState } from "react";

const Suggestion = () => {
  const [name, setName] = useState("");
  const [constellation, setConstellation] = useState("");
  const [comment, setComment] = useState("");
  const [suggestion, setSuggestion] = useState({})

  const handleSuggestion = (e) => {

setSuggestion({
    
})

  }

  return (
    <div className="sug-container">
      <div className="inputText">
        <p>
          Do you have a favorite constellation that you'd like added to the
          list? Fill out the form below to make a suggestion!
        </p>
        <div className="input-fields">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Constellation"
            value={constellation}
            onChange={(e) => setConstellation(e.target.value)}
          />

          <textarea
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button onClick={(e) => handleSuggestion(e)}>Submit</button>
      </div>
    </div>
  );
};

export default Suggestion;
