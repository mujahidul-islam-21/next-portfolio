'use client';

import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

export default function Carticon({ showCart, setShowCart }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Organic Apple',
      qty: 2,
      price: 30,
      image: '/sample.jpg',
    },
    {
      id: 2,
      name: 'Fresh Mango',
      qty: 1,
      price: 25,
      image: '/sample.jpg',
    },
  ]);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems(
      cartItems.map(item => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const removeItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        showCart &&
        !event.target.closest('.cart-drawer') &&
        !event.target.closest('[aria-label="Open cart"]')
      ) {
        setShowCart(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCart]);

  return (
    <>
      <button onClick={() => setShowCart(true)} aria-label="Open cart">
        <FaShoppingCart className="cursor-pointer w-6 h-6 text-gray-800 dark:text-gray-200" />
      </button>

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg z-50 transform transition-transform duration-300 cart-drawer ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">
            আপনার কার্ট ({cartItems.length})
          </h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-gray-600 dark:text-gray-300"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        <div className="p-4 h-[calc(100%-150px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                আপনার কার্ট খালি।
              </p>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={() => setShowCart(false)}
              >
                কেনাকাটায় ফিরে যান
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 border-b pb-4 border-gray-200 dark:border-gray-700"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <AiOutlineClose size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded border-gray-300 dark:border-gray-600">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.qty - 1)
                          }
                          className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          -
                        </button>
                        <span className="px-2 py-1 text-sm">{item.qty}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.qty + 1)
                          }
                          className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-medium text-green-600">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">মোট:</span>
              <span className="font-bold text-green-600">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <Link href="/checkouts">
              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
                চেকআউট করুন
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
