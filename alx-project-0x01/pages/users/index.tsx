import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserCard from '@/components/common/UserCard';
import { UserData, UserProps } from '@/interfaces';
import UserModal from '@/components/common/UserModal';



const Users: React.FC<{users: UserProps[]}> = ({ users }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);


    const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: users.length + 1 });
    };
    
  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
         <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User Content</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        {users.map((user:UserProps) => (
          <UserCard key={user.id} user={user} />
        ))}
      </main>

        {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
