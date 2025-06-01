'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function DailyBestSells() {
  const [addedItems, setAddedItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'সব প্রাকৃতিক ইতালিয়ান স্টাইল চিকেন মিটবল',
      price: 238.85,
      oldPrice: 245.8,
      sold: 90,
      total: 120,
      image: '/div.banner-img.png',
    },
    {
      id: 2,
      name: 'অ্যাঞ্জির বুমচিকোপপ মিষ্টি ও লবণাক্ত কেটল কর্ন',
      price: 238.85,
      oldPrice: 245.8,
      sold: 45,
      total: 100,
      image: '/Link → cat-3.png.png',
    },
    {
      id: 3,
      name: 'ফস্টার ফার্মস টেকআউট ক্রিস্পি বাফেলো উইংস',
      price: 238.85,
      oldPrice: 245.8,
      sold: 73,
      total: 150,
      image: '/Link → cat-3.png.png',
    },
    {
      id: 4,
      name: 'ব্লু ডায়মন্ড আলমন্ডস লাইটলি সল্টেড',
      price: 238.85,
      oldPrice: 245.8,
      sold: 60,
      total: 80,
      image: '/Link → cat-3.png.png',
    },
    {
      id: 5,
      name: 'স্মার্টফুড হোয়াইট চেডার ফ্লেভারড পপকর্ন',
      price: 238.85,
      oldPrice: 245.8,
      sold: 35,
      total: 70,
      image: '/Link → cat-3.png.png',
    },
  ];

  const handleAddToCart = id => {
    if (!addedItems.includes(id)) {
      setAddedItems([...addedItems, id]);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4 max-w-7xl mx-auto py-4">
      {products.map(product => {
        const soldPercent = Math.round((product.sold / product.total) * 100);

        return (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-40 md:h-52 lg:h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <span className="absolute top-2 left-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-2 py-0.5 rounded text-xs font-semibold shadow">
                #{product.id}
              </span>
            </div>

            <div className="p-4 flex flex-col justify-between flex-1">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="font-bold text-green-600 dark:text-green-400">
                  ৳{product.price.toFixed(2)}
                </span>
                <span className="line-through text-gray-400 text-xs">
                  ৳{product.oldPrice.toFixed(2)}
                </span>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>
                    বিক্রি হয়েছে: {product.sold}/{product.total}
                  </span>
                  <span>{soldPercent}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-600 dark:bg-green-400 h-2 rounded-full"
                    style={{ width: `${soldPercent}%` }}
                  />
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(product.id)}
                className={`w-full py-2 rounded-md text-white text-sm font-semibold mt-auto transition-colors duration-300 ${
                  addedItems.includes(product.id)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
                disabled={addedItems.includes(product.id)}
              >
                {addedItems.includes(product.id)
                  ? 'কার্টে যোগ হয়েছে'
                  : 'কার্টে যোগ করুন'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
