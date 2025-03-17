import React from "react";

const CardDetails = ({ star }) => {
  return (
    <div>
      {star.map((s, index) => {
        return <div key={index}>{s.name}</div>;
      })}
    </div>
  );
};

export default CardDetails;
