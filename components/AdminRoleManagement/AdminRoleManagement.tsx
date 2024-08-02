'use client'

import { useState } from 'react';

const RoleSelector = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log(`Selected role: ${selectedRole}`);
  };

  return (
    <div className="flex mb-4">
      <select
        value={selectedRole}
        onChange={handleRoleChange}
        className="border rounded px-3 py-2 mr-2"
      >
        <option value="" disabled>Select a role</option>
        <option>Admin</option>
        <option>User</option>
        <option>Guest</option>
        {/* Add more roles as needed */}
      </select>
      <button onClick={handleSearch} className="bg-purple-600 text-white rounded px-4 py-2">
        Search
      </button>
    </div>
  );
};

export default RoleSelector;
