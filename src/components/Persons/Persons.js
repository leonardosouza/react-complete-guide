import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      '[Update Persons.js] Inside componentWillReceiveProps()',
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[Update Persons.js] Inside shouldComponentUpdate()',
      nextProps,
      nextState
    );
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate() {
    console.log('[Update Persons.js] Inside componentWillUpdate()');
  }

  componentDidUpdate() {
    console.log('[Update Persons.js] Inside componentDidUpdate()');
  }

  render() {
    return this.props.persons.map((person, index) => {
      console.log('[Persons.js] Inside render()');
      return (
        <Person
          position={index}
          key={person.id}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          clicked={() => this.props.clicked(index)}
        >
          <img src={person.pic} alt={person.name} />
        </Person>
      );
    });
  }
}

export default Persons;
