import Image from 'next/image';
import Link from 'next/link';

export default function AboutMeSection() {
  return (
    <section id="about" className="bg-green-50 py-20">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start lg:me-6">
          <Image
            src="/vj2VacxOTl2CdNHEVDtdyA.png" // Replace with your actual image path
            alt="About Me"
            width={530}
            height={530}
            className="rounded-lg shadow-lg transition-all duration-300 transform 
                       lg:scale-100 scale-95"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 relative">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <p className="text-md text-gray-700 leading-relaxed">
            With years of experience in web design and development, I specialize
            in creating responsive, user-friendly, and visually stunning
            websites. Skilled in modern web technologies like HTML, CSS,
            JavaScript, React, and Next.js, I deliver high-performance
            applications tailored to client needs.
          </p>
          <p className="text-md text-gray-700 leading-relaxed">
            I have worked on various projects, from small business websites to
            complex applications, always focusing on clean code, fast
            performance, and seamless user experiences. With expertise in UI/UX
            design, I prioritize accessibility and intuitive interfaces. I’m
            passionate about staying updated with the latest trends and
            continually improving my craft.
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-green-600 text-white font-semibold py-3 px-6 
                       rounded-lg shadow-md hover:bg-green-700 transition duration-300 mt-6"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
