import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import AboutMeSection from './about/page';
import PortfolioServicesSection from './services/page';
import ContactPage from './contact/page';
import PortfolioSection from './portfolio/page';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-50 py-20 ">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-16 lg:px-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 md:px-1  mt-10 md:mt-[60px] sm:mt-[60px]">
            <p className="text-xl">Hi, I am</p>
            <strong className="text-2xl lg:text-3xl font-semibold text-gray-900">
              Mujahidul Islam
            </strong>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-6">
              Web Developer
            </h1>
            <p className="text-md text-gray-700 max-w-xl mx-auto lg:mx-0 md:max-w-43">
              I specialize in building responsive, user-friendly, and visually
              stunning websites and applications using the latest web
              technologies.
            </p>
            <div className="flex justify-center lg:justify-start space-x-6 mt-6 mb-6">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com/profile.php?id=100037444207298"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-3xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/mojahidul-islam-399793338/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-3xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mujahidul-islam-21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/8801944459681"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700 text-3xl"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-6 mb-6">
              <Link
                href="/contact"
                className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              >
                Hire Me
              </Link>
              <a
                href="/Mujahidul_Islam_Resume.pdf"
                download="Your-CV.pdf"
                className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Base Image */}
            <div
              className={`${'sm:hidden md:block'} flex flex-col md:items-center lg:flex-row  lg:items-start`}
            >
              {/* Overlay Image */}
              <Image
                src="/WhatsApp_Image__arabian2024-07-17_at_12.30.53_4b09723f-removebg-preview.png"
                alt="Overlay Image"
                width={500}
                height={500}
                className="rounded-lg shadow-xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutMeSection />
      <PortfolioServicesSection />
      <PortfolioSection />
      <ContactPage />
    </div>
  );
}
