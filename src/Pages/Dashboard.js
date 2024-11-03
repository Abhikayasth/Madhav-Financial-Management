// src/pages/Dashboard.js
import React, { useState } from 'react';

// Import individual dashboard components (placeholder components to be created separately)
import DailyGoalsDashboard from './DailyGoalsDashboard';
import FinancialGoalsDashboard from './FinancialGoalsDashboard';
import StudyGoalsDashboard from './StudyGoalsDashboard';
import ProjectGoalsDashboard from './ProjectGoalsDashboard';

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to render the selected dashboard based on category
  const renderDashboard = () => {
    switch (selectedCategory) {
      case 'daily':
        return <DailyGoalsDashboard />;
      case 'financial':
        return <FinancialGoalsDashboard />;
      case 'study':
        return <StudyGoalsDashboard />;
      case 'project':
        return <ProjectGoalsDashboard />;
      default:
        return (
          <div className="text-center text-gray-600">
            <p>Select a category to view the respective dashboard.</p>
          </div>
        );
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-teal-800 mb-6 text-center">Goal Categories</h1>
      
      {/* Category Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <button
          onClick={() => setSelectedCategory('daily')}
          className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
            selectedCategory === 'daily' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
          }`}
        >
          Daily Goals
        </button>
        <button
          onClick={() => setSelectedCategory('financial')}
          className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
            selectedCategory === 'financial' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
          }`}
        >
          Financial Goals
        </button>
        <button
          onClick={() => setSelectedCategory('study')}
          className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
            selectedCategory === 'study' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
          }`}
        >
          Study Goals
        </button>
        <button
          onClick={() => setSelectedCategory('project')}
          className={`p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
            selectedCategory === 'project' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
          }`}
        >
          Project Goals
        </button>
      </div>

      {/* Render the selected dashboard */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {renderDashboard()}
      </div>
    </div>
  );
}

export default Dashboard;
