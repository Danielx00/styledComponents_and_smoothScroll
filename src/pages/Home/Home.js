import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import Hero from "../../components/HeroSection/Hero";
import Info from "../../components/InfoSection/Info";
import { homeObjOne, homeObjThree, homeObjTwo} from "../../components/InfoSection/data";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <NavBar toggleSideBar={toggleSideBar} />
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Services/>
      <Info {...homeObjThree}/>
      <Footer/>
    </>
  );
};

export default Home;
