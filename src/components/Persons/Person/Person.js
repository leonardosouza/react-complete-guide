import WithClass from '../../../hoc/WithClass';
import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.warn('[Person.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.warn('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.warn('[Person.js] Inside componentDidMount()');
  }

  render() {
    console.warn('[Person.js] Inside render()');

    const { name, age, children, clicked, changed, cssClasses } = this.props;

    return (
      <WithClass classes={`${cssClasses} ${classes.upper} ${classes.Person}`}>
        <p>
          I'm <strong>{name}</strong> and I <strong>{age}</strong> years old!
        </p>
        <p>{children}</p>
        <p>
          <input onChange={changed} value={name} />
        </p>
        <button onClick={clicked}>Remove this item</button>
      </WithClass>
    );
  }
}

export default Person;
