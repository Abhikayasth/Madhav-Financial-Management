import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for active link tracking
import { FaTachometerAlt, FaBookOpen, FaProjectDiagram, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path; // Check if link is active

  return (
    <div className="relative">
      <button onClick={toggleSidebar} className="lg:hidden p-4 text-gray-800" aria-expanded={isOpen}>
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
      </button>

      <aside className={`fixed lg:static w-64 bg-gray-800 text-white h-screen p-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <nav className="space-y-6">
          <Link to="/" className={`flex items-center p-2 rounded ${isActive('/') ? 'bg-gray-700' : ''} hover:bg-gray-700 transition duration-200 transform hover:scale-105`}>
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>

          <div>
            <h2 className="text-lg font-semibold">Goals</h2>
            <div className="space-y-2">
              {['/goals/daily', '/goals/financial', '/goals/study', '/goals/project'].map((goalPath) => (
                <Link key={goalPath} to={goalPath} className={`flex items-center p-2 rounded ${isActive(goalPath) ? 'bg-gray-700' : ''} hover:bg-gray-700 transition duration-200 transform hover:scale-105 pl-4`}>
                  {goalPath.includes('daily') ? 'Daily Goals' : goalPath.includes('financial') ? 'Financial Goals' : goalPath.includes('study') ? 'Study Goals' : 'Project Goals'}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Financial Records</h2>
            <div className="space-y-2">
              {['/financial-records/expenses', '/financial-records/income', '/financial-records/savings'].map((recordPath) => (
                <Link key={recordPath} to={recordPath} className={`flex items-center p-2 rounded ${isActive(recordPath) ? 'bg-gray-700' : ''} hover:bg-gray-700 transition duration-200 transform hover:scale-105 pl-4`}>
                  {recordPath.includes('expenses') ? 'Expenses' : recordPath.includes('income') ? 'Income' : 'Savings'}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className={`flex items-center p-2 rounded ${isActive('/about') ? 'bg-gray-700' : ''} hover:bg-gray-700 transition duration-200 transform hover:scale-105`}>
            <FaBookOpen className="mr-2" /> About
          </Link>

          <Link to="/projects" className={`flex items-center p-2 rounded ${isActive('/projects') ? 'bg-gray-700' : ''} hover:bg-gray-700 transition duration-200 transform hover:scale-105`}>
            <FaProjectDiagram className="mr-2" /> Projects
          </Link>

          <Link to="/settings" className={`flex items-center p-2 rounded ${isActive('/settings') ? 'bg-gray-700' : ''} hover:bg-gray-700 transition duration-200 transform hover:scale-105`}>
            <FaCog className="mr-2" /> Settings
          </Link>

          <Link to="/logout" className={`flex items-center p-2 rounded ${isActive('/logout') ? 'bg-gray-700' : ''} hover:bg-gray-700 transition duration-200 transform hover:scale-105`}>
            <FaSignOutAlt className="mr-2" /> Logout
          </Link>
        </nav>
      </aside>

      {isOpen && <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={toggleSidebar}></div>}
    </div>
  );
}

export default Sidebar;
