import React from "react";
// import callCenterAgent from "../assets/call-center-agent.jpg";

export const ContactForm = () => {
  return (
    <section className="bg-primary ">
      <div className="position-relative">
        <div className="parallax-img" />
        <div className="container">
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="row text-light py-md-5 py-4 ">
              <div className="col-md-6 col-12">
                <p
                  className="text-md-end text-center fs-3 fw-bold"
                  style={{ textShadow: "2px 2px 8px var(--bs-dark)" }}
                >
                  DROP YOUR DETAILS HERE OUR AGENTS WILL CONTACT YOU SOON
                </p>
              </div>
              <div className="col-md-6 col-12 ">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Name *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPhoneNumber"
                      placeholder="Phone Number *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail"
                      placeholder="Email Address *"
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select Location *</option>
                      <option value="NJ">New Jersey</option>
                      <option value="RI">Rhode Island</option>
                      <option value="MA">Massachusetts</option>
                      <option value="CT">Connecticut</option>
                      <option value="MD">Maryland</option>
                      <option value="DE">Delaware</option>
                      <option value="NY">New York</option>
                      <option value="FL">Florida</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="OH">Ohio</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Message *"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
