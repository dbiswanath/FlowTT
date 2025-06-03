
import React, { useState } from 'react';
import './index.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-page">
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <h2>Forgot Password</h2>
        {!submitted ? (
          <>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>
          </>
        ) : (
          <p className="confirmation">A password reset link has been sent to your email.</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
