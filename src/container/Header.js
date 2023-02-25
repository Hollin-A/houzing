import React from "react";
import bgImage from "../assets/houzing-01.jpg";

export const Header = () => {
  return (
    <section className="bg-dark position-relative overflow-hidden header-height">
      <img
        src={bgImage}
        className="header-image d-flex align-items-center opacity-75"
        alt="image"
      />
      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-light p-3"
        style={{ textShadow: "#0D0D0D 0.1em 0.1em 0.5em" }}
      >
        <p className="mb-1">IT IS GREAT TO BE HOME</p>
        <h2 className="fw-bold fs-1 ">Find Your Perfect Home</h2>
      </div>
    </section>
  );
};
