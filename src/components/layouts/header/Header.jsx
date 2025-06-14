"use client";
import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 bg-blue-950 text-white shadow-md">
        <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            {/* Using a placeholder for logo, replace with your actual /logo.svg */}
            <div className="h-8 w-8 bg-blue-400 rounded-full mr-3 flex items-center justify-center text-xs font-bold">
              L
            </div>
            {/* <img src="/logo.svg" className="h-8 mr-3" alt="Company Logo" /> */}
            <span className="text-xl font-semibold">CLICON</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <a
              href="#about"
              className="hover:text-gray-300 text-lg font-medium transition"
              onClick={closeMobileMenu}
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-gray-300 text-lg font-medium transition"
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 text-lg font-medium transition"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-700 transition"
            >
              Log in
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-medium rounded-lg transition"
            >
              Get started
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-blue-950 z-40 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileMenu}
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Close mobile menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-12">
          <a
            href="#about"
            className="text-white text-3xl font-medium hover:text-gray-300 transition"
            onClick={closeMobileMenu}
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-white text-3xl font-medium hover:text-gray-300 transition"
            onClick={closeMobileMenu}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white text-3xl font-medium hover:text-gray-300 transition"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <div className="flex flex-col items-center space-y-4 mt-8">
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium rounded-lg text-white border border-gray-300 hover:bg-gray-700 transition w-48 text-center"
            >
              Log in
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg font-medium rounded-lg transition w-48 text-center"
            >
              Get started
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom Mobile Navbar - HIDDEN as the overlay now covers full screen */}
      {/* <nav className="fixed bottom-0 w-full bg-gray-800 text-white z-40 shadow-inner lg:hidden">
        <div className="flex justify-around items-center py-2">
          <a href="#about" className="flex flex-col items-center text-sm hover:text-gray-300">
            About
          </a>
          <a href="#services" className="flex flex-col items-center text-sm hover:text-gray-300">
            Services
          </a>
          <a href="#contact" className="flex flex-col items-center text-sm hover:text-gray-300">
            Contact
          </a>
        </div>
      </nav> */}
    </>
  );
}

export default Header;
