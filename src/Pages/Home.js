import React from "react";
import Blog from "../Components/Blog";
import CounterSection from "../Components/CounterSection";
import About from "../Components/About";
import Projects from "../Components/Projects";
import nlid from "../videos/document_5888497005738596081.mp4";
import Reviews from "../Components/Reviews"
import HeroSwiper from "../Components/HeroSwiper"
const Home = () => {
  return (
    <div>
      <HeroSwiper />

      <CounterSection />
      <About />
      <Projects />
    
      <div className="px-6 mt-14 h-auto bg-black  md:px-12 lg:px-24">
        {" "}
        <video
          className="w-full h-64 md:h-80"
          src={nlid}
          controls
          autoPlay></video>
      </div>
      <Blog />
      <Reviews />

    </div>
  );
};

export default Home;
