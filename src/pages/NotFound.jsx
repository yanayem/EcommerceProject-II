import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-rose-200 gap-4">
      <h1 className="text-5xl md:text-7xl font-semibold text-red-500">ERROR  🙉 </h1>
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-xl text-pink-700">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        Go Home
      </button>
    </div>
  );
}
