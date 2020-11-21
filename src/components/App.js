import React, { Component, useState } from "react";
import "../styles/App.css";
import Slides from "./Slides";
import slides from "../data";

const slidesArr = [...slides];
const initialState = slidesArr[0];
const App = () => {
  const [currSlide, setCurrSlideState] = useState(initialState);
  const [index, setIndex] = useState(1);

  const [first, setFirst] = useState(true);

  const showNext = () => {
    let currIndex = index;
    currIndex++;
    setIndex(currIndex);
    setCurrSlideState(slidesArr[index]);

    console.log(index);
  };

  const showPrev = () => {
    let currIndex;
    {
      first ? (currIndex = index - 2) : (currIndex = index - 1);
    }

    console.log(currIndex);
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
      <Slides currSlide={currSlide} />
      {(index === 1 && first) || index === 0 ? (
        <button data-testid="button-restart" onClick={restart}>
          Restart
        </button>
      ) : null}

      {(index === 1 && first) || index === 0 ? null : (
        <button data-testid="button-prev" onClick={showPrev}>
          Prev
        </button>
      )}

      {index === 5 ? null : (
        <button data-testid="button-next" onClick={showNext}>
          Next
        </button>
      )}
    </>
  );
};

export default App;
