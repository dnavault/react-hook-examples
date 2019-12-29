import React from "react";
import { Planet } from "react-kawaii";

const moods = [
  "sad",
  "shocked",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
  "ko"
];

function Kawaii({ match }) {
  console.log(match);
  console.log("kawaii");

  let mood = null;
  const incomingMood = match.params.mood;

  if (moods.includes(incomingMood)) {
    mood = incomingMood;
  } else {
    const index = Math.floor(Math.random() * moods.length);
    mood = moods[index];
  }

  return (
    <div>
      <Planet mood={mood} />
    </div>
  );
}

export default Kawaii;
