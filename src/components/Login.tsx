import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase'; // Adjust the path as necessary

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      // Optionally redirect to homepage or another page after successful login
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError('Login failed: ' + errorMessage);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful! You can now log in.');
      setIsLoginMode(true); // Switch to login mode after successful signup
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Signup failed';
      setError('Signup failed: ' + errorMessage);
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={isLoginMode ? handleLogin : handleSignup}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{isLoginMode ? 'Login' : 'Sign Up'}</button>
      </form>
      <div className="mt-3">
        <button className="btn btn-link" onClick={() => setIsLoginMode(!isLoginMode)}>
          {isLoginMode ? 'Create an account' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;
