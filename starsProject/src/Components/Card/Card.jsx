import React from "react";
import "./Card.css";
import { useState } from "react";

const Card = ({ star }) => {
    console.log("Card component rendered with star data:", star);
  const [starChoice, setStarChoice] = useState("");

  const handleCardDetails = () => {
    setStarChoice(star);
  };
  
  return (
    <>
      <div className="container">
        <div className="card-container">
          {star && star.map((s, index) => {
            return (
              <button
                onClick={handleCardDetails}
                key={index}
                className="card-item"
              >
                {s.name}
              </button>
            );
          })}
        </div>
        <div className="img-container">
          <img
            className="img"
            alt="watchingTheStars"
            src="./LookingAtConstellations.jpeg"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
