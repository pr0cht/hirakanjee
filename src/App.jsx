import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import KanjiDrawingPad from './components/KanjiDrawingPad';
import './App.css';

// Page Components
function HomePage() {
  const [pingResponse, setPingResponse] = useState('');

  useEffect(() => {
    const func = async () => {
      const response = await window.versions.ping();
      setPingResponse(response);
    };
    func();
  }, []);

  return (
    <div className="page-content">
      <h1>Home</h1>
      <p>Welcome to Hirakanjee</p>
      {pingResponse && <p>Ping: {pingResponse}</p>}
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="page-content">
      <h1>Dashboard</h1>
      <p>Dashboard content goes here</p>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="page-content">
      <h1>Projects</h1>
      <p>Projects content goes here</p>
    </div>
  );
}

function FoldersPage() {
  return (
    <div className="page-content">
      <h1>Folders</h1>
      <p>Manage your folders here</p>
    </div>
  );
}

function ReportingPage() {
  return (
    <div className="page-content">
      <h1>Reporting</h1>
      <p>View your reports here</p>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="page-content">
      <h1>Settings</h1>
      <p>Configure your preferences here</p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/practice" element={<KanjiDrawingPad />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/folders" element={<FoldersPage />} />
            <Route path="/folders/view-all" element={<FoldersPage />} />
            <Route path="/folders/recent" element={<FoldersPage />} />
            <Route path="/folders/favorites" element={<FoldersPage />} />
            <Route path="/folders/shared" element={<FoldersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;