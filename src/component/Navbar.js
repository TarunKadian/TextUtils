import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
    <nav classname={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div classname="container-fluid">
        <Link classname="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          classname="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classname="navbar-toggler-icon"></span>
        </button>
        <div classname="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
            <li classname="nav-item">
              <Link classname="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li classname="nav-item">
              <Link classname="nav-link" to='/about'>
                {props.abouttext}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              classname="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              classname="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
}
// export default Navbar;
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};
Navbar.defaultpropTypes = {
  title: "My Title",
  abouttext: "About it",
};
