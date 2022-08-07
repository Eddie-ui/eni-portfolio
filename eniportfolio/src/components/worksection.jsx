import React, { Component, useEffect } from "react";
import cashpay from "../img/cashpay.png";
import cashpaymini from "../img/cashpay-mini.png";
import arrowright from "../img/arrow-right.svg";
import "./worksection.css";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const WorkSection = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [swell, setSwell] = useState(false);

  useEffect(() => {
    var greenBox = document.querySelector("#greenbx");
    Aos.init({ duration: 500, once: true, mirror: false });
    if (swell) {
      greenBox.style.width = "250px";
    } else {
      greenBox.style.width = "42px";
    }
  });
  const Swell = () => {
    setSwell(true);
    // var cont = this.nextElementSibling.find(".green-box");
    console.log("this is this");
  };
  const Deswell = () => {
    setSwell(false);
  };
  const ImgResize = () => {
    if (window.innerWidth < 500) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };
  window.addEventListener("load", ImgResize);
  window.addEventListener("resize", ImgResize);
  window.addEventListener("focus", ImgResize);
  window.addEventListener("resize", ImgResize);
  window.addEventListener("change", ImgResize);

  return (
    <section id="worksection">
      <div className="w-100 overflow-hidden">
        <div className="row px-4 px-lg-5 px-md-5 py-3">
          <div className="col-sm-12 text-center">
            <h3 className="section-header mx-auto mb-5" data-aos="fade-up">
              Latest Work
            </h3>
          </div>
          <div className="col-sm-12 text-center work-ctn ">
            <div className="product-ctn w-100">
              {smallScreen ? (
                <img
                  className="workImg w-100 img-fluid "
                  src={cashpaymini}
                  alt="Cashpay"
                />
              ) : (
                <img
                  className="workImg w-100 img-fluid "
                  src={cashpay}
                  alt="Cashpay"
                />
              )}
            </div>
            <div
              className="view-project-ctn p-3"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h3 className="view-project-header mb-3 text-start">Cashpay</h3>
              <p className="view-project-text">
                A loan app for middle income earners
              </p>
              <div className="green-ctn d-flex mt-4">
                <div className="green-box me-4" id="greenbx"></div>
                <a
                  className="d-flex green-link"
                  href="https://www.behance.net/gallery/118783147/Cashpay-App-Presentation"
                  onMouseOver={Swell}
                  onMouseOut={Deswell}
                >
                  <p className="green-text mb-0 me-5">View Projects</p>
                  <img className="" src={arrowright} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
