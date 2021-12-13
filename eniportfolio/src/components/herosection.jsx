import React, { Component, useState } from "react";
import { useEffect } from "react";
import arrowright from "../img/arrow-right.svg";
import spiral from "../img/spiral.svg";
import "./herosection.css";
import { Background } from "../pages/home";
import Aos from "aos";
import "aos/dist/aos.css";
const HeroSection = () => {
  const [swell, setSwell] = useState(false);

  useEffect(() => {
    var greenBox = document.querySelector(".green-box");
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
  return (
    <section id="herosection">
      <div className="w-100  overflow-hidden">
        <div className="row justify-content-center  px-3 py-5">
          <div className="col-lg-9 col-sm-12 col-md-10 col-xl-9 col-xxl-9  pt-5 mt-5">
            <p className="hero-subtext" data-aos="fade-up">
              Hi There! I’m Eniola{" "}
            </p>
            <h3
              className="hero-caption"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I am a UI/UX Designer based in Lagos, Nigeria. I am focused on
              creating User-centric experiences and meaningful identities.
            </h3>
            <div className="green-ctn d-flex mt-4">
              <div className="green-box me-4" id="greenbox"></div>{" "}
              <a
                className="d-flex"
                href="#worksection"
                onMouseOver={Swell}
                onMouseOut={Deswell}
              >
                {" "}
                <p className="green-text mb-0 me-2 me-md-5 me-lg-5">
                  Latest Projects
                </p>
                <img className="" src={arrowright} />
              </a>
            </div>
          </div>
          <div className="spiral-ctn text-center mt-5 mt-md-0 mt-lg-0">
            <img
              className="spiral"
              src={spiral}
              alt="scroll down"
             
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
