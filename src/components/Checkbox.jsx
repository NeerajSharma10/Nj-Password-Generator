import React, { useState } from 'react';

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-indigo-600"
        checked={checked}
        onChange={handleChange}
      />
      <span className="ml-2">{label}</span>
    </div>
  );
};

export default Checkbox;
