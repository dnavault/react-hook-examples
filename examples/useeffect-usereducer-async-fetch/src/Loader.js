import React from "react";
import { FadeLoader } from "react-spinners";

const styles = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  margin: "0 auto",
  textAlign: "center"
};
function Loader() {
  return <FadeLoader color="rgb(175, 175, 175)" css={styles} />;
}

export default Loader;
