// components/Footer.js
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-blue-500 inline-block">
              About Me
            </h3>
            <p className="text-sm leading-relaxed">
              I am a passionate web developer dedicated to crafting responsive,
              visually appealing, and user-friendly websites that deliver an
              exceptional user experience.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-green-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-green-400 transition duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-green-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-green-400 transition duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b-2 border-yellow-500 inline-block">
              Follow Me
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition transform hover:scale-110"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-300 transition transform hover:scale-110"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm tracking-wide">
            Designed & Developed by{' '}
            <span className="text-blue-400 font-bold hover:underline cursor-pointer">
              Mujahidul islam
            </span>
          </p>
          <p className="mt-2 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
