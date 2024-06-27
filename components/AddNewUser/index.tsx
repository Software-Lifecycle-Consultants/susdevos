'use client';

import React, { useState } from 'react';
import PhoneNumberInput from '@/app/register/PhoneNumberInput';
import { AddNewUserSchema, AddNewUserSchemaData } from './AddNewUserZodValidation';
import { ZodError } from 'zod';

// Define the User type
interface User {
  name: string;
  email: string;
  role: string;
  dateAdded: string;
  lastActive: string;
  status: boolean;
}

interface AddNewUserFormProps {
  onSubmit: (user: User) => void;
  onCancel: () => void;
}

const AddNewUserForm: React.FC<AddNewUserFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<AddNewUserSchemaData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    department: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    department: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (countryCode: string, phoneNumber: string) => {
    setFormData({ ...formData, phone: `${countryCode}${phoneNumber}` });
  };

  const validate = (data: AddNewUserSchemaData) => {
    try {
      AddNewUserSchema.parse(data);
      setErrors({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: '',
        department: '',
      });
      return true;
    } catch (e) {
      if (e instanceof ZodError) {
        const newErrors: any = {};
        e.errors.forEach((err) => {
          if (err.path.length > 0) {
            const key = err.path[0];
            if (key in newErrors) {
              newErrors[key] += `\n${err.message}`;
            } else {
              newErrors[key] = err.message;
            }
          }
        });
        setErrors(newErrors);
      } else {
        console.error('Unknown error occurred:', e);
      }
      return false;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate(formData)) {
      onSubmit({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        role: formData.role,
        dateAdded: new Date().toLocaleDateString(),
        lastActive: new Date().toLocaleDateString(),
        status: true,
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: '',
        department: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold">Add New User</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="e.g. John"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="e.g. Doe"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="hello@mail.com"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div>
        <PhoneNumberInput
          register={handlePhoneChange}
          error={null}
        />
        {errors.phone && <span className="text-red-500">{errors.phone}</span>}
      </div>
      <div>
        <label htmlFor="role" className="block mb-1">Your Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-3"
        >
          <option value="">Select a role</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="User">User</option>
        </select>
        {errors.role && <span className="text-red-500">{errors.role}</span>}
      </div>
      <div>
        <label htmlFor="department" className="block mb-1">Your Department</label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Select</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
        </select>
        {errors.department && <span className="text-red-500">{errors.department}</span>}
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="bg-white text-black px-4 py-2 rounded border border-gray-300 hover:bg-gray-200 hover:text-gray-600"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
          style={{ backgroundColor: '#7F56D9' }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddNewUserForm;