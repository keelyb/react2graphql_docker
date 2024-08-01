// import React from 'react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideDrawer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    
    <div
    className={`fixed left-0 top-0 h-full bg-gray-800 text-white flex flex-col justify-between py-2 pt-16 transition-width duration-300 ${
      isExpanded ? 'w-32' : 'w-12'
    }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col flex-grow">
        <Link to="/" className="flex items-center justify-left pl-2 py-3 hover:bg-gray-700">
          <i className="fas fa-home"></i>
          <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Home</span>
        </Link>
        <Link to="/services" className="flex items-center justify-left pl-2 py-3 hover:bg-gray-700">
          <i className="fas fa-concierge-bell"></i>
          <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Services</span>
        </Link>
        <Link to="/about" className="flex items-center justify-left pl-2 py-3 hover:bg-gray-700">
          <i className="fas fa-info-circle"></i>
          <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>About</span>
        </Link>
        <Link to="/contact" className="flex items-center justify-left pl-2 py-3 hover:bg-gray-700">
          <i className="fas fa-envelope"></i>
          <span className={`ml-2 ${isExpanded ? 'block' : 'hidden'}`}>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default SideDrawer;
