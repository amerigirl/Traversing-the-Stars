import React from "react";

const CardDetails = ({ star, selectedStar }) => {
  return (
    <div>
      {star &&
        star
          .filter((s) => s.name === selectedStar)
          .map((s, index) => {
            return (
              <div key={index}>
                <h2>{s.name}</h2>
                <h1>{s.a}</h1>
              </div>
            );
          })}
    </div>
  );
};

export default CardDetails;
