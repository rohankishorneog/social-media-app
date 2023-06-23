import React, { useState } from 'react';
import './SignUpPage.css'; // Import the CSS file

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup logic here
    console.log(`
      First Name: ${firstName}
      Last Name: ${lastName}
      Username: ${username}
      Password: ${password}
      Confirm Password: ${confirmPassword}
      Accept Terms: ${acceptTerms}
    `);

    // Reset form fields
    setFirstName('');
    setLastName('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setAcceptTerms(false);
  };

  const handleAcceptTermsChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  return (
    <div className="signup-container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="input-label">
          First Name:
          <input
            type="text"
            className="input-field"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label className="input-label">
          Last Name:
          <input
            type="text"
            className="input-field"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
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
        <label className="input-label">
          Confirm Password:
          <input
            type="password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <label className="input-label">
          <input
            type="checkbox"
            className="terms-checkbox"
            checked={acceptTerms}
            onChange={handleAcceptTermsChange}
          />
          I accept the terms and conditions
        </label>
        <br />
        <button type="submit" className="signup-button">Create New Account</button>
      </form>
      <div className="existing-account-text">Already have an account?</div>
    </div>
  );
}

export default SignUpPage;
