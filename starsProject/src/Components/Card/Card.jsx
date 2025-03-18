import React from "react";
import "./Card.css";

const Card = ({ stars, onStarSelect }) => {
  
  return (
    <>
      <div className="container">
        <div className="card-container">
          {stars && stars.map((star, index) => {
            return (
              <button
                key={index}
                className="card-item"
                onClick={() => onStarSelect(star)}
              >
                {star.name}
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
