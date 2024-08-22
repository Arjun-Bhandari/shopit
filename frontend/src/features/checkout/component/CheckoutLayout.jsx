import React,{useState} from 'react'
import { Link } from 'react-router-dom';



const CheckoutLayout = () => {
  const orderItems = [
    {
      id: 1,
      name: 'Basic Tee',
      color: 'Black',
      size: 'Large',
      price: 32.0,
      quantity: 1,
      image: 'https://via.placeholder.com/60',
    },
    {
      id: 2,
      name: 'Basic Tee',
      color: 'Sienna',
      size: 'Large',
      price: 32.0,
      quantity: 1,
      image: 'https://via.placeholder.com/60',
    },
  ];
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start p-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact and Shipping Information */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Contact information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1"
              />
            </div>
            <hr className="my-4" />

            <h2 className="text-xl font-semibold mb-4">Shipping information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">First name</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last name</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Company</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Country</label>
                <select className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">State / Province</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Postal code</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md shadow-sm p-2 mt-1"
              />
            </div>
          </form>
          <div className="flex justify-end mt-6 space-x-4">
      {/* Cancel Button */}
      <button
        type="button"
        className="text-gray-700 font-medium hover:text-gray-900 transition"
      >
        Reset
      </button>

      {/* Save Button */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-1 text-white font-semibold hover:bg-indigo-700 transition"
      >
        Save
      </button>
    </div>

          
        {/* existing address */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Shipping Address</h1>
          <p className='text-xs text-slate-500'>Select one existing address</p>
          <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setSelectedDelivery('standard')}
              className={`flex-1 border rounded-lg p-4 text-left ${
                selectedDelivery === 'standard' ? 'border-indigo-600' : 'border-gray-300'
              }`}
            >
              <span className="block text-sm font-medium">Standard</span>
              <span className="block text-sm text-gray-500">4-10 business days</span>
              <span className="block mt-2 text-sm font-semibold">$5.00</span>
            </button>
            <button
              onClick={() => setSelectedDelivery('express')}
              className={`flex-1 border rounded-lg p-4 text-left ${
                selectedDelivery === 'express' ? 'border-indigo-600' : 'border-gray-300'
              }`}
            >
              <span className="block text-sm font-medium">Express</span>
              <span className="block text-sm text-gray-500">2-5 business days</span>
              <span className="block mt-2 text-sm font-semibold">$16.00</span>
            </button>
          </div>
        </div>
        </div>


        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order summary</h2>
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-gray-600">{item.color}, {item.size}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div>
                  <select className="border-gray-300 rounded-md">
                    {[1, 2, 3].map((quantity) => (
                      <option key={quantity} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-900">
              <p>Subtotal</p>
              <p>$64.00</p>
            </div>
            <div className="flex justify-between text-gray-900">
              <p>Shipping</p>
              <p>$5.00</p>
            </div>
            <div className="flex justify-between text-gray-900">
              <p>Taxes</p>
              <p>$5.52</p>
            </div>
            <div className="flex justify-between font-semibold text-gray-900">
              <p>Total</p>
              <p>$75.52</p>
            </div>
          </div>

          {/* Confirm Order Button */}
          <div className="mt-6">
            <Link to="/payment" >
            <button className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700">
              Confirm order
            </button>
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/" >
          <p>
            or{" "}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;

