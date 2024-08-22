import React from "react";
import Event from "../Components/Event";
import Hero from "../Components/Hero";
import { useContext } from "react";
import man from "../images/image 2.png";
import App from "../App";
import Blog from "../Components/Blog";

import CounterSection from "../Components/CounterSection";
import About from "../Components/About";
import Projects from "../Components/Projects";
const Home = () => {
  return (
    <div>
      <Hero />
      <CounterSection />
      <About />
      <Projects  />
      <div className="w-full h-1/2">
        <img src={man} alt="nigerian-man-img" className="w-full" />
      </div>
      <Blog />


      
    </div>
  );
};

export default Home;
