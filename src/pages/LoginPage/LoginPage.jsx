import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform login logic here
    console.log(`
      Username: ${username}
      Password: ${password}
    `);
    
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log("Forgot password");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label className="input-label">
          Username:
          <input
            type="text"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className="input-label">
          Password:
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <div className="forgot-password-link" onClick={handleForgotPassword}>
          Forgot Password?
        </div>
        <br />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
