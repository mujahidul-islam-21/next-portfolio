'use client';

import React, { useState, useMemo } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const products = [
  // তোমার আগের মতোই প্রোডাক্ট লিস্ট
  {
    id: 1,
    name: 'সেলফ ডিফেন্স স্টিক',
    price: 799,
    oldPrice: 1450,
    discount: 44,
    image: '/nabila10.png',
  },
  {
    id: 2,
    name: 'সেলফ ডিফেন্স স্টিক',
    price: 799,
    oldPrice: 1450,
    discount: 44,
    image: '/nabila10.png',
  },
  {
    id: 3,
    name: 'সেলফ ডিফেন্স স্টিক',
    price: 799,
    oldPrice: 1450,
    discount: 44,
    image: '/nabila10.png',
  },
  {
    id: 4,
    name: 'সেলফ ডিফেন্স স্টিক',
    price: 799,
    oldPrice: 1450,
    discount: 44,
    image: '/nabila10.png',
  },
  {
    id: 5,
    name: 'সেলফ ডিফেন্স স্টিক',
    price: 799,
    oldPrice: 1450,
    discount: 44,
    image: '/nabila10.png',
  },
  {
    id: 6,
    name: 'সেলফ ডিফেন্স স্টিক',
    price: 799,
    oldPrice: 1450,
    discount: 44,
    image: '/nabila10.png',
  },
  {
    id: 7,
    name: 'সেলফ ডিফেন্স স্টিক',
    price: 799,
    oldPrice: 1450,
    discount: 44,
    image: '/nabila10.png',
  },
  {
    id: 8,
    name: 'সেলফ ডিফেন্স স্টিক',
    price: 799,
    oldPrice: 1450,
    discount: 44,
    image: '/nabila10.png',
  },
  {
    id: 9,
    name: 'সেলফ ডিফেন্স স্টিক',
    price: 799,
    oldPrice: 1450,
    discount: 44,
    image: '/nabila10.png',
  },
];

const sortOptions = {
  'সর্বাধিক বিক্রিত': (a, b) => b.discount - a.discount,
  'A-Z': (a, b) => a.name.localeCompare(b.name),
  'Z-A': (a, b) => b.name.localeCompare(a.name),
  'দাম: কম থেকে বেশি': (a, b) => a.price - b.price,
  'দাম: বেশি থেকে কম': (a, b) => b.price - a.price,
};

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        {product.discount}% ছাড়
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="pt-3 ps-3">
        <h3 className="text-sm font-semibold line-clamp-2 min-h-[2.5rem] text-black dark:text-white">
          {product.name}
        </h3>
        <div className="mt-0">
          <span className="font-bold text-black dark:text-white">
            {product.price}.০০ টাকা
          </span>{' '}
          <span className="line-through text-gray-500 dark:text-gray-400 text-sm">
            {product.oldPrice}.০০ টাকা
          </span>
        </div>
      </div>
      <button className="absolute bottom-[-100%] left-0 w-full bg-green-500 text-white py-2 text-sm group-hover:bottom-0 transition-all duration-300">
        <FaShoppingCart className="inline mr-2" /> কার্টে যোগ করুন
      </button>
    </div>
  );
};

const ProductGrid = () => {
  const [sortBy, setSortBy] = useState('সর্বাধিক বিক্রিত');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const sortedProducts = useMemo(() => {
    const copy = [...products];
    copy.sort(sortOptions[sortBy]);
    return copy;
  }, [sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = page => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="max-w-7xl mx-auto px-1 py-3 bg-white dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6 text-gray-600 dark:text-gray-300">
        <p className="text-sm">{products.length} টি প্রোডাক্ট</p>
        <select
          className="border px-3 py-1 rounded text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700"
          value={sortBy}
          onChange={e => {
            setSortBy(e.target.value);
            setCurrentPage(1);
          }}
        >
          {Object.keys(sortOptions).map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
        {paginatedProducts.map(product => (
          <ProductCard
            key={`${product.id}-${Math.random()}`}
            product={product}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2 flex-wrap text-gray-700 dark:text-gray-300">
          <button
            className="px-3 py-1 border rounded disabled:opacity-40 dark:border-gray-700"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            আগেরটি
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 border rounded dark:border-gray-700 ${
                currentPage === idx + 1
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => changePage(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 border rounded disabled:opacity-40 dark:border-gray-700"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            পরবর্তী
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
