import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation } from 'react-router-dom';
import AdminPage from './views/AdminPage';
import UserPage from './views/UserPage';
import ReportPage from './views/ReportPage';
import './app.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <nav className="navbar">
        <NavLink to="/" className="nav-link" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/admin" className="nav-link" activeClassName="active">
          Admin
        </NavLink>
        <NavLink to="/user" className="nav-link" activeClassName="active">
          User
        </NavLink>
        <NavLink to="/reports" className="nav-link" activeClassName="active">
          Reports
        </NavLink>
      </nav>

      <main>
        <h1 className="welcome-title">Welcome to the Communication Tracker App!</h1>
        <Routes>
          <Route path="/" element={<p>Track and manage your communication effectively.</p>} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Routes>
      </main>

      {location.pathname === '/' && (
        <img
          src="https://plus.unsplash.com/premium_photo-1661589119272-31a4cabb6572?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Communication Illustration"
          className="welcome-image"
        />
      )}

      <footer className="footer">
        <p>© 2024 Communication Tracker App. All rights reserved.</p>
      </footer>
    </div>
  );
};

const Wrapper = () => (
  <Router>
    <App />
  </Router>
);

export default Wrapper;
