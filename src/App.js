import "./App.css";
import React, { useState } from "react";

// import Laser from "./sounds/Laser-1.wav";

const buttonsObject = [
  {
    press: "q",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/d5474a6ef10ea81ce18057596794cd2777dd9c44/src/sounds/Bass%20Chord%201.wav",
    name: "Bass Chord 1",
  },
  {
    press: "w",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Beep%201.wav",
    name: "Beep 1",
  },
  {
    press: "e",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Cymbal%201.wav",
    name: "Cymbal 1",
  },
  {
    press: "a",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Drum%201.wav",
    name: "Drum 1",
  },
  {
    press: "s",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/E-Guitar%201.wav",
    name: "E-Guitar Chord 1",
  },
  {
    press: "d",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Guitar%20Chord.wav",
    name: "Guitar Chord 1",
  },
  {
    press: "z",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Guitar%20Chord%202.wav",
    name: "Guitar Chord 2",
  },
  {
    press: "x",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Laser-1.wav",
    name: "Laser 1",
  },
  {
    press: "c",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Snare%20Drum%201.wav",
    name: "Snare Drum 1",
  },
];

//get raw file from github as source
for (let i = 0; i < buttonsObject.length; i++) {
  buttonsObject[i].source = buttonsObject[i].source + "?raw=true";
}

const handleKeyPressWrapper = (setTextFunc) => {
  return (e) => {
    console.log("key", e.key);

    try {
      document.getElementById(e.key.toUpperCase()).currentTime = 0;
      document.getElementById(e.key.toUpperCase()).play();
      let name = "Loading";
      for (let i = 0; i < buttonsObject.length; i++) {
        if (buttonsObject[i].press === e.key) {
          name = buttonsObject[i].name;
          break;
        }
      }
      setTextFunc(name);
    } catch {}
  };
};

const dbHandleClickWrapper = (setTextFunc) => {
  return (e) => {
    console.log("event.target.attributes.customkey", e.target);
    const customkey = e.target.attributes.customkey.value;
    console.log("cust", customkey.value);
    const button = buttonsObject[customkey];
    const id = button.press.toUpperCase();
    console.log(id);
    console.log("element", document.getElementById(id));
    document.getElementById(id).currentTime = 0;
    document.getElementById(id).play();
    setTextFunc(button.name);
  };
};
const DrumButtons = (props) => {
  return (
    <div id="db-wrapper">
      {buttonsObject.map((elem, i) => {
        return (
          <div className="drum-button" key={i}>
            <button
              key={elem.press}
              className="drum-pad"
              customkey={i}
              onClick={dbHandleClickWrapper(props.changetext)}
              id={elem.name}
            >
              <span className="front">{elem.press.toUpperCase()}</span>
              <audio
                key={elem.press.toUpperCase()}
                id={elem.press.toUpperCase()}
                src={buttonsObject[i].source}
                className="clip"
              ></audio>
            </button>
          </div>
        );
      })}
    </div>
  );
};

const Display = (props) => {
  return (
    <div id="display">
      <div id="display-text">{props.text}</div>
    </div>
  );
};

let attached = false;
function App() {
  const [state, setState] = useState({ text: "Display" });
  var changedisplaytext = (text) => {
    setState({ text: text });
  };
  if (!attached) {
    document.addEventListener(
      "keydown",
      handleKeyPressWrapper(changedisplaytext)
    );
    attached = true;
  }
  return (
    <div className="App" id="drum-machine">
      <Display text={state.text} />
      <DrumButtons changetext={changedisplaytext} />
    </div>
  );
}

export default App;
