import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ONE_DAY } from "../utils/auth";

export default function Logout({ handleLogout }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const startLogout = () => setFadeOut(true);

  useEffect(() => {
    const loginTime = localStorage.getItem("loginTime");
    if (loginTime && Date.now() - Number(loginTime) > ONE_DAY) startLogout();

    const interval = setInterval(() => {
      if (loginTime && Date.now() - Number(loginTime) > ONE_DAY) startLogout();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        handleLogout();
        setLoggedOut(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, handleLogout]);

  if (loggedOut) return <Navigate to="/login" />;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity duration-500"
         style={{ opacity: fadeOut ? 0 : 1 }}>
      <div
        className="bg-rose-100 text-rose-900 p-8 rounded-3xl shadow-xl w-full max-w-md text-center transition-transform duration-500"
        style={{ transform: fadeOut ? "scale(0.8)" : "scale(1)" }}
      >
        <h1 className="text-3xl font-bold mb-4">
          {fadeOut ? "Session Expired!" : "Al Bida Princess!"}
        </h1>
        <p className="mb-6 text-lg">
          {fadeOut ? "Your session has expired. Logging out..." : "Hey, it was great spending time. Take care yourself"}
        </p>
        {!fadeOut && (
          <button
            onClick={startLogout}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-300"
          >
            Goodbye
          </button>
        )}
      </div>
    </div>
  );
}
