import edu from "../images/busy.webp";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import bene from "../images/bene.mp4";
import rice from "../images/rice.jpg";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Healthcare Outreach",
      description:
        "Providing medical supplies and healthcare support to rural communities in Nigeria.",
      imageUrl: null,
    },
    {
      id: 2,
      title: "Educational Scholarships",
      description:
        "Offering scholarships to underprivileged Nigerian students to pursue higher education.",
      imageUrl: null,
    },
    {
      id: 3,
      title: "Clean Water Initiative",
      description:
        "Installing water filtration systems to provide clean drinking water in underserved areas.",
      imageUrl: null,
    },
    {
      id: 4,
      title: "Agricultural Development",
      description:
        "Supporting local farmers with modern farming equipment and sustainable practices.",
      imageUrl: null,
    },
    {
      id: 5,
      title: "Youth Empowerment",
      description:
        "Running skill acquisition programs to empower Nigerian youth with practical skills.",
      imageUrl: null,
    },
    {
      id: 6,
      title: "Food Giveaway",
      vid: bene,
      video: true,
      description:
        "Providing food relief packages on the first Saturday of every month to support Nigerians in need.",
      imageUrl: rice,
    },
  ];
  const [visibleVideo, setVisibleVideo] = useState(null);
  const [showButton, setSHowButton] = useState(true);

  // Function to handle video toggle on button click
  const handleVideoClick = (id) => {
    if (visibleVideo === id) {
      setVisibleVideo(null);
      setSHowButton(true); // Hide video if it's already shown
    } else {
      setVisibleVideo(id);
      setSHowButton(false); // Show video for the clicked project
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling
      easing: "ease-in-out", // Easing function for animations
    });
  }, []);
  return (
    <div className="py-10 px-6 bg-[#1E1E2F] text-white md:px-10" id="projects">
      <h2 className="text-3xl font-bold text-center text-[#54A9CE] mb-8">
        Our Projects
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              data-aos="fade-down"
              key={project.id}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={project.imageUrl ? project.imageUrl : edu}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#1E1E2F] mb-2">
                  {project.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {project.description}
                </p>
              </div>

              {project.video && (
                <div>
                  {showButton && (
                    <button
                      onClick={() => handleVideoClick(project.id)}
                      className="cursor-pointer z-10 my-2 ml-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ">
                      {visibleVideo === project.id
                        ? "Hide Video"
                        : "Show Video"}
                    </button>
                  )}
                </div>
              )}

              {/* {visibleVideo === project.id && (
              <div className="mt-4">
                <video
                  src={project.vid}
                  controls
                  className="w-full max-h-72"
                  autoPlay
                ></video>
              </div>
            )} */}
              {visibleVideo === project.id && (
                <div className="absolute inset-0 flex justify-center items-center ">
                  <video
                    src={project.vid}
                    controls
                    className="w-full max-h-72 border bg-black"></video>

                  <span
                    onClick={() => handleVideoClick(project.id)}
                    className="text-2xl font-semibold cursor-pointer absolute top-20 right-10 text-white p-2 bg-black">
                    x
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Center the video */}
      </div>
    </div>
  );
};

export default Projects;
