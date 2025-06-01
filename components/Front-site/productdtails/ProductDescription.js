'use client';
import { useState } from 'react';

const tabs = [
  { name: 'Description', id: 'description' },
  { name: 'Additional Info', id: 'additional' },
  { name: 'Reviews (3)', id: 'reviews' },
];

const defaultReviews = [
  {
    name: 'John Doe',
    rating: 5,
    text: 'This product is amazing! Highly recommend.',
  },
  {
    name: 'Jane Smith',
    rating: 4,
    text: 'Quality is great, worth the price.',
  },
  {
    name: 'Alex Johnson',
    rating: 3,
    text: 'Fast shipping and nicely packaged.',
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState(defaultReviews);
  const [newReview, setNewReview] = useState('');
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [filterRating, setFilterRating] = useState(null);

  const handleReviewSubmit = () => {
    if (newReview.trim() && newName.trim()) {
      const newEntry = {
        name: newName,
        text: newReview,
        rating: newRating,
      };
      setReviews(prev => [newEntry, ...prev]);
      setNewReview('');
      setNewName('');
      setNewRating(5);
    }
  };

  const filteredReviews = filterRating
    ? reviews.filter(r => r.rating === filterRating)
    : reviews;

  return (
    <div className="max-w-4xl mx-auto p-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* Tabs */}
      <div className="flex gap-5 border-b border-gray-300 dark:border-gray-700 text-sm">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-2 py-2 rounded-t-md transition-colors duration-300 ${
              activeTab === tab.id
                ? 'bg-green-500 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 border border-t-0 rounded-b-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 mt-[-1px] transition-colors duration-300">
        {activeTab === 'description' && (
          <div className="text-sm space-y-4">
            <p>
              Uninhibited camally hired played in whimpered dear gorilla...
            </p>
            <ul className="list-disc ml-6">
              <li>
                <strong>Type Of Packing:</strong> Bottle
              </li>
              <li>
                <strong>Color:</strong> Green, Pink, Powder Blue, Purple
              </li>
              <li>
                <strong>Quantity Per Case:</strong> 100ml
              </li>
              <li>
                <strong>Ethyl Alcohol:</strong> 70%
              </li>
              <li>
                <strong>Piece In One:</strong> Carton
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'additional' && (
          <div className="text-sm">
            <p>
              Additional specifications, shipping info, and more can be placed
              here.
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4 text-sm">
            {/* Filter */}
            <div className="flex gap-2 items-center">
              {[5, 4, 3, 2, 1].map(star => (
                <button
                  key={star}
                  className={`text-xs px-2 py-1 border rounded transition-colors duration-300 ${
                    filterRating === star
                      ? 'bg-green-500 text-white border-green-500'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 dark:text-gray-300'
                  }`}
                  onClick={() => setFilterRating(star)}
                >
                  {star}★
                </button>
              ))}
              <button
                className="ml-2 text-xs px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 dark:text-gray-300"
                onClick={() => setFilterRating(null)}
              >
                Clear
              </button>
            </div>

            {/* Review List */}
            <div className="space-y-2">
              {filteredReviews.map((review, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded transition-colors duration-300"
                >
                  <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="text-yellow-400 text-sm">
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                    <p className="mt-1">{review.text}</p>
                  </div>
                </div>
              ))}
              {filteredReviews.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400">
                  No reviews found for this rating.
                </p>
              )}
            </div>

            {/* Add Review */}
            <div className="mt-4 space-y-2">
              <input
                type="text"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Your name"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-300"
              />
              <textarea
                value={newReview}
                onChange={e => setNewReview(e.target.value)}
                rows={3}
                placeholder="Write your review..."
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-300"
              />
              <div>
                <label className="text-sm font-medium mr-2">Rating:</label>
                <select
                  value={newRating}
                  onChange={e => setNewRating(Number(e.target.value))}
                  className="border p-1 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 transition-colors duration-300"
                >
                  {[5, 4, 3, 2, 1].map(r => (
                    <option key={r} value={r}>
                      {r} Star
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleReviewSubmit}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
