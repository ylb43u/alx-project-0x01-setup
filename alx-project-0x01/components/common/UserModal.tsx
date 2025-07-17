import React, { useState } from 'react';
import { UserModalProps, UserData } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {  
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const key = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
    } else if (name.startsWith('company.')) {
      const key = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        company: {
          ...prev.company,
          [key]: value,
        },
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };
  
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative animate-fade-in">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500" onClick={()=>onClose()}>
          Close
        </button>

        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="website" placeholder="Website" value={formData.website} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="address.street" placeholder="Street" value={formData.address.street} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="address.city" placeholder="City" value={formData.address.city} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="company.name" placeholder="Company Name" value={formData.company.name} onChange={handleChange} className="w-full border p-2 rounded" />

          <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
