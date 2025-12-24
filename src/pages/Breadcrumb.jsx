import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
      <Link to="/" className="flex items-center hover:text-green-600 transition-colors">
        <Home size={16} className="mr-1" />
        <span>Home</span>
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={to} className="flex items-center space-x-2">
            <ChevronRight size={14} className="text-gray-400" />
            {isLast ? (
              <span className="font-semibold text-green-600 capitalize">
                {value.replace(/-/g, " ")}
              </span>
            ) : (
              <Link to={to} className="hover:text-green-600 transition-colors capitalize">
                {value.replace(/-/g, " ")}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;