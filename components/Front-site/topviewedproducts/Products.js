// pages/top-viewed.js

"use client"

import Image from 'next/image';
import { useState } from 'react';
import { FiEye, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';

const topViewedProducts = [
  {
    id: 1,
    name: 'অর্গানিক মধুর বোতল',
    price: 1850,
    image:'/Link → cat-3.png.png',
    views: 452,
    discount: 15,
  },
  {
    id: 2,
    name: 'প্রিমিয়াম অলিভ অয়েল',
    price: 2800,
    image: '/Link → cat-3.png.png',
    views: 389,
    discount: 10,
  },
  {
    id: 3,
    name: 'বাদাম (আলমন্ড)',
    price: 1525,
    image: '/Link → cat-3.png.png',
    views: 512,
    discount: 5,
  },
  {
    id: 4,
    name: 'হারবাল শ্যাম্পু',
    price: 2275,
    image: '/Link → cat-3.png.png',
    views: 340,
    discount: 20,
  },
  {
    id: 5,
    name: 'ন্যাচারাল সাবান',
    price: 999,
    image: '/Link → cat-3.png.png',
    views: 611,
    discount: 25,
  },
  {
    id: 6,
    name: 'গ্রিন টি প্যাক',
    price: 1350,
    image: '/Link → cat-3.png.png',
    views: 285,
    discount: 10,
  },
  {
    id: 7,
    name: 'তুলসী হানি',
    price: 1999,
    image: '/Link → cat-3.png.png',
    views: 430,
    discount: 12,
  },
  {
    id: 8,
    name: 'হিমালয়ন লবণ',
    price: 299,
    image: '/Link → cat-3.png.png',
    views: 360,
    discount: 8,
  },
  {
    id: 9,
    name: 'ড্রাই ফ্রুট মিক্স',
    price: 2450,
    image: '/Link → cat-3.png.png',
    views: 498,
    discount: 18,
  },
  {
    id: 10,
    name: 'কোল্ড প্রেসড নারিকেল তেল',
    price: 1450,
    image: '/Link → cat-3.png.png',
    views: 378,
    discount: 7,
  },
  {
    id: 11,
    name: 'প্রিমিয়াম ডেইলি হারবাল চা',
    price: 1250,
    image: '/Link → cat-3.png.png',
    views: 501,
    discount: 15,
  }
];

export default function TopViewed() {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(topViewedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = topViewedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleAddToCart = (id) => {
    if (!cartItems.includes(id)) {
      setCartItems([...cartItems, id]);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-1 py-10">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        সর্বাধিক দেখা হয়েছে এমন পণ্যসমূহ
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-1">
        {currentItems.map((product, index) => (
          <motion.div
            key={product.id}
            className="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 shadow hover:shadow-md transition-all group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            {/* ছাড় ব্যাজ */}
            {product.discount && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full shadow-md z-10">
                {product.discount}% ছাড়
              </div>
            )}

            {/* পণ্যের ছবি */}
            <div className="relative w-full h-40 mb-2">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            {/* পণ্যের তথ্য */}
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-green-600 font-bold text-base mb-1 dark:text-green-400">
              ৳{product.price}
            </p>

            {/* ভিউ সংখ্যা */}
            <div className="flex items-center text-gray-500 dark:text-gray-300 text-sm mb-1">
              <FiEye className="mr-1" />
              {product.views} বার দেখা হয়েছে
            </div>

            {/* কার্টে যোগ করার বাটন */}
            <button
              onClick={() => handleAddToCart(product.id)}
              disabled={cartItems.includes(product.id)}
              className={`w-full flex items-center justify-center gap-2 py-2 rounded-md text-sm transition-all ${
                cartItems.includes(product.id)
                  ? 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              <FiShoppingBag />
              {cartItems.includes(product.id) ? 'যোগ হয়েছে' : 'কার্টে যোগ করুন'}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded text-sm ${
              currentPage === i + 1
                ? 'bg-green-600 text-white dark:bg-green-500'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
