import React, { useState } from 'react';

const ProgressBar = () => {
  const [value, setValue] = useState(10);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-full bg-orange-950 h-1/2 flex justify-center items-center">
      <input
        type="range"
        min="0"
        max="20"
        value={value}
        className="w-full"
        onChange={handleChange}
      />
    </div>
    
  );
};

export default ProgressBar;
