import React, { Component, useState } from "react";
import "../styles/App.css";
import slides from "../data";

const App = (props) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h1 data-testid="title">{props.slides[index].title}</h1>
      <p data-testid="text">{props.slides[index].text}</p>
      <button
        data-testid="button-restart"
        disabled={index === 0}
        onClick={() => setIndex(0)}
      >
        Restart
      </button>
      <button
        data-testid="button-prev"
        disabled={index === 0}
        onClick={() => {
          if (index > 0) setIndex(index - 1);
        }}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        disabled={index === props.slides.length - 1}
        onClick={() => {
          if (index < props.slides.length - 1) setIndex(index + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default App;
