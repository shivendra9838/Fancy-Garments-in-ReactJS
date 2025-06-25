import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import '@fortawesome/fontawesome-free/css/all.min.css';  //styling for icons


const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto grid grid-cols-3 gap-8 text-sm">
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="text-gray-600">
            From attending a casual hangout session with your friends and family to running errands, tees can come in handy for you in varied scenarios. So, check out the wide array of T-shirts that can meet your requirements.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-5">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-gray-800 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/collection" className="hover:text-gray-800 hover:underline">
                collection
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="hover:text-gray-800 hover:underline">
                Delivery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-800 hover:underline">
                contact
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-medium mb-5">GET IN TOUCH</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="tel:+918318407559" className="hover:text-gray-800 hover:underline flex items-center gap-2">
                <i className="fas fa-phone-alt"></i> +91 8318407559
              </a>

            </li>
            <li>
              <a href="mailto:Anupampatel21661@gmail.com" className="hover:text-gray-800 hover:underline flex items-center gap-2">
                <i className="fas fa-envelope"></i> Anupampatel21661@gmail.com
              </a>

            </li>
            <li>
              <a
                href="https://www.instagram.com/shivendrat498/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-800 hover:underline"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/yourfacebookhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-800 hover:underline"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourtwitterhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-800 hover:underline"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-8">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-800"
        >
          <i className="fab fa-google-play text-2xl"></i>
          <span>Google Play</span>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-800"
        >
          <i className="fab fa-apple text-2xl"></i>
          <span>App Store</span>
        </a>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs">
        <hr className="mb-4" />
        <p>Copyright © 2024 Fancy Garments - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
