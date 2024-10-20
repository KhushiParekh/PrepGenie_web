// src/Components/ProfileBar.jsx
import React from 'react';
import { User, Settings } from 'lucide-react';

const ProfileBar = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-white shadow-md">
      <div className="flex items-center">
        <User className="w-10 h-10 mr-4 text-gray-600 cursor-pointer" />
        <div>
          <h2 className="text-lg font-semibold cursor-pointer">John Doe</h2>
          <p className="text-sm text-gray-500 cursor-pointer">Admin</p>
        </div>
      </div>
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <Settings className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default ProfileBar;
