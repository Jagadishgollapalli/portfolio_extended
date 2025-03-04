import React, { useState } from "react";

export default function ContactForm() {
  const [data, setData] = useState({
    fname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setData({ fname: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center mt-0 bg-gray-100">
      <div className="max-w-4xl w-full bg-gray-50 shadow-lg rounded-lg p-10 flex flex-col md:flex-row mt-10 mb-10">
        {/* Left Content */}
        <div className="md:w-1/2 pr-8">
          <h3 className="text-lg font-semibold text-gray-700">Quick Contact</h3>
          <h2 className="text-4xl font-bold text-black mt-2">
            Leave a Message
          </h2>
          <p className="text-gray-600 mt-4">
            You can reach out to me by just one click, submit your details and
            lets get connected.
          </p>
        </div>

        {/* Right Form */}
        <form
          className="md:w-1/2 flex flex-col space-y-4"
          action="https://formspree.io/f/xnnjerwg"
          method="POST"
        >
          <input
            type="text"
            placeholder="your name"
            name="fname"
            value={data.fname}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
          />
          <textarea
            rows={4}
            placeholder="your message"
            value={data.message}
            onChange={handleChange}
            name="message"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
            onClick={handleClick}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
