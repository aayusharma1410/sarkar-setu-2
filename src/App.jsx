import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import SchemesPage from './components/SchemesPage';
import ChallanPage from './components/ChallanPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (username) => {
        setLoggedInUser(username);
    };

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    return (
        <Router>
            <div className="app-container">
                <header className="app-header">
                    <div className="logo">
                        <Link to="/">SarkarSetu</Link>
                    </div>
                    <nav className="app-nav">
                        <ul className="nav-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/schemes">Schemes</Link>
                            </li>
                            <li>
                                <Link to="/challan">Challan Verification</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            {loggedInUser ? (
                                <>
                                    <li>
                                        <span className="username">Welcome, {loggedInUser}</span>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout} className="logout-button">Logout</button>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </header>

                <main className="app-main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/schemes" element={<SchemesPage />} />
                        <Route path="/challan" element={<ChallanPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    </Routes>
                </main>

                <footer className="app-footer">
                    <p>&copy; 2024 SarkarSetu. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
