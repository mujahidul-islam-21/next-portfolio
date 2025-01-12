'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Footer from './footer/foter';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-1xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-green-400 via-green-400 to-green-600 bg-clip-text text-transparent">
          Mujahidul Islam
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none hover:text-green-300 transition duration-300"
          >
            {isOpen ? (
              <FaTimes className="text-red-600" />
            ) : (
              <FaBars className="text-lime-500" />
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex lg:space-x-8 absolute lg:static bg-emerald-500 lg:bg-transparent top-16 left-0 w-full lg:w-auto py-4 lg:py-0 px-6 lg:px-0 transition-all duration-500 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="text-lg font-medium hover:text-green-500 transition duration-300">
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-green-500 transition duration-300">
            <Link href="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-green-500 transition duration-300">
            <Link href="/services" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-green-500 transition duration-300">
            <Link href="/portfolio" onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li className="text-lg font-medium hover:text-green-500 transition duration-300">
            <Link href="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
