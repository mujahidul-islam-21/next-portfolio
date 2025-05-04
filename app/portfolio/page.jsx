// components/PortfolioSection.js
import Link from 'next/link';
import { GrOverview } from 'react-icons/gr';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Project 1',
      imageUrl: '/bangk.jpeg',
      link: 'https://bank-management--six.vercel.app/',
    },
    {
      id: 2,
      title: 'Project 2',
      imageUrl:
        '/screencapture-mit-tube-yy2d-vercel-app-2025-05-04-18_49_39.png',
      link: 'https://mit-tube-yy2d.vercel.app/',
    },
    {
      id: 3,
      title: 'Project 3',
      imageUrl: '/54463f162916053.63dd1eb716c84.jpg',
      link: '/portfolio/project-3',
    },
    {
      id: 4,
      title: 'Project 4',
      imageUrl: '/72fc7318212055.562c5c050e58e.jpg',
      link: '/portfolio/project-4',
    },
    {
      id: 5,
      title: 'Project 5',
      imageUrl: '/baCOnVw.png',
      link: '/portfolio/project-5',
    },
    {
      id: 6,
      title: 'Project 6',
      imageUrl:
        '/landing-page-website-template-with-abstract-low-poly-design_1048-14390.avif',
      link: '/portfolio/project-6',
    },
  ];

  return (
    <section id="portfolio" className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          My Portfolio
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Check out some of my recent projects. Each project showcases my skills
          in web development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {portfolioItems.map(item => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                <Link
                  href={item.link}
                  className="text-slate-300 text-xl font-semibold px-6 py-3 bg-slate-400 rounded-md hover:bg-slate-200 transition duration-300 flex items-center justify-center"
                >
                  <GrOverview className="text-black text-2xl" />{' '}
                  {/* Icon with larger size */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
