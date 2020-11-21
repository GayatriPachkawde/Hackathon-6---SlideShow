import React, { Component, useState } from "react";
import "../styles/App.css";
//import Slides from "./Slides";
//import slides from "../data";

//const slidesArr = [...slides];

const App = (props) => {
  const slidesArr = props.slides;
  const initialState = slidesArr[0];
  const [currSlide, setCurrSlideState] = useState(initialState);
  const [index, setIndex] = useState(1);

  const [first, setFirst] = useState(true);

  const showNext = () => {
    let currIndex = index;
    currIndex++;
    setIndex(currIndex);
    setCurrSlideState(slidesArr[index]);
  };

  const showPrev = () => {
    let currIndex;
    {
      first ? (currIndex = index - 2) : (currIndex = index - 1);
    }

    setIndex(currIndex);
    setCurrSlideState(slidesArr[currIndex]);
    setFirst(false);
  };

  const restart = () => {
    setIndex(1);

    setCurrSlideState(initialState);

    setFirst(true);
  };
  return (
    <>
      <h1 data-testid="title">{currSlide.title}</h1>
      <p data-testid="text">{currSlide.text}</p>
      {/* //<Slides currSlide={currSlide} /> */}
      {(index === 1 && first) || index === 0 ? (
        <button disabled={true} data-testid="button-restart" onClick={restart}>
          Restart
        </button>
      ) : (
        <button data-testid="button-restart" onClick={restart}>
          Restart
        </button>
      )}
      {(index === 1 && first) || index === 0 ? (
        <button disabled={true} data-testid="button-prev" onClick={showPrev}>
          Prev
        </button>
      ) : (
        <button data-testid="button-prev" onClick={showPrev}>
          Prev
        </button>
      )}
      {index === 5 ? (
        <button disabled={true} data-testid="button-next" onClick={showNext}>
          Next
        </button>
      ) : (
        <button data-testid="button-next" onClick={showNext}>
          Next
        </button>
      )}
    </>
  );
};

export default App;
