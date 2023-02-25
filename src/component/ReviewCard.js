import React from "react";

export const ReviewCard = ({ review, Name, Address }) => {
  return (
    <div className="review-card overflow-hidden">
      <div className="review-card-review row g-0 pt-4 pb-3">
        <div className="col-2 align-item-end d-flex justify-content-end">
          <i className="bi bi-quote text-primary" />
        </div>
        <div className="col-8 review-card-review-text d-flex align-items-center text-dark text-center">
          {review}
        </div>
        <div className="col-2 align-item-end d-flex justify-content-start">
          <i
            className="bi bi-quote text-primary"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      </div>
      <div className="review-card-person text-center pb-5">
        <p className="fs-4 fw-bold my-0 text-primary">{Name}</p>
        <p className="my-0 lh-sm">{Address}</p>
      </div>
    </div>
  );
};
