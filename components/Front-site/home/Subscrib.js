'use client';

import {
  FaTruck,
  FaTags,
  FaGift,
  FaUndo,
  FaHeadset,
} from 'react-icons/fa';

export default function SubscriptionSection() {
  const features = [
    {
      icon: FaTags,
      title: 'সেরা দাম',
    },
    {
      icon: FaTruck,
      title: 'ফ্রি ডেলিভারি',
    },
    {
      icon: FaGift,
      title: 'দৈনিক অফার',
    },
    {
      icon: FaUndo,
      title: 'সহজ রিটার্ন',
    },
    {
      icon: FaHeadset,
      title: 'সহায়তা',
    },
  ];

  const handleClick = () => {
    alert('সাবস্ক্রিপশন ফিচার এখনও প্রস্তুত হয়নি।');
  };

  return (
    <div className="bg-gray-900 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* প্রধান শিরোনাম */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-2xl font-extrabold text-gray-100 mb-4 leading-tight">
            বাড়িতে থাকুন এবং আমাদের দোকান থেকে আপনার দৈনন্দিন প্রয়োজনের জিনিসগুলো নিন
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Zayan Life সাথে শুরু করুন আপনার দৈনন্দিন শপিং
          </p>

          {/* ইমেইল সাবস্ক্রিপশন ফর্ম */}
          <div className="max-w-md mx-auto flex rounded-md overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="আপনার ইমেইল ঠিকানা"
              className="flex-grow px-5 py-3 text-base sm:text-lg border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-l-md"
            />
            <button
              onClick={handleClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base sm:text-lg font-semibold transition duration-300 rounded-r-md"
            >
              সাবস্ক্রাইব
            </button>
          </div>
        </div>

        {/* ফিচারস গ্রিড (আগের মতো ছোট কার্ড) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {features.map(({ icon: Icon, title }, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-green-400 p-3 rounded-lg shadow-sm flex items-center space-x-3 cursor-pointer hover:shadow-md transition-shadow duration-300 h-[70px]"
            >
              <div className="bg-green-600 text-white p-2 rounded-full text-md flex items-center justify-center">
                <Icon size={18} />
              </div>
              <p className="text-gray-900 dark:text-gray-100 font-semibold text-sm whitespace-nowrap">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
