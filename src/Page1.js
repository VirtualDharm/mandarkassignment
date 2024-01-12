// src/Page1.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Page 1 Content</h2>
      {/* Add any additional content for Page 1 */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Page1;
