import React, { useState, useEffect } from "react";
import "./Slider.css";
import { Arrows } from "../Arrows/Arrows";
import { ViewCount } from "../ViewCount/ViewCount";

export const Slider = () => {
  const _SLIDECOUNT = 8;
  const [slides, setSlides] = useState(
    Array.from({ length: _SLIDECOUNT }, (key, i) => "Slide " + (i + 1))
  );
  const [initial, setInitial] = useState(slides);
  const [count, setCount] = useState(1);
  const [jump, setJump] = useState(0);
  const [shownSlides, setShownSlides] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < count; i++) {
      temp.push(slides[i]);
    }
    setShownSlides(temp);
  }, [slides, count]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < initial.length; i++) {
      if (i === jump) {
        temp.push(initial[i - 1]);
      }
    }
    return () => {
      setShownSlides(temp);
      setJump(0);
      setCount(1);
    };
  }, [jump]);

  // const sort = (val, s) => {
  //   let first, rest;
  //   for (let i = 0; i < s.length; i++) {
  //     if (slides[i] === val) {
  //       [first, ...rest] = s;
  //       let sl = [...rest, first];
  //     }
  //   }
  // };

  return (
    <div className="app">
      <div className="container">
        <div className="carousel">
          <div className="slider" style={{ width: shownSlides.length * 500 }}>
            {shownSlides.map((slide) => {
              return (
                <section className="slide" key={slide}>
                  {slide}
                </section>
              );
            })}
          </div>

          <Arrows
            slides={slides}
            setSlideArray={(newArray) => setSlides(newArray)}
          />
        </div>

        <ViewCount
          slides={slides}
          count={count}
          setCount={(newCount) => setCount(newCount)}
        />
        <input
          type="number"
          placeholder="Go to slide"
          onChange={(e) => {
            let val = parseInt(e.target.value);
            if (val >= 1 && val < slides.length + 1) {
              // sort(val, slides);
              // setSlides(sort(slides, val));
              setJump(val);
            }
          }}
        />
      </div>
    </div>
  );
};
