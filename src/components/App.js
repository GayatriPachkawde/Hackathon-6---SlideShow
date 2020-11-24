import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [ind, setind] = useState(0);

  const showNext = () => {
    //ind = ind + 1;
    setind(ind + 1);
  };

  const showPrev = () => {
    //ind = ind - 1;
    setind(ind - 1);
  };

  const restart = () => {
    //ind = 0;
    setind(0);
  };

  return (
    <>
      <h1 data-testid="title">{props.slides[ind].title}</h1>
      <p data-testid="text">{props.slides[ind].text}</p>
      <button
        disabled={ind === 0}
        data-testid="button-restart"
        onClick={restart}
      >
        Restart
      </button>

      <button disabled={ind === 0} data-testid="button-prev" onClick={showPrev}>
        Prev
      </button>

      <button disabled={ind === 4} data-testid="button-next" onClick={showNext}>
        Next
      </button>
    </>
  );
};

export default App;
