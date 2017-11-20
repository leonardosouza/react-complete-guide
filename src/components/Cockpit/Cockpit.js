import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = classes.Red;

  return <div className={classes.Cockpit}>
      {/* in example below, `props.appTitle` don't use `this` why is a stateless component */}
      <h1>{props.appTitle}</h1>
      <button onClick={() => props.clicked()} className={btnClass}>
        Toggle Names
      </button>
    </div>;
};

export default cockpit;
