import React from 'react';

const Form = ({ formValues, handleInputChange, goToPage }) => {
  const { name, email, age } = formValues;

  const isValid = name.trim() !== '' && email.trim() !== '' && age.trim() !== '';

  const handleNextClick = () => {
    if (isValid) {
      goToPage('thanks');
    }
  };

  return (
    <div>
      <h1>Sign Up Information Form</h1>
      <h4>Please enter your info below...</h4>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Your Age"
          value={age}
          onChange={handleInputChange}
        />
      </form>
      <div>
        <button onClick={() => goToPage('home')}>Back</button>
        <button disabled={!isValid} onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Form;
