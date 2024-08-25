import image from "../images/Image.png"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Team= () => {
    const teamMembers = [
        {
          name: "John Doe",
          title: "CEO",
          image: "/path/to/john-doe.jpg", // Add the path to the image
        },
        {
          name: "Jane Smith",
          title: "COO",
          image: "/path/to/jane-smith.jpg",
        },
        {
          name: "Michael Johnson",
          title: "CTO",
          image: "/path/to/michael-johnson.jpg",
        },
        {
          name: "Emily Davis",
          title: "CFO",
          image: "/path/to/emily-davis.jpg",
        },
      ];
      useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once while scrolling
          easing: 'ease-in-out', // Easing function for animations
        });
      }, []);
  return (
    <div className="bg-green-800 py-12">
      <h2 className="text-center text-white text-4xl font-bold mb-8">Meet Our Team</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div data-aos="zoom-out"  key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={member.name} className="w-full  object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-green-900">{member.name}</h3>
              <p className="text-gray-700">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
