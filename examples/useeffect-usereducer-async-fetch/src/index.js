import React from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import QuadrantAPIData from "./QuadrantAPIData";
import QuadrantRefresh from "./QuadrantRefresh";
import QuadrantKawaii from "./QuadrantKawaii";

import "./styles.scss";

const getRandomImage = arr => {
  const rand = Math.random() * arr.length;
  const index = Math.floor(rand);
  const url = arr[index].images.preview_gif.url;
  return url;
};

function reducer(prevState, { action, payload }) {
  console.log(prevState);
  switch (action) {
    case "urlAdded":
      console.log("urlAdded");
      const temp = { ...prevState };
      temp.urls.push(payload);
      return temp;
    case "refreshToggle":
      console.log("refreshToggle");
      return { refresh: !prevState.refresh, urls: [] };
    default:
      return prevState;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    refresh: true,
    urls: []
  });

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`https://aws.random.cat/meow`);
      const incomingData = await response.json();
      dispatch({ action: "urlAdded", payload: incomingData.file });
    })();
  }, [state.refresh]);

  React.useEffect(() => {
    (async () => {
      console.log("useEffect");
      const apiKey = process.env.API_KEY;
      const searchTerm = "art";
      const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;
      const response = await fetch(fetchUrl);
      const incomingData = await response.json();
      dispatch({
        action: "urlAdded",
        payload: getRandomImage(incomingData.data)
      });
    })();
  }, [state.refresh]);

  return (
    <div className="main">
      <Section>
        <QuadrantAPIData url={state.urls[0]} />
      </Section>
      <Section>
        <QuadrantAPIData url={state.urls[1]} />
      </Section>
      <Section>
        <QuadrantRefresh
          refreshToggle={() => dispatch({ action: "refreshToggle" })}
        />
      </Section>
      <Section>
        <QuadrantKawaii happy={state.urls.length === 2} />
      </Section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
