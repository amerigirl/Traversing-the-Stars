import React from "react";
import "./CardDetails.css";

const CardDetails = ({ selectedStar }) => {
  console.log("CardDetails received star:", selectedStar);

  if (!selectedStar) {
    return <div>Select a star to view details</div>;
  }

  return (
    <>
      <div className="cd-container-main">
        <div className="cd-container">
          <div>
            <img className="cd-img" src={selectedStar.image} />
          </div>
          <div className="card-info">
            <h2>{selectedStar.name}</h2>
            <p>Also known as: {selectedStar.alsoKnownAs}</p>
            <p>Distance: {selectedStar.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
