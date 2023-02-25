import React from "react";
import { SectionTitle } from "../component/SectionTitle.js";
import { ExplorePropertiesCard } from "../component/ExplorePropertiesCard.js";
import house from "../assets/house.jpg";
import apartment from "../assets/apartment.jpg";
import condo from "../assets/condo.jpg";
import villa from "../assets/villa.jpg";
import officeSpace from "../assets/office-space.jpg";
import houseIcon from "../assets/house.png";
import apartmentIcon from "../assets/apartment.png";
import condoIcon from "../assets/condo.png";
import villaIcon from "../assets/villa.png";
import officeSpaceIcon from "../assets/office-space.png";

export const ExploreProperties = () => {
  return (
    <section className="py-md-5 py-4" id="categories">
      <div className="container">
        <SectionTitle
          titleText="Explore Our Properties"
          tagline="Discover your dream home with our extensive range of properties"
        />
        <div className="row row-cols-md-5 row-cols-1 gy-3 gy-md-0">
            <div className="col">
                <ExplorePropertiesCard cardImage={house} propertyIcon={houseIcon} propertyType="House"/>
            </div>
            <div className="col">
                <ExplorePropertiesCard cardImage={apartment} propertyIcon={apartmentIcon} propertyType="Apartment"/>
            </div>
            <div className="col">
                <ExplorePropertiesCard cardImage={condo} propertyIcon={condoIcon} propertyType="Condo"/>
            </div>
            <div className="col">
                <ExplorePropertiesCard cardImage={villa} propertyIcon={villaIcon} propertyType="Villa"/>
            </div>
            <div className="col">
                <ExplorePropertiesCard cardImage={officeSpace} propertyIcon={officeSpaceIcon} propertyType="Office Space"/>
            </div>
        </div>
      </div>
    </section>
  );
};
