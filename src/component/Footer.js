import React from "react";
import houzingLogo from "../assets/logo.png";

export const Footer = () => {
  return (
    <section className="bg-primary text-light py-md-5 pt-4 pb-1">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-4 col-12">
            <a className="navbar-brand d-flex align-items-center fs-1" href="#">
              <img
                src={houzingLogo}
                className="me-2 invert-logo"
                style={{ height: "2.5rem" }}
              />
              Houzing
            </a>
            <p className="py-sm-1 py-3 m-0">
              Find your dream home with Houzing. Let us help you make it a
              reality.
            </p>
            <p className="copyright-text">&copy; 2021 Houzing (Pvt) Ltd</p>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <h4 className="text-info">Contact Us</h4>
            <p className="m-0">
              Houzing Pvt Ltd
              <br />
              125 Lake City Way NE <br />
              Seattle, WA 98125
            </p>
            <p className="m-0 ">(718) 555-0161</p>
            <p className="m-0">info@houzing.com</p>
          </div>
          <div className="col-lg-2 d-lg-block d-none">
            <h4 className="text-info">Sitemap</h4>
            <p
              className="m-0 footer-link"
              onClick={() => {
                const section = document.getElementById("featured");
                section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Featured
            </p>
            <p
              className="m-0 footer-link"
              onClick={() => {
                const section = document.getElementById("categories");
                section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Categories
            </p>
            <p
              className="m-0 footer-link"
              onClick={() => {
                const section = document.getElementById("trending");
                section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Trending
            </p>
            <p
              className="m-0 footer-link"
              onClick={() => {
                const section = document.getElementById("FAQ");
                section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQ
            </p>
            <p
              className="m-0 footer-link"
              onClick={() => {
                const section = document.getElementById("reviews");
                section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Reviews
            </p>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <h4 className="text-info">Subscribe for our Newsletters</h4>
            <p className="m-0">
              Stay in the loop with our latest property updates
            </p>
            <form>
              <div className="row g-1 py-3">
                <div className="col-8">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    placeholder="Type your email here"
                  />
                </div>
                <div className="col-4">
                  <button
                    type="submit"
                    className="btn btn-info text-primary fw-bold"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
