import React, { useState } from 'react';

function RegisterForm() {
  const [nameActivity, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [codeActivity, setCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a request to the server with the registration information
    // Check if the password and confirmPassword match
    // If match, send a post request to the server with the form data
    // Else show an error message
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={nameActivity} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Code:
        <input type="text" value={codeActivity} onChange={(e) => setCode(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="submit">Create Activity</button>
    </form>
  );
}

export default RegisterForm;
