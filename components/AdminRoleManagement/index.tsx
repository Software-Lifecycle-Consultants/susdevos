'use client'

import { useState } from 'react';
import RoleSelector from '../AdminRoleManagement/AdminRoleManagement';
import CustomCheckbox from './CustomCheckBox';

const RolesManagement = () => {
  const [selectedModule, setSelectedModule] = useState('Module 07');
  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});


  const actions = [
    'Pending Request - Assign',
    'Pending request - Audit',
    'Tree removal',
    'Development project -View',
    'Development Project - New',
    'Environment Restoration - view',
    'Environment Restoration - New',
    'Register Land'
    //Add More Action as needed.
  ];

  const permissions = ['Create', 'Read', 'Update', 'Delete'];

  const handleModuleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModule(event.target.value);
  };

  const handleCheckboxChange = (action: string, permission: string) => {
    const key = `${action}-${permission}`;
    setCheckboxStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="bg-gray-50 p-3 flex flex-col justify-center overflow-hidden">
        <div className="w-full rounded-3xl p-2">
          <h1 className="text-3xl font-bold mb-4">Roles Management</h1>
          <p className="mb-6 font-sans">Manage your team members and their account permissions here.</p>
          <div className="flex justify-between">
            <h1 className='font-bold'>Modules</h1>
            <RoleSelector/>
          </div>
          <div className="overflow-x-auto rounded-2xl ">
            <table className="min-w-full bg-white border rounded-2xl">
              <thead>
                <tr>
                  <th className="py-2 border px-4 text-left">Action</th>
                  {permissions.map(permission => (
                    <th key={permission} className="py-2 border px-4 text-left">{permission}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {actions.map(action => (
                  <tr key={action}>
                    <td className="py-2 border px-4">{action}</td>
                    {permissions.map(permission => (
                      <td key={permission} className="py-2 border px-4">
                        <CustomCheckbox
                          checked={checkboxStates[`${action}-${permission}`] || false}
                          onChange={() => handleCheckboxChange(action, permission)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default RolesManagement;