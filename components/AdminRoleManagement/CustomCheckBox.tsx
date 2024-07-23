'use client'

interface CustomCheckboxProps {
    checked: boolean;
    onChange: () => void;
  }
  
  const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => {
    return (
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-red-500 border-purple-600 rounded focus:ring-purple-500"
          checked={checked}
          onChange={onChange}
        />
      </label>
    );
  };
  
  export default CustomCheckbox;