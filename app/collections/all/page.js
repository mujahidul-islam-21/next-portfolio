'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const collections = [
  { title: 'নতুন পণ্য', img: '/div.product-img-action-wrap.png' },
  { title: 'সেরা বিক্রি হওয়া পণ্য', img: '/div.product-img-action-wrap.png' },
  { title: 'সব পণ্য', img: '/div.product-img-action-wrap.png' },
  { title: 'গরম অফার', img: '/div.product-img-action-wrap.png' },
  { title: 'রান্নাঘরের আইটেম অফার', img: '/div.product-img-action-wrap.png' },
  { title: 'রান্নাঘরের এক্সেসরিজ', img: '/div.product-img-action-wrap.png' },
  { title: 'রান্নাঘরের আইটেম', img: '/div.product-img-action-wrap.png' },
];

export default function Collections() {
  const router = useRouter();

  const handleClick = title => {
    const encodedTitle = encodeURIComponent(title);
    router.push(`/collections/all/${encodedTitle}`);
  };

  return (
    <section className="px-4 py-7 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        কালেকশনসমূহ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {collections.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(item.title)}
            className="cursor-pointer group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-transparent hover:ring-2 hover:ring-blue-500 shadow-sm hover:shadow-xl transition duration-300"
          >
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 text-center bg-white dark:bg-gray-800">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300">
                {item.title} &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
