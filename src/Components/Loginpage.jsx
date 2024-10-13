
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/test.png';
import img2 from '../assets/girl.png';
import img3 from '../assets/signup.png';
import img4 from '../assets/Signup.jpg';
import img5 from '../assets/img5.png';
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
    if (email === 'test@gmail.com' && password === 'pas$word') {
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
//background: radial-gradient(#f9dbc1, #f9dbc1);
//background: radial-gradient(#f9dbc1, #f9dbc1);
  return (
    <div className="min-h-screen bg-[#E0D1A8] flex items-center justify-center ">
      <div className='flex w-[60%] min-h-[500px] lg:min-h-[600px] bg-slate-400 justify-center rounded-3xl shadow-lg my-0'>
      <img src={showSignup ? img5 : img1} alt="Image 1"className="items-center m-2 ml-3 mt-28 h-60 w-60 lg:h-80 lg:w-80 lg:mb-0" />
        <div className="relative z-10 items-center justify-center w-full p-6 pt-10 transition-all duration-500 ease-in-out transform bg-white shadow-md lg:p-8 rounded-r-3xl">
       <div className='mt-9 mx-7'>
       <h2 className="mb-6 text-3xl font-extrabold text-center">
          {showSignup ? 'Sign Up' : 'Login'}
        </h2>
        <form onSubmit={showSignup ? handleSignup : handleLogin}>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {showSignup ? 'Enter Email' : 'Email'}
            </label>
            <input
              type="email"  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm outline-none"
              id="email" placeholder={showSignup ? 'Your Email for Signup' : 'Your Registered Email(test@gmail.com)'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              {showSignup ? 'Create Password' : 'Password'}
            </label>
            <input
              type={showPassword ? 'text' : 'password'} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm outline-none"
              id="password"
              placeholder={showSignup ? 'Create Your Password' : 'Enter Your Password(pas$word)'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute text-gray-600 cursor-pointer right-3 top-3"
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
              id="confirm-password" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm outline-none"
              placeholder="confirm password"
              value={Confirmpassword}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute text-gray-600 cursor-pointer right-3 top-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </div>
          </div> : null}
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            type="submit"
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
      </div>
        
    </div>
  );
};

export default LoginPage;

