import React from 'react';
import classes from './Person.css';

const person = (props) => {
  const { name, age, children, clicked, changed, cssClasses } = props; 

  return <div className={`${cssClasses} ${classes.upper} ${classes.Person}`}>
      <p>
        I'm <strong>{name}</strong> and I <strong>{age}</strong> years old!
      </p>
      <p>{children}</p>
      <p>
        <input onChange={changed} value={name} />
      </p>
      <button onClick={clicked}>Remove this item</button>
    </div>;
}

export default person;
