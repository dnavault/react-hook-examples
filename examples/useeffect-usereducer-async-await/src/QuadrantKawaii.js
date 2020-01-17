import React from "react";
import { Browser } from "react-kawaii";

function Kawaii({ happy = false }) {
  let mood = "sad";
  if (happy) mood = "lovestruck";
  return <Browser size={100} mood={mood} color="#61DDBC" />;
}

export default Kawaii;
