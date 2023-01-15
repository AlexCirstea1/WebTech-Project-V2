import React, { useState } from 'react';
import { createActivity } from '../api';
import './Components.css';

function RegisterForm() {
  const [nameActivity, setName] = useState('');
  const [date, setDate] = useState('');
  const [edate, seteDate] = useState('');
  const [description, setDescription] = useState('');
  const [codeActivity, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await createActivity({ name: nameActivity, startDate: date, endDate: edate, description: description, code: codeActivity });
      setName("");
      setDate("");
      seteDate("");
      setDescription("");
      setCode("");
      document.getElementById("finished").innerHTML = "Activity created successfully";
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={nameActivity} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Start Time:
        <input type="time" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <label>
        End Time:
        <input type="time" value={edate} onChange={(e) => seteDate(e.target.value)} />
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
      <button type="submit" disabled={isSubmitting}>
        Create Activity
        </button>
        <label id="finished" class="created"></label>
    </form>
  );
}

export default RegisterForm;
