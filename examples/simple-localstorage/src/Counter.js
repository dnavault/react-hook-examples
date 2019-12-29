import React from "react";
import PropTypes from "prop-types";

Counter.propTypes = {
  upFunction: PropTypes.func.isRequired,
  downFunction: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

function Counter({ upFunction, downFunction, reset }) {
  return (
    <>
      <button className="nes-btn" onClick={downFunction}>
        -
      </button>
      <button className="nes-btn" onClick={upFunction}>
        +
      </button>
      <br />
      <br />
      <button className="nes-btn is-error" onClick={reset}>
        Reset
      </button>
    </>
  );
}

export default Counter;
