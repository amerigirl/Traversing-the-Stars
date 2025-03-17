import React from "react";
import "./Card.css";

const Card = ({ star }) => {
  return (
    <>
      <div className="container">
        <div className="card-container">
          {star.map((s, index) => {
            return (
              <button key={index} className="card-item">
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
