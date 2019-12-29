import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Navbar.propTypes = {
  pages: PropTypes.array.isRequired
};
const NavbarItem = ({ page, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className="navbar-item is-capitalized"
      to={"/" + page.url}
    >
      {`${page.icon} ${page.url}`}
    </Link>
  );
};
const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? "is-active" : ""}`}
  >
    <span />
    <span />
    <span />
  </button>
);

function Navbar({ pages }) {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const toggleMenu = () => setActiveMenu(prev => !prev);

  const navbarItems = pages.map(page => (
    <NavbarItem
      page={page}
      key={page.url}
      onClick={() => setActiveMenu(false)}
    />
  ));

  return (
    <nav className={`navbar is-fixed-top`}>
      <div className="navbar-brand">
        <a className="navbar-item is-capitalized" href={`#logo`}>
          🤖 Home
        </a>
        <NavbarBurger active={activeMenu} toggleMenu={toggleMenu} />
      </div>
      <div className={`navbar-menu ${activeMenu ? "is-active" : ""}`}>
        <div className="navbar-start">{navbarItems}</div>
      </div>
    </nav>
  );
}

export default Navbar;
