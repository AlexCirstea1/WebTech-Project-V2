import React, { useState } from 'react';
import './Components.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function LoginForm() {
  const [codeActivity, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    history.push(`/activity/${codeActivity}`);
    setIsSubmitting(false);
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>
          Code:
          <input type="text" value={codeActivity} onChange={(e) => setCode(e.target.value)} />
        </label>
        <br />
        <br />
          <button type="submit" disabled={isSubmitting}>
            Join Activity
          </button>
      </form>

  );
}

export default LoginForm;
