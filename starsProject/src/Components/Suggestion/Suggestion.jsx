import React from "react";
import "./Suggest.css";
import { useState } from "react";

/**
 * The Suggestion component is responsible for rendering the suggestion form.When the user clicks the submit button, the form data is stored in the suggestion state.
 * 
 * This component is incomplete as it does not currently save the suggestion.
 */       

const Suggestion = () => {
  const [name, setName] = useState("");
  const [constellation, setConstellation] = useState("");
  const [comment, setComment] = useState("");
  const [suggestion, setSuggestion] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuggestion = () => {
        setIsSubmitted(true);

    if (name && constellation) {
      setSuggestion({ name, constellation, comment });
      setName("");
      setConstellation("");
      setComment("");
          setIsSubmitted(false);
          alert("Your submission was made!")

    }
    console.log(name, constellation, comment);
  };

  return (
    <div className="sug-container">
      <div className="input-text">
        <p>
          Do you have a favorite constellation that you'd like added to the
          list? Fill out the form below to make a suggestion!
        </p>
        <div className="input-fields">
          <input
            className="input"
            placeholder="  Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="input"
            placeholder="  Constellation"
            value={constellation}
            onChange={(e) => setConstellation(e.target.value)}
          />

          <textarea
            className="textarea"
            placeholder="  Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
      

          />
        </div>
        {isSubmitted && (!name || !constellation) && (
          <p>Name and constellation are required! </p>
        )}
        <button className="btn" onClick={handleSuggestion}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Suggestion;
