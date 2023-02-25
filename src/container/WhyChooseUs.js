import React from "react";
import { SectionTitle } from "../component/SectionTitle.js";
import { WhyChooseUsCard } from "../component/WhyChooseUsCard.js";

export const WhyChooseUs = () => {
  return (
    <section className="bg-light py-md-5 py-4">
      <div className="container">
        <SectionTitle
          titleText="Why Choose Us"
          tagline="Experience expert guidance and unparalleled service for all your real estate needs"
        />
        <div className="row row-cols-2 row-cols-md-4 g-4">
          <div className="col">
            <WhyChooseUsCard
              cardTitle="Experienced professionals"
              cardText="Guiding you home with expert knowledge and years of experience"
              biIconClass="bi-lightbulb-fill"
            />
          </div>
          <div className="col">
            <WhyChooseUsCard
              cardTitle="Personalized service"
              cardText="Your dream home, our top priority - tailored to your needs"
              biIconClass="bi-heart-fill"
            />
          </div>
          <div className="col">
            <WhyChooseUsCard
              cardTitle="Extensive network"
              cardText="Unlock exclusive properties with our wide industry connections"
              biIconClass="bi-link"
            />
          </div>
          <div className="col">
            <WhyChooseUsCard
              cardTitle="Innovative technology"
              cardText="Modernizing the buying and selling process with cutting-edge tools"
              biIconClass="bi-laptop-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
