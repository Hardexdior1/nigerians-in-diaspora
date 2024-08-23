import React from 'react';
import edu from "../images/busy.webp"
const projects = [
  {
    id: 1,
    title: "Healthcare Outreach",
    description: "Providing medical supplies and healthcare support to rural communities in Nigeria.",
    imageUrl: "/images/healthcare-outreach.jpg", // Example image path
  },
  {
    id: 2,
    title: "Educational Scholarships",
    description: "Offering scholarships to underprivileged Nigerian students to pursue higher education.",
    imageUrl: "/images/educational-scholarships.jpg",
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    description: "Installing water filtration systems to provide clean drinking water in underserved areas.",
    imageUrl: "/images/clean-water-initiative.jpg",
  },
  {
    id: 4,
    title: "Agricultural Development",
    description: "Supporting local farmers with modern farming equipment and sustainable practices.",
    imageUrl: "/images/agricultural-development.jpg",
  },
  {
    id: 5,
    title: "Youth Empowerment",
    description: "Running skill acquisition programs to empower Nigerian youth with practical skills.",
    imageUrl: "/images/youth-empowerment.jpg",
  },
  {
    id: 6,
    title: "Economic Empowerment",
    description: "Providing microloans and financial education to small business owners in Nigeria.",
    imageUrl: "/images/economic-empowerment.jpg",
  },
];

const Projects = () => {
  return (
    <div className="py-10 px-4 bg-[#1E1E2F] text-white" id='projects'>
      <h2 className="text-3xl font-bold text-center text-[#54A9CE] mb-8">
        Our Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={edu}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#1E1E2F] mb-2">
                {project.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
