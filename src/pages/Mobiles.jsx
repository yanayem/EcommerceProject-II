import React from 'react';
import { Link } from 'react-router-dom'; // Added Link
import { CheckCircle2, XCircle, ShoppingCart } from 'lucide-react'; 
import all_product from "../assets/All_prodect"; 

const Mobiles = () => {
  return (
    <div className="w-full">
      <div className="header-section mb-8">
        <h1 className="text-3xl font-black text-gray-800 dark:text-white tracking-tight">
          Mobile Collection
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore our latest smartphones with the best prices.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {all_product.map((item) => (
          <div key={item.id} className="flex flex-col">
            {/* PRODUCT CARD LINK */}
            <Link 
              to={`/product/${item.id}`}
              className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full no-underline"
            >
              {/* Image Container */}
              <div className="relative w-full h-52 mb-4 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-700/50">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" 
                />
                <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                  {item.category}
                </span>
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.brand}</p>
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 leading-snug mb-2 group-hover:text-green-600 transition-colors truncate">
                  {item.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-black text-green-600">{item.price}</span>
                  <span className="text-[11px] text-gray-400 line-through decoration-red-400">$99.0</span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-medium pt-3 border-t border-gray-50 dark:border-gray-700">
                  <span className="text-gray-400">{item.shiping_cost}</span>
                  
                  <div className="flex items-center gap-1">
                    {item.stock === "in stock" ? (
                      <>
                        <CheckCircle2 size={14} className="text-green-500" />
                        <span className="text-green-500 font-bold uppercase tracking-tighter">In Stock</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={14} className="text-red-500" />
                        <span className="text-red-500 font-bold uppercase tracking-tighter">Out of Stock</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>

            {/* ADD TO CART BUTTON - Outside the Link to avoid nested navigation conflicts */}
            <button 
              onClick={(e) => {
                e.preventDefault(); // Prevents the Link click if button is inside
                console.log("Added to cart:", item.id);
              }}
              className="w-full mt-3 bg-gray-900 dark:bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-500 transition-colors shadow-lg"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;