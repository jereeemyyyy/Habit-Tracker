import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4">
      <nav className="bg-white rounded-full shadow-md max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2"> 
          <span className="text-xl font-bold text-gray-800">HabitTracker</span>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/calendar"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Calendar
          </Link>
          <Link
            to="/habits"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Habits
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;