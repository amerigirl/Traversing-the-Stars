import React from "react";

const CardDetails = ({ selectedStar }) => {
  // if (!selectedStar) {
  //   return <div>Select a star to view details</div>;
  // }

  return (
    <>
      <div>
        <h2>{selectedStar.name}</h2>
        <p>Also known as: {selectedStar.alsoKnownAs}</p>
        <p>Distance: {selectedStar.description}</p>
      </div>
      <div>
        <img src={selectedStar.image} />
      </div>
    </>
  );
};

export default CardDetails;
