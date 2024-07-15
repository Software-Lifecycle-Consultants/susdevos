// StatusSwitch.tsx
import React from 'react';

interface StatusSwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StatusSwitch: React.FC<StatusSwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange && onChange(event)} // Call the passed function if it exists
        className="sr-only peer"
      />
      <div
        className={`w-10 h-5 bg-gray-400 rounded-full peer-checked:bg-purple-600 transition-colors duration-300`}
      >
        <div
          className={`absolute w-6 h-6 bg-white border-2 border-gray-400 rounded-full transition-transform duration-300 transform ${
            checked ? 'translate-x-5' : '-translate-x-1'
          }`}
        ></div>
      </div>
    </label>
  );
};

export default StatusSwitch;
