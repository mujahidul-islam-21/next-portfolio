'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const relatedItems = [
  {
    id: 1,
    name: 'Product One',
    price: '$19.99',
    image: '/Link → product-5-1.jpg.png',
  },
  {
    id: 2,
    name: 'Product Two',
    price: '$24.99',
    image: '/Link → product-5-1.jpg.png',
  },
  {
    id: 3,
    name: 'Product Three',
    price: '$29.99',
    image: '/Link → product-5-1.jpg.png',
  },
  {
    id: 4,
    name: 'Product Four',
    price: '$34.99',
    image: '/Link → product-5-1.jpg.png',
  },
  {
    id: 5,
    name: 'Product Five',
    price: '$39.99',
    image: '/Link → product-5-1.jpg.png',
  },
  {
    id: 6,
    name: 'Product Six',
    price: '$44.99',
    image: '/Link → product-5-1.jpg.png',
  },
  {
    id: 7,
    name: 'Product Seven',
    price: '$49.99',
    image: '/Link → product-5-1.jpg.png',
  },
];

export default function RelatedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 bg-white dark:bg-gray-900">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Related Products
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        pagination={{ clickable: true }}
        className="pb-1"
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {relatedItems.map(item => (
          <SwiperSlide key={item.id}>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm dark:shadow-black/40 p-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <div className="mt-2">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  {item.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
