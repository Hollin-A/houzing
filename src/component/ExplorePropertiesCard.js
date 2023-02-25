import React from "react";

export const ExplorePropertiesCard = ({
  cardImage,
  propertyIcon,
  propertyType,
}) => {
  return (
    <div className="row gx-0">
      <div className="col-6 col-md-12 position-relative overflow-hidden div-event">
        <img src={cardImage} className="img-zoom" alt="my image" />
        <div className="d-none d-md-block overlay position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-50"></div>
        <div className="d-none d-md-block overlay-text position-absolute bottom-0 start-0 w-100 pb-3 text-center text-light ">
          <img
            src={propertyIcon}
            className="invert-logo my-2"
            style={{ height: "4rem" }}
            alt="my image"
          />
          <h5 className="">{propertyType}</h5>
        </div>
      </div>
      <div className="col-6 d-md-none bg-primary opacity-75 position-relative">
        <div className="text-light position-absolute top-50 start-50 translate-middle ">
          <div className="d-flex justify-content-center">
            <img
              src={propertyIcon}
              className="invert-logo my-2"
              style={{ height: "4rem" }}
              alt="image"
            />
          </div>
          <h5 className="text-center">{propertyType}</h5>
        </div>
      </div>
    </div>
  );
};
