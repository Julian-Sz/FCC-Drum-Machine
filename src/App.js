import "./App.css";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const handleKeyPressWrapper = (setTextFunc, buttonsarr) => {
  return (e) => {
    try {
      document.getElementById(
        e.key.toUpperCase()
      ).parentElement.children[0].style.backgroundColor = "#e74c3c";
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

const handleKeyUp = (e) => {
  // for wrong keys try -> catch
  try {
    document.getElementById(
      e.key.toUpperCase()
    ).parentElement.children[0].style.backgroundColor = "#0be881";
  } catch {}
};

const dbHandleClickWrapper = (setTextFunc, buttonsarr) => {
  return (e) => {
    const character = e.target.firstChild.textContent;
    document.getElementById(character).currentTime = 0;
    document.getElementById(character).play();
    let button = buttonsarr.filter((el) => {
      return el.press === character.toLowerCase() ? true : false;
    })[0];
    setTextFunc(button.name);
  };
};

const Dropdown = (props) => {
  let dropdownstyle = {
    display: "grid",
    gridGap: "10px",
    zIndex: 1,
    gridTemplateRows: "70px 1fr 1fr",
    gridTemplateColumns: "1fr 70px",
    gridTemplateAreas: '"header ." "row1 row1" "row2 row2"',
    padding: "0 15px 15px 15px",
    justifySelf: "end",
    alignSelf: "start",
    backgroundColor: "#1e272e",
    borderRadius: "5px",
    color: "#ecf0f1",
  };

  let rowstyle = {
    display: "flex",
    justifySelf: "center",
    padding: "5px",
    gridColumn: "1 / 3",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "10px",
    minWidth: "100%",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  };

  let row1 = { ...rowstyle };
  row1["gridArea"] = "row1";
  let row2 = { ...rowstyle };
  row2["gridArea"] = "row2";
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

  const dropdownVariants = {
    hidden: { opacity: 0, x: "30px" },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "ease-in-out" },
    },
    exit: {
      opacity: 0,
      x: "30px",
      transition: { type: "ease-in-out" },
    },
  };

  const rowVariants = {
    visible: { backgroundColor: "#2d3436" },
    hover: { backgroundColor: "#2c3e50" },
  };

  return (
    <motion.div
      id="optionsdropdown"
      style={dropdownstyle}
      variants={dropdownVariants}
      initial="hidden"
      animate="open"
      exit="exit"
    >
      <h1 style={titlestyle}>Options</h1>
      <motion.div
        id="keyboardswitch"
        className="switch-row"
        style={row1}
        variants={rowVariants}
        initial="visible"
        whileHover="hover"
      >
        <div>QWERTY</div>
        <label className="switch">
          <input type="checkbox" onClick={keyboardToggle}></input>
          <span className="slider round"></span>
        </label>
        <div>QWERTZ</div>
      </motion.div>
      <motion.div
        id="minimizedswitch"
        className="switch-row"
        style={row2}
        variants={rowVariants}
        initial="visible"
        whileHover="hover"
      >
        <div>Minimized</div>
        <label className="switch">
          <input type="checkbox" onClick={minimizedToggle}></input>
          <span className="slider round"></span>
        </label>
        <div>Maximized</div>
      </motion.div>
    </motion.div>
  );
};

const Options = (props) => {
  const [state, setState] = useState(false); //state determines whether its clicked
  const handleClick = () => {
    setState(!state);
  };

  let optionsstyle = {
    zIndex: 2,
    backgroundImage: "url('/FCC-Drum-Machine/gear-white.png')",
    backgroundSize: "90% auto",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    borderRadius: "5px",
    padding: "10px",
    height: "50px",
    width: "50px",
  };

  const optionsVariants = {
    visible: { backgroundColor: "#718093" },
    hover: { backgroundColor: "#2c3e50" },
  };
  return (
    <React.Fragment>
      <motion.div
        id="options"
        variants={optionsVariants}
        animate="visible"
        whileHover="hover"
        style={optionsstyle}
        onClick={handleClick}
      ></motion.div>
      <AnimatePresence>
        {state && (
          <Dropdown
            minimized={props.minimized}
            setappstate={props.setappstate}
            keyboard={props.keyboard}
            animate={{ scale: 1.5 }}
          />
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

const Display = (props) => {
  return (
    <div id="display">
      <div id="display-text">{props.text}</div>
    </div>
  );
};

const DrumButtons = (props) => {
  const drumButtonsVariants = {
    visible: {
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.1,
      },
    },
    exit: {
      y: "140vh",
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.1,
      },
    },
  };

  const [dbWrapperStyle, setWrapperStyle] = useState({});
  useEffect(() => {
    if (!props.minimized) {
      setWrapperStyle({ gridTemplateColumns: "1fr 1fr 1fr 1fr" });
    }
  }, [props.minimized]);

  let singleWrapperStyle = {
    width: "100%",
    height: "100%",
  };

  let buttonTransition = {
    type: "spring",
    duration: 0.9,
    delay: 0.1,
    bounce: 0.5,
  };

  return (
    <div id="db-wrapper" style={dbWrapperStyle}>
      <AnimatePresence
        onExitComplete={() => {
          setWrapperStyle({ gridTemplateColumns: "1fr 1fr 1fr" });
        }}
      >
        {props.buttonsarr.map((elem, i) => {
          return (
            <motion.div
              variants={drumButtonsVariants}
              initial="exit"
              animate="visible"
              exit="exit"
              key={elem.press}
              style={singleWrapperStyle}
            >
              <motion.button
                layout
                transition={buttonTransition}
                key={elem.press}
                className="drum-pad"
                onClick={dbHandleClickWrapper(
                  props.changetext,
                  props.buttonsarr
                )}
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
              </motion.button>
            </motion.div>
          );
        })}
      </AnimatePresence>
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
      let zObj = buttonsarr[zIndex];
      buttonsarr[zIndex] = buttonsarr[yIndex];
      buttonsarr[yIndex] = zObj;
    }
  }

  useEffect(() => {
    let wrapper = handleKeyPressWrapper(changeDisplayText, buttonsarr);
    document.addEventListener("keydown", wrapper);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", wrapper);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <motion.div
      className="App"
      id="drum-machine"
      initial={{ scale: 0.7 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Options
        minimized={state.minimized}
        keyboard={state.keyboard}
        setappstate={setState}
      />
      <Display text={state.text} />
      <DrumButtons
        changetext={changeDisplayText}
        buttonsarr={buttonsarr}
        minimized={state.minimized}
        keyboard={state.keyboard}
      />
    </motion.div>
  );
}

export default App;
