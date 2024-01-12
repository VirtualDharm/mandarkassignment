// src/Page2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Page 2 Content</h2>
      {/* Add any additional content for Page 2 */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Page2;
