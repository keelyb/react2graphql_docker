import React from 'react';

interface FooterProps {
  appVersion: string;
}

const Footer: React.FC<FooterProps> = ({ appVersion }) => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 fixed w-full bottom-0 z-10">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-2 sm:mb-0">&copy; 2024 My App v{appVersion}</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <span className="hidden sm:inline-block">|
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
