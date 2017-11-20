import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if(this.props.position === 0) this.inputElem.focus();
  }

  render() {
    console.log('[Person.js] Inside render()');

    const { name, age, children, clicked, changed } = this.props;

    return (
      <Aux>
        <p>
          I'm <strong>{name}</strong> and I <strong>{age}</strong> years old!
        </p>
        <p>{children}</p>
        <p>
          <input onChange={changed} value={name} ref={ (elem) => {this.inputElem = elem} } />
        </p>
        <button onClick={clicked}>Remove this item</button>
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked: PropTypes.func,
  changed: PropTypes.func,
};

export default withClass(
  Person,
  `${classes.Person} ${classes.Greenyellow}`
);
