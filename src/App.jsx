import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Breadcrumbs from "./pages/Breadcrumb";
import Mobiles from "./pages/Mobiles";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* 1. Global Navbar: Handles Topbar, Main Nav, and Category Bar */}
      <NavBar />

      {/* 2. Main content area 
        - pt-32: Basic mobile padding (Topbar + Main Nav)
        - md:pt-48: Desktop padding when Topbar and Green Bar are visible
        - transition-all: Smoothly shifts content when Navbar height changes on scroll
      */}
      <main className="pt-32 md:pt-48 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          
          {/* 3. Global Breadcrumbs: Responsive container */}
          {!isHomePage && (
            <div className="py-4 md:py-6 mb-6">
              <div className="p-4 md:p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm">
                <Breadcrumbs />
              </div>
            </div>
          )}

          {/* 4. Page Content: Ensures footer stays at bottom if content is short */}
          <div className="min-h-[70vh]">
            {children}
          </div>
        </div>
      </main>
      
      {/* Optional: Add Footer component here */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/aboutus" element={<AboutUs />} />
          <Route path="/products/mobiles" element={<Mobiles />} />
          {/* Catch-all for 404s can be added here */}
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;