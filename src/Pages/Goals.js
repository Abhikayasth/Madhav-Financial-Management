// src/pages/Goals.js
import React, { useState } from 'react';

function Goals() {
  const [goals] = useState([]);
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Goals</h1>
      {/* Goal Form */}
      <form className="space-y-4 mb-6">
        <input type="text" placeholder="Goal Description" className="p-2 border border-gray-300 rounded w-full" />
        {/* Additional form inputs for category, progress, etc. */}
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Goal</button>
      </form>
      {/* Goals List */}
      <div>
        {goals.map((goal, index) => (
          <div key={index} className="bg-white p-4 mb-2 rounded shadow-md flex justify-between">
            <p>{goal.description}</p>
            <button className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
