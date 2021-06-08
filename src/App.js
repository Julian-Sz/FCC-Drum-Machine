import "./App.css";
import React, { useState, useEffect } from "react";

const handleKeyPressWrapper = (setTextFunc, buttonsarr) => {
  return (e) => {
    try {
      document.getElementById(e.key.toUpperCase()).currentTime = 0;
      let playPromise = document.getElementById(e.key.toUpperCase()).play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {})
          .catch((error) => {
            console.log("error", error);
          });
      }
      let name = "Loading";
      for (let i = 0; i < buttonsarr.length; i++) {
        if (buttonsarr[i].press === e.key) {
          name = buttonsarr[i].name;
          break;
        }
      }
      setTextFunc(name);
    } catch {}
  };
};

const dbHandleClickWrapper = (setTextFunc, buttonsarr) => {
  return (e) => {
    const customkey = e.target.attributes.customkey.value;
    const button = buttonsarr[customkey];
    const id = button.press.toUpperCase();
    document.getElementById(id).currentTime = 0;
    document.getElementById(id).play();
    setTextFunc(button.name);
  };
};

const Dropdown = (props) => {
  let dropdownstyle = {
    display: "grid",
    gridGap: "10px",
    gridTemplateRows: "70px 1fr 1fr 1fr",
    gridTemplateColumns: "1fr 70px",
    gridTemplateAreas: '"header ." "row1 row1" "row2 row2" "row3 row3"',
    justifySelf: "end",
    alignSelf: "start",
    width: "80%",
    backgroundColor: "grey",
    borderRadius: "5px",
  };

  let rowstyle = {
    display: "flex",
    gridColumn: "1 / 3",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  let row1 = { ...rowstyle };
  row1["gridArea"] = "row1";
  let row2 = { ...rowstyle };
  row2["gridArea"] = "row2";
  let row3 = { ...rowstyle };
  row3["gridArea"] = "row3";
  let titlestyle = {
    gridArea: "header",
    justifySelf: "center",
    alignSelf: "center",
  };

  const keyboardToggle = () => {
    props.setappstate((prev) => {
      let copy = { ...prev };
      if (copy.keyboard === "qwerty") {
        copy.keyboard = "qwertz";
      } else {
        copy.keyboard = "qwerty";
      }
      return copy;
    });
  };

  const minimizedToggle = () => {
    props.setappstate((prev) => {
      let copy = { ...prev };
      copy.minimized = !copy.minimized;
      return copy;
    });
  };

  useEffect(() => {
    let keyboardswitch =
      document.getElementById("keyboardswitch").children[1].children[0];
    let minimizedswitch =
      document.getElementById("minimizedswitch").children[1].children[0];

    if (props.keyboard === "qwertz") {
      keyboardswitch.checked = true;
    }
    if (props.minimized === false) {
      minimizedswitch.checked = true;
    }
  }, [props.keyboard, props.minimized]);

  return (
    <div id="optionsdropdown" style={dropdownstyle}>
      <h1 style={titlestyle}>Options</h1>
      <div id="keyboardswitch" className="switch-row" style={row1}>
        <div>QWERTY</div>
        <label className="switch">
          <input type="checkbox" onClick={keyboardToggle}></input>
          <span className="slider round"></span>
        </label>
        <div>QWERTZ</div>
      </div>
      <div id="minimizedswitch" className="switch-row" style={row2}>
        <div>Minimized</div>
        <label className="switch">
          <input type="checkbox" onClick={minimizedToggle}></input>
          <span className="slider round"></span>
        </label>
        <div>Maximised</div>
      </div>
      {/* <div id="keyboardswitch" className="switch-row" style={row3}>
        <div>QWERTY</div>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <div>QWERTZ</div>
      </div> */}
    </div>
  );
};

const Options = (props) => {
  const [state, setState] = useState(false); //state determines whether its clicked
  const handleClick = () => {
    setState(!state);
  };

  let optionsstyle = {
    zIndex: "1",
    backgroundImage: "url('/FCC-Drum-Machine/gear-white.png')",
    backgroundSize: "90% auto",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    borderRadius: "5px",
    padding: "10px",
    height: "50px",
    width: "50px",
  };
  if (state) {
    return (
      <React.Fragment>
        <div id="options" style={optionsstyle} onClick={handleClick}></div>
        <Dropdown
          minimized={props.minimized}
          setappstate={props.setappstate}
          keyboard={props.keyboard}
        />
      </React.Fragment>
    );
  } else {
    return <div id="options" style={optionsstyle} onClick={handleClick}></div>;
  }
};

const Display = (props) => {
  return (
    <div id="display">
      <div id="display-text">{props.text}</div>
    </div>
  );
};

const DrumButtons = (props) => {
  return (
    <div id="db-wrapper">
      {props.buttonsarr.map((elem, i) => {
        return (
          <div className="drum-button" key={i}>
            <button
              key={elem.press}
              className="drum-pad"
              customkey={i}
              onClick={dbHandleClickWrapper(props.changetext, props.buttonsarr)}
              id={elem.name}
            >
              <span className="front">{elem.press.toUpperCase()}</span>
              <audio
                key={elem.press.toUpperCase()}
                id={elem.press.toUpperCase()}
                src={props.buttonsarr[i].source}
                preload="auto"
                className="clip"
              ></audio>
            </button>
          </div>
        );
      })}
    </div>
  );
};

function App(props) {
  const [state, setState] = useState({
    text: "Press a button",
    minimized: true,
    keyboard: "qwerty",
  });

  const changeDisplayText = (text) => {
    setState((prev) => {
      let copy = { ...prev };
      copy.text = text;
      return copy;
    });
  };

  let buttonsarr = [];
  if (state.minimized) {
    let keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
    if (state.keyboard !== "qwerty") {
      keys[keys.indexOf("z")] = "y";
    }
    for (let i = 0; i < props.buttonsarr.length; i++) {
      if (keys.indexOf(props.buttonsarr[i].press) !== -1) {
        buttonsarr[keys.indexOf(props.buttonsarr[i].press)] =
          props.buttonsarr[i];
      }
    }
    console.log("final buttons", buttonsarr);
  } else {
    buttonsarr = [...props.buttonsarr];

    if (state.keyboard === "qwerty") {
      let yIndex = -1;
      let zIndex = -1;
      for (
        let i = 0;
        i < buttonsarr.length && (yIndex === -1 || zIndex === -1);
        i++
      ) {
        if (buttonsarr[i].press === "y") {
          yIndex = i;
          continue;
        } else if (buttonsarr[i].press === "z") {
          zIndex = i;
          continue;
        }
      }
      console.log("Indexes y and z", yIndex, zIndex);
      let zObj = buttonsarr[zIndex];
      console.log("buttonsArr[zIndex]", buttonsarr[zIndex]);
      console.log("buttonsArr[yIndex]", buttonsarr[yIndex]);
      console.log("zObj", zObj);
      buttonsarr[zIndex] = buttonsarr[yIndex];
      buttonsarr[yIndex] = zObj;
      console.log("buttonsarr[yIndex]", buttonsarr[yIndex], "yIndex", yIndex);
      console.log("final buttonsarr", buttonsarr);
    }

    console.log("else triggered", buttonsarr);
  }

  let lastButtonsarr = React.useRef([]);
  useEffect(() => {
    lastButtonsarr.current = buttonsarr;
    // console.log("created", lastButtonsarr.current);
    document.addEventListener(
      "keydown",
      handleKeyPressWrapper(changeDisplayText, lastButtonsarr.current)
    );
    return () => {
      // console.log("removed", lastButtonsarr.current);
      document.removeEventListener(
        "keydown",
        handleKeyPressWrapper(changeDisplayText, lastButtonsarr.current)
      );
    }; // eslint-disable-next-line
  }, [state.minimized, state.keyboard]);

  return (
    <div className="App" id="drum-machine">
      <Options
        minimized={state.minimized}
        keyboard={state.keyboard}
        setappstate={setState}
      />
      <Display text={state.text} />
      <DrumButtons changetext={changeDisplayText} buttonsarr={buttonsarr} />
    </div>
  );
}

export default App;
