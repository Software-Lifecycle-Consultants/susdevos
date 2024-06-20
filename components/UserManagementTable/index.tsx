'use client';
import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'; // Ensure you import the Remix Icon CSS

interface User {
  name: string;
  email: string;
  role: string;
  dateAdded: string;
  lastActive: string;
  status: boolean;
}

interface UserManagementTableProps {
  title: string;
  users: User[];
}
const UserManagementTable: React.FC<UserManagementTableProps> = ({ title, users }) => {

    // State to manage "Select All" checkbox and selected users
    const [selectAll, setSelectAll] = useState(false); // State to track whether "Select All" checkbox is checked
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]); 
  
    // Handler for "Select All" checkbox change
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked; 
      setSelectAll(checked); 
  
      // If "Select All" checkbox is checked, select all users
      if (checked) {
        const allUserEmails = users.map((user) => user.email); 
        setSelectedUsers(allUserEmails); // Set all users as selected
      } else {
        setSelectedUsers([]); // Clear selected users if "Select All" checkbox is unchecked
      }
    };
  
    // Handler for individual user checkbox change
    const handleSelectUser = (email: string) => {
      const selectedIndex = selectedUsers.indexOf(email); 
  
      let newSelected: string[] = [];
  
      // If user is not already selected, add to selectedUsers
      if (selectedIndex === -1) {
        newSelected = [...selectedUsers, email];
      } else {
        // If user is already selected, remove from selectedUsers
        newSelected = selectedUsers.filter((e) => e !== email);
      }
  
      setSelectedUsers(newSelected); // Update selected users
      setSelectAll(newSelected.length === users.length); 
    };
  
  return (
    <div className="mb-8">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left align-top">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                Name
              </th>
              <th className="py-2 px-4 border-b border-gray-200 text-left align-top">Role</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left align-top">Date added</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left align-top">Last active</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left align-top">Status</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left align-top"></th>
            </tr>
          </thead>
          <tbody className="bg-gray-50 text-sm">
            {users.map((user) => (
              <tr key={user.email}>
                <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedUsers.includes(user.email)}
                    onChange={() => handleSelectUser(user.email)}
                  />
                  <span className="flex flex-col">
                    <span className="flex items-center">
                      <i className="ri-image-circle-line text-xl mr-2"></i>
                      {user.name}
                    </span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{user.role}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.dateAdded}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.lastActive}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <input type="checkbox" checked={user.status} readOnly />
                </td>
                <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                  <button>
                    <i className="ri-delete-bin-line"></i>
                  </button>
                  <span className="mx-2"></span>
                  <button>
                    <i className="ri-pencil-line"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagementTable;