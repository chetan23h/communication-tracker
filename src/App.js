import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import AdminPage from './views/AdminPage';
import UserPage from './views/UserPage';
import ReportPage from './views/ReportPage';
import Home from './views/Home'; // Import Home.js
import './app.css';

const App = () => (
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
        <Route path="/" element={<Home />} /> {/* Home component renders directly */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/reports" element={<ReportPage />} />
      </Routes>
    </main>
    <footer className="footer">
      <p>© 2024 Communication Tracker App. All rights reserved.</p>
    </footer>
  </div>
);

const Wrapper = () => (
  <Router>
    <App />
  </Router>
);

export default Wrapper;
