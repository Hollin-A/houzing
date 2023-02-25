import React from "react";

export const WhyChooseUsCard = ({ cardTitle, cardText, biIconClass }) => {
  const cardIconClass = `bi ${biIconClass} fs-1 text-dark`;

  return (
    <div className="card text-dark text-center h-100">
      <div
        className="d-flex justify-content-center align-items-center card-img-top"
        style={{ height: "7rem" }}
      >
        <i className={cardIconClass} />
      </div>
      <div className="card-body bg-light">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text lh-sm">{cardText}</p>
      </div>
    </div>
  );
};
