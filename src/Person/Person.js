import React from 'react';
import './Person.css';

const person = (props) => {
  const { name, age, children, click, change } = props;
  return (
    <div className="Person">
      <p onClick={click}>
        I'm a <strong>{name}</strong> and I <strong>{age}</strong> years old!
      </p>
      <p>{children}</p>
      <p><input onChange={change} value={name} /></p>
    </div>
  );
}

export default person;
