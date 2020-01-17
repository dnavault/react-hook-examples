import React from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";

function QuadrantShowAPIData({ url }) {
  console.log("QuadrantShowAPIData");

  if (!url) return <Loader />;

  return <img style={{ width: "100%" }} src={url} />;
}

export default QuadrantShowAPIData;
