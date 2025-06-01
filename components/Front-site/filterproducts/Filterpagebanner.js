'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'নতুন কালেকশন এসেছে!',
    subtitle: 'এখনই দেখে নিন দারুণ অফার',
    image: '/bannar1.jpg',
  },
  {
    id: 2,
    title: 'সামার সেল চলছে',
    subtitle: 'সেরা স্টাইল, সেরা দামে',
    image: '/Grey and Black Modern Fashion Store Banner.png',
  },
  // {
  //   id: 3,
  //   title: 'এক্সক্লুসিভ প্রোডাক্ট',
  //   subtitle: 'শুধু আপনার জন্য',
  //   image: '/Black and White Minimalist Fashion Sale Instagram Post.png',
  // },
];

const BannerSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full relative overflow-hidden">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="relative h-[20vh] md:h-[50vh] w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover z-0"
              priority
            />
            {/* <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-white mt-3 drop-shadow">
                {slide.subtitle}
              </p>
              <button className="mt-5 px-5 py-2 text-sm sm:text-base bg-white text-black rounded-full hover:bg-gray-200 transition">
                এক্সপ্লোর করুন
              </button>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSection;
