import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

Section.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool
};

function Section({ children, onClick, handleClose, open }) {
  return (
    <section
      onClick={onClick}
      className={classnames("section", { "is-expanded": open })}
    >
      <div onClick={handleClose} className="close-section">
        &times;
      </div>
      <div className="demo-box" style={{ fontSize: "75px" }}>
        {children}
      </div>
    </section>
  );
}

export default Section;
