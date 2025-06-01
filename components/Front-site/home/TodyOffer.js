'use client';

import { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const products = [
  {
    id: 1,
    name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    price: 32.85,
    originalPrice: 33.8,
    image: '/panjabi2.avif',
  },
  {
    id: 2,
    name: 'Perdue Simply Smart Organics Gluten Free',
    price: 24.85,
    originalPrice: 26.8,
    image: '/panjabi2.avif',
  },
  {
    id: 3,
    name: 'Signature Wood-Fired Mushroom and Caramelized',
    price: 12.85,
    originalPrice: 15.8,
    image: '/panjabi2.avif',
  },
  {
    id: 4,
    name: 'Simply Lemonade with Raspberry Juice',
    price: 15.85,
    originalPrice: 16.8,
    image: '/panjabi2.avif',
  },
];

export default function DealsOfTheDay() {
  const [timers, setTimers] = useState(products.map(() => 86400)); // 24 ঘন্টা

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prevTimers =>
        prevTimers.map(time => (time > 0 ? time - 1 : 0))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = seconds => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 dark:text-white">
        Deals Of The Day
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {products.map((product, index) => {
          const { days, hours, minutes, secs } = formatTime(timers[index]);
          return (
            <div
              key={product.id}
              className="relative overflow-hidden shadow-md rounded-xl bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 lg:h-60 object-cover rounded-t-xl"
              />
              <div className="absolute bottom-20 max-[640px]:bottom-[100px] left-1 max-[640px]:left-1 flex space-x-2">
                {[{ label: 'Hours', value: hours }, { label: 'Mins', value: minutes }, { label: 'Sec', value: secs }].map((unit, idx) => (
                  <div
                    key={idx}
                    className="backdrop-blur-sm text-red-500 p-2 rounded-lg shadow text-center max-[640px]:p-0 bg-white/80 dark:bg-black/30"
                  >
                    <span className="block text-lg px-1 py-1 font-bold max-[640px]:text-sm p-1">
                      {unit.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-2">
                <h3 className="text-xs font-semibold mb-1 text-gray-800 dark:text-white">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-500 line-through text-xs mr-1 dark:text-gray-400">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-green-600 text-xs font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <button className="text-white bg-green-600 rounded-md p-2 hover:bg-green-700 transition duration-300 shadow-md">
                    <FiShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
