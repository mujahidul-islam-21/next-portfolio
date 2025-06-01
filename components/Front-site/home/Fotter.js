import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 pt-6 pb-2 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
        {/* কোম্পানি */}
        <div>
          <h3 className="text-xl font-bold mb-4">নেস্টমার্ট</h3>
          <p className="text-sm text-gray-400">
            আপনার দৈনিক গন্তব্য — নতুন অফার, দ্রুত ডেলিভারি ও আরো অনেক কিছু।
          </p>
        </div>

        {/* শপ */}
        <div>
          <h4 className="text-sm font-semibold mb-4">দোকান</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                সব পণ্য
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                সেরা অফার
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                নতুন আগমন
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                গিফট কার্ড
              </a>
            </li>
          </ul>
        </div>

        {/* সাহায্য */}
        <div>
          <h4 className="text-sm font-semibold mb-4">সাহায্য</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                শিপিং
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                রিটার্নস
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                জিজ্ঞাসা ও উত্তর
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                আমাদের সাথে যোগাযোগ করুন
              </a>
            </li>
          </ul>
        </div>

        {/* যোগাযোগ ও সোশ্যাল */}
        <div>
          <h4 className="text-sm font-semibold mb-4">যোগাযোগ করুন</h4>
          <ul className="text-sm text-gray-400 space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-400" />
              +৮৮০ ১২৩৪-৫৬৭৮৯০
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              support@nestmart.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-400" />
              ঢাকা, বাংলাদেশ
            </li>
          </ul>

          <h4 className="text-sm font-semibold mb-4">আমাদের অনুসরণ করুন</h4>
          <div className="flex space-x-3">
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* নিচের অংশ */}
      <div className="text-center text-sm text-gray-500 mt-2">
        © {new Date().getFullYear()} WAFIAH. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
