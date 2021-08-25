import React from "react";
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* for change in future */}
            {props.title}  
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.component1}
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/About">
                {props.component2}
                </a>
              </li> */}
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to {props.mode==='light'?'dark':'light'}</label>
            </div>

            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
  );
}

// how to use propTypes in React  
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    component1 : PropTypes.string.isRequired,
    component2 : PropTypes.string.isRequired,
    component3 : PropTypes.string.isRequired,
    component4 : PropTypes.string.isRequired,
}


// for by default name
Navbar.defaultProps = {
    title : "Set Yout Title",
    component1 : "Home",
    component2 : "About",
    component3 : "Services",
    component4 : "Contact us",
}