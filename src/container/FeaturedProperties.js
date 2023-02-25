import React from "react";
import { SectionTitle } from "../component/SectionTitle.js";
import { FeaturedPropertyCards } from "../component/FeaturedPropertyCards.js";
import featuredImg01 from "../assets/featured-01.jpg";
import featuredImg02 from "../assets/featured-02.jpg";
import featuredImg03 from "../assets/featured-03.jpg";
import featuredImg04 from "../assets/featured-04.jpg";
import broker01 from "../assets/broker-01.jpg";
import broker02 from "../assets/broker-02.jpg";
import broker03 from "../assets/broker-03.jpg";
import broker04 from "../assets/broker-04.jpg";

export const FeaturedProperties = () => {
  return (
    <section className="py-md-5 py-4" id="featured">
      <div className="container">
        <SectionTitle
          titleText="Discover Our Featured Properties"
          tagline="Find your dream home in our hand-picked selection of featured properties"
        />
        <div className="row g-3">
          <div className="col-6 col-lg-3">
            <FeaturedPropertyCards
              image={featuredImg01}
              tagline="Elevate your living experience"
              propertyTitle="Willowcrest"
              availability={true}
              brokerImage={broker01}
              address1='Seattle'
              address2='WA 98101'
            />
          </div>
          <div className="col-6 col-lg-3">
            <FeaturedPropertyCards
              image={featuredImg02}
              tagline="New level of tranquility"
              propertyTitle="Cedarwood"
              availability={false}
              brokerImage={broker02}
              address1='Austin' 
              address2='TX 78701'

            />
          </div>
          <div className="col-6 col-lg-3">
            <FeaturedPropertyCards
              image={featuredImg03}
              tagline="Where luxury meets comfort"
              propertyTitle="Sunflower Grove"
              availability={true}
              brokerImage={broker03}
              address1='Orlando'
              address2='FL 32801'

            />
          </div>
          <div className="col-6 col-lg-3">
            <FeaturedPropertyCards
              image={featuredImg04}
              tagline="The beauty of simplicity"
              propertyTitle="Meadowview"
              availability={true}
              brokerImage={broker04}
              address1='Denver'
              address2='CO 80201'

            />
          </div>
        </div>
      </div>
    </section>
  );
};
