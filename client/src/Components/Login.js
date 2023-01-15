import React, { useState } from 'react';

function LoginForm() {
  const [codeActivity, setCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a request to the server with the username and password
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Code:
        <input type="text" value={codeActivity} onChange={(e) => setCode(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="submit">Join Activity</button>
    </form>
  );
}

export default LoginForm;
