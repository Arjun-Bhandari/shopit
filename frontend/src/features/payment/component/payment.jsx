import React, { useState } from 'react';

export default function PaymentForm() {
  const [selectedPayment, setSelectedPayment] = useState('paypal');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
        {/* Payment Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Payment</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="creditCard"
                  checked={selectedPayment === 'creditCard'}
                  onChange={() => setSelectedPayment('creditCard')}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-700">Credit card</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="paypal"
                  checked={selectedPayment === 'paypal'}
                  onChange={() => setSelectedPayment('paypal')}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-700">PayPal</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="etransfer"
                  checked={selectedPayment === 'etransfer'}
                  onChange={() => setSelectedPayment('etransfer')}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-700">eTransfer</span>
              </label>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Card number</label>
                <input
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name on card</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Expiration date (MM/YY)</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-4">
      {/* Save Button */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-700 transition"
      >
        Proceed to Pay
      </button>
    </div>
      </div>
    </div>
  );
}
