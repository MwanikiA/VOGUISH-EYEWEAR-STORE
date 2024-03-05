import React from 'react';
import { Router } from 'react-router-dom';


const AddToCart= () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add to Cart</h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="item-name" className="sr-only">Item Name</label>
              <input id="item-name" name="item-name" type="text" autoComplete="item-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Item Name" />
            </div>
            <div>
              <label htmlFor="quantity" className="sr-only">Quantity</label>
              <input id="quantity" name="quantity" type="number" autoComplete="quantity" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Quantity" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/check-circle --> */}
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 10a9 9 0 11-18 0 9 9 0 0118 0zM9 13l6-6-1.41-1.41L9 10.17l-2.59-2.58L5 8l4 4z" clipRule="evenodd" />
                </svg>
              </span>
              Add to Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToCart
