import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const buttonsArr = [
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
    press: "r",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Conga%20Mid.mp3",
    name: "",
  },
  {
    press: "t",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Conga%20Low.mp3",
    name: "",
  },
  {
    press: "z",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Cowbell.mp3",
    name: "",
  },
  {
    press: "a",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Hihat%20Open.mp3",
    name: "",
  },
  {
    press: "s",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Mid%20Tom.mp3",
    name: "",
  },
  {
    press: "d",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Pop%20Chord%201.mp3",
    name: "",
  },
  {
    press: "f",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Pop%20Chord%202.mp3",
    name: "",
  },
  {
    press: "g",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Pop%20Chord%203.mp3",
    name: "",
  },
  {
    press: "y",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Woop.mp3",
    name: "",
  },
  {
    press: "x",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Snare%201.mp3",
    name: "",
  },
  {
    press: "c",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Snare%202.mp3",
    name: "",
  },
  {
    press: "v",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Snare%203.mp3",
    name: "",
  },
  {
    press: "b",
    source:
      "https://github.com/Julian-Sz/FCC-Drum-Machine/blob/main/src/sounds/Snare%204.mp3",
    name: "",
  },
];

//get raw file from github as source and set the name of each button
try {
  let nameRegEx = /.+\/(.*)\.mp3$/;
  for (let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].name = decodeURI(buttonsArr[i].source).match(nameRegEx)[1];
    buttonsArr[i].source = buttonsArr[i].source + "?raw=true";
  }
} catch (e) {
  console.error("Error in buttonsArr, full message: \n", e);
}

ReactDOM.render(
  <React.StrictMode>
    <App buttonsarr={buttonsArr} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
