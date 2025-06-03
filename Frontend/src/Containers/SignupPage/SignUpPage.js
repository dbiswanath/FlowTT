import React, { Component } from 'react';
import './signup.css';  
import logo from '../SignupPage/images/logo.png';
import video1 from '../SignupPage/images/video1.mp4';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  }

  handleSignUp = () => {
    const { name, email, password, confirmPassword } = this.state;

    // Basic validation for password match
    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match!' });
      return;
    }

    // Simple check to ensure all fields are filled
    if (name && email && password) {
      alert('Account created successfully!');
      this.setState({ name: '', email: '', password: '', confirmPassword: '', error: '' });
    } else {
      this.setState({ error: 'Please fill in all fields!' });
    }
  };

  render() {
    const { name, email, password, confirmPassword, error } = this.state;

    return (
      <div>
              <header>
                  <div className="signup_logo">
                    <img src={logo} className="logo" alt="Logo" />
                  </div>
                </header>
                <div className="signup_body">
                          <video src={video1} autoPlay loop muted className="signup_video" />
                        </div>
      
      <div className="signup-container">
        
        <div className="signup-header">
          <h2>Create an Account</h2>
        </div>

        <div className="signup-form">
          {error && <div className="error-message">{error}</div>}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
            className="signup-input"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
            className="signup-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
            className="signup-input"
          />
          <button className="signup-button" onClick={this.handleSignUp}>Sign Up</button>
        </div>

        <div className="login-link">
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </div>
      </div>
    );
  }
}

export default SignUpPage;
