import React from "react";
import image from "../assets/houzing-01.jpg";

export const FeaturedPropertyCards = ({
  image,
  propertyTitle,
  tagline,
  availability,
  brokerImage,
  address1,
  address2,
}) => {
  const cardClasses = `opacity-${availability ? "100" : "50"}`;
  const badgeClasses = `badge bg-${availability ? "primary" : "light"} text-${
    availability ? "light" : "dark"
  } featuredBadge`;
  return (
    <div className={cardClasses}>
      <div className="card featuredPropertyCard">
        <div className="featuredPropertyCardBox position-relative">
          <img
            src={image}
            className="card-img-top featuredPropertyCardImg  bg-info"
            alt="..."
          />
          <div className="rounded-circle bg-danger circular-badge overflow-hidden border border-light border-4">
            <img src={brokerImage} className="brokerImage" />
          </div>
        </div>
        <span className={badgeClasses}>
          {availability ? "Available" : "Sold out"}
        </span>
        <div className="card-body list-group list-group-flush">
          <div className="list-group-item">
            <h5 className="card-title mb-0 text-primary">{propertyTitle}</h5>
          </div>
          <div className="list-group-item">
            <p className="card-text mt-0 mb-2 featuredTagline">{tagline}</p>
          </div>
          <div className="address-and-buttons list-group-item">
            <p className="card-text m-0  text-dark address-text">{address1}</p>
            <p className="card-text m-0 mb-1 text-dark address-text">
              {address2}
            </p>
            <button type="button" class="btn btn-outline-primary btn-sm me-2">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
