import React from "react";
import { SectionTitle } from "../component/SectionTitle";

export const FAQ = () => {
  return (
    <section className="py-md-5 py-4" id="FAQ">
      <div className="container">
        <SectionTitle titleText="Frequently Asked Questions" />
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How can I determine the value of my home?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                There are several ways to determine the value of your home,
                including hiring a professional appraiser, using online
                valuation tools, or asking a real estate agent to provide a
                comparative market analysis (CMA). A CMA compares your home to
                similar properties in the area that have recently sold or are
                currently on the market.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What is a home inspection and why is it important?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                A home inspection is an evaluation of a home's condition by a
                professional inspector. The inspection typically covers the
                home's structure, electrical, plumbing, heating and cooling
                systems, and other components. It is important because it can
                help identify potential issues with the home that may not be
                immediately visible to a buyer, allowing them to make an
                informed decision about whether or not to proceed with the
                purchase.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How long does it typically take to sell a home?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The length of time it takes to sell a home can vary depending on
                factors such as the local housing market, the condition of the
                home, and the price. On average, it can take anywhere from a few
                weeks to several months to sell a home.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                What is a title search and why is it important?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                A title search is an examination of public records to confirm a
                property's legal ownership and uncover any liens, judgments, or
                other claims against the property. It is important because it
                ensures that the buyer will have clear ownership of the property
                without any legal issues that may arise after the sale.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
