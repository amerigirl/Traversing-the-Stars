import React from "react";
import "./Card.css";

const Card = ({ star }) => {
  return (
    <div className="card-container">
      {star.map((s, index) => {
        return <button key={index} className="card-item">
          {s.name}
        </button>
      })}
    </div>
  );
};

export default Card;
