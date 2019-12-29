import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Navigation from "./Navigation";

import "./styles.css";

App.propTypes = {
  initialCount: PropTypes.number
};

function App({ initialCount }) {
  const [count, setCount] = React.useState(initialCount);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    // setCount(10);
    console.log("THE FIRST RENDER");
    const localStorageDarkMode = localStorage.getItem("darkMode");

    if (localStorageDarkMode === "true") setDarkMode(true);
  }, []); // empty array

  React.useEffect(() => {
    console.log("darkmode changes");

    if (darkMode) {
      document.body.classList.add("isDark");
    } else {
      document.body.classList.remove("isDark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={"nes-text"}>
      <Navigation count={count} />
      <Counter
        upFunction={() => setCount(prevCount => prevCount + 1)}
        downFunction={() => setCount(prevCount => prevCount - 1)}
        reset={() => setCount(initialCount)}
      />

      <div style={{ margin: "30px 0 0 0 " }}>
        <label>
          <input
            type="checkbox"
            className={"nes-checkbox"}
            checked={darkMode}
            onChange={() => setDarkMode(prev => !prev)}
          />
          <span>Dark Mode</span>
        </label>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App initialCount={0} />, rootElement);
