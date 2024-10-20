

import React, { useState, useEffect } from 'react';

const CategoryModal = ({ onClose, onSave, category }) => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('active'); // Default status is active

  // If editing, pre-fill form with current category data
  useEffect(() => {
    if (category) {
      setCategoryName(category.name);
      setDescription(category.description);
      setStatus(category.status || 'active');
    }
  }, [category]);

  // Handle form submit
  const handleSubmit = () => {
    const newCategory = {
      id: category ? category.id : null,
      name: categoryName,
      description,
      status
    };
    onSave(newCategory);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl">{category ? 'Edit Category' : 'Add New Category'}</h2>

        {/* Category Name */}
        <div className="mb-4">
          <label className="block mb-1">Category Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-1">Description (Optional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option className='bg-green-500 ' value="active">Active</option>
            <option className='bg-red-500 ' value="inactive">Inactive</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-gray-400 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
