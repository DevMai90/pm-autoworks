import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm py-3">
        <div className="container">
          <a href="index.html" className="navbar-brand">
            PM Autoworks
          </a>
          <button
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">Home</li>
              <li className="nav-item">Services</li>
              <li className="nav-item">Contact Us</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
