import React from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";

QuadrantCatAPI.propTypes = {
  refresh: PropTypes.bool,
  apiFetched: PropTypes.func
};

const fetchUrl = ;

function QuadrantCatAPI({ refresh, apiFetched }) {
  console.log("QuadrantCatAPI");
  const [apiData, setApiData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await fetch(`https://aws.random.cat/meow`);
      const incomingData = await response.json();
      setApiData(incomingData.file);
      apiFetched(incomingData.file);
    })();
  }, []);

  if (!apiData) return <Loader />;

  return <img style={{ width: "100%" }} src={apiData} />;
}

export default QuadrantCatAPI;
