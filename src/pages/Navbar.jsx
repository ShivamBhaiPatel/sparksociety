import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg col-12 sticky-top">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink activeClassName="menu_active" className="navbar-brand" to="/">
                <strong>Spark</strong>
              </NavLink>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <NavLink exact activeClassName="menu_active" className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" to="/service">
                      Service
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
