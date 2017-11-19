import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
  const { name, age, children, click, change, classes } = props;
  return (
    <div className={classes}>
      <p>I'm <strong>{name}</strong> and I <strong>{age}</strong> years old!</p>
      <p>{children}</p>
      <p><input onChange={change} value={name} /></p>
      <button onClick={click}>Remove this item</button>
    </div>
  );
}

export default Radium(person);
