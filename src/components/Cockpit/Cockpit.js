import Aux from '../../hoc/Aux';
import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const btnClass = [classes.Button];
  if (props.showPersons) btnClass.push(classes.Red);

  return <Aux>
      {/* in example below, `props.appTitle` don't use `this` why is a stateless component */}
      <h1>{props.appTitle}</h1>
      <button onClick={() => props.clicked()} className={btnClass}>
        Toggle Names
      </button>
    </Aux>;
};

export default cockpit;
