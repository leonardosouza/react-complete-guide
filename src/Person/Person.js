import React from 'react';
import './Person.css';

const person = (props) => {
  const { name, age, children, click, change } = props;
  return (
    <div className="Person">
      <p>I'm <strong>{name}</strong> and I <strong>{age}</strong> years old!</p>
      <p>{children}</p>
      <p><input onChange={change} value={name} /></p>
      <button onClick={click}>Remove this item</button>
    </div>
  );
}

export default person;
