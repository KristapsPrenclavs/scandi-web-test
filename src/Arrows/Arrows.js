import React from "react";
import "./Arrows.css";

export const Arrows = (props) => {
  const handlePrev = () => {
    let last = props.slides.slice(-1);
    let rest = props.slides.slice(0, -1);
    let slides = [...last, ...rest];
    props.setSlideArray(slides);
  };
  const handleNext = () => {
    let [first, ...rest] = props.slides;
    let slides = [...rest, first];
    props.setSlideArray(slides);
  };
  return (
    <div className="arrows">
      <span className="arrow-prev" onClick={() => handlePrev()}>
        prev
      </span>
      <span className="arrow-next" onClick={() => handleNext()}>
        next
      </span>
    </div>
  );
};
