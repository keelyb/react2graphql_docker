import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
      <header className="bg-gray-800 text-white py-4 px-6 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold sm:block hidden">My App</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;