import React from "react";
import willowdaleManor01 from "../assets/willowdale-manor-01.jpg";
import willowdaleManor02 from "../assets/willowdale-manor-02.jpg";
import willowdaleManor03 from "../assets/willowdale-manor-03.jpg";

export const Trending = () => {
  return (
    <section id="trending">
      <div className="position-relative bg-primary">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel carousel-trending slide opacity-75"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner carousel-trending">
            <div className="carousel-item active">
              <img src={willowdaleManor01} className="d-block " alt="..." />
            </div>
            <div className="carousel-item">
              <img src={willowdaleManor02} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={willowdaleManor03} className="d-block" alt="..." />
            </div>
          </div>
        </div>
        <div
          className="position-absolute top-50 start-50 translate-middle text-light text-center py-3"
          style={{ textShadow: "2px 2px 8px var(--bs-dark)" }}
        >
          <h3 className="fs-2 fw-bold">TRENDING</h3>
          <p className="fs-5">
            Sprawling Ranch House in the heart of California is the week's most
            popular home
          </p>
        </div>
      </div>
    </section>
  );
};
