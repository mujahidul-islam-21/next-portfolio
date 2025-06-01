'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const combos = [
  {
    id: 1,
    title: 'Everyday Fresh & Clean with Our Products',
    image: '/Screenshot 2025-05-16 173346.png',
    bg: 'bg-amber-50 dark:bg-amber-100/10',
  },
  {
    id: 2,
    title: 'Make your Breakfast Healthy and Easy',
    image: '/banner-2.png.png',
    bg: 'bg-rose-50 dark:bg-rose-100/10',
  },
  {
    id: 3,
    title: 'The best Organic Products Online',
    image: '/Screenshot 2025-05-16 173346.png',
    bg: 'bg-blue-50 dark:bg-blue-100/10',
  },
  {
    id: 4,
    title: 'Freshest Grocery Deals for You',
    image: '/banner-2.png.png',
    bg: 'bg-green-50 dark:bg-green-100/10',
  },
];

const GiftComboSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <Slider {...settings}>
        {combos.map(combo => (
          <div key={combo.id} className="px-2">
            <div
              className={`rounded-lg ${combo.bg} flex justify-between items-center p-4 h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px] transition-all`}
            >
              <div className="w-1/2 pr-2">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  {combo.title}
                </h3>
                <button className="bg-green-600 hover:bg-green-700 text-white text-xs md:text-sm px-4 py-2 rounded transition">
                  Shop Now
                </button>
              </div>
              <div className="w-1/2 flex justify-end">
                <Image
                  src={combo.image}
                  alt={combo.title}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GiftComboSlider;
