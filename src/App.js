// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import BottomNav from './components/BottomNav.js';
import Dashboard from './Pages/Dashboard.js';
import Goals from './Pages/Goals.js';
import FinancialRecords from './Pages/FinancialRecords.js';
import DailyGoals from './Pages/DailyGoals.js';
import FinancialGoals from './Pages/FinancialGoals.js';
import StudyGoals from './Pages/StudyGoals.js';
import ProjectGoalsDashboard from './Pages/ProjectGoalsDashboard.js';
import Expenses from './Pages/Expenses.js';
import Income from './Pages/Income.js';
import Savings from './Pages/Savings.js';
import About from './Pages/About.js';
import Projects from './Pages/Projects.js';
import Settings from './Pages/Settings.js';
import NotFound from './Pages/NotFound.js';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        <div className="flex flex-grow">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-grow p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/goals/daily" element={<DailyGoals />} />
              <Route path="/goals/financial" element={<FinancialGoals />} />
              <Route path="/goals/study" element={<StudyGoals />} />
              <Route path="/goals/project" element={<ProjectGoalsDashboard />} />
              <Route path="/financial-records" element={<FinancialRecords />} />
              <Route path="/financial-records/expenses" element={<Expenses />} />
              <Route path="/financial-records/income" element={<Income />} />
              <Route path="/financial-records/savings" element={<Savings />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>

        {/* Bottom Navigation for Mobile */}
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
