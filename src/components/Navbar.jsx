import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800">
          Bahodirxon Mahmudov
        </div>
        <div className="hidden md:flex space-x-6 text-gray-800">
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-blue-500"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-800 font-bold"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col md:hidden bg-white/90 backdrop-blur-md shadow-md p-4">
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="py-2 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="py-2 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="py-2 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
