import React from "react";

const CardDetails = ({ selectedStar }) => {
    console.log("CardDetails received star:", selectedStar);

  if (!selectedStar) {
    return <div>Select a star to view details</div>;
  }

  return (
    <>
    <div className="container">
        <img className="img" src={selectedStar.image} />
      </div>
      <div className="card-info">
        <h2>{selectedStar.name}</h2>
        <p>Also known as: {selectedStar.alsoKnownAs}</p>
        <p>Distance: {selectedStar.description}</p>
      </div>
      
    </>
  );
};

export default CardDetails;
