import React, { useState } from 'react';
import Values from 'values.js';
const Form = ({ addColor }) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className='container'>
      <form className='color-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Color generator</label>
        <input
          type='color'
          name='color'
          id='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          name='colorHex'
          id='colorHex'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
