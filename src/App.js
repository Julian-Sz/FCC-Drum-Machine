import "./App.css";
import React, { useState, useEffect } from "react";

const buttonsObject = [
  {
    press: "q",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Clap%201.mp3",
    name: "",
  },
  {
    press: "w",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Clap%202.mp3",
    name: "",
  },
  {
    press: "e",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Conga%20High.mp3",
    name: "",
  },
  {
    press: "a",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Conga%20Mid.mp3",
    name: "",
  },
  {
    press: "s",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Conga%20Low.mp3",
    name: "",
  },
  {
    press: "d",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Cowbell.mp3",
    name: "",
  },
  {
    press: "z",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Hihat%20Open.mp3",
    name: "",
  },
  {
    press: "x",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Mid%20Tom.mp3",
    name: "",
  },
  {
    press: "c",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Pop%20Chord%201.mp3",
    name: "",
  },
];

//get raw file from github as source and set the name of each button
let nameRegEx = /.+\/(.*)\.mp3$/;
for (let i = 0; i < buttonsObject.length; i++) {
  buttonsObject[i].name = decodeURI(buttonsObject[i].source).match(
    nameRegEx
  )[1];
  buttonsObject[i].source = buttonsObject[i].source + "?raw=true";
}

const handleKeyPressWrapper = (setTextFunc) => {
  return (e) => {
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
    const customkey = e.target.attributes.customkey.value;
    const button = buttonsObject[customkey];
    const id = button.press.toUpperCase();
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

let listenerAttached = false;
function App() {
  const [state, setState] = useState({ text: "Press a button" });
  useEffect(() => {
    console.log("useEffect", state);
  });
  const changeDisplayText = (text) => {
    console.log("state change function called", text);
    setState({ text: text });
    console.log("new state", state);
  };
  if (!listenerAttached) {
    document.addEventListener(
      "keydown",
      handleKeyPressWrapper(changeDisplayText)
    );
    listenerAttached = true;
  }
  return (
    <div className="App" id="drum-machine">
      <Display text={state.text} />
      <DrumButtons changetext={changeDisplayText} />
    </div>
  );
}

export default App;
