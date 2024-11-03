// src/pages/FinancialGoals.js
import React, { useState } from 'react';

function FinancialGoals() {
  const [financialGoals, setFinancialGoals] = useState([]); // State to store financial goals
  const [goal, setGoal] = useState(''); // State to store the current goal input
  const [editingIndex, setEditingIndex] = useState(null); // State to track which goal is being edited
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Function to add or update a financial goal
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update existing goal
      const updatedGoals = financialGoals.map((g, index) => (index === editingIndex ? goal : g));
      setFinancialGoals(updatedGoals);
      setEditingIndex(null); // Reset editing index
    } else {
      // Add new goal
      if (goal.trim() !== '') {
        setFinancialGoals([...financialGoals, goal]);
      }
    }
    setGoal(''); // Clear the input field
  };

  // Function to handle editing a financial goal
  const handleEdit = (index) => {
    setGoal(financialGoals[index]);
    setEditingIndex(index); // Set the index of the goal to be edited
  };

  // Function to delete a financial goal
  const handleDelete = (index) => {
    const updatedGoals = financialGoals.filter((_, i) => i !== index);
    setFinancialGoals(updatedGoals);
  };

  // Function to filter financial goals based on search term
  const filteredGoals = financialGoals.filter((g) => {
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
        placeholder="Search financial goals..."
        className="border border-gray-300 p-2 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Form to Add/Update Financial Goals */}
      <form onSubmit={handleSubmit} className="flex flex-col mb-4">
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your financial goal"
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

      {/* Financial Goal List */}
      <ul className="list-disc pl-5">
        {filteredGoals.length === 0 ? (
          <li className="text-gray-500">No goals found. Please try a different search.</li>
        ) : (
          filteredGoals.map((g, index) => (
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

export default FinancialGoals;
