import React, { useState } from 'react';
import DealerModal from './DealerModel';

const DealerPage = () => {
  const [dealers, setDealers] = useState([]);  // List of dealers
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal state
  const [editingDealer, setEditingDealer] = useState(null);  // Dealer being edited

  // Function to open the modal (either for adding or editing)
  const handleOpenModal = (dealer = null) => {
    setEditingDealer(dealer);
    setIsModalOpen(true);
  };

  // Function to save a new or edited dealer bg-[#52a5c1dd]
  const handleSaveDealer = (dealer) => {
    if (editingDealer) {
      setDealers(dealers.map(d => (d.id === dealer.id ? dealer : d)));
    } else {
      setDealers([...dealers, { ...dealer, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setEditingDealer(null);
  };

  // Function to delete a dealer
  const handleDeleteDealer = (id) => {
    setDealers(dealers.filter(d => d.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dealers</h1>
        
        {/* New Dealer Button moved to top-right */}
        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add New Dealer
        </button>
      </div>

      {/* If no dealers, show placeholder div */}
      {dealers.length === 0 ? (
        <div className="w-auto p-4 rounded-lg shadow-inner shadow-slate-300 g-white">
          <p className="text-gray-500">No dealers yet. Add a new dealer using the button above.</p>
        </div>
      ) : (
        <div className="w-auto p-4 rounded-lg shadow-inner shadow-slate-300 g-white">
        <ul className="space-y-4">
          {dealers.map((dealer) => (
            <li key={dealer.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
              <span className="text-lg">{dealer.name}</span>
              <div>
                <button
                  onClick={() => handleOpenModal(dealer)}
                  className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteDealer(dealer.id)}
                  className="px-4 py-2 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        </div>
      )}

      {/* Dealer Modal */}
      {isModalOpen && (
        <DealerModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveDealer}
          dealer={editingDealer}
        />
      )}
    </div>
  );
};

export default DealerPage;
