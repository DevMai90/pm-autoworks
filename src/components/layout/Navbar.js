import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-md py-3" id="main-nav">
        <Link to="/" className="navbar-brand">
          <img
            src={require('../../images/pm-logo.png')}
            alt="PM Autoworks"
            style={{
              height: 'auto',
              maxHeight: '30px',
              width: 'auto',
              maxWidth: '100%'
            }}
            className="rounded img-thumbnail ml-5"
          />
        </Link>
        <button
          className="navbar-toggler custom-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item dropdown px-2">
              <a
                href="#"
                className="nav-link dropdown-toggle text-warning"
                role="button"
                data-toggle="dropdown"
              >
                Services
              </a>
              <div className="dropdown-menu bg-dark">
                <a href="#" className="dropdown-item text-warning">
                  Maintenance
                </a>
                <a href="#" className="dropdown-item text-warning">
                  Repair
                </a>
                <a href="#" className="dropdown-item text-warning">
                  Diagnostics
                </a>
                <a href="#" className="dropdown-item text-warning">
                  Performance
                </a>
              </div>
            </li>
            <li className="nav-item dropdown px-2">
              <a
                href="#"
                className="nav-link dropdown-toggle text-warning"
                role="button"
                data-toggle="dropdown"
              >
                About Us
              </a>
              <div className="dropdown-menu bg-dark">
                <a href="#" className="dropdown-item text-warning">
                  About The Shop
                </a>
                <a href="#" className="dropdown-item text-warning">
                  Meet The Team
                </a>
              </div>
            </li>
            <li className="nav-item px-2">
              <a
                href="#"
                className="nav-link btn btn-outline-warning text-warning px-2"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
