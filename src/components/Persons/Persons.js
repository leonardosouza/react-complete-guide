import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './Persons.css';

class Persons extends Component {
  render () {
    let cssClasses = [];
    cssClasses.push(this.props.persons.length > 2 ? classes.greenyellow : classes.darkorange);
  
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
        clicked={() => this.props.clicked(index)}
        cssClasses={cssClasses.join(' ')}
      >
        <img src={person.pic} alt={person.name} />
      </Person>
    })
  }
}

export default Persons;
