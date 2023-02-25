import React from "react";
import { SectionTitle } from "../component/SectionTitle";
import { ReviewCard } from "../component/ReviewCard";

export const CustomerReview = () => {
  return (
    <section className="bg-light py-md-5 py-4" id="reviews">
      <div className="container">
        <SectionTitle
          titleText="Reviews"
          tagline="See what our satisfied clients have to say about their experience with us"
        />
        <div id="carouselExampleIndicators" className="carousel slide review-carousel mx-auto">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner review-carousel-box mx-auto">
            <div className="carousel-item active">
              <ReviewCard
                review="I had a great experience working with the team at XYZ Real Estate. They were knowledgeable, friendly, and helped me find my dream home in Miami. I highly recommend them to anyone looking for a reliable real estate agent."
                Name="John Carter"
                Address="Miami, Florida"
              />
            </div>
            <div className="carousel-item">
              <ReviewCard
                review="I recently sold my home through ABC Real Estate, and the process couldn't have been smoother. The team was responsive, professional, and kept me informed every step of the way. I would definitely use them again in the future."
                Name="Sarah Johnson"
                Address="Seattle, Washington"
              />
            </div>
            <div className="carousel-item">
              <ReviewCard
                review="I was a first-time homebuyer and was quite overwhelmed by the process, but the team at LMN Real Estate made everything easy for me. They patiently explained every step and found me a great home in Austin. Highly recommended!"
                Name="Mark Davis"
                Address="Austin, Texas"
              />
            </div>
            <div className="carousel-item">
              <ReviewCard
                review="I had a fantastic experience working with the team at PQR Real Estate. They were highly skilled, honest, and dedicated to finding the perfect home for me in New York City. They exceeded my expectations and I couldn't be happier with my new home."
                Name="Jessica Lee"
                Address="New York City, New York"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};
