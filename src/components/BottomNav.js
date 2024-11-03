// src/components/BottomNav.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBullseye, FaWallet } from 'react-icons/fa';

function BottomNav() {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 w-full flex justify-around items-center bg-gradient-to-r from-teal-700 to-teal-900 text-white py-3 shadow-md transition-colors duration-300 lg:hidden">
      <Link 
        to="/" 
        className={`flex flex-col items-center text-sm font-semibold transition-all duration-200 hover:scale-105 ${location.pathname === '/' ? 'text-teal-300' : 'hover:text-teal-300'}`}
        aria-label="Dashboard"
      >
        <FaHome className="text-2xl transition-colors duration-300" />
        <span className="mt-1">Dashboard</span>
      </Link>
      
      <Link 
        to="/goals" 
        className={`flex flex-col items-center text-sm font-semibold transition-all duration-200 hover:scale-105 ${location.pathname === '/goals' ? 'text-teal-300' : 'hover:text-teal-300'}`}
        aria-label="Goals"
      >
        <FaBullseye className="text-2xl transition-colors duration-300" />
        <span className="mt-1">Goals</span>
      </Link>
      
      <Link 
        to="/financial-records" 
        className={`flex flex-col items-center text-sm font-semibold transition-all duration-200 hover:scale-105 ${location.pathname === '/financial-records' ? 'text-teal-300' : 'hover:text-teal-300'}`}
        aria-label="Financial Records"
      >
        <FaWallet className="text-2xl transition-colors duration-300" />
        <span className="mt-1">Records</span>
      </Link>
    </div>
  );
}

export default BottomNav;
