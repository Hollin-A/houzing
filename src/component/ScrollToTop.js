import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top btn btn-success" onClick={scrollToTop}>
          <i className="bi bi-caret-up-fill text-light fs-4"></i>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
