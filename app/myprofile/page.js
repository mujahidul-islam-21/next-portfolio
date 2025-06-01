// app/profile/page.tsx বা pages/profile.tsx
import Image from 'next/image';
import Link from 'next/link';

const user = {
  name: 'রাহুল ইসলাম',
  email: 'rahul@email.com',
  phone: '017XXXXXXXX',
  address: 'ঢাকা, বাংলাদেশ',
  joined: '2024-05-10',
  profileImage: '/profile/user.jpg',
  orders: [
    {
      id: 'ORD12345',
      product: 'ব্লুটুথ স্পিকার',
      date: '2024-12-25',
      status: 'Delivered',
      image: '/products/speaker.jpg',
    },
    {
      id: 'ORD12346',
      product: 'ওয়্যারলেস ইয়ারবাড',
      date: '2025-01-03',
      status: 'Shipped',
      image: '/products/earbuds.jpg',
    },
  ],
  cart: [
    {
      id: 'PROD789',
      product: 'স্মার্টওয়াচ',
      price: 2999,
      image: '/products/smartwatch.jpg',
    },
    {
      id: 'PROD790',
      product: 'ফিটনেস ব্যান্ড',
      price: 1499,
      image: '/products/fitness-band.jpg',
    },
  ],
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          প্রোফাইল তথ্য
        </h1>

        {/* Profile Section */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex items-center gap-6">
          <Image
            src={user.profileImage}
            alt={user.name}
            width={100}
            height={100}
            className="rounded-full border border-gray-300 dark:border-gray-600 object-cover"
          />
          <div className="space-y-2">
            <p className="text-xl font-bold text-gray-800 dark:text-white">
              {user.name}
            </p>
            <p className="text-md text-gray-600 dark:text-gray-300">
              {user.email}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              যোগদান করেছেন: {user.joined}
            </p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-2 border border-gray-200 dark:border-gray-700">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            মোবাইল: <span className="font-normal">{user.phone}</span>
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            ঠিকানা: <span className="font-normal">{user.address}</span>
          </p>
        </div>

        {/* Order History */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            অর্ডার ইতিহাস
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {user.orders.map(order => (
              <div
                key={order.id}
                className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex gap-4"
              >
                <Image
                  src={order.image}
                  alt={order.product}
                  width={80}
                  height={80}
                  className="rounded-xl object-cover"
                />
                <div className="flex-1 space-y-1">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {order.product}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    অর্ডার আইডি: {order.id}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    তারিখ: {order.date}
                  </p>
                  <span
                    className={`text-xs mt-2 inline-block px-3 py-1 rounded-full font-semibold ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200'
                    }`}
                  >
                    {order.status === 'Delivered'
                      ? 'ডেলিভার হয়েছে'
                      : 'শিপ করা হয়েছে'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Items */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            কার্টে থাকা পণ্য
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {user.cart.map(item => (
              <div
                key={item.id}
                className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex items-center gap-4"
              >
                <Image
                  src={item.image}
                  alt={item.product}
                  width={80}
                  height={80}
                  className="rounded-xl object-cover"
                />
                <div className="flex-1">
                  <p className="text-md font-semibold text-gray-800 dark:text-white">
                    {item.product}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    পণ্যের আইডি: {item.id}
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-md font-bold text-gray-800 dark:text-gray-100">
                    ৳ {item.price}
                  </p>
                  <Link href="/Carticon">
                    <span className="text-sm text-blue-500 hover:underline">
                      কার্ট দেখুন
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
