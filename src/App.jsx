import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Breadcrumbs from "./pages/Breadcrumb";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* 1. Global Navbar: Always visible */}
      <NavBar />

      {/* 2. Main content area 
          pt-40 for mobile, pt-52 for desktop 
          (This creates space for Topbar + Main Nav + Green Bar)
      */}
      <main className="pt-40 md:pt-52">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          
          {/* 3. Global Breadcrumbs: Show on every page except Home */}
          {!isHomePage && (
            <div className="p-6 rounded-lg bg-gray-50 border-b border-gray-200 dark:border-gray-800 mb-6">
              <Breadcrumbs />
            </div>
          )}

          {/* 4. The actual Page content */}
          <div className="min-h-[60vh]">
            {children}
          </div>
        </div>
      </main>
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
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;