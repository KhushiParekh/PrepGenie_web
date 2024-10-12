
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/test.png';
import img2 from '../assets/girl.png';
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSignup, setShowSignup] = useState(false); 
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [Confirmpassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@gmail.com' && password === 'password') {
      navigate('/test');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== Confirmpassword) {
        console.error("Passwords do not match");
        return;
      }
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-[#f9dbc1] flex items-center justify-center relative">
      
        {/* Left Image */}
        <img
          src={img1}
          alt="Image 1"
          className="h-80 w-80  ml-1 mr-2 bottom-0 left-2"
        />
      

      <div className="bg-white rounded-3xl shadow-md w-1/3 p-8 relative z-10 transition-all duration-500 ease-in-out transform">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {showSignup ? 'Sign Up' : 'Login'}
        </h2>
        <form onSubmit={showSignup ? handleSignup : handleLogin}>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {showSignup ? 'Enter Email' : 'Email'}
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none"
              value={email}
              placeholder={showSignup ? 'Your Email for Signup' : 'Your Registered Email'}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              {showSignup ? 'Create Password' : 'Password'}
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none"
              placeholder={showSignup ? 'Create Your Password' : 'Enter Your Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute text-gray-600 cursor-pointer right-3 top-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </div>
          </div>
          {showSignup ? <div className="relative mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Confirm Passsword
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirm-password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none"
              placeholder="confirm password"
              value={Confirmpassword}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute text-gray-600 cursor-pointer right-3 top-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </div>
          </div> : null}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            {showSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {showSignup ? (
              <>
                Already have an account?{' '}
                <button className="text-indigo-600 hover:text-indigo-800"
                  onClick={() => setShowSignup(false)}
                >Log in </button>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <button className="text-indigo-600 hover:text-indigo-800"
                  onClick={() => setShowSignup(true)}
                >Sign up</button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

