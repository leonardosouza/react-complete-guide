import React from 'react';
import Person from './Person/Person';
import classes from './Persons.css';

const persons = props => {
  let cssClasses = [];
  cssClasses.push(props.persons.length > 2 ? classes.greenyellow : classes.darkorange);
  
  return props.persons.map((person, index) => {
    return <Person
      key={person.id}
      name={person.name}
      age={person.age}
      changed={(event) => props.changed(event, person.id)}
      clicked={() => props.clicked(index)}
      cssClasses={cssClasses.join(' ')}
    >
      <img src={person.pic} alt={person.name} />
    </Person>
  })

};

export default persons;
