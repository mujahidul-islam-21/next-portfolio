// Navbar.js
'use client';
import { FiMenu, FiX  , FiMapPin} from 'react-icons/fi';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Searchber from './Searchber';
import Carticon from './Carticon';
import ProfileMenu from './ProfileMenu';
import Darkmood from './Darkmood';
import NavLinks from './NavLinks';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isBelow659, setIsBelow659] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsBelow659(window.innerWidth < 659);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuOpen &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('[aria-label="Open menu"]')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="border-b border-gray-100 shadow-sm bg-white relative z-50 dark:bg-gray-800 dark:border-gray-700">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:py-4 md:px-8">
        <div className="flex items-center gap-4 sm:gap-5">
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 mr-1 sm:mr-3"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
          <Logo />
        </div>

        <Searchber />

        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
  <Darkmood />
  <ProfileMenu />

  {/* Track Icon Only */}
  <Link
    href="/trackorder"
    className="text-gray-700 dark:text-gray-300 hover:text-green-600 font-bold"
    title="Track Order"
  >
    <FiMapPin size={23} />
  </Link>

  <Carticon showCart={showCart} setShowCart={setShowCart} />
</div>
      </div>

      {/* Bottom Nav */}
      {!isBelow659 && <NavLinks />}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-md z-50 transform transition-transform duration-300 ease-in-out md:hidden mobile-menu ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Logo />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="p-4">
          <NavLinks mobile />
        </div>
      </div>
    </header>
  );
}
