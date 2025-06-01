"use client"

import { useState } from 'react';

const dummyData = {
  1869: {
    orderId: 46,
    product: 'Nutrela DIABETIC CARE (1 * 3380.00)',
    status: 'pending',
    courier: 'N/A',
    amount: 45.0,
    delivery: 3380.0,
    total: 3425.0,
    image: '/product.png',
  },
};

export default function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderData, setOrderData] = useState(null);

  const handleTrack = () => {
    setOrderData(dummyData[orderNumber] || null);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">
        Track Your Order
      </h2>

      <div className="flex gap-2 justify-center mb-6">
        <input
          type="text"
          placeholder="Enter Order Number"
          value={orderNumber}
          onChange={e => setOrderNumber(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded px-3 py-2 w-1/2"
        />
        <button
          onClick={handleTrack}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Track
        </button>
      </div>

      {orderData && (
        <div className="border rounded-lg shadow p-4 bg-white dark:bg-gray-900 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-4">
            <img src={orderData.image} alt="Product" className="w-16 h-16 rounded" />
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">{orderData.product}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Order ID: {orderData.orderId}
              </p>
            </div>
          </div>
          <table className="w-full text-sm text-gray-800 dark:text-gray-200">
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="py-1 font-medium">Order Status</td>
                <td>{orderData.status}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-1 font-medium">Courier Status</td>
                <td>{orderData.courier}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-1 font-medium">Amount</td>
                <td>{orderData.amount.toFixed(2)}</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="py-1 font-medium">Delivery Charge</td>
                <td>{orderData.delivery.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-1 font-medium">Grand Total</td>
                <td>{orderData.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
