'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

export default function Searchber() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const mockProducts = [
    {
      id: 1,
      name: 'প্রিমিয়াম জৈব আপেল',
      slug: 'premium-organic-apple',
      price: 120,
      image: '/images/premium-organic-apple.jpg',
    },
    {
      id: 2,
      name: 'Fresh Mango',
      slug: 'fresh-mango',
      price: 90,
      image: '/images/fresh-mango.jpg',
    },
    {
      id: 3,
      name: 'কমলা',
      slug: 'orange',
      price: 80,
      image: '/images/orange.jpg',
    },
  ];

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        showSearch &&
        !event.target.closest('.mobile-search') &&
        !event.target.closest('[aria-label="Open search"]')
      ) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSearch]);

  return (
    <>
      {/* Mobile Search */}
      <div
        className={`absolute top-0 left-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 z-50 transition-transform duration-300 md:hidden mobile-search ${
          showSearch ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center gap-2 relative">
          <button
            onClick={() => {
              setShowSearch(false);
              setSearchResults([]);
              setSearchTerm('');
            }}
            className="text-gray-600 dark:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
          <input
            type="text"
            placeholder="আপনার পছন্দের পণ্য খুঁজুন..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 pr-10 border rounded-md outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <div className="absolute right-4 text-gray-600 dark:text-gray-300 pointer-events-none">
            <AiOutlineSearch size={20} />
          </div>
        </div>

        {showSearch && searchResults.length > 0 && (
          <div className="mt-3 space-y-2">
            {searchResults.map(product => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="flex items-center gap-4 border p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-600"
                onClick={() => setShowSearch(false)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <h4 className="text-sm font-medium dark:text-white">{product.name}</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">৳ {product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Search */}
      <div className="hidden md:flex flex-col relative flex-1 max-w-md mx-6">
        <div className="flex border border-gray-200 dark:border-gray-600 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="আপনার পছন্দের পণ্য খুঁজুন..."
            className="px-4 py-2 outline-none flex-1 dark:bg-gray-700 dark:text-white"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div className="px-4 text-gray-600 dark:text-gray-300 flex items-center">
            <AiOutlineSearch size={20} />
          </div>
        </div>

        {searchResults.length > 0 && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-b-md shadow-lg z-10">
            {searchResults.map(product => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="flex items-center gap-4 px-4 py-3 border-t dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setSearchResults([])}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 object-cover rounded"
                />
                <div>
                  <h4 className="text-sm font-medium dark:text-white">{product.name}</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">৳ {product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Search Icon */}
      <button
        onClick={() => {
          setShowSearch(!showSearch);
          setSearchResults([]);
          setSearchTerm('');
        }}
        className="md:hidden text-gray-600 dark:text-gray-300"
        aria-label="Open search"
      >
        <AiOutlineSearch size={22} />
      </button>
    </>
  );
}
