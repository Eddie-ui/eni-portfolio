import React, { Component, useEffect, useState } from "react";
import eniola from "../img/profile.png";
import insta from "../img/instagram.svg";
import dribble from "../img/dribble.svg";
import linkedin from "../img/linkedin.svg";
import behance from "../img/behance.svg";
import navbtn from "../img/navbtn.svg";
import close from "../img/close.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import "./nav.css";

const Nav = () => {
  useEffect(() => {
    Aos.init({ duration: 500, once: true, mirror: false });
  });
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    // console.log(click);
  };

  const defaultChange = () => {
    if (window.innerWidth <= 992) {
      setClick(false);
    }
    if (window.innerWidth >= 992) {
      setClick(false);
    }
  };

  window.addEventListener("resize", defaultChange);

  return (
    <nav
      className="navbar navbar-expand-lg px-4 py-1 py-md-3 py-lg-3  sticky-top w-100 overflow-hidden"
      onChange={defaultChange}
    >
      <div className={click ? "container-fluid fluid" : "container-fluid"}>
        {click ? (
          ""
        ) : (
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <div className="profile-ctn">
              {/* <div className="profile-img me-3 "></div> */}
              <img
                src={eniola}
                className="me-3 profile-img"
                alt="Eniola Ajibode"
              />
              <p className="m-0 profile-text">Eniola Ajibode</p>
            </div>
          </a>
        )}
        <button
          className={click ? "navbar-toggler mt-4" : "navbar-toggler"}
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          onClick={handleClick}
          aria-label="Toggle navigation"
        >
          <img src={click ? close : navbtn} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav h-100 ms-auto mb-2 mb-lg-0 topnav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#footer">
                Contact me
              </a>
            </li>
            <li className="nav-item white-line" data-aos="fade-left"></li>
            <ul className="inside-nav navbar-nav">
              {" "}
              <li
                className="nav-item "
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/eniolaajibode/"
                >
                  <img className="social" src={linkedin} />
                </a>
              </li>
              <li
                className="nav-item"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <a
                  className="nav-link"
                  href="https://www.instagram.com/ui.eniola/"
                >
                  <img className="social" src={insta} />
                </a>
              </li>
              <li
                className="nav-item"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <a
                  className="nav-link"
                  href="https://www.behance.net/eniolaajibode1"
                >
                  <img className="social" src={behance} />
                </a>
              </li>
              <li
                className="nav-item"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <a className="nav-link" href="https://dribbble.com/Ajibode">
                  <img className="social" src={dribble} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
