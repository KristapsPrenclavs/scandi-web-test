import React from "react";
import "./ViewCount.css";

export const ViewCount = (props) => {
  const increaseSlides = () => {
    if (props.count < props.slides.length) {
      props.setCount(props.count + 1);
    } else {
      window.alert("You are viewing all slides.");
    }
  };
  const decreaseSlides = () => {
    if (props.count > 1) {
      props.setCount(props.count - 1);
    } else {
      window.alert("Cant view less than 1 slide");
    }
  };
  return (
    <div className="plus-minus">
      <button className="decrease" onClick={() => decreaseSlides()}>
        -
      </button>
      <button className="increase" onClick={() => increaseSlides()}>
        +
      </button>
    </div>
  );
};
