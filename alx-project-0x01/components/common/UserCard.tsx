import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>

      <div className="mt-2 text-sm text-gray-700">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{user.website}</a></p>
      </div>

      <div className="mt-3 text-sm text-gray-700">
        <p><strong>Address:</strong> {`${user.address.suite}, ${user.address.street}, ${user.address.city} ${user.address.zipcode}`}</p>
      </div>

      <div className="mt-3 text-sm text-gray-700">
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><em>{user.company.catchPhrase}</em></p>
      </div>
    </div>
  );
};



export default UserCard;
