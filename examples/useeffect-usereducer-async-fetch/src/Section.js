import React from "react";
const contentStyles = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  margin: "0 auto",
  textAlign: "center"
};
function Section({ children }) {
  return (
    <section className="section">
      <div style={contentStyles}>{children}</div>
    </section>
  );
}

export default Section;
