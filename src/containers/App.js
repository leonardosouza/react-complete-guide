import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import React, { Component } from 'react';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Barbara',
        age: 9,
        pic: 'http://placeholder.pics/svg/100x100/DEDEDE/555555/barbara',
      },
      {
        id: 2,
        name: 'Davi',
        age: 3,
        pic: 'http://placeholder.pics/svg/100x100/DEDEDE/555555/davi',
      },
      {
        id: 3,
        name: 'Caio',
        age: 17,
        pic: 'http://placeholder.pics/svg/100x100/DEDEDE/555555/caio',
      },
      {
        id: 4,
        name: 'Luan',
        age: 20,
        pic: 'http://placeholder.pics/svg/100x100/DEDEDE/555555/luan',
      },
    ],
    showPersons: false,
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]; // is the same with: this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    // array destructuring assigment for person list:
    const persons = [...this.state.persons];

    // get current person. You can use Object.assing({}, this.state.persons[personIndex]) or object destructuring assigment:
    const person = {
      ...this.state.persons[personIndex],
    };

    // update the property name
    person.name = event.target.value;

    // update the list
    persons[personIndex] = person;

    // set new state
    this.setState({ persons });
  };

  render() {
    return <div className={classes.App}>
        {/* in example below, `props.title` should use `this` why is a stateful component */}
        <Cockpit clicked={this.togglePersonsHandler} appTitle={this.props.title} />

        {
          this.state.showPersons ?
          <Persons
            persons={this.state.persons}
            changed={this.nameChangeHandler}
            clicked={this.deletePersonHandler}
            classes={classes} /> : null
        }
      </div>;
  }
}

export default App;
