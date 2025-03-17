import React from "react";
import "./Card.css";

const Card = ({ star }) => {
  return (
    <div>
      {star.map((s, index) => {
        return <div key={index}>
          {s.name}
        </div>
      })}
    </div>
  );
};

export default Card;
