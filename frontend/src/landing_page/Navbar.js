import React from "react";

function Navbar() {
  return (
      <nav class="navbar sticky-top navbar-expand-lg border-bottom">
        <div class="container p-2">
          <a class="navbar-brand " href="#">
            <img src="media/images/logo.svg" alt="logo" style={{width: "25%"}}></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <i class="fa-solid fa-bars"></i>
                </a>
              </li>
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}


export default Navbar;
