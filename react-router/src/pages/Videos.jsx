import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Videos() {
  const navigate = useNavigate();

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  return (
    <>
      <h2>Videos</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type='text'
          id='searchVideo'
          value={text}
          placeholder='Enter video id...'
        />
        <button type='submit'>search</button>
      </form>
    </>
  );
}
