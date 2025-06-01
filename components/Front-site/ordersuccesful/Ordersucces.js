'use client';
import React from 'react';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-2 px-2">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col items-center mb-6">
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
          <h1 className="text-3xl text-green-400 font-bold text-center">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-500 text-center">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Order ID:</strong> 682a1b8ed39c592561109348
            </li>
            <li>
              <strong>Order Date:</strong> May 18, 2025 at 11:40 PM
            </li>
            <li>
              <strong>Status:</strong> Pending
            </li>
            <li>
              <strong>Payment Method:</strong> Cash on Delivery
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Name:</strong> Aquila Anthony
            </li>
            <li>
              <strong>Address:</strong> Netrokona
            </li>
            <li>
              <strong>Phone:</strong> 01931606787
            </li>
            <li>
              <strong>Notes:</strong> Amet qui ut iusto c
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Items</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>
                Wireless Bluetooth Headphones - Noise Cancelling & Hi-Fi Sound
              </strong>
            </li>
            <li>Quantity: 49</li>
            <li>Total Amount: 44,200৳</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2">
            <Home className="w-5 h-5" />
            Continue Shopping
          </button>
          <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 flex items-center justify-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            View All Orders
          </button>
        </div>
      </div>
    </div>
  );
}
