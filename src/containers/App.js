import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import React, { PureComponent } from 'react';
import classes from './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  componentWillUpdate() {
    console.log('[Update App.js] Inside componentWillUpdate()');
  }

  componentDidUpdate() {
    console.log('[Update App.js] Inside componentDidUpdate()');
  }

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
    toggleClicked: 0
  };

  togglePersonsHandler = () => {
    this.setState( (prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
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
    console.log('[App.js] Inside render()');
    return (
      <Aux>
        <button onClick={() => {this.setState({ showPersons: true })}}>Show All Names</button>

        {/* in example below, `props.title` should use `this` why is a stateful component */}
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          appTitle={this.props.title}
        />

        {this.state.showPersons ? (
          <Persons
            persons={this.state.persons}
            changed={this.nameChangeHandler}
            clicked={this.deletePersonHandler}
            classes={classes}
          />
        ) : null}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
