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

const Banner = () => {
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
    <div className="w-full  relative overflow-hidden">
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
