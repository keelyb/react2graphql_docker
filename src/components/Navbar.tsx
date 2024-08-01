import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  links: { label: string; path: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <Link to={link.path} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
