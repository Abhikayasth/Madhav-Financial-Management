// src/Pages/NotFound.js
import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <a href="/" className="text-blue-500 mt-6 hover:underline">
        Go back to Home
      </a>
    </div>
  );
}

export default NotFound;
