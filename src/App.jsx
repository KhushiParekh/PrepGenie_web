import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Ensure Navigate is imported
import Sidebar from './Components/SideBar';
import Dashboard from './Components/Dashboard';
import Category from './Components/Category/CategoryPage';
import Items from './Components/Items/ItemsPage';
import Dealers from './Components/Dealer/DealerPage';
import ProfileBar from './Components/Profiler';
import LoginPage from './Components/Loginpage';
import { CategoryProvider } from './CategoryContext'; // Ensure this path is correct

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Local state for authentication

  const handleLogin = () => {
    setIsAuthenticated(true); // Set authenticated state
  };

  return (
    <CategoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/*" element={isAuthenticated ? (
            <div className="flex">
              <Sidebar />
              <div className="w-[90%] bg-gray-100">
                <ProfileBar />
                <div>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/categories" element={<Category />} />
                    <Route path="/items" element={<Items />} />
                    <Route path="/dealers" element={<Dealers />} />
                    {/* Add more routes here as needed */}
                  </Routes>
                </div>
              </div>
            </div>
          ) : (
            <Navigate to="/" replace /> // Redirect to login if not authenticated
          )} />
        </Routes>
      </Router>
    </CategoryProvider>
  );
};

export default App;



// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LoginPage from './Components/Loginpage';
// import TestPage from './Components/Test';
// import Dashboard from './Components/Dashboard';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/test" element={<TestPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App
