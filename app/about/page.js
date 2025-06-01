'use client';
import { useState } from 'react';
import {
  CheckCircle,
  Truck,
  ShieldCheck,
  RotateCcw,
  Tag,
  Globe,
  Phone,
  Mail,
  MapPin,
  Zap,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';

const faqs = [
  {
    question: 'zayanlife.com কী?',
    answer:
      'zayanlife.com বাংলাদেশের বিশ্বস্ত অনলাইন শপিং প্ল্যাটফর্ম, যা আসল পণ্য, দ্রুত ডেলিভারি ও নির্ভরযোগ্য সেবা প্রদান করে।',
  },
  {
    question: 'কিভাবে অর্ডার করবো এবং পেমেন্ট পদ্ধতি কী কী?',
    answer:
      'আমাদের ওয়েবসাইটের মাধ্যমে অনলাইনে অর্ডার করুন। ক্যাশ অন ডেলিভারি (COD) ও অন্যান্য নিরাপদ পেমেন্ট পদ্ধতি গ্রহণযোগ্য।',
  },
  {
    question: 'ডেলিভারি ও প্যাকেজিং সম্পর্কে?',
    answer:
      'আমরা সারা দেশে Pathao ও Steadfast এর মতো বিশ্বস্ত পার্টনারদের মাধ্যমে পণ্য সরবরাহ করি। পণ্য নিরাপদ রাখতে প্যাকেজিং বিশেষভাবে করা হয়।',
  },
  {
    question: 'রিটার্ন ও রিফান্ড নীতি?',
    answer:
      'ভুল বা ত্রুটিপূর্ণ পণ্য পেলে ২৪ ঘণ্টার মধ্যে ছবি/ভিডিও প্রমাণসহ রিপোর্ট করুন। হোয়াটসঅ্যাপে যোগাযোগ করে সহজে রিটার্ন করুন: +8801614871922।',
  },
  {
    question: 'প্রতারনার সতর্কতা!',
    answer:
      'প্রতারণা এড়াতে সবসময় অফিসিয়াল zayanlife.com থেকেই পণ্য কিনুন। ভুয়া বিক্রেতা থেকে সতর্ক থাকুন।',
  },
];

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* শিরোনাম */}
      <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-900 dark:text-indigo-400">
        আমাদের সম্পর্কে -{' '}
        <span className="text-indigo-600 dark:text-indigo-500">
          zayanlife.com
        </span>
      </h1>

      {/* পরিচিতি */}
      <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 text-lg mb-12 leading-relaxed">
        <strong>zayanlife.com</strong> বাংলাদেশের একটি বিশ্বস্ত অনলাইন শপিং
        প্ল্যাটফর্ম, যেখানে আপনি সহজে, নিরাপদে এবং দ্রুত আপনার প্রয়োজনীয় পণ্য
        অর্ডার করতে পারবেন। আমরা প্রতিটি গ্রাহকের জন্য সেরা অভিজ্ঞতা নিশ্চিত
        করতে বদ্ধপরিকর।
      </p>

      {/* বৈশিষ্ট্য */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        <Feature
          icon={
            <Truck className="text-indigo-600 dark:text-indigo-400" size={36} />
          }
          title="সারা দেশে ডেলিভারি"
          desc="বাংলাদেশের যেকোনো স্থানে দ্রুত ও নির্ভরযোগ্য ডেলিভারি।"
        />
        <Feature
          icon={
            <Zap className="text-indigo-600 dark:text-indigo-400" size={36} />
          }
          title="ক্যাশ অন ডেলিভারি"
          desc="পণ্য হাতে পাওয়ার পরেই পেমেন্ট করুন।"
        />
        <Feature
          icon={
            <ShieldCheck
              className="text-indigo-600 dark:text-indigo-400"
              size={36}
            />
          }
          title="আসল পণ্যের নিশ্চয়তা"
          desc="১০০% অরিজিনাল পণ্যের নিশ্চয়তা।"
        />
        <Feature
          icon={
            <RotateCcw
              className="text-indigo-600 dark:text-indigo-400"
              size={36}
            />
          }
          title="সহজ রিটার্ন"
          desc="সহজ ও ঝামেলামুক্ত রিটার্ন নীতি।"
        />
        <Feature
          icon={
            <Tag className="text-indigo-600 dark:text-indigo-400" size={36} />
          }
          title="সাশ্রয়ী মূল্য"
          desc="সেরা দামে পণ্য এবং ডিসকাউন্ট অফার।"
        />
        <Feature
          icon={
            <CheckCircle
              className="text-indigo-600 dark:text-indigo-400"
              size={36}
            />
          }
          title="নিরাপদ কেনাকাটা"
          desc="নিরাপদ ও নির্ভরযোগ্য পেমেন্ট পদ্ধতি।"
        />
      </div>

      {/* স্পেশাল অফার */}
      <div className="bg-indigo-100 dark:bg-gray-800 border border-indigo-300 dark:border-gray-700 rounded-lg p-6 max-w-5xl mx-auto mb-16 text-center shadow">
        <img
          src="/bannar1.jpg"
          alt="বিশেষ অফার ব্যানার"
          className="w-full h-auto rounded-md mb-6 object-cover cursor-pointer"
        />
      </div>

      {/* রিটার্ন ও যোগাযোগ */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-indigo-800 dark:text-indigo-400">
            <RotateCcw size={24} /> রিটার্ন ও রিপ্লেসমেন্ট নীতি
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              ডেলিভারির সময় ডেলিভারি পার্সনের সামনে চেক করুন বা আনবক্সিং ভিডিও
              রেকর্ড করুন।
            </li>
            <li>
              ভুল/ত্রুটিপূর্ণ পণ্যের ক্ষেত্রে ২৪ ঘণ্টার মধ্যে ছবি/ভিডিওসহ
              রিপোর্ট করুন।
            </li>
            <li>
              হোয়াটসঅ্যাপে যোগাযোগ করুন:{' '}
              <a
                href="https://wa.me/8801870391330"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                +8801614871922
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-indigo-800 dark:text-indigo-400">
            <Globe size={24} /> আমাদের সাথে যোগাযোগ
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
            <Phone size={20} /> +8801614871922
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
            <Mail size={20} /> zayanlife
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
            <MapPin size={20} /> নিউ মার্কেট সিটি কমপ্লেক্স, দোকান নং-২৬,
            ঢাকা-১২০৫
          </p>
        </div>
      </div>

      {/* ভিশন ও মিশন */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <Card
          icon={<Zap size={24} className="dark:text-indigo-400" />}
          title="আমাদের ভিশন"
          text="বাংলাদেশে অনলাইন শপিংকে নতুন মাত্রা দেওয়া – সেরা পণ্য, দুর্দান্ত কাস্টমার সার্ভিস ও একটি নিরাপদ ও সহজ প্ল্যাটফর্মের মাধ্যমে।"
        />
        <Card
          icon={<AlertCircle size={24} className="dark:text-indigo-400" />}
          title="আমাদের মিশন"
          text="দেশের প্রতিটি মানুষের জন্য সহজ, নির্ভরযোগ্য এবং আনন্দদায়ক অনলাইন কেনাকাটার অভিজ্ঞতা তৈরি করা।"
        />
      </div>

      {/* মান ও ডেলিভারি প্রতিশ্রুতি */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        <Card
          icon={<CheckCircle size={24} className="dark:text-indigo-400" />}
          title="পণ্যের মানে প্রতিশ্রুতি"
          text="আমরা কেবল বেছে নেওয়া সেরা পণ্য সরবরাহ করি — দৈনন্দিন প্রয়োজনীয় জিনিস থেকে শুরু করে আধুনিক গ্যাজেট পর্যন্ত।"
        />
        <div className="bg-indigo-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-indigo-700 dark:text-indigo-400">
            <Truck size={24} /> দ্রুত ও নির্ভরযোগ্য ডেলিভারি
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            ঢাকায় ১-৩ দিন এবং ঢাকার বাইরে ২-৫ দিনের মধ্যে পণ্য পৌঁছে দেওয়া হয়।
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>ঢাকা: ৬০ টাকা</li>
            <li>ঢাকার বাইরে: ১১০ টাকা</li>
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-900 dark:text-indigo-400 text-center">
          সাধারণ প্রশ্নাবলী
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-300 dark:border-gray-700 rounded-md"
            >
              <button
                onClick={() => toggleIndex(i)}
                className="w-full flex justify-between items-center px-5 py-4 font-semibold text-left text-indigo-900 dark:text-indigo-300 bg-indigo-100 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-gray-600 focus:outline-none"
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-header-${i}`}
              >
                {faq.question}
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              {openIndex === i && (
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-header-${i}`}
                  className="px-5 py-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition-shadow cursor-default">
      <div className="mb-3">{icon}</div>
      <h4 className="text-lg font-semibold mb-2 text-indigo-900 dark:text-indigo-400">
        {title}
      </h4>
      <p className="text-gray-700 dark:text-gray-300">{desc}</p>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow">
      <div className="flex items-center mb-3 text-indigo-700 dark:text-indigo-400">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-400">
        {title}
      </h4>
      <p className="text-gray-700 dark:text-gray-300">{text}</p>
    </div>
  );
}
