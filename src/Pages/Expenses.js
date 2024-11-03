// src/pages/Expenses.js
import React, { useState } from 'react';

function Expenses() {
  const [expenses, setExpenses] = useState([]); // State to store expenses
  const [expense, setExpense] = useState(''); // State to store the current expense input
  const [editingIndex, setEditingIndex] = useState(null); // State to track which expense is being edited
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Function to add or update an expense
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update existing expense
      const updatedExpenses = expenses.map((e, index) => (index === editingIndex ? expense : e));
      setExpenses(updatedExpenses);
      setEditingIndex(null); // Reset editing index
    } else {
      // Add new expense
      if (expense.trim() !== '') {
        setExpenses([...expenses, expense]);
      }
    }
    setExpense(''); // Clear the input field
  };

  // Function to handle editing an expense
  const handleEdit = (index) => {
    setExpense(expenses[index]);
    setEditingIndex(index); // Set the index of the expense to be edited
  };

  // Function to delete an expense
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  // Function to filter expenses based on search term
  const filteredExpenses = expenses.filter((e) => {
    const expenseLowerCase = e.toLowerCase();
    const searchLowerCase = searchTerm.toLowerCase();
    return expenseLowerCase.includes(searchLowerCase);
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg mt-4">
      {/* Search Bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search expenses..."
        className="border border-gray-300 p-2 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Form to Add/Update Expenses */}
      <form onSubmit={handleSubmit} className="flex flex-col mb-4">
        <input
          type="text"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          placeholder="Enter your expense"
          className="border border-gray-300 p-2 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white p-2 rounded transition duration-200 hover:bg-blue-500"
        >
          {editingIndex !== null ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>

      {/* Expense List */}
      <ul className="list-disc pl-5">
        {filteredExpenses.length === 0 ? (
          <li className="text-gray-500">No expenses found. Please try a different search.</li>
        ) : (
          filteredExpenses.map((e, index) => (
            <li key={index} className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded">
              <span className="text-gray-700">{e}</span>
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

export default Expenses;
