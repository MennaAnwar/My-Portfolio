import "./ScrollToTop.css";
import React, { useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const handleScroll = (): void => {
    const scrollButton = document.getElementById("scroll");
    if (scrollButton) {
      if (window.scrollY > 100) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a id="scroll" onClick={scrollToTop} style={{ display: "none" }}>
      <span></span>
    </a>
  );
};

export default ScrollToTop;
