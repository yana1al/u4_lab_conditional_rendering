import React from 'react';

const Landing = ({ goToPage }) => {
  return (
    <div>
      <h1>Welcome to Our Page!</h1>
      <h4>Please sign up below...</h4>
      <button onClick={() => goToPage('form')}>Sign Up</button>
    </div>
  );
}

export default Landing;
