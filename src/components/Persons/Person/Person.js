import React from 'react';
import classes from './Person.css';

const person = (props) => {
  const { name, age, children, click, change, cssClasses } = props;

  return <div className={`${cssClasses} ${classes.Person} ${classes.purple} ${classes.upper}`}>
      <p>
        I'm <strong>{name}</strong> and I <strong>{age}</strong> years old!
      </p>
      <p>{children}</p>
      <p>
        <input onChange={change} value={name} />
      </p>
      <button onClick={click}>Remove this item</button>
    </div>;
}

export default person;
