import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../Admin/AuthContext/AuthContext';
import Spinner from '../Spinner/Spinner';
import video1 from '../LoginPage/images/video1.mp4';
import logo from '../LoginPage/images/logo.png';
import './loginpage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = login(email, password);

    if (success) {
      setLoading(false);
      if (email === 'admin@example.com') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    } else {
      setLoading(false);
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div>
      {loading && <Spinner />}

      <header>
        <div className="loginpage_logo">
          <img src={logo} className="logo" alt="Logo" />
        </div>
      </header>

      <div className="login">
        <header className="sign">Sign In</header>
        <form className="loginpage_main" onSubmit={handleSubmit}>
          <input
            className="loginpage_email"
            type="text"
            name="email"
            placeholder="Email or Mobile Number"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(''); }}
          />
          <input
            className="loginpage_pass"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(''); }}
          />
          <button className="loginpage_button" type="submit">
            Sign In
          </button>

          {error && <div className="error-message">{error}</div>}

          <p className="or">OR</p>
          <button className="btns" type="button">Use a Sign-in Code</button>
          <p className="forgot">
            <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
          </p>

          <div className="check">
            <input type="checkbox" className="checks" name="remember" />
            <label htmlFor="remember">Remember Me!</label>
          </div>

          <div className="NewUp">
            <p className="new">New to FlowTT?</p>
            <Link to="/signup" className="up">Sign Up Now.</Link>
          </div>
        </form>
      </div>

      <div className="loginpage_body">
      <video src={video1} type="video.mp4"  autoPlay loop muted className="loginpage_video">
      </video>
      </div>

      <div className="footer">
        <div className="extra">
          <p className="Qu">Question? Email:</p>
          <p className="em">abc@gmail.com</p>
        </div>
        <div className="foot">
          <ul><li>FAQ</li></ul>
          <ul><li>Help Centre</li></ul>
          <ul><li>Terms of Use</li></ul>
          <ul><li>Privacy</li></ul>
          <ul><li>Cookie Preferences</li></ul>
          <ul><li>Corporate Information</li></ul>
        </div>
        <div className="sel">
          <select className="select">
            <option value="en-IN">English</option>
            <option value="hi-IN">हिन्दी</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
