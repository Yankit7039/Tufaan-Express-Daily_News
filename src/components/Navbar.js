import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="/" style={{ fontSize: '1.5rem' }}>
              NewsMonkey
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
                  <a className="nav-link active" aria-current="page" href="/" style={navLinkStyle}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about" style={navLinkStyle}>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const navLinkStyle = {
  fontSize: '1.1rem',
  padding: '0.75rem 1rem',
  transition: 'color 0.3s ease',
};

export default Navbar;
