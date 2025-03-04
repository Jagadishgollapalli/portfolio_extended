import { useState } from "react";
import { Menu, X } from "lucide-react";
import bgImage from "./images/bgme.jpg";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <a href="https://github.com/jagadishgollapalli">
          <img
            className="w-10 h-10 animate-pulse"
            src="https://icones.pro/wp-content/uploads/2021/06/icone-github-rouge.png"
          ></img>
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">
            <FaHome className="text-3xl text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/g-jagadish954186205/"
            className="text-gray-600 hover:text-black"
          >
            <FaLinkedin className="text-3xl text-sky-600" />
          </a>
          <a
            href="https://www.youtube.com/@RetailTraderHub"
            className="text-gray-600 hover:text-black"
          >
            <IoLogoYoutube className="text-3xl text-red-600" />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <a href="#" className="block text-gray-600 py-2">
            Home
          </a>
          <a
            href="https://www.linkedin.com/in/g-jagadish954186205/"
            className="block text-gray-600 py-2"
          >
            Linkedin
          </a>
          <a
            href="https://www.youtube.com/@RetailTraderHub"
            className="block text-gray-600 py-2"
          >
            Youtube
          </a>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative w-full max-w-6xl h-[550px] mx-auto mt-12 rounded-xl overflow-hidden text-white p-12">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Content Wrapper */}
        <div className="relative flex flex-col gap-6 p-14 font-sans">
          <div className="leading-tight">
            <h1 className="text-8xl font-bold">Jagadish</h1>
            <h1 className="text-8xl font-bold">Gollapalli</h1>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative mt-5 bg-black bg-opacity-90 text-white rounded-xl p-8 flex justify-between items-center text-center font-sans">
          <div className="flex flex-col">
            <span className="text-5xl font-bold animate-bounce">3.5</span>
            <span className="text-lg uppercase tracking-wide animate-pulse">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold animate-bounce">16+</span>
            <span className="text-lg uppercase tracking-wide animate-pulse">
              Tech Stacks
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold animate-bounce">500+</span>
            <span className="text-lg uppercase tracking-wide animate-pulse">
              Contributions
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold animate-bounce">100+</span>
            <span className="text-lg uppercase tracking-wide animate-pulse">
              Projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
