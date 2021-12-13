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
  
  return (
    <Particles
      height="100%"
      init={particlesInit}
      loaded={particlesLoaded}
      params={ParticlesConfig}
    />
  );
};

export default ParticleBackground;
