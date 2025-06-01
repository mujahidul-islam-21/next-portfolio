'use client';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    address: '',
    note: '',
  });

  const [quantities, setQuantities] = useState({
    'Product One': 1,
    'Product Two': 2,
  });

  const prices = {
    'Product One': 500,
    'Product Two': 800,
  };

  const images = {
    'Product One': 'Link → cat-3.png.png',
    'Product Two': 'Link → cat-3.png.png',
  };

  const districts = [
    'Dhaka',
    'Chattogram',
    'Khulna',
    'Rajshahi',
    'Barishal',
    'Sylhet',
    'Rangpur',
    'Mymensingh',
    'Cumilla',
    'Narayanganj',
    'Gazipur',
  ];

  const [selectedShipping, setSelectedShipping] = useState('');
  const [shipping, setShipping] = useState(0);

  const handleShippingChange = option => {
    setSelectedShipping(option);
    setShipping(option === 'in-dhaka' ? 80 : 120);
  };

  const handleIncrement = item => {
    setQuantities(prev => ({
      ...prev,
      [item]: prev[item] + 1,
    }));
  };

  const handleDecrement = item => {
    setQuantities(prev => ({
      ...prev,
      [item]: Math.max(prev[item] - 1, 1),
    }));
  };

  const subtotal = Object.keys(quantities).reduce(
    (sum, item) => sum + quantities[item] * prices[item],
    0
  );

  const total = subtotal + shipping;

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('নাম লিখুন!', { position: 'top-center' });
      return false;
    }
    if (!/^01\d{9}$/.test(formData.phone)) {
      toast.error('১১ সংখ্যার সঠিক মোবাইল নাম্বার দিন!', {
        position: 'top-center',
      });
      return false;
    }
    if (!formData.district) {
      toast.error('জেলা সিলেক্ট করুন!', { position: 'top-center' });
      return false;
    }
    if (!formData.address.trim()) {
      toast.error('সম্পূর্ণ ঠিকানা লিখুন!', { position: 'top-center' });
      return false;
    }
    if (!selectedShipping) {
      toast.error('শিপিং অপশন সিলেক্ট করুন!', { position: 'top-center' });
      return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    toast.success('অর্ডার কনফার্ম হয়েছে!', {
      position: 'top-center',
      style: {
        fontSize: '16px',
        background: '#16a34a',
        color: 'white',
      },
    });

    // Optional: Reset after order
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        district: '',
        address: '',
        note: '',
      });
      setQuantities({
        'Product One': 1,
        'Product Two': 2,
      });
      setSelectedShipping('');
      setShipping(0);
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
      <Toaster />

      {/* Billing Form */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">BILLING DETAILS</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">আপনার নাম *</label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="আপনার নাম লিখুন"
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">মোবাইল নাম্বার *</label>
            <input
              type="text"
              value={formData.phone}
              onChange={e =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="১১ ডিজিটের নাম্বারটি লিখুন"
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              জেলা সিলেক্ট করুন *
            </label>
            <select
              value={formData.district}
              onChange={e =>
                setFormData({ ...formData, district: e.target.value })
              }
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">--জেলা বাছাই করুন--</option>
              {districts.map(d => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">সম্পূর্ণ ঠিকানা *</label>
            <textarea
              rows={3}
              value={formData.address}
              onChange={e =>
                setFormData({ ...formData, address: e.target.value })
              }
              placeholder="রোড নাম/নং, বাড়ি নাম/নং, ফ্ল্যাট নাম্বার..."
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              নির্দেশনা (optional)
            </label>
            <textarea
              rows={2}
              value={formData.note}
              onChange={e => setFormData({ ...formData, note: e.target.value })}
              placeholder="আপনার স্পেশাল কোন নির্দেশনা থাকলে এখানে লিখুন"
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">আপনার অর্ডার</h2>
        <div className="space-y-4">
          {Object.keys(quantities).map(item => (
            <div key={item} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={images[item]}
                  alt={item}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="max-w-44">
                  <h3 className="text-sm font-semibold">{item}</h3>
                  <p className="text-sm text-gray-500">৳ {prices[item]}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement(item)}
                  className="p-1 border rounded"
                >
                  -
                </button>
                <span className="text-sm">{quantities[item]}</span>
                <button
                  onClick={() => handleIncrement(item)}
                  className="p-1 border rounded"
                >
                  +
                </button>
              </div>
              <h4 className="text-sm font-semibold">
                ৳ {(quantities[item] * prices[item]).toLocaleString()}
              </h4>
            </div>
          ))}
        </div>

        {/* Shipping */}
        <hr className="my-4" />
        <div className="space-y-2 text-sm">
          <label className="block font-semibold">শিপিং অপশন *</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="shipping"
                value="in-dhaka"
                onChange={() => handleShippingChange('in-dhaka')}
                checked={selectedShipping === 'in-dhaka'}
              />{' '}
              ঢাকা (৳80)
            </label>
            <label>
              <input
                type="radio"
                name="shipping"
                value="out-dhaka"
                onChange={() => handleShippingChange('out-dhaka')}
                checked={selectedShipping === 'out-dhaka'}
              />{' '}
              ঢাকা ছাড়া (৳120)
            </label>
          </div>
        </div>

        {/* Totals */}
        <hr className="my-4" />
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>সাবটোটাল</span>
            <span className="font-semibold">৳ {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>শিপিং</span>
            <span className="font-semibold">৳ {shipping}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>মোট</span>
            <span>৳ {total.toLocaleString()}</span>
          </div>
        </div>

        {/* COD Info */}
        <div className="mt-4 p-4 border rounded bg-gray-50 text-sm text-gray-700">
          <p className="font-semibold">Cash on delivery</p>
          <p>পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন।</p>
        </div>

        <button
          className="mt-4 w-full bg-green-500 text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-green-600 transition duration-200"
          onClick={handlePlaceOrder}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
