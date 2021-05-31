import "./App.css";
import React, { useState } from "react";
// import Laser from "./sounds/Laser-1.wav";

const buttonsObject = [
  { press: "q", source: "./sounds/Laser-1.wav" },
  { press: "w", source: "./sounds/Laser-1.wav" },
  { press: "e", source: "./sounds/Laser-1.wav" },
  { press: "a", source: "./sounds/Laser-1.wav" },
  { press: "s", source: "./sounds/Laser-1.wav" },
  { press: "d", source: "./sounds/Laser-1.wav" },
  { press: "y", source: "./sounds/Laser-1.wav" },
  { press: "x", source: "./sounds/Laser-1.wav" },
  { press: "c", source: "./sounds/Laser-1.wav" },
];

const handleKeyPress = (event) => {
  // console.log(event.key);
  // audioElements.play();
};

document.addEventListener("keydown", handleKeyPress);

const dbHandleClick = (e) => {
  console.log(
    "event.target.attributes.customkey",
    e.target.attributes.customkey
  );
  const customkey = e.target.attributes.customkey.value;
  console.log("cust", customkey.value);
  const button = buttonsObject[customkey];
  const id = "audio-" + String(customkey);
  console.log(id);
  console.log("element", document.getElementById(id));
  document.getElementById(id).currentTime = 0;
  document.getElementById(id).play();
};

const DrumButtons = () => {
  return (
    <div id="db-wrapper">
      {buttonsObject.map((elem, i) => {
        return (
          <div className="drum-button" key={i}>
            <button
              key={elem.press}
              className="drum-pad"
              customkey={i}
              onClick={dbHandleClick}
            >
              {elem.press.toUpperCase()}
            </button>
            <audio
              key={elem.press.toUpperCase()}
              id={"audio-" + String(i)}
              src={buttonsObject[i].source}
            ></audio>
          </div>
        );
      })}
    </div>
  );
};

const Display = () => {
  const [state, setState] = useState("Display");

  return (
    <div id="display">
      <div id="display-text">{state}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App" id="drum-machine">
      <Display />
      <DrumButtons />
    </div>
  );
}

export default App;
