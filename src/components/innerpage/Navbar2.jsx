import React from "react";

function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light inner-navbar-style1">
      <div className="container-fluid">
        <a className="navbar-brand me-lg-5" href="#">
          <img src="/innerpages/assets/img/logo.png" alt="" className="logo" />
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/works">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-side">
            <a
              href="#"
              className="icon ms-3 side_menu_btn fsz-21 active d-none d-lg-inline-block"
            >
              <span>
                {" "}
                <i className="la la-grip-lines"></i>{" "}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
