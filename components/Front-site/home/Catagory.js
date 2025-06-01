'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Cake & Milk',
    items: 26,
    image: '/Link → cat-12.png.png',
    bg: 'bg-green-50 dark:bg-green-800',
  },
  {
    id: 2,
    name: 'Organic Kiwi',
    items: 28,
    image: '/Link → cat-11.png.png',
    bg: 'bg-lime-50 dark:bg-lime-800',
  },
  {
    id: 3,
    name: 'Peach',
    items: 14,
    image: '/Link → cat-3.png.png',
    bg: 'bg-orange-50 dark:bg-orange-800',
  },
  {
    id: 4,
    name: 'Red Apple',
    items: 54,
    image: '/Link → cat-9.png.png',
    bg: 'bg-red-50 dark:bg-rose-800',
  },
  {
    id: 5,
    name: 'Snack',
    items: 56,
    image: '/Link → cat-9.png.png',
    bg: 'bg-yellow-50 dark:bg-yellow-700',
  },
  {
    id: 6,
    name: 'Vegetables',
    items: 72,
    image: '/Link → cat-3.png.png',
    bg: 'bg-purple-50 dark:bg-purple-800',
  },
  {
    id: 7,
    name: 'Strawberry',
    items: 36,
    image: '/Link → cat-11.png.png',
    bg: 'bg-pink-50 dark:bg-pink-800',
  },
  {
    id: 8,
    name: 'Black plum',
    items: 123,
    image: '/Link → cat-12.png.png',
    bg: 'bg-gray-100 dark:bg-gray-700',
  },
  {
    id: 9,
    name: 'Custard apple',
    items: 34,
    image: '/Link → cat-3.png.png',
    bg: 'bg-yellow-100 dark:bg-amber-800',
  },
  {
    id: 10,
    name: 'Coffe & Tea',
    items: 89,
    image: '/Link → cat-9.png.png',
    bg: 'bg-orange-100 dark:bg-orange-700',
  },
];


function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-gray-700 dark:text-gray-200">
      <ArrowRightCircle size={28} onClick={onClick} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-gray-700 dark:text-gray-200">
      <ArrowLeftCircle size={28} onClick={onClick} />
    </div>
  );
}

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 20,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2.3,
        },
      },
    ],
  };

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto relative">
      <Slider {...settings}>
        {categories.map(cat => (
          <div key={cat.id} className="px-2">
            <div
              className={`${cat.bg} rounded-lg flex flex-col items-center justify-center text-center px-4 transition-all
                h-[130px] sm:h-[150px] md:h-[180px] lg:h-[200px] xl:h-[220px]`}
            >
              <Image src={cat.image} alt={cat.name} width={60} height={60} />
              <h3 className="mt-2 font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-300">
                {cat.items} Items
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
