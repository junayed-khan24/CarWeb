import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white px-4 md:px-10">
      
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 text-white"
          >
            <li><a className="hover:text-green-500">Home</a></li>
            <li><a className="hover:text-green-500">Cars</a></li>
            <li><a className="hover:text-green-500">About</a></li>
            <li><a className="hover:text-green-500">Contact</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="text-2xl font-bold text-green-500">
          CarRental
        </a>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a className="hover:text-green-500">Home</a></li>
          <li><a className="hover:text-green-500">Cars</a></li>
          <li><a className="hover:text-green-500">About</a></li>
          <li><a className="hover:text-green-500">Contact</a></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <button className="btn bg-green-500 hover:bg-green-600 text-white border-none">
          Login
        </button>
      </div>

    </div>
  );
};

export default Navbar;
