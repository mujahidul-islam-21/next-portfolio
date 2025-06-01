'use client';

import { useState, useRef, useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link'; // <-- এটা নতুন যোগ হয়েছে

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Dummy user data with avatar
  const user = {
    name: 'ইউজার',
    avatar: '/avater.jpg', // যদি না থাকে তাহলে null রাখুন
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handler = e => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar / Icon */}
      {user.avatar ? (
        <Image
          src={user.avatar}
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <FaRegUserCircle
          className="hidden md:inline text-xl cursor-pointer text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          onClick={() => setOpen(!open)}
        />
      )}

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50 border border-gray-100 dark:border-gray-700">
          <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700 font-medium text-gray-700 dark:text-gray-200">
            স্বাগতম, {user.name}
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-300">
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 cursor-pointer">
              <MdDashboard className="text-lg" /> ড্যাশবোর্ড
            </li>

            {/* ✅ My Profile Link */}
            <Link href="/myprofile">
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 cursor-pointer">
                <FaRegUserCircle className="text-lg" /> মাই প্রোফাইল
              </li>
            </Link>

            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 cursor-pointer text-red-500 dark:text-red-400">
              <FiLogOut className="text-lg" /> লগ আউট
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
