'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Seeds of Change Organic Quinoa, Crown, & Red Rice',
    price: 28.85,
    oldPrice: 63.8,
    image: '/Link → cat-12.png.png',
    category: 'Grains',
  },
  {
    id: 2,
    name: 'Seeds of Change Organic Quinoa, Crown, & Red Rice',
    price: 28.85,
    oldPrice: 63.8,
    image: '/Link → cat-12.png.png',
    category: 'Grains',
  },
  {
    id: 3,
    name: 'Seeds of Change Organic Quinoa, Crown, & Red Rice',
    price: 28.85,
    oldPrice: 63.8,
    image: '/Link → cat-12.png.png',
    category: 'Grains',
  },
  {
    id: 4,
    name: 'Seeds of Change Organic Quinoa, Crown, & Red Rice',
    price: 28.85,
    oldPrice: 63.8,
    image: '/Link → cat-12.png.png',
    category: 'Grains',
  },
  {
    id: 5,
    name: 'Seeds of Change Organic Quinoa, Crown, & Red Rice',
    price: 28.85,
    oldPrice: 63.8,
    image: '/Link → cat-12.png.png',
    category: 'Grains',
  },
  {
    id: 6,
    name: 'Seeds of Change Organic Quinoa, Crown, & Red Rice',
    price: 28.85,
    oldPrice: 63.8,
    image: '/Link → cat-12.png.png',
    category: 'Grains',
  },
];

const PopularProducts = () => {
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = id => {
    if (!addedItems.includes(id)) {
      setAddedItems(prev => [...prev, id]);
    }
  };

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Popular Products
        </h2>
        <button className="text-sm text-green-600 hover:underline font-medium dark:text-green-400">
          <Link href="/filterproducts">View All</Link>
          
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        {products.map((product, index) => {
          const hasDiscount = product.oldPrice > product.price;
          const discountPercentage = hasDiscount
            ? Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              )
            : 0;

          return (
            <motion.div
              key={product.id}
              className="group bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all relative overflow-hidden"
              style={{ minHeight: '220px' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
                ease: 'easeOut',
              }}
            >
              {/* 🔥 Discount Badge */}
              {hasDiscount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded shadow z-10">
                  {discountPercentage}% ছাড়
                </div>
              )}

              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={150}
                  className="w-full h-auto rounded-t-lg"
                />
              </div>

              {/* Info */}
              <div className="p-2">
                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100 line-clamp-2 h-10 mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <p className="text-base font-bold text-green-600 dark:text-green-400">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.oldPrice > 0 && (
                    <span className="line-through text-gray-400 text-xs dark:text-gray-500">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              {/* Add to Cart Hover Button */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-white dark:bg-gray-900 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button
                  onClick={() => handleAdd(product.id)}
                  disabled={addedItems.includes(product.id)}
                  className={`w-full flex items-center justify-center gap-1 py-1.5 rounded-md text-sm ${
                    addedItems.includes(product.id)
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
                  }`}
                >
                  {addedItems.includes(product.id) ? (
                    'Added to Cart'
                  ) : (
                    <>
                      <FiShoppingCart className="text-base" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
