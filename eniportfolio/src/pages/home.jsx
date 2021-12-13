import React, { Component } from "react";
import Nav from "../components/nav";
import HeroSection from "../components/herosection";
import ParticleBackground from "../particlebackground";
import styled from "styled-components";
import PersonalInfo from "../components/personalinfo";
import WorkSection from "../components/worksection";
import ArchiveSection from "../components/archivesection";
import FooterSection from "../components/footer";

 export const Background = styled.div`
  background-color: #000624;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Home = () => {
  return (
    <div className="w-100">
      <Background>
        <ParticleBackground />
      </Background>
      <Nav />
      <HeroSection />
      <PersonalInfo />
      <WorkSection />
      <ArchiveSection />
      <FooterSection />
    </div>
  );
};

export default Home;
