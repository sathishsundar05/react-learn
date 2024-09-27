import React, { useState } from 'react';

const Multiselect = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((selected) => selected !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative inline-block">
      <button 
        className="px-4 py-2 bg-gray-200 border border-gray-400 rounded" 
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select options'}
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-400 rounded shadow-md max-h-40 overflow-auto">
          {options.map((option) => (
            <div 
              key={option} 
              className={`cursor-pointer px-4 py-2 hover:bg-gray-200 ${
                selectedOptions.includes(option) ? 'bg-blue-200' : ''
              }`} 
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Multiselect;
