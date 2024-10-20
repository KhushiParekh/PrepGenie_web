import React, { createContext, useContext, useState } from 'react';

// Create the context
const CategoryContext = createContext();

// Custom hook to use the CategoryContext
export const useCategory = () => {
  return useContext(CategoryContext);
};

// Provider component
export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const addCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
