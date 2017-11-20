import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = classes.Red;

  return <div className={classes.Cockpit}>
      <h1>Hi! I'm React App</h1>
      <button onClick={() => props.clicked()} className={btnClass}>
        Toggle Names
      </button>
    </div>;
};

export default cockpit;
