import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import profile from "../images/Profil pic.png";
import profile2 from "../images/image 2 (3).png";
import twitter from "../images/🦆 icon _twitterbird_.png";
import facebook from "../images/Vector (10).png";
// import '../Styles/Testimonial.css'
const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="px-7 py-10  bg-[#F8F8FB] md:px-20 py-20">
      <div>
        <div>
          <div className="flex items-center  gap-2 font-bold">
            <div className="bg-[#F4DD0A] h-1 w-10"></div>
            <p>Testimonials</p>
          </div>

          <h1 className="font-bold text-2xl">What Users Says </h1>
        </div>

        <Slider {...settings} className="flex gap-3 py-5 px-1 items-center">
          <div className="py-6">
            {/* <div className="grid gap-4 p-3 rounded shadow border"> */}
            <div className=" grid gap-4 bg-white border p-4 rounded shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-gray cursor-pointer">
              <div className="flex items-center gap-4 justify-center">
                <img src={profile} alt="man-img" />

                <div className="flex items-center gap-2 justify-between bg-[#F8F8FB] gap-20 rounded p-2">
                  <div>
                    <p>
                      <b>Jhon D.</b>
                    </p>
                    <p>Neurologist</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                  </div>
                </div>
              </div>

              <p className="text-[#4B4B59] text-center">
                Staying connected to home has never been easier. This platform
                has revolutionized how I keep up with everything happening in
                Nigeria, making it an essential tool for me as a Nigerian living
                abroad. It bridges the gap and ensures I’m always informed, no
                matter where I am.
              </p>
            </div>
          </div>
          <div className="py-5">
            {/* <div className="grid gap-4 p-3 rounded shadow border"> */}
            <div className=" grid gap-4 bg-white border p-3 rounded shadow-md rounded-lg o transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-gray cursor-pointer">
              <div className="flex items-center gap-4 justify-center">
                <img src={profile2} alt="lady-img" />

                <div className="flex items-center gap-2 justify-between bg-[#F8F8FB] gap-20 rounded p-2">
                  <div>
                    <p>
                      <b>Judy W.</b>
                    </p>
                    <p>Online teacher</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                  </div>
                </div>
              </div>

              <p className="text-[#4B4B59] text-center">
                As a Nigerian living abroad, staying informed about events back
                home is crucial. This platform has been a game-changer, keeping
                me connected and up-to-date with everything happening in
                Nigeria. It’s an invaluable resource that makes me feel closer
                to home, no matter the distance
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
