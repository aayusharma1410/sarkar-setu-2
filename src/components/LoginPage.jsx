import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle the login logic,
        // such as sending the username and password to an authentication server.
        // For this example, we'll just simulate a successful login.
        if (username && password) {
            onLogin(username); // Call the onLogin function passed from App
            navigate('/'); // Redirect to the home page after login
        } else {
            alert('Please enter both username and password.');
        }
    };

    return (
        <div className="login-container">
            <h1>Login to SarkarSetu</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="login-input"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                </label>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
