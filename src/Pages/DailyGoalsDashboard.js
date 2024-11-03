// src/pages/DailyGoalsDashboard.js
import React, { useState } from 'react';

function DailyGoalsDashboard() {
  const initialGoals = [
    { id: 1, title: 'Exercise for 30 mins', completed: false },
    { id: 2, title: 'Read 20 pages of a book', completed: false },
    { id: 3, title: 'Finish work project tasks', completed: false },
    { id: 4, title: 'Meditate for 10 mins', completed: false },
    { id: 5, title: 'Plan meals for the week', completed: false },
  ];

  const [goals, setGoals] = useState(initialGoals);
  const [editingGoal, setEditingGoal] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  
  const completedGoals = goals.filter(goal => goal.completed);
  const remainingGoals = goals.filter(goal => !goal.completed);
  
  const [showTotal, setShowTotal] = useState(true);
  const [showRemaining, setShowRemaining] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const markGoalAsDone = (goalId) => {
    setGoals(goals.map(goal =>
      goal.id === goalId ? { ...goal, completed: true } : goal
    ));
  };

  const updateGoalTitle = (goalId) => {
    setGoals(goals.map(goal =>
      goal.id === goalId ? { ...goal, title: newTitle } : goal
    ));
    setEditingGoal(null);
    setNewTitle("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4 md:p-6">

      {/* Header */}
      <header className="bg-white shadow-md p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-blue-700">Daily Goals Dashboard</h2>
        <p className="text-gray-600">Track your daily progress effectively</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
        <div onClick={() => setShowTotal(!showTotal)} className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg cursor-pointer">
          <h3 className="text-lg font-semibold">Total Goals Set for Today</h3>
          <p className="text-2xl font-bold">{goals.length}</p>
        </div>
        <div onClick={() => setShowRemaining(!showRemaining)} className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg cursor-pointer">
          <h3 className="text-lg font-semibold">Remaining Goals</h3>
          <p className="text-2xl font-bold">{remainingGoals.length}</p>
        </div>
        <div onClick={() => setShowCompleted(!showCompleted)} className="bg-green-500 text-white p-4 rounded-lg shadow-lg cursor-pointer">
          <h3 className="text-lg font-semibold">Completed Goals</h3>
          <p className="text-2xl font-bold">{completedGoals.length}</p>
        </div>
      </div>

      {/* Total Goals List */}
      {showTotal && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">All Goals</h3>
          <ul className="space-y-4">
            {goals.map(goal => (
              <li key={goal.id} className="flex items-center space-x-4">
                <span className={`inline-block w-3 h-3 rounded-full ${goal.completed ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                
                {editingGoal === goal.id ? (
                  <>
                    <input
                      type="text"
                      className="flex-1 border border-gray-300 p-1 rounded focus:outline-none"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
                      onClick={() => updateGoalTitle(goal.id)}
                    >
                      Save Changes
                    </button>
                  </>
                ) : (
                  <>
                    <p className={`flex-1 ${goal.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {goal.title}
                    </p>
                    {!goal.completed && (
                      <>
                        <button
                          className="text-blue-500 hover:underline"
                          onClick={() => { setEditingGoal(goal.id); setNewTitle(goal.title); }}
                        >
                          Update
                        </button>
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => markGoalAsDone(goal.id)}
                        >
                          Complete
                        </button>
                      </>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Completed Goals List */}
      {showCompleted && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Completed Goals</h3>
          <ul className="space-y-4">
            {completedGoals.length > 0 ? (
              completedGoals.map(goal => (
                <li key={goal.id} className="flex items-center space-x-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                  <p className="flex-1 text-gray-800 line-through">{goal.title}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No goals completed yet.</p>
            )}
          </ul>
        </div>
      )}

      {/* Remaining Goals List */}
      {showRemaining && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Remaining Goals</h3>
          <ul className="space-y-4">
            {remainingGoals.length > 0 ? (
              remainingGoals.map(goal => (
                <li key={goal.id} className="flex items-center space-x-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
                  <p className="flex-1 text-gray-800">{goal.title}</p>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => markGoalAsDone(goal.id)}
                  >
                    Complete
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500">All goals completed!</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DailyGoalsDashboard;
