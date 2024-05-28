import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from './firebaseConfig';
import '../Styling/SignUp.css'

export function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      window.alert('Password must be at least 8 characters long.');
      return;
    }

    db.collection('users').where('email', '==', email).get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          window.alert('Email already registered.Enter new Email');
        } else {
          db.collection('users').add({
            username: username,
            email: email,
            password: password,
          })
          .then(() => {
            window.alert('User signed up successfully');
            setUsername('');
            setEmail('');
            setPassword('');
            navigate('/');
          })
          .catch((error) => {
            window.alert('Error signing up: ' + error.message);
          });
        }
      })
      .catch((error) => {
        window.alert('Error checking email: ' + error.message);
      });
  };

  return (
    <div className="new-container">
      <div className="new-left-side">
        <img src="backimage.png" alt="Background" className="new-backimage" />
        <div className="new-content">
          <h1 className="new-title">SecureScan</h1>
          <img src="newimage.png" alt="SecureScan" className="new-centered-image" />
          <p className="new-description">
            Sign up now to unlock the
            full <br />potential of our platform
          </p>
          <p className="new-sub-description">
            We aim to provide you with a secure and reliable<br/>platform to analyze images and videos for instances of<br/> violence.
          </p>
        </div>
      </div>
      <div className="new-right-side">
        <form className="new-signup-form" onSubmit={handleSubmit}>
          <h2>Sign up now to unlock the full potential of our platform</h2>
          <div className="new-input-group">
            <label htmlFor="new-username">Username</label>
            <input
              type="text"
              placeholder="Muqadsa"
              name="new-username"
              id="new-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="new-input-group">
            <label htmlFor="new-email">Email</label>
            <input
              type="email"
              placeholder="muqadsazaheen50@fmail.com"
              name="new-email"
              id="new-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="new-input-group">
            <label htmlFor="new-password">Password</label>
            <input
              type="password"
              placeholder="*****"
              name="new-password"
              id="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">SIGN UP</button>
          <p className="new-login-link">
            Own an account? <Link to="/signin">SIGN IN</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
