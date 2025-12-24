import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  DollarSign,
  ChevronDown,
  Menu,
  X,
  Flag,
  Search,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Pages",
    path: "/pages",
    sub: [
      { name: "Laptop", path: "/pages/laptop" },
      { name: "Mobile", path: "/pages/mobile" },
      { name: "Accessories", path: "/pages/accessories" },
      { name: "Gaming", path: "/pages/gaming" },
      { name: "Fashion", path: "/pages/fashion" },
    ],
  },
  {
    name: "Products",
    path: "/products",
    sub: [
      { name: "Laptops", path: "/products/laptops" },
      { name: "Mobiles", path: "/products/mobiles" },
      { name: "Accessories", path: "/products/accessories" },
      { name: "Gaming Gear", path: "/products/gaming" },
      { name: "Home Appliances", path: "/products/home" },
    ],
  },
];

const categories = [
  "All Categories",
  "Laptops",
  "Mobiles",
  "Accessories",
  "Gaming",
  "Fashion",
  "Home Appliances",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [hideTopbar, setHideTopbar] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      setScrollingUp(!scrollingDown);
      lastScrollY.current = currentY;

      setScrolled(currentY > 50);
      setHideTopbar(currentY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full z-50">
      {/* Topbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#F1DC67] dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 text-sm z-50 transition-transform duration-300 ${hideTopbar ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <span>Hotline 24/7</span>
            <span>(025) 28862516</span>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="hover:text-green-500 transition">
              Sell On Swoo
            </a>
            <a href="#" className="hover:text-green-500 transition">
              Order Track
            </a>
            <div className="flex items-center gap-4">
              {/* Currency Selector */}
              <div className="group flex items-center gap-1 cursor-pointer transition-colors hover:text-green-600">
                <span className="font-semibold tracking-wide">USD</span>
                <ChevronDown
                  size={14}
                  className="text-gray-400 transition-transform group-hover:rotate-180 group-hover:text-green-600"
                />
              </div>

              {/* Thin Vertical Divider */}
              <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600"></div>

              {/* Language Selector */}
              <div className="group flex items-center gap-2 cursor-pointer transition-colors hover:text-green-600">
                <div className="flex items-center justify-center w-5 h-5 overflow-hidden rounded-full border border-gray-200 shadow-sm">
                  <Flag size={14} className="text-gray-600 group-hover:text-green-600" />
                </div>
                <span className="font-semibold tracking-wide uppercase">Eng</span>
                <ChevronDown
                  size={14}
                  className="text-gray-400 transition-transform group-hover:rotate-180 group-hover:text-green-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 bg-gray-100 dark:bg-gray-800 w-full z-40 fixed top-0 shadow-xl h-15 ${!scrolled ? "mt-8" : ""
          }`}
      >
        <div className="md:max-w-[1400px] px-6 md:px-0 mx-auto flex justify-between items-center h-full transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 no-underline">
            {/* Modern Icon Element */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-green-500/20">
              <span className="text-white font-black text-2xl tracking-tighter">S</span>
              {/* Decorative dot */}
              <div className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-white border-2 border-green-500"></div>
            </div>

            {/* Text Logo */}
            <div className="flex flex-col leading-tight">
              <span className={`font-black tracking-tight transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"
                } bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent dark:from-green-400 dark:to-green-300`}>
                SWOO
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">
                Tech Mart
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 items-center mb-2 md:mb-0 h-full">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center hover:text-green-500 transition h-full px-2 py-1"
                >
                  {item.name}
                  {item.sub && <ChevronDown size={16} className="ml-1" />}
                </Link>

                {item.sub && openIndex === index && (
                  <ul className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-md min-w-[180px] z-50 transition-all duration-300 opacity-100">
                    {item.sub.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4 h-full">
            <span className="border rounded-full p-2 bg-gray-300 dark:bg-gray-700">
              <Heart size={20} className="text-red-500" />
            </span>
            <span className="border rounded-full p-2 bg-gray-300 dark:bg-gray-700">
              <DollarSign size={20} />
            </span>
            <span className="border rounded-full p-2 bg-gray-300 dark:bg-gray-700 flex items-center">
              <ShoppingCart size={20} />
              <p className="ml-1 text-sm font-medium">0</p>
            </span>
            <div className="flex flex-col items-end justify-center h-full px-2">
              <span className="text-sm">WELCOME</span>
              <Link
                to="Pages/login"
                className="text-green-500 text-sm font-semibold hover:underline"
              >
                LOG IN / REGISTER
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger + Search */}
          <div className="flex items-center space-x-2 md:hidden">
            <div className="flex items-center space-x-5 mr-6">
              <Heart size={20} className="text-red-500" />
              <DollarSign size={20} />
              <div className="flex items-center">
                <ShoppingCart size={20} />
                <p className="ml-1 text-sm font-medium">0</p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center h-full px-2">
              <span className="text-sm">WELCOME</span>
              <Link
                to="/login"
                className="text-green-500 text-sm font-semibold hover:underline"
              >
                LOG IN / REGISTER
              </Link>
            </div>
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="p-2 bg-green-600 rounded-md text-white"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 dark:text-gray-100 p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Category & Search */}
        {(!scrolled || scrollingUp) && (
          <div className="hidden md:block w-full bg-[#1ABA1A] text-white p-4 transition-all duration-300">
            <div className="flex items-center justify-between rounded-b-md max-w-[1400px] mx-auto">
              {/* Category */}
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Category:</span>
                <div className="relative">
                  <button
                    className="px-3 py-2 bg-white text-gray-800 rounded-md flex items-center justify-between w-40"
                    onClick={() => setCatOpen(!catOpen)}
                  >
                    {selectedCategory} <ChevronDown size={16} />
                  </button>
                  {catOpen && (
                    <ul className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-md w-40 z-50 transition-all duration-300">
                      {categories.map((cat) => (
                        <li
                          key={cat}
                          className="px-3 py-2 hover:bg-gray-200 cursor-pointer text-gray-800"
                          onClick={() => {
                            setSelectedCategory(cat);
                            setCatOpen(false);
                          }}
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Desktop Search */}
              <div className="flex w-2/5 bg-green-100 rounded-2xl overflow-visible relative z-10">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-3 py-2 outline-none z-50 relative text-gray-950"
                />
                <button className="px-3 bg-green-700 hover:bg-green-600 transition z-50 rounded-r-2xl">
                  <Search size={20} className="text-white" />
                </button>
              </div>

              {/* Promo Info */}
              <div className="flex space-x-6 text-sm text-white">
                <span>Free shipping over $199</span>
                <span>30 days money back</span>
                <span>100% secure payment</span>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Search Bar */}
        {showMobileSearch && (
          <div className="md:hidden w-full bg-green-200 p-2 border rounded-b-xl transition-all duration-300">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 rounded-md outline-none"
              />
              <button
                onClick={() => setShowMobileSearch(false)}
                className="p-2 bg-green-800 rounded-md text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-15 left-0 w-full bg-gray-100 dark:bg-gray-800 z-30 transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {/* Category in Mobile Menu */}
        <div className={`px-4 py-4 ${scrolled ? "mt-0" : "mt-7"}`}>
          <ul className="flex flex-col space-y-2">
            {/* NEW: Categories rendered just like Nav Items */}
            <li className="relative border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
              <button
                className="w-full flex justify-between items-center px-2 py-2 text-left font-bold text-green-600 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition"
                onClick={() => setCatOpen(!catOpen)}
              >
                <span>Shop by Category: {selectedCategory}</span>
                <ChevronDown size={18} className={`transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>

              {catOpen && (
                <ul className="pl-4 mt-1 flex flex-col space-y-1 animate-fadeIn">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        className={`w-full text-left px-2 py-2 rounded-md transition ${selectedCategory === cat
                          ? "bg-green-100 text-green-700 font-medium"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-200"
                          }`}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setCatOpen(false);
                        }}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Existing Nav Items (Home, Pages, etc.) */}
            {navItems.map((item, index) => (
              <li key={item.name} className="relative">
                <button
                  className="w-full flex justify-between items-center px-2 py-2 text-left hover:text-green-500 transition"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {item.name}
                  {item.sub && (
                    <ChevronDown size={16} className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                  )}
                </button>

                {item.sub && openIndex === index && (
                  <ul className="pl-4 mt-1 flex flex-col space-y-1 transition-all duration-300">
                    {item.sub.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className="block px-2 py-1 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                          onClick={() => setMobileOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;