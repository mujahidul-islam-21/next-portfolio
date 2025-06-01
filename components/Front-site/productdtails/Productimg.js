'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ZoomIn, Minus, Plus } from 'lucide-react';

const images = [
  '/banner-2.png.png',
  '/div.product-img-action-wrap.png',
  '/img3.png',
  '/img4.png',
  '/img5.png',
];

const sizes = ['sm', 'md', 'xl', 'xxl'];

export default function ProductDetails() {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('sm');

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="px-4 py-5 max-w-7xl mx-auto bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div>
          <div className="relative overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 p-0 group bg-white dark:bg-gray-800">
            <div className="relative w-full h-[450px] md:h-[450px]">
              <Image
                src={selectedImg}
                alt="Product Image"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute top-3 right-3 bg-white dark:bg-gray-700 p-1 rounded shadow">
              <ZoomIn size={22} className="text-gray-600 dark:text-gray-300" />
            </div>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(img)}
                className={`flex-shrink-0 w-16 h-16 p-1 border rounded-md object-contain ${
                  selectedImg === img
                    ? 'border-green-500 ring-2 ring-green-400'
                    : 'border-gray-200 dark:border-gray-700'
                } bg-white dark:bg-gray-800`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-4 text-gray-900 dark:text-gray-100">
          <h1 className="text-2xl font-semibold leading-snug">
            Seeds of Change Organic Quinoa, Brown
          </h1>

          <div className="text-green-600 text-3xl font-bold flex items-center gap-3">
            $38
            <span className="text-sm text-orange-500">26% Off</span>
            <span className="line-through text-gray-400 dark:text-gray-500 text-base">
              $52
            </span>
          </div>

          <p className="leading-relaxed text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
            officia, corrupti reiciendis minima nisi modi.
          </p>

          {/* Size Selector */}
          <div className="flex items-center gap-3 flex-wrap text-sm">
            <span className="font-medium">Size / Weight:</span>
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded-md ${
                  selectedSize === size
                    ? 'border-green-500 bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-400'
                    : 'border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="text-sm space-y-1">
            <p>
              <strong>Availability:</strong> In Stock
            </p>
            <p>
              <strong>SKU:</strong> FVM15VKT
            </p>
            <p>
              <strong>Type:</strong> Organic
            </p>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center border rounded overflow-hidden border-gray-300 dark:border-gray-700">
              <button
                onClick={decreaseQty}
                className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-x px-2 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                aria-label="Quantity"
              />
              <button
                onClick={increaseQty}
                className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Add to Cart
            </button>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
