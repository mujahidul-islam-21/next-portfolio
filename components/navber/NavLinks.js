'use client';
import Link from 'next/link';
import { useState } from 'react';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const menuItems = [
  { href: '/', label: 'হোম' },
  { href: '/filterproducts', label: 'সব পণ্য' },
  { href: '/collections/all', label: 'ক্যাটাগরি' }, 
  { href: '/dailybestsell', label: 'দৈনিক সেরা বিক্রি' },
  { href: '/topviewedproducts', label: 'সর্বাধিক দেখা পণ্য' },
  { href: '/about', label: 'আমাদের সম্পর্কে' },
];

const categoryItems = [
  { href: '/collections/electronics', label: 'ইলেকট্রনিক্স' },
  { href: '/collections/fashion', label: 'ফ্যাশন' },
  { href: '/collections/home', label: 'হোম অ্যাপ্লায়েন্স' },
  // চাইলে আরও ক্যাটাগরি এখানে যোগ করো
];

export default function NavLinks({ mobile = false }) {
  const [activeTab, setActiveTab] = useState('menu');

  const renderItems = items =>
    items.map((item, index) => (
      <li
        key={index}
        className={`pb-2 ${
          mobile ? 'border-b border-gray-300 dark:border-gray-700' : ''
        }`}
      >
        <Link
          href={item.href}
          className="block hover:text-green-600 dark:hover:text-green-400 transition duration-200"
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <nav
      className={
        mobile
          ? 'flex flex-col space-y-4 py-1 bg-white dark:bg-gray-800'
          : 'flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 py-2 bg-white dark:bg-gray-800 text-sm gap-4'
      }
    >
      {/* Mobile View Only */}
      {mobile && (
        <>
          {/* Tabs */}
          <div className="flex border-b border-gray-300 dark:border-gray-600">
            <button
              onClick={() => setActiveTab('menu')}
              className={`flex-1 text-center py-2 font-semibold transition ${
                activeTab === 'menu'
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-500 hover:text-green-600'
              }`}
            >
              MENU
            </button>
            <button
              onClick={() => setActiveTab('category')}
              className={`flex-1 text-center py-2 font-semibold transition ${
                activeTab === 'category'
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-500 hover:text-green-600'
              }`}
            >
              CATEGORIES
            </button>
          </div>

          {/* Menu or Category List */}
          <ul className="mt-4 space-y-4 text-md text-gray-800 dark:text-gray-300">
            {activeTab === 'menu'
              ? renderItems(menuItems)
              : renderItems(categoryItems)}
          </ul>

          {/* Show hotline & icons only if menu is active */}
          {activeTab === 'menu' && (
            <>
              {/* Hotline */}
              <a
                href="tel:01614871922"
                className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-lg mt-6"
              >
                <TfiHeadphoneAlt className="text-xl text-red-500" />
                <span className="text-md font-normal">০১৬১৪৮৭১৯২২</span>
              </a>

              {/* Social Icons */}
              <div className="flex gap-6 mt-4 text-3xl">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://wa.me/8801614871922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700 transition"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </>
          )}
        </>
      )}

      {/* Desktop View */}
      {!mobile && (
        <ul className="flex-1 flex flex-wrap gap-6 text-gray-700 dark:text-gray-300 overflow-x-auto">
          {renderItems(menuItems)}
        </ul>
      )}
    </nav>
  );
}
