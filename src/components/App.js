import React, { Component, useState } from "react";
import slides from "../data";
import "../styles/App.css";
let index = 0;
const App = (props) => {
  const [slide, setSlide] = useState(props.slides[0]);

  const showNext = () => {
    index = index + 1;
    setSlide(props.slides[index]);
  };

  const showPrev = () => {
    index = index - 1;
    setSlide(props.slides[index]);
  };

  const restart = () => {
    index = 0;
    setSlide(props.slides[index]);
  };

  return (
    <>
      <button
        disabled={index === 0 ? true : false}
        data-testid="button-restart"
        onClick={restart}
      >
        Restart
      </button>

      <button
        disabled={index === 0 ? true : false}
        data-testid="button-prev"
        onClick={showPrev}
      >
        Prev
      </button>

      <button
        disabled={index === 4 ? true : false}
        data-testid="button-next"
        onClick={showNext}
      >
        Next
      </button>

      <h1 data-testid="title">{slide.title}</h1>
      <p data-testid="text">{slide.text}</p>
    </>
  );
};

export default App;
