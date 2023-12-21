import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate replaces useHistory in react-router-dom v6

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // It successfully signed in the user
      const user = userCredential.user;
      console.log(user);

      // Additional actions after successful sign-in if needed
      navigate('/'); // Redirect the user after successful sign-in
    } catch (error) {
      console.error('Sign-in failed:', error.message);
      // Handle the error as needed
    }
  };

  const registerWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // It successfully created a new user with email and password
      const user = userCredential.user;
      console.log(user);

      // Additional actions after successful registration if needed
      navigate('/'); // Redirect the user after successful registration
    } catch (error) {
      console.error('Registration failed:', error.message);
      throw error; // Rethrow the error for handling in the calling code
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      await registerWithEmailAndPassword(email, password);
      // Do any additional actions after successful registration if needed
    } catch (error) {
      alert(error.message);
      // Handle the error as needed
    }

    // Do some fancy firebase register shitt...
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

      </div>
    </div>
  )
}

export default Login;
