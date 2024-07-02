import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import specific icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white ">
      <div className="max-w-screen mx-auto px-4 py-8 h-30">
        {/* Social Media Logos */}
        <div className="flex justify-center mb-4">
          <FontAwesomeIcon icon={faFacebook} className="text-gray-400 text-2xl hover:text-blue-400 transition duration-300 mx-2" />
          <FontAwesomeIcon icon={faTwitter} className="text-gray-400 text-2xl hover:text-blue-400 transition duration-300 mx-2" />
          <FontAwesomeIcon icon={faInstagram} className="text-gray-400 text-2xl hover:text-blue-400 transition duration-300 mx-2" />
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-center text-gray-400 ">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
