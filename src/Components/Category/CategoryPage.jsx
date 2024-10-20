// src/Components/Category/CategoryPage.jsx
import React, { useState } from 'react';
import { useCategory } from '../../CategoryContext'; // Import the context hook
import CategoryModal from './CategoryModal';

const CategoryPage = () => {
  const { categories, addCategory, editCategory, deleteCategory } = useCategory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleOpenModal = (category = null) => {
    setEditingCategory(category);
    setIsModalOpen(true);
  };

  const handleSaveCategory = (category) => {
    if (editingCategory) {
      editCategory(category);
    } else {
      addCategory(category);
    }
    setIsModalOpen(false);
    setEditingCategory(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Categories</h1>
        
        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add New Category
        </button>
      </div>

      {categories.length === 0 ? (
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">No categories yet. Add a new category using the button above.</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
              <div>
                <span className="text-lg font-bold">{category.name}</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-sm ${category.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {category.status}
                </span>
              </div>
              
              <span>{category.description || 'No description provided'}</span>
              
              <div>
                <button
                  onClick={() => handleOpenModal(category)}
                  className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCategory(category.id)}
                  className="px-4 py-2 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isModalOpen && (
        <CategoryModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveCategory}
          category={editingCategory}
        />
      )}
    </div>
  );
};

export default CategoryPage;
