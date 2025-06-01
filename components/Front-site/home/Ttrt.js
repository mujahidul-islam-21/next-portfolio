import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductSection = () => {
  const sections = [
    {
      title: 'Top Selling',
      products: [
        {
          name: 'Nestle Original Coffee-Mate Coffee Creamer',
          price: '$32.85',
          img: '/Link → cat-11.png.png',
        },
        {
          name: 'Nestle Original Coffee-Mate Coffee Creamer',
          price: '$32.85',
          img: '/Link → cat-11.png.png',
        },
        {
          name: 'Nestle Original Coffee-Mate Coffee Creamer',
          price: '$32.85',
          img: '/Link → cat-11.png.png',
        },
      ],
    },
    {
      title: 'Trending Products',
      products: [
        {
          name: 'Organic Cage-Free Grade A Large Brown Eggs',
          price: '$32.85',
          img: '/Link → cat-3.png.png',
        },
        {
          name: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
          price: '$32.85',
          img: '/Link → cat-3.png.png',
        },
        {
          name: 'Naturally Flavored Cinnamon Vanilla Light Roast Coffee',
          price: '$32.85',
          img: '/Link → cat-3.png.png',
        },
      ],
    },
    {
      title: 'Recently added',
      products: [
        {
          name: 'Pepperidge Farm Farmhouse Hearty White Bread',
          price: '$32.85',
          img: '/Link → cat-9.png.png',
        },
        {
          name: 'Organic Frozen Triple Berry Blend',
          price: '$32.85',
          img: '/Link → cat-9.png.png',
        },
        {
          name: 'Oroweat Country Buttermilk Bread',
          price: '$32.85',
          img: '/Link → cat-9.png.png',
        },
      ],
    },
    {
      title: 'Top Rated',
      products: [
        {
          name: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
          price: '$32.85',
          img: '/Link → cat-12.png.png',
        },
        {
          name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
          price: '$32.85',
          img: '/Link → cat-12.png.png',
        },
        {
          name: 'All Natural Italian-Style Chicken Meatballs',
          price: '$32.85',
          img: '/Link → cat-12.png.png',
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 rounded-xl transition-colors duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              {section.title}
            </h2>
            {section.products.map((product, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-xl flex items-center justify-between p-4 mb-5 hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-16 w-16 object-cover rounded-lg mr-4"
                />
                <div className="flex-1 max-w-[140px] overflow-hidden">
                  <h3 className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-gray-900 dark:text-gray-100">
                    {product.name}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 text-base font-bold mt-1">
                    {product.price}
                  </p>
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300">
                  <ShoppingBag size={20} />
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
