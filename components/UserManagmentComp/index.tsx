'use client';

import React, { useState } from 'react';
import AddNewUserForm from '@/components/AddNewUser'; // Make sure this component exists
import { Button } from 'react-aria-components';
import UserManagementTable from '@/components/UserManagementTable';

// Define the User type
interface User {
  name: string;
  email: string;
  role: string;
  dateAdded: string;
  lastActive: string;
  status: boolean;
}

const UserManagement: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([
    { name: 'Olivia Rhye', email: 'olivi34a@untitledui.com', role: 'Manager', dateAdded: 'Feb 22, 2022', lastActive: 'Mar 14, 2022', status: true },
    { name: 'Phoenix Baker', email: 'phoe3nix@untitledui.com', role: 'Admin', dateAdded: 'Feb 22, 2022', lastActive: 'Mar 12, 2022', status: false },
    { name: 'Charlie Miller', email: 'ch43arlie@untitledui.com', role: 'Manager', dateAdded: 'Mar 15, 2022', lastActive: 'Jun 12, 2024', status: true },
    { name: 'Aurora Jones', email: 'aur4ora@untitledui.com', role: 'Manager', dateAdded: 'May 01, 2023', lastActive: 'Jun 10, 2024', status: true },
    { name: 'Olivia Rhye', email: 'oliv2ia@untitledui.com', role: 'Manager', dateAdded: 'Feb 22, 2022', lastActive: 'Mar 14, 2022', status: true },
    { name: 'Phoenix Baker', email: 'ph1oenix@untitledui.com', role: 'Admin', dateAdded: 'Feb 22, 2022', lastActive: 'Mar 12, 2022', status: false },
    { name: 'Charlie Miller', email: 'c3harlie@untitledui.com', role: 'Admin', dateAdded: 'Mar 15, 2022', lastActive: 'Jun 12, 2024', status: true },
    { name: 'Aurora Jones', email: 'auror4a@untitledui.com', role: 'Admin', dateAdded: 'May 01, 2023', lastActive: 'Jun 10, 2024', status: true }
  ]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (user: User) => {
    setUsers([...users, user]);
    closeModal();
  };

  //filter according to role
  const adminUsers = users.filter(user => user.role === 'Admin');
  const managerUsers = users.filter(user => user.role === 'Manager');

  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-semibold">User Management</h1>
          <p className="text-gray-600">Manage your team members and their accounts here.</p>
        </div>
        <Button
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
            onPress={openModal}
            style={{ backgroundColor: '#7F56D9' }}
              >
            <span className="flex items-center">
              <i className="ri-user-add-line text-xl mr-2"></i> {/* Adjusted icon size with text-xl class */}
              Add new
            </span>
      </Button>
      </div>

      <div className="grid grid-cols-4 gap-4 divide-y divide-gray-200">
        <div className="col-span-1 pr-4">
          <h2 className="text-lg font-semibold mb-2">Admin users</h2>
          <p className="text-gray-600">Admins can add and remove users and manage organization-level settings.</p>
        </div>
        <div className="col-span-3 pt-4">
          <UserManagementTable title="Admin Users" users={adminUsers} />
        </div>
        <div className="col-span-1 pr-4 pt-4">
          <h2 className="text-lg font-semibold mb-2">Managers</h2>
          <p className="text-gray-600">Account users can assess and review risks, questionnaires, data leaks, and identify breaches.</p>
        </div>
        <div className="col-span-3 pt-4">
          <UserManagementTable title="Managers" users={managerUsers} />
        </div>
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
            <AddNewUserForm onSubmit={handleSubmit} onCancel={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
