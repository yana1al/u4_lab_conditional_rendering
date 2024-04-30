import React from 'react';

const Home = ({ goToPage }) => {
  return (
    <div>
      <h1>Welcome to our site!</h1>
      <button onClick={() => goToPage('landing')}>Sign Up</button>
    </div>
  );
}

export default Home;
