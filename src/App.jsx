import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './Components/Loginpage';
import TestPage from './Components/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App
