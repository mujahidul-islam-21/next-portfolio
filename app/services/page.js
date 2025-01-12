import Link from 'next/link';

const PortfolioServicesSection = () => {
  return (
    <section id="services" className="bg-green-50 py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">My Services</h2>
          <p className="text-lg text-gray-600 mt-4">
            As a full-stack developer, I offer a range of services from
            front-end to back-end development. Below are the key areas I
            specialize in.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service Card 1: HTML & CSS Development */}
          <div className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              HTML & CSS Development
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Crafting clean, semantic, and well-structured HTML and CSS to
              ensure responsive designs across all platforms.
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-600 mb-6">
              <li>Responsive Layouts</li>
              <li>Cross-Browser Compatibility</li>
              <li>CSS Grid & Flexbox</li>
            </ul>
          </div>

          {/* Service Card 2: React Development */}
          <div className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              React Development
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Building interactive web applications with React for dynamic,
              efficient user experiences.
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-600 mb-6">
              <li>Reusable Components</li>
              <li>State Management (Redux)</li>
              <li>React Router for Navigation</li>
            </ul>
          </div>

          {/* Service Card 3: Backend Development (Node.js, Express, MongoDB) */}
          <div className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Backend Development
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Building robust and scalable server-side applications using
              Node.js, Express, and MongoDB to power dynamic web experiences.
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-600 mb-6">
              <li>RESTful APIs with Express</li>
              <li>Database Management with MongoDB</li>
              <li>Authentication & Security</li>
            </ul>
          </div>

          {/* Service Card 4: Firebase Authentication & Real-Time Features */}
          <div className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Firebase Integration
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              I integrate Firebase services for user authentication, real-time
              databases, and cloud functions to enhance web applications.
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-600 mb-6">
              <li>User Authentication with Firebase</li>
              <li>Real-time Database & Cloud Functions</li>
              <li>Push Notifications & Cloud Messaging</li>
            </ul>
          </div>

          {/* Service Card 5: Twilio for Messaging & Communication */}
          <div className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Twilio Integration
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              I use Twilio to enable messaging and communication features, like
              SMS and email notifications, to enhance user engagement.
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-600 mb-6">
              <li>SMS Notifications</li>
              <li>Email Campaigns</li>
              <li>Two-Factor Authentication</li>
            </ul>
          </div>

          {/* Service Card 6: Performance Optimization */}
          <div className="service-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Performance Optimization
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Ensuring fast load times and smooth performance for all devices
              with advanced optimization techniques.
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-600 mb-6">
              <li>Lazy Loading</li>
              <li>Image Optimization</li>
              <li>Code Splitting & Minification</li>
            </ul>
          </div>
        </div>

        {/* Portfolio Button */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioServicesSection;
