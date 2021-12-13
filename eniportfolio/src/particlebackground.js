import React, { Component, useEffect } from "react";
import Particles from "react-particles-js";
import styled from "styled-components/macro";
import ParticlesConfig from "./config/particle-config";

const particlesInit = (Intialized) => {
  console.log(Intialized);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (Loader) => {
  console.log(Loader);
};
const ParticleBackground = () => {
  var screen = document.querySelector("body");
  var height;
  useEffect(() => {
    height = Math.max(
      screen.clientHeight,
      screen.offsetHeight,
      screen.scrollHeight
    );
    console.log(screen, "height", height);
  });
  return (
    <Particles
      height="9000px"
      init={particlesInit}
      loaded={particlesLoaded}
      params={ParticlesConfig}
    />
  );
};

export default ParticleBackground;
