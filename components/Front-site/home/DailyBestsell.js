'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const DailyBestSells = () => {
  const [addedItems, setAddedItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'All Natural Italian-Style Chicken Meatballs',
      price: 238.85,
      oldPrice: 245.8,
      sold: 90,
      total: 120,
      image: '/div.banner-img.png',
      featured: true,
    },
    {
      id: 2,
      name: "Angie's Boomchickopop Sweet and Salty Kettle Corn",
      price: 238.85,
      oldPrice: 245.8,
      sold: 45,
      total: 100,
      image: '/Link → cat-3.png.png',
    },
    {
      id: 3,
      name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
      price: 238.85,
      oldPrice: 245.8,
      sold: 73,
      total: 150,
      image: '/Link → cat-3.png.png',
    },
    {
      id: 4,
      name: 'Blue Diamond Almonds Lightly Salted',
      price: 238.85,
      oldPrice: 245.8,
      sold: 60,
      total: 80,
      image: '/Link → cat-3.png.png',
    },
    {
      id: 5,
      name: 'Smartfood White Cheddar Flavored Popcorn',
      price: 238.85,
      oldPrice: 245.8,
      sold: 35,
      total: 70,
      image: '/Link → cat-3.png.png',
    },
  ];

  const handleAddToCart = id => {
    setAddedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Daily Best Sells
        </h2>
       
        <button className="text-green-600 text-sm font-medium hover:underline dark:text-green-400">
          <Link href="/dailybestsell">View All</Link>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map(product => {
          const soldPercent = Math.round((product.sold / product.total) * 100);
          const isFeatured = product.featured;

          return (
            <div
              key={product.id}
              className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col ${
                isFeatured ? 'hidden sm:flex' : ''
              }`}
            >
              {isFeatured ? (
                <div className="relative w-full h-full aspect-[3/4] hidden sm:block">
                  <Image
                    src={product.image}
                    alt="Featured"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <>
                  <div className="relative w-full h-32 md:h-44">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-white dark:bg-gray-700 dark:text-white px-2 py-0.5 rounded text-xs font-medium">
                      #{product.id}
                    </span>
                  </div>

                  <div className="p-3 flex flex-col justify-between flex-1">
                    <h3 className="text-base font-medium text-gray-800 dark:text-white line-clamp-2 mb-1">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm mb-2">
                      <span className="font-bold text-green-600 dark:text-green-400">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="line-through text-gray-400 text-xs">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-300 mb-1">
                        <span>
                          Sold: {product.sold}/{product.total}
                        </span>
                        <span>{soldPercent}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${soldPercent}%` }}
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`w-full py-1.5 rounded-md text-white text-sm font-medium mt-auto ${
                        addedItems.includes(product.id)
                          ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600'
                          : 'bg-green-600 hover:bg-green-700 dark:hover:bg-green-500'
                      }`}
                      disabled={addedItems.includes(product.id)}
                    >
                      {addedItems.includes(product.id)
                        ? 'Added to Cart'
                        : 'Add To Cart'}
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyBestSells;
