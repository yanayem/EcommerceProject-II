import React from "react";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto pt-24 px-4">
      {/* Promo Info */}
      <div className="flex flex-col md:flex-row md:space-x-6 text-sm mt-2 md:mt-0">
        <span>Free shipping over $199</span>
        <span>30 days money back</span>
        <span>100% secure payment</span>
      </div>

      {/* Main Content */}
      <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to Swoo Tech Mart</h1>
        <p className="text-gray-700 dark:text-gray-200">
          Explore the latest electronics, gadgets, and accessories. Enjoy free shipping over $199, 30 days money back guarantee, and 100% secure payment.
        </p>

        {/* Example Product Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
            <div
              key={product}
              className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded-md mb-2 flex items-center justify-center">
                Product Image
              </div>
              <h2 className="font-semibold text-lg">Product {product}</h2>
              <p className="text-green-500 font-bold">$199.99</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;