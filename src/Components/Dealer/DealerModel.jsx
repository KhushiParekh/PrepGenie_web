import React, { useState, useEffect } from 'react';

const DealerModal = ({ onClose, onSave, dealer }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (dealer) {
      setName(dealer.name);
      setLocation(dealer.location);
      setEmail(dealer.email);
      setPhone(dealer.phone);
      setAddress(dealer.address);
    }
  }, [dealer]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: dealer ? dealer.id : Date.now(), name, location, email, phone, address });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">{dealer ? 'Edit Dealer' : 'Add Dealer'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Dealer Name */}
            <div>
              <label className="block mb-2 text-gray-700">Dealer Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded outline-none"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 text-gray-700">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded outline-none"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-2 text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded outline-none"
                required
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label className="block mb-2 text-gray-700">Address</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                rows="3"
                required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 text-gray-700 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DealerModal;
