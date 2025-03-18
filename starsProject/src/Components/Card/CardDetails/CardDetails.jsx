import React from "react";

const CardDetails = ({ selectedStar }) => {
  if (!selectedStar) {
    return <div>Select a star to view details</div>;
  }

  return (
    <div>
      <h2>{selectedStar.name}</h2>
      <p>Constellation: {selectedStar.constellation}</p>
      <p>Distance: {selectedStar.distance} light years</p>
    </div>
  );
};

export default CardDetails;
