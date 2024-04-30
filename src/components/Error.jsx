import React from 'react';

const Error = ({ resetState }) => {
  return (
    <div>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthecyberpost.com%2Fwp-content%2Fuploads%2F2020%2F05%2F404-error-hackers-rat-malware.jpg&f=1&nofb=1"
        alt="404" className="error-image"
      />
      <main>
        <h1>Sorry!</h1>
        <p>You must be 18 or older to sign up for our site!</p>
        <button onClick={resetState}>Back</button>
      </main>
    </div>
  );
};

export default Error;
