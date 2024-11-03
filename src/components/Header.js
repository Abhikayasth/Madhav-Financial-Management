// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaBars, FaTimes } from 'react-icons/fa'; // Import notification and menu icons
import logo from '../images/Logo.png'; // Update with your logo path

function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-teal-600 to-teal-800 shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <img src={logo} alt="Madhav Financial Management Logo" className="h-12 w-12 rounded-full border-2 border-white shadow-md mr-2" />
          <h1 className="text-2xl font-extrabold text-white transition-transform duration-300 hover:scale-105">Madhav Financial Management</h1>
        </div>


        {/* Navigation Links */}
        <nav className={`flex-col md:flex md:flex-row md:space-x-6 absolute md:static top-16 left-0 bg-white md:bg-transparent w-full md:w-auto transition-all duration-300 ${isNavOpen ? 'flex' : 'hidden'} shadow-lg md:shadow-none`}>
          <div className="flex flex-col md:flex-row">
            <Link to="/" className="text-gray-700 md:text-white transition-all duration-200 hover:text-teal-500 p-2">Home</Link>
            <Link to="/goals" className="text-gray-700 md:text-white transition-all duration-200 hover:text-teal-500 p-2">Goals</Link>
            <Link to="/financial-records" className="text-gray-700 md:text-white transition-all duration-200 hover:text-teal-500 p-2">Records</Link>
            <Link to="/about" className="text-gray-700 md:text-white transition-all duration-200 hover:text-teal-500 p-2">About</Link>
          </div>
        </nav>

        {/* Reminder Time */}
        <div className="text-white mr-4 hidden md:block">
          <span className="font-semibold">Next Reminder: </span>
          <strong className="text-lg">10:30 AM</strong>
        </div>

        {/* Notification Bell */}
        <button className="text-white text-2xl mr-4 relative transition duration-200 transform hover:scale-110 hover:text-teal-200">
          <FaBell />
          {/* Badge for notifications */}
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </button>

        {/* Search Icon */}
        <button onClick={toggleSearch} className="text-white text-2xl mr-4 transition duration-200 transform hover:scale-110 hover:text-teal-200">
          <FaSearch />
        </button>

        {/* Join Now Button */}
        <Link to="/join" className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-teal-600 hover:scale-105">
          Join Now
        </Link>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-lg p-6 relative w-11/12 md:w-1/3 shadow-lg">
            <button
              onClick={toggleSearch}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 transition duration-200"
            >
              &times; {/* Close icon */}
            </button>
            <input
              type="text"
              placeholder="Search for goals, records, etc..."
              className="bg-gray-100 outline-none text-gray-700 placeholder-gray-400 w-full py-2 px-4 rounded-full shadow-sm transition-all duration-300 hover:bg-gray-200"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
