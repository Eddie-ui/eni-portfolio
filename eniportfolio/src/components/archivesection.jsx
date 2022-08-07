import React, { Component, useEffect } from "react";
import airbnb from "../img/airbnb.png";
import lightmode from "../img/lightmode.png";
import darkmode from "../img/darkmode.png";
import afifinance from "../img/afifinance.png";
import luxuryhomes from "../img/luxuryhomes.png";
import cashpayalt from "../img/cashpayalt.png";
import Aos from "aos";
import "aos/dist/aos.css";
import './archivesection.css'
const ArchiveSection = () => {
  useEffect(() => {
    Aos.init({ duration: 500, once: true, mirror: false, offset: 20 });
  });
  return (
    <section id="archivesection" className="archivesection">
      <div className="w-100 overflow-hidden">
        <div className="row px-4 px-lg-5 px-md-5 py-3 gx-4 gy-4 archive">
          <div className="col-sm-12 text-center">
            <h3 className="section-header mx-auto mb-5" data-aos="fade-up">
              Archive
            </h3>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
            <a href="https://dribbble.com/shots/17053376-Real-estate-website-UI">
              {" "}
              <img
                src={airbnb}
                className="img-fluid w-100"
                alt="Airbnb Refix"
              />
            </a>{" "}
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="https://www.behance.net/gallery/119514097/Cashpay-Landing-Page">
              {" "}
              <img className="img-fluid w-100" src={cashpayalt} alt="Cashpay" />
            </a>{" "}
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <a href="https://www.behance.net/gallery/126105645/Luxury-Homes-Website-Design">
              <img
                src={lightmode}
                className="img-fluid w-100"
                alt="Afifinance Mobile Light Mode"
              />
            </a>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a href="https://dribbble.com/shots/16906074-Money-Saving-App-UI-Design">
              {" "}
              <img
                className="img-fluid w-100"
                src={luxuryhomes}
                alt="Luxury Homes"
              />
            </a>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <a href="https://dribbble.com/shots/17053617-Crypto-App-UI-design">
              <img
                className="img-fluid w-100"
                src={darkmode}
                alt="Finance Mode"
              />
            </a>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a href="#">
              {" "}
              <img
                className="img-fluid w-100"
                src={afifinance}
                alt="Afifinance Mobile Dark Mode"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchiveSection;
