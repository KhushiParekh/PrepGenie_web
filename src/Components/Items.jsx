import React, { useState } from 'react';

const Items = () => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ itemName, category, price, stock });
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Items</h1>
      <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="itemName">
              Item Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="itemName"
              type="text"
              placeholder="Enter item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="category">
              Category
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="price">
              Price
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="stock">
              Stock
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="stock"
              type="number"
              placeholder="Enter stock quantity"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Items;
