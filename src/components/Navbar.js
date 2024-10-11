import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            Tufaan-Express
          </Link>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {[
                { name: "Home", path: "/" },
                { name: "Business", path: "/business" },
                { name: "Entertainment", path: "/entertainment" },
                { name: "General", path: "/general" },
                { name: "Health", path: "/health" },
                { name: "Science", path: "/science" },
                { name: "Sports", path: "/sports" },
                { name: "Technology", path: "/technology" },
              ].map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link
                    className={`nav-link ${
                      isActive(item.path) ? "active-link" : ""
                    }`}
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
