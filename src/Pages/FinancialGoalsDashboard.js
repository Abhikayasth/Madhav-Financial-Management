// src/pages/FinancialGoalsDashboard.js
import React, { useState } from 'react';

function FinancialGoalsDashboard() {
  const initialGoals = [
    { id: 1, title: 'Save for a new car', amount: 5000, completed: false },
    { id: 2, title: 'Build an emergency fund', amount: 3000, completed: false },
    { id: 3, title: 'Invest in stocks', amount: 2000, completed: false },
    { id: 4, title: 'Pay off credit card debt', amount: 1500, completed: false },
    { id: 5, title: 'Save for vacation', amount: 2500, completed: false },
  ];

  const [goals, setGoals] = useState(initialGoals);
  const [editingGoal, setEditingGoal] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const completedGoals = goals.filter(goal => goal.completed);
  const remainingGoals = goals.filter(goal => !goal.completed);

  const markGoalAsDone = (goalId) => {
    setGoals(goals.map(goal =>
      goal.id === goalId ? { ...goal, completed: true } : goal
    ));
  };

  const updateGoal = (goalId) => {
    setGoals(goals.map(goal =>
      goal.id === goalId ? { ...goal, title: newTitle, amount: parseFloat(newAmount) } : goal
    ));
    setEditingGoal(null);
    setNewTitle("");
    setNewAmount("");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        {/* Header */}
        <header className="bg-white shadow-md p-4 rounded-lg mb-4 md:mb-6 animate-fadeIn">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700">Financial Goals Dashboard</h2>
          <p className="text-gray-600">Monitor your financial goals and milestones here.</p>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 md:mb-6">
          <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-200 ease-in-out">
            <h3 className="text-lg font-semibold">Total Financial Goals</h3>
            <p className="text-2xl font-bold">{goals.length}</p>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-200 ease-in-out">
            <h3 className="text-lg font-semibold">Remaining Goals</h3>
            <p className="text-2xl font-bold">{remainingGoals.length}</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition duration-200 ease-in-out">
            <h3 className="text-lg font-semibold">Completed Goals</h3>
            <p className="text-2xl font-bold">{completedGoals.length}</p>
          </div>
        </div>

        {/* Remaining Goals List */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4 md:mb-6 animate-fadeIn">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Remaining Financial Goals</h3>
          <ul className="space-y-4">
            {remainingGoals.map(goal => (
              <li key={goal.id} className="flex items-center space-x-4">
                <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
                {editingGoal === goal.id ? (
                  <>
                    <input
                      type="text"
                      className="flex-1 border border-gray-300 p-1 rounded focus:outline-none"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Goal Title"
                    />
                    <input
                      type="number"
                      className="border border-gray-300 p-1 rounded focus:outline-none"
                      value={newAmount}
                      onChange={(e) => setNewAmount(e.target.value)}
                      placeholder="Goal Amount"
                    />
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
                      onClick={() => updateGoal(goal.id)}
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <>
                    <p className="flex-1 text-gray-800">{goal.title} - ${goal.amount}</p>
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => { setEditingGoal(goal.id); setNewTitle(goal.title); setNewAmount(goal.amount); }}
                    >
                      Update
                    </button>
                    <button
                      className="text-green-500 hover:underline ml-2"
                      onClick={() => markGoalAsDone(goal.id)}
                    >
                      Done
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Completed Goals List */}
        <div className="bg-green-100 p-4 rounded-lg shadow-lg mb-4 md:mb-6 animate-fadeIn">
          <h3 className="text-lg font-semibold text-green-700 mb-4">Completed Financial Goals</h3>
          <ul className="space-y-4">
            {completedGoals.map(goal => (
              <li key={goal.id} className="flex items-center space-x-4">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                <p className="flex-1 line-through text-gray-500">{goal.title} - ${goal.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FinancialGoalsDashboard;
