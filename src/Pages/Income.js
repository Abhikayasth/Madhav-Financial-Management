// src/pages/Income.js
import React, { useState } from 'react';

function Income() {
  const [incomeSources, setIncomeSources] = useState([]); // State to store income sources
  const [income, setIncome] = useState(''); // State to store the current income input
  const [editingIndex, setEditingIndex] = useState(null); // State to track which income source is being edited
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Function to add or update an income source
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update existing income source
      const updatedIncomeSources = incomeSources.map((i, index) => (index === editingIndex ? income : i));
      setIncomeSources(updatedIncomeSources);
      setEditingIndex(null); // Reset editing index
    } else {
      // Add new income source
      if (income.trim() !== '') {
        setIncomeSources([...incomeSources, income]);
      }
    }
    setIncome(''); // Clear the input field
  };

  // Function to handle editing an income source
  const handleEdit = (index) => {
    setIncome(incomeSources[index]);
    setEditingIndex(index); // Set the index of the income source to be edited
  };

  // Function to delete an income source
  const handleDelete = (index) => {
    const updatedIncomeSources = incomeSources.filter((_, i) => i !== index);
    setIncomeSources(updatedIncomeSources);
  };

  // Function to filter income sources based on search term
  const filteredIncomeSources = incomeSources.filter((i) => {
    const incomeLowerCase = i.toLowerCase();
    const searchLowerCase = searchTerm.toLowerCase();
    return incomeLowerCase.includes(searchLowerCase);
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg mt-4">
      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search income sources..."
        className="border border-gray-300 p-2 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Form to Add/Update Income Sources */}
      <form onSubmit={handleSubmit} className="flex flex-col mb-4">
        <input
          type="text"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter your income source"
          className="border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white p-2 rounded transition duration-200 hover:bg-blue-500"
        >
          {editingIndex !== null ? 'Update Income Source' : 'Add Income Source'}
        </button>
      </form>

      {/* Income Source List */}
      <ul className="list-disc pl-5">
        {filteredIncomeSources.length === 0 ? (
          <li className="text-gray-500">No income sources found. Please try a different search.</li>
        ) : (
          filteredIncomeSources.map((i, index) => (
            <li key={index} className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded">
              <span className="text-gray-700">{i}</span>
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

export default Income;
