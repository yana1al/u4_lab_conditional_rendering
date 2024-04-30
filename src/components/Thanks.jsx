import React from 'react';

const Thanks = ({ resetState }) => {
  return (
    <div>
      <h1>Thank You for Signing Up!</h1>
      <img
        alt="thanks"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.smartweb.me%2Fwp-content%2Fuploads%2F2018%2F04%2Fthank-you.png&f=1&nofb=1"
      />
      <br />
      <br />
      <button onClick={resetState}>Back</button>
    </div>
  );
};

export default Thanks;
