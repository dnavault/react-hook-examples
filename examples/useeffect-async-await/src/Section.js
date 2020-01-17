import React from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";

Section.propTypes = {
  apiData: PropTypes.array.isRequired
};

const contentStyles = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  margin: "0 auto",
  textAlign: "center"
};

const getRandomImage = arr => {
  const rand = Math.random() * arr.length;
  const index = Math.floor(rand);
  const url = arr[index].images.preview_gif.url;
  return url;
};

function Section({ apiData }) {
  const [data, setData] = React.useState();
  let content;

  const handleOnClick = () => setData(getRandomImage(apiData));

  if (!data && apiData.length) {
    // console.log("setting data once automatically");
    content = <Loader styles={contentStyles} />;
    setData(getRandomImage(apiData));
  } else {
    content = (
      <div style={contentStyles}>
        <img src={data} />
      </div>
    );
  }

  return (
    <section className="section" onClick={handleOnClick}>
      {content}
    </section>
  );
}

export default Section;
