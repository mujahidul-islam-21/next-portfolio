// pages/contact.js
export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-50 py-16 text-green-500 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold mb-4">Contact Me</h1>
          <p className="text-lg">
            Have any questions or need assistance? Feel free to reach out to me,
            and we’ll be happy to help!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Send Me a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your message here"
                    className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 h-32 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-4">
                You can reach us via the following contact details or fill out
                the form, and we’ll get back to you as soon as possible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="material-icons text-emerald-600 mr-3">
                    location_on
                  </span>
                  <span className="text-gray-800">
                    1023 Motijheel, Dhaka, Bangladesh
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-emerald-600 mr-3">
                    phone
                  </span>
                  <a href="tel:+8801944459681" className="text-gray-800">
                    +8801944459681
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="material-icons text-emerald-600 mr-3">
                    email
                  </span>
                  <a
                    href="mailto:mujahidul451.asd@gmail.com"
                    className="text-gray-800"
                  >
                    mujahidul451.asd@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            My Location
          </h2>
          <p className="text-gray-600 mb-10">
            Find us on the map below. We’re excited to welcome you to our
            office!
          </p>
          <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.671962645287!2d90.39770772787095!3d23.735466285534102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sMotijheel%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1735538732992!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
