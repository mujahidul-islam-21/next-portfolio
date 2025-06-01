'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const collectionsData = {
  'নতুন পণ্য': {
    banner: '/banners/new-products.jpg',
    products: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `নতুন পণ্য ${i + 1}`,
      price: 500 + i * 10,
      oldPrice: 600 + i * 15,
      discount: 20,
      image: '/nabila10.png',
    })),
  },
  'সেরা বিক্রি হওয়া পণ্য': {
    banner: '/banners/best-sellers.jpg',
    products: Array.from({ length: 12 }, (_, i) => ({
      id: 100 + i,
      name: `সেরা বিক্রি ${i + 1}`,
      price: 200 + i * 15,
      oldPrice: 300 + i * 20,
      discount: 30,
      image: '/nabila10.png',
    })),
  },
  'গরম অফার': {
    banner: '/banners/hot-offers.jpg',
    products: Array.from({ length: 8 }, (_, i) => ({
      id: 200 + i,
      name: `গরম অফার ${i + 1}`,
      price: 300,
      oldPrice: 500,
      discount: 40,
      image: '/nabila10.png',
    })),
  },
  'রান্নাঘরের আইটেম': {
    banner: '/banners/kitchen-items.jpg',
    products: Array.from({ length: 11 }, (_, i) => ({
      id: 300 + i,
      name: `রান্নাঘরের পণ্য ${i + 1}`,
      price: 150,
      oldPrice: 250,
      discount: 25,
      image: '/nabila10.png',
    })),
  },
  'রান্নাঘরের এক্সেসরিজ': {
    banner: '/kitchenbanner.jpg',
    products: Array.from({ length: 9 }, (_, i) => ({
      id: 400 + i,
      name: `এক্সেসরিজ ${i + 1}`,
      price: 120,
      oldPrice: 180,
      discount: 33,
      image: '/nabila10.png',
    })),
  },
  'রান্নাঘরের আইটেম অফার': {
    banner: '/banners/kitchen-offers.jpg',
    products: Array.from({ length: 14 }, (_, i) => ({
      id: 500 + i,
      name: `অফার প্রোডাক্ট ${i + 1}`,
      price: 260,
      oldPrice: 360,
      discount: 28,
      image: '/nabila10.png',
    })),
  },
  'সব পণ্য': {
    banner: '/banners/all-products.jpg',
    products: Array.from({ length: 20 }, (_, i) => ({
      id: 600 + i,
      name: `সকল প্রোডাক্ট ${i + 1}`,
      price: 400,
      oldPrice: 500,
      discount: 20,
      image: '/nabila10.png',
    })),
  },
};

export default function CollectionDetails({ params }) {
  const title = decodeURIComponent(params.title);
  const collection = collectionsData[title];

  if (!collection) return notFound();

  const { banner, products } = collection;

  const [addedProducts, setAddedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 10;
  const totalPages = Math.ceil(products.length / perPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleAddToCart = product => {
    if (!addedProducts.includes(product.id)) {
      setAddedProducts(prev => [...prev, product.id]);
    }
  };

  return (
    <section className="px-4 py-5">
      {/* Banner */}
      <div className="w-full mb-6">
        <Image
          src={banner}
          alt={`${title} ব্যানার`}
          width={1200}
          height={400}
          className="w-full h-48 md:h-72 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
        {title}
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {paginatedProducts.map(product => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}% ছাড়
              </span>
            </div>
            <div className="p-2 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-100 min-h-[2rem]">
                  {product.name}
                </h3>
                <div className="mb-1">
                  <span className="text-green-600 font-bold">
                    {product.price} টাকা
                  </span>{' '}
                  <span className="line-through text-gray-400 text-sm">
                    {product.oldPrice} টাকা
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={addedProducts.includes(product.id)}
                className={`mt-auto text-sm px-4 py-2 rounded w-full transition-all duration-300 ${
                  addedProducts.includes(product.id)
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed text-white'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                {addedProducts.includes(product.id)
                  ? 'কার্টে যোগ হয়েছে'
                  : 'কার্টে যোগ করুন'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                currentPage === index + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
