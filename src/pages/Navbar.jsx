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
      { name: "About Us", path: "/pages/aboutus" },
      { name: "Log in", path: "/pages/login" },
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
  const searchInputRef = useRef(null); // Ref for auto-focusing search

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

  // NEW: Logic to open search and focus input
  const handleMobileSearchToggle = () => {
    setShowMobileSearch(!showMobileSearch);
    if (!showMobileSearch) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <nav className="w-full z-50">
      {/* Topbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#F1DC67] dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 z-50 transition-transform duration-300 ${hideTopbar ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-row justify-between items-center gap-2 sm:gap-0">

          {/* Left Side: Contact Info - Responsive text size */}
          <div className="flex space-x-3 sm:space-x-4 text-[9px] xs:text-xs md:text-sm font-medium">
            <span>Hotline 24/7</span>
            <span className="font-bold">(025) 28862516</span>
          </div>

          {/* Right Side: Links & Selectors */}
          <div className="flex items-center space-x-3 sm:space-x-2 text-[10px] xs:text-xs md:text-sm">
            <a href="#" className="hover:text-green-600 transition whitespace-nowrap">Sell On Swoo</a>

            {/* Hidden on very small screens to save space, visible from 'sm' upwards */}
            <a href="#" className=" hover:text-green-600 transition whitespace-nowrap">Order Track</a>

            {/* Currency & Language - Your original logic: Only on Desktop (md) */}
            <div className="flex items-center pag-1 md:gap-4 border-l border-gray-400/30 pl-1 md:pl-4">
              <div className="group flex items-center gap-1 cursor-pointer transition-colors hover:text-green-600">
                <span className="font-semibold tracking-wide">USD</span>
                <ChevronDown size={14} className="text-gray-400 transition-transform group-hover:rotate-180 group-hover:text-green-600" />
              </div>

              <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600"></div>

              <div className="group flex items-center gap-2 cursor-pointer transition-colors hover:text-green-600">
                <div className="flex items-center justify-center w-5 h-5 overflow-hidden rounded-full border border-gray-200 shadow-sm">
                  <Flag size={14} className="text-gray-600 group-hover:text-green-600" />
                </div>
                <span className="font-semibold tracking-wide uppercase">Eng</span>
                <ChevronDown size={14} className="text-gray-400 transition-transform group-hover:rotate-180 group-hover:text-green-600" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 bg-gray-100 dark:bg-gray-800 w-full z-40 fixed top-0 shadow-xl ${!scrolled ? "xs:mt-10 mt-8" : "mt-0"
          }`}
      >
        <div className="md:max-w-[1400px] px-6 md:px-0 mx-auto flex justify-between items-center h-16 transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 no-underline">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-green-500/20">
              <span className="text-white font-black text-2xl tracking-tighter">S</span>
              <div className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-white border-2 border-green-500"></div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-black tracking-tight transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"} bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent dark:from-green-400 dark:to-green-300`}>
                SWOO
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">Tech Mart</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 items-center h-full">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <Link to={item.path} className="flex items-center hover:text-green-500 transition h-full px-2 py-1">
                  {item.name} {item.sub && <ChevronDown size={16} className="ml-1" />}
                </Link>
                {item.sub && openIndex === index && (
                  <ul className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-md min-w-[180px] z-50">
                    {item.sub.map((subItem) => (
                      <li key={subItem.name}><Link to={subItem.path} className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600">{subItem.name}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4 h-full">
            <span className="border rounded-full p-2 bg-gray-300 dark:bg-gray-700"><Heart size={20} className="text-red-500" /></span>
            <span className="border rounded-full p-2 bg-gray-300 dark:bg-gray-700"><DollarSign size={20} /></span>
            <span className="border rounded-full p-2 bg-gray-300 dark:bg-gray-700 flex items-center">
              <ShoppingCart size={20} />
              <p className="ml-1 text-sm font-medium">0</p>
            </span>
            <div className="flex flex-col items-end justify-center h-full px-2">
              <span className="text-sm">WELCOME</span>
              <Link to="Pages/login" className="text-green-500 text-sm font-semibold hover:underline">LOG IN / REGISTER</Link>
            </div>
          </div>
          <div className="md:hidden flex space-x-1.5">
            <span className="border rounded-full p-2 bg-gray-300 dark:bg-gray-700"><Heart size={14} className="text-red-500" /></span>
            <span className="border rounded-full p-1 bg-gray-300 dark:bg-gray-700 flex items-center">
              <ShoppingCart size={14} />
              <p className="ml-1 text-sm font-medium">0</p>
            </span></div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2 md:hidden">
            <button onClick={handleMobileSearchToggle} className="p-2 bg-green-600 rounded-md text-white">
              <Search size={20} />
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-800 dark:text-gray-100 p-2">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search & Category Section (Triggers on Search Click) */}
        {showMobileSearch && (
          <div className="md:hidden w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-3 shadow-inner">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Category Selector inside Search */}
                <button
                  onClick={() => setCatOpen(!catOpen)}
                  className="bg-green-600 text-white px-3 py-2 text-xs font-bold flex items-center gap-1"
                >
                  {selectedCategory.split(' ')[0]} <ChevronDown size={14} />
                </button>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 px-2 py-2 bg-transparent text-sm outline-none dark:text-white"
                />
                <button className="px-3 text-gray-400"><Search size={16} /></button>
              </div>

              {/* Mobile Category Dropdown List */}
              {catOpen && (
                <div className="grid grid-cols-2 gap-2 mt-2 animate-fadeIn">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`text-[11px] p-2 text-left rounded-md border ${selectedCategory === cat ? 'bg-green-100 border-green-500 text-green-700 font-bold' : 'bg-gray-50 dark:bg-gray-800 border-transparent text-gray-600 dark:text-gray-300'}`}
                      onClick={() => { setSelectedCategory(cat); setCatOpen(false); }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Desktop Category & Search Bar */}
        {(!scrolled || scrollingUp) && (
          <div className="hidden md:block w-full bg-[#1ABA1A] text-white p-4 transition-all duration-300">
            <div className="flex items-center justify-between max-w-[1400px] mx-auto">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Category:</span>
                <div className="relative">
                  <button onClick={() => setCatOpen(!catOpen)} className="px-3 py-2 bg-white text-gray-800 rounded-md flex items-center justify-between w-40">
                    {selectedCategory} <ChevronDown size={16} />
                  </button>
                  {catOpen && (
                    <ul className="absolute top-full left-0 mt-1 bg-white border rounded-md shadow-md w-40 z-50">
                      {categories.map((cat) => (
                        <li key={cat} className="px-3 py-2 hover:bg-gray-200 cursor-pointer text-gray-800" onClick={() => { setSelectedCategory(cat); setCatOpen(false); }}>{cat}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="flex w-2/5 bg-green-100 rounded-2xl overflow-hidden">
                <input type="text" placeholder="Search products..." className="w-full px-3 py-2 outline-none text-gray-950" />
                <button className="px-3 bg-green-700 rounded-r-2xl"><Search size={20} className="text-white" /></button>
              </div>
              <div className="flex space-x-6 text-sm">
                <span>Free shipping over $199</span>
                <span>30 days money back</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE SIDEBAR MENU (Side Drawer) */}
      <div className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={`absolute left-0 top-0 h-full w-[280px] bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-5 flex justify-between items-center border-b border-gray-100 dark:border-gray-800 bg-green-600 text-white">
            <span className="font-bold">SWOO MENU</span>
            <X size={24} onClick={() => setMobileOpen(false)} />
          </div>
          <div className="py-4 px-2 overflow-y-auto h-full">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.name} className="flex flex-col">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-800 rounded-lg transition"
                  >
                    {item.name}
                    {item.sub && <ChevronDown size={18} className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />}
                  </button>
                  {item.sub && openIndex === index && (
                    <ul className="pl-6 bg-gray-50 dark:bg-gray-800/50 py-2 space-y-2 rounded-lg">
                      {item.sub.map((subItem) => (
                        <li key={subItem.name}>
                          <Link to={subItem.path} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-600 dark:text-gray-400">
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 px-4 space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300"><DollarSign size={20} /> </div>
              <Link to="/login" className="block text-center w-full py-3 bg-green-600 text-white font-bold rounded-xl" onClick={() => setMobileOpen(false)}>LOG IN / REGISTER</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;