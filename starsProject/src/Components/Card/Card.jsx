import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";
import CardDetails from "./CardDetails/CardDetails";

const Card = ({ stars }) => {
  console.log("Stars", stars);
  const [selectedStarId, setSelectedStarId] = useState(null);

  const selectedStar = stars.find((star) => star.id === selectedStarId);


  return (
    <>
      <div className="container">
        <div className="card-container">
          {stars.map((star) => {
            console.log("Selected Star ID:", selectedStarId);
            return (
              <button
                key={star.id}
                className="card-item"
                onClick={() => {
                  console.log("Clicking star with ID:", star.id);

                  setSelectedStarId(star.id);
                }}
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
      <div>{selectedStar && <CardDetails selectedStar={selectedStar} />}</div>
    </>
  );
};

export default Card;
