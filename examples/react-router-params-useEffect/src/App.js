import React from "react";
import Section from "./Section";

const pages = [
  { icon: "🧙‍♀", url: "mage" },
  { icon: "🧙", url: "wizard" },
  { icon: "🐲", url: "dragon" },
  { icon: "🤖", url: "robot" }
];

function App(props) {
  const incomingUrl = props.match.params.slug || false;
  const [openSection, setOpenSection] = React.useState();

  React.useEffect(() => {
    setOpenSection(incomingUrl);
  }, [incomingUrl]);

  function handleClose(e) {
    e.stopPropagation();
    setOpenSection(false);
    props.history.push("/");
  }

  function handleSelection(url) {
    setOpenSection(url);
    props.history.push(`${url}`);
  }
  return (
    <div className="main">
      {pages.map(page => {
        return (
          <Section
            key={page.url}
            open={openSection === page.url}
            handleClose={handleClose}
            onClick={() => handleSelection(page.url)}
          >
            <span role="img" aria-label={page.url}>
              {page.icon}
            </span>
          </Section>
        );
      })}
    </div>
  );
}

export default App;
