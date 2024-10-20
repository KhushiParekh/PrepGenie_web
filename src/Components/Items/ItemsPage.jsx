// import React, { useState } from 'react';
// import ItemModal from './ItemModal';

// const ItemsPage = ({ categories = [] }) => { // Provide default value for categories
//   const [items, setItems] = useState([]); // List of items
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
//   const [editingItem, setEditingItem] = useState(null); // Item being edited

//   // Function to open the modal (either for adding or editing)
//   const handleOpenModal = (item = null) => {
//     setEditingItem(item); // Set the item being edited or null for new item
//     setIsModalOpen(true); // Open the modal
//   };

//   // Function to close the modal
//   const closeModalHandler = () => {
//     setIsModalOpen(false); // Close the modal
//     setEditingItem(null);  // Clear editing item
//   };

//   // Function to save a new or edited item
//   const saveItemHandler = (item) => {
//     if (editingItem) {
//       // Edit existing item
//       setItems(items.map(i => (i.id === item.id ? item : i)));
//     } else {
//       // Add new item
//       setItems([...items, { ...item, id: Date.now() }]);
//     }
//     closeModalHandler(); // Close the modal after saving
//   };

//   // Function to delete an item
//   const handleDeleteItem = (id) => {
//     setItems(items.filter(i => i.id !== id));
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-3xl font-bold">Items</h1>
        
//         {/* New Item Button */}
//         <button
//           onClick={() => handleOpenModal()}
//           className="px-4 py-2 text-white bg-blue-500 rounded"
//         >
//           Add New Item
//         </button>
//       </div>

//       {/* If no items, show placeholder */}
//       {items.length === 0 ? (
//         <div className="w-full p-4 bg-white rounded-lg shadow-md">
//           <p className="text-gray-500">No items yet. Add a new item using the button above.</p>
//         </div>
//       ) : (
//         <ul className="space-y-4">
//           {items.map((item) => (
//             <li key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
//               <span className="text-lg">{item.name} (Category: {item.category})</span>
//               <span>Purchase: ${item.purchasePrice} | Selling: ${item.sellingPrice} | Stock: {item.stock} | Expiry: {item.expiryDate}</span>
//               <div>
//                 <button
//                   onClick={() => handleOpenModal(item)}
//                   className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteItem(item.id)}
//                   className="px-4 py-2 text-white bg-red-500 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {/* Item Modal */}
//       {isModalOpen && (
//         <ItemModal
//           onClose={closeModalHandler} // Close modal handler
//           onSave={saveItemHandler}    // Save item handler
//           item={editingItem}          // Pass the editing item or null for new item
//           categories={categories}     // Use the passed categories prop
//         />
//       )}
//     </div>
//   );
// };

// export default ItemsPage;
import React, { useState } from 'react';
import { useCategory } from '../../CategoryContext'; // Import the custom hook
import ItemModal from './ItemModal';

const ItemsPage = () => {
  const { categories } = useCategory(); // Access categories from context
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleOpenModal = (item = null) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const saveItemHandler = (item) => {
    if (editingItem) {
      setItems(items.map(i => (i.id === item.id ? item : i)));
    } else {
      setItems([...items, { ...item, id: Date.now() }]);
    }
    closeModalHandler();
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Items</h1>
        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add New Item
        </button>
      </div>

      {items.length === 0 ? (
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">No items yet. Add a new item using the button above.</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
              <span className="text-lg">{item.name} (Category: {item.category})</span>
              <span>Purchase: ${item.purchasePrice} | Selling: ${item.sellingPrice} | Stock: {item.stock} | Expiry: {item.expiryDate}</span>
              <div>
                <button
                  onClick={() => handleOpenModal(item)}
                  className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteItem(item.id)}
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
        <ItemModal
          onClose={closeModalHandler}
          onSave={saveItemHandler}
          item={editingItem}
          categories={categories} // Pass categories from context to ItemModal
        />
      )}
    </div>
  );
};

export default ItemsPage;
