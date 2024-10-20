
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid, Package, Users, DollarSign } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/dashboard' },
  { name: 'Categories', icon: Grid, path: '/categories' },
  { name: 'Items', icon: Package, path: '/items' },
  { name: 'Dealers', icon: Users, path: '/dealers' },
  { name: 'Sales', icon: DollarSign, path: '/sales' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 min-h-screen shadow-lg bg-slate-500">
      <div className="flex items-center justify-center h-20 shadow-md bg-slate-600">
        <h1 className="text-3xl font-bold text-gray-100">SKAM</h1>
      </div>
      <ul className="flex flex-col py-0">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-800 hover:text-slate-50 ${
                location.pathname === item.path ? 'bg-slate-400 shadow-slate-800 shadow-inner rounded-sm' : ''
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;