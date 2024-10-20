// import React, { useState, useEffect } from 'react';

// const ItemModal = ({ onClose, onSave, item, categories }) => {
//   const [itemName, setItemName] = useState('');
//   const [category, setCategory] = useState('');
//   const [purchasePrice, setPurchasePrice] = useState('');
//   const [sellingPrice, setSellingPrice] = useState('');
//   const [stock, setStock] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');

//   // If editing, pre-fill form with current item data
//   useEffect(() => {
//     if (item) {
//       setItemName(item.name);
//       setCategory(item.category);
//       setPurchasePrice(item.purchasePrice);
//       setSellingPrice(item.sellingPrice);
//       setStock(item.stock);
//       setExpiryDate(item.expiryDate);
//     }
//   }, [item]);

//   // Handle form submit
//   const handleSubmit = () => {
//     const newItem = {
//       id: item ? item.id : null,
//       name: itemName,
//       category,
//       purchasePrice,
//       sellingPrice,
//       stock,
//       expiryDate
//     };
//     onSave(newItem);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
//       <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="mb-4 text-2xl">{item ? 'Edit Item' : 'Add New Item'}</h2>

//         {/* Item Name */}
//         <div className="mb-4">
//           <label className="block mb-1">Item Name</label>
//           <input
//             type="text"
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         {/* Category Dropdown */}
//         <div className="mb-4">
//           <label className="block mb-1">Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="" disabled>Select Category</option>
//             {categories.map((cat) => (
//               <option key={cat.id} value={cat.name}>
//                 {cat.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Purchase Price */}
//         <div className="mb-4">
//           <label className="block mb-1">Purchase Price</label>
//           <input
//             type="number"
//             value={purchasePrice}
//             onChange={(e) => setPurchasePrice(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         {/* Selling Price */}
//         <div className="mb-4">
//           <label className="block mb-1">Selling Price</label>
//           <input
//             type="number"
//             value={sellingPrice}
//             onChange={(e) => setSellingPrice(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         {/* Stock */}
//         <div className="mb-4">
//           <label className="block mb-1">Stock/Quantity</label>
//           <input
//             type="number"
//             value={stock}
//             onChange={(e) => setStock(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         {/* Expiry Date */}
//         <div className="mb-4">
//           <label className="block mb-1">Expiry Date</label>
//           <input
//             type="date"
//             value={expiryDate}
//             onChange={(e) => setExpiryDate(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="flex justify-end space-x-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-white bg-gray-400 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 text-white bg-blue-500 rounded"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemModal;
const ItemModal = ({ onClose, onSave, item, categories }) => {
  const [itemData, setItemData] = useState(item || { name: '', category: '', purchasePrice: '', sellingPrice: '', stock: '', expiryDate: '' });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(itemData);
  };

  return (
    <div>
      {/* Modal Content */}
      <h2>{item ? 'Edit Item' : 'Add Item'}</h2>
      <input name="name" value={itemData.name} onChange={handleChange} placeholder="Item Name" />
      <select name="category" value={itemData.category} onChange={handleChange}>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
      {/* Other inputs for purchasePrice, sellingPrice, stock, expiryDate */}
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};
