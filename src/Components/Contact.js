import React, { useEffect } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          We Would Like to Hear from You
        </h2>
        <p className="text-gray-600 mb-8">
          Please fill out the form below to get in touch with us. We’ll get back
          to you as soon as possible.
        </p>
        <form
          className="bg-white shadow-lg rounded-lg p-8 space-y-6 animate__animated animate__fadeIn animate__delay-1s"
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            Swal.fire({
              title: "Success!",
              text: "Your message has been sent successfully.",
              icon: "success",
              confirmButtonText: "OK",
              timer: true,
              timer: 2000,
            });
          }}
          //   method="POST"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                placeholder="john.doe@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
              placeholder="Your message here..."
              required></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-800 text-white font-bold rounded-lg hover:bg-green-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
