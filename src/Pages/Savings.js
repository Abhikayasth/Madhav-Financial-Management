// src/pages/Savings.js
import React, { useState } from 'react';

function Savings() {
  const [savingsGoals, setSavingsGoals] = useState([]); // State to store savings goals
  const [goal, setGoal] = useState(''); // State to store the current goal input
  const [editingIndex, setEditingIndex] = useState(null); // State to track which goal is being edited
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Function to add or update a savings goal
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update existing goal
      const updatedSavingsGoals = savingsGoals.map((g, index) => (index === editingIndex ? goal : g));
      setSavingsGoals(updatedSavingsGoals);
      setEditingIndex(null); // Reset editing index
    } else {
      // Add new goal
      if (goal.trim() !== '') {
        setSavingsGoals([...savingsGoals, goal]);
      }
    }
    setGoal(''); // Clear the input field
  };

  // Function to handle editing a savings goal
  const handleEdit = (index) => {
    setGoal(savingsGoals[index]);
    setEditingIndex(index); // Set the index of the goal to be edited
  };

  // Function to delete a savings goal
  const handleDelete = (index) => {
    const updatedSavingsGoals = savingsGoals.filter((_, i) => i !== index);
    setSavingsGoals(updatedSavingsGoals);
  };

  // Function to filter savings goals based on search term
  const filteredSavingsGoals = savingsGoals.filter((g) => {
    const goalLowerCase = g.toLowerCase();
    const searchLowerCase = searchTerm.toLowerCase();
    return goalLowerCase.includes(searchLowerCase);
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg mt-4">
      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search savings goals..."
        className="border border-gray-300 p-2 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Form to Add/Update Savings Goals */}
      <form onSubmit={handleSubmit} className="flex flex-col mb-4">
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your savings goal"
          className="border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white p-2 rounded transition duration-200 hover:bg-blue-500"
        >
          {editingIndex !== null ? 'Update Goal' : 'Add Goal'}
        </button>
      </form>

      {/* Savings Goals List */}
      <ul className="list-disc pl-5">
        {filteredSavingsGoals.length === 0 ? (
          <li className="text-gray-500">No savings goals found. Please try a different search.</li>
        ) : (
          filteredSavingsGoals.map((g, index) => (
            <li key={index} className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded">
              <span className="text-gray-700">{g}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white p-1 rounded transition duration-200 hover:bg-yellow-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white p-1 rounded transition duration-200 hover:bg-red-400"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Savings;
