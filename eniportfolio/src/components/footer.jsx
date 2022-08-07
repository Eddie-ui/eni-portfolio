import React, { Component, useEffect } from "react";
import call from "../img/call.svg";
import mail from "../img/sms.svg";
import location from "../img/location.svg";
import "./footer.css";import Aos from "aos";
import "aos/dist/aos.css";

const FooterSection = () => { useEffect(() => {
  Aos.init({ duration: 500, once: true, mirror: false, offset: 20, disable: "mobile" });
});
  return (
    <section id="footer">
      <div className="w-100 overflow-hidden">
        <div className="row px-4 px-lg-5 px-md-5 py-3 gx-4 gy-4 pt-5 row-diff">
          <div className="col-sm-12 text-center">
            <h3 className="section-header mx-auto mb-3 mt-5" data-aos="fade-up">
              Let's Build Together
            </h3>
            <p
              className="section-subtext mx-auto mb-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              I am available to work on your projects and bring your ideas to
              life. I am just a click away.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="contact-ctn">
              <a href="tel:+2348187133994">
                <div className="contact-card">
                  <div className="contact-icon-ctn">
                    <div className="contact-fade">
                      <div className="contact-white">
                        <img
                          className="img-fluid"
                          src={call}
                          alt="Call Eniola"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contact-text-ctn">
                    <h3 className="contact-header">Call</h3>
                    <p className="contact-info">+2348187133994</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            {" "}
            <div className="contact-ctn">
              <a href="mailto:@Eni.Ajibode@gmail.com">
                <div className="contact-card">
                  <div className="contact-icon-ctn">
                    <div className="contact-fade">
                      <div className="contact-white">
                        <img
                          className="img-fluid"
                          src={mail}
                          alt="Email Eniola"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contact-text-ctn">
                    <h3 className="contact-header">Mail</h3>
                    <p className="contact-info">@Eni.Ajibode@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>
          </div>{" "}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="contact-ctn">
              <a>
                <div className="contact-card">
                  <div className="contact-icon-ctn">
                    <div className="contact-fade">
                      <div className="contact-white">
                        <img
                          className="img-fluid"
                          src={location}
                          alt="Where does Eniola stay?"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contact-text-ctn">
                    <h3 className="contact-header">Location</h3>
                    <p className="contact-info">Africa - Remote</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row px-3 px-lg-5 px-md-5 py-3  pt-5 pb-5 mb-5">
          <div className="col-sm-12 d-flex justify-content-center">
            <div className="finish-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
