import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-md py-3" id="main-nav">
        <Link to="/" className="navbar-brand ml-md-5">
          <img
            src={require('../../images/pm-logo.png')}
            alt="PM Autoworks"
            style={{
              height: 'auto',
              maxHeight: '30px',
              width: 'auto',
              maxWidth: '100%'
            }}
            className="rounded img-thumbnail fadeIn"
          />
        </Link>

        <button
          className="navbar-toggler custom-toggler collapsed fadeIn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto mr-md-5 fadeIn">
            <li className="nav-item dropdown px-2">
              <Link
                to="/services"
                href="#"
                className="nav-link dropdown-toggle text-warning"
                role="button"
                data-toggle="dropdown"
              >
                Services
              </Link>
              <div className="dropdown-menu animate slideIn bg-dark mt-0">
                <Link to="/services" className="dropdown-item text-warning">
                  Maintenance
                </Link>
                <Link to="/services" className="dropdown-item text-warning">
                  Repairs
                </Link>
                <Link to="/services" className="dropdown-item text-warning">
                  Diagnostics
                </Link>
                <Link to="/services" className="dropdown-item text-warning">
                  Performance
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown px-2">
              <Link
                to="/about"
                className="nav-link dropdown-toggle text-warning"
                role="button"
                data-toggle="dropdown"
              >
                About Us
              </Link>
              <div className="dropdown-menu animate slideIn bg-dark mt-0">
                <Link to="/about" className="dropdown-item text-warning">
                  About The Shop
                </Link>
                <Link to="/about" className="dropdown-item text-warning">
                  Meet The Team
                </Link>
              </div>
            </li>
            <li className="nav-item px-2">
              <Link
                to="/contact"
                className="nav-link btn btn-outline-warning text-warning px-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
