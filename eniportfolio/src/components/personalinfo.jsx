import React, { Component, useEffect } from "react";
import avatar from "../img/avatar.png";
import figma from "../img/figma.png";
import miro from "../img/miro.png";
import adobexd from "../img/adobexd.png";
import photoshop from "../img/photoshop.png";
import whimsical from "../img/whimsical.png";
import illustrator from "../img/illustrator.png";
import { Background } from "../pages/home";
import "./personalinfo.css";
import Aos from "aos";
import "aos/dist/aos.css";

const PersonalInfo = () => {
  useEffect(() => {
    Aos.init({ duration: 500, once: true, mirror: false });
  });

  return (
    <section id="pinfosection">
      <div className="w-100 overflow-hidden">
        <div className="row px-3 px-lg-5 px-md-5 py-3  justify-content-between">
          <div className="col-sm-12 text-center">
            <h3 className="section-header mx-auto mb-5" data-aos="fade-up">
              Personal Info.
            </h3>
          </div>
          <div
            className="col-sm-12 col-lg-6 col-md-6 pt-lg-5 pt-sm-3 pt-md-5 pe-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="about-header mb-3">A BIT MORE ABOUT ME</h3>
            <p className="about-text">
              I am a motivated and driven designer who is passionate about
              understanding user needs and developing experiences that people
              love using. I strive to create products that are both visually
              appealing and useful. I get great satisfaction from solving
              business problems by creating user experiences that help people
              and organizations succeed.
            </p>
            <p className="about-text mt-5 mb-0">
              If you have opportunities that I can help you with, or if you want
              to discuss a project, feel free to contact me.
            </p>
            <div className="avatar-ctn w-100 mt-5 d-flex">
              <img src={avatar} alt="Eniola Ajibode" className="avatar" />{" "}
              <div id="chat-btn" className=" px-4 py-3" data-aos="fade-up">
                {" "}
                Hi, I'm Eniola, scroll down to view my latest work!!{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-5 col-md-5 pt-lg-5 pt-sm-3 pt-md-5">
            <div className="w-100">
              <h3 className="about-header mb-3" data-aos="fade-up">
                Skills
              </h3>
              <div className="skills-ctn d-flex w-100">
                <span
                  className="skill "
                  data-aos="zoom-in-left"
                  data-aos-delay="100"
                >
                  Design thinking
                </span>
                <span
                  className="skill "
                  data-aos="zoom-in-left"
                  data-aos-delay="150"
                >
                  User research
                </span>{" "}
                <span
                  className="skill "
                  data-aos="zoom-in-left"
                  data-aos-delay="200"
                >
                  User flow
                </span>{" "}
                <span
                  className="skill "
                  data-aos="zoom-in-left"
                  data-aos-delay="250"
                >
                  Wireframing
                </span>
                <span
                  className="skill "
                  data-aos="zoom-in-left"
                  data-aos-delay="300"
                >
                  Prototyping
                </span>
                <span
                  className="skill "
                  data-aos="zoom-in-left"
                  data-aos-delay="350"
                >
                  User personas{" "}
                </span>
              </div>
            </div>
            <div className="w-100 mt-5">
              <h3 className="about-header mb-3" data-aos="fade-up">
                Tools
              </h3>
              <div className="grid-ctn  " data-aos="fade-up" data-aos-delay="100">
                <div class="grid-item border-r border-b">
                  <img className="grid-img" src={figma} alt="Figma" />
                  <p className="grid-text">Figma</p>
                </div>
                <div class="grid-item border-r border-b ">
                  <img className="grid-img" src={adobexd} alt="Adobe Xd" />
                  <p className="grid-text">Adobe Xd</p>
                </div>
                <div class="grid-item border-b">
                  <img className="grid-img mb-3" src={miro} alt="Miro" />
                  <p className="grid-text mt-1">Miro</p>
                </div>
                <div class="grid-item border-r ">
                  <img className="grid-img" src={photoshop} alt="Photoshop" />
                  <p className="grid-text">Photoshop</p>
                </div>
                <div class="grid-item border-r ">
                  <img
                    className="grid-img"
                    src={illustrator}
                    alt="Adobe Illustrator"
                  />
                  <p className="grid-text">Adobe Illustrator</p>
                </div>
                <div class="grid-item ">
                  <img className="grid-img" src={whimsical} alt="Whimsical" />
                  <p className="grid-text">Whimsical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
