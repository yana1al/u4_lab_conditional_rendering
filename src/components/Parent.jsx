// Parent component
import React, { useState } from 'react';
import Landing from './Landing';

const ParentComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const incrementPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {currentPage === 0 && <Landing incrementPage={incrementPage} />}
      {/* Other conditional rendering based on currentPage */}
    </div>
  );
};

export default ParentComponent;
