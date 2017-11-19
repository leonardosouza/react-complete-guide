import Person from './Person/Person';
import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Barbara',
        age: 9,
        pic: 'http://www.lorempixel.com.br/100/100/?1',
      },
      {
        id: 2,
        name: 'Davi',
        age: 3,
        pic: 'http://www.lorempixel.com.br/100/100/?2',
      },
      {
        id: 3,
        name: 'Caio',
        age: 17,
        pic: 'http://www.lorempixel.com.br/100/100/?3',
      },
      {
        id: 4,
        name: 'Luan',
        age: 20,
        pic: 'http://www.lorempixel.com.br/100/100/?4',
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
    let style = {
      button: {
        border: '2px solid',
        background: 'aquamarine',
        cursor: 'pointer',
        marginTop: '20px',
        outline: 'none',
        ':hover': {
          background: 'greenyellow'
        }
      },
    };

    let classes = ['Person', 'upper', 'purple'];

    if(this.state.persons.length > 2) {
      classes.push('greenyellow');
    }

    if (this.state.persons.length <= 2) {
      classes.push('darkorange');
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                change={event => this.nameChangeHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
                classes={classes.join(' ')}
              >
                <img src={person.pic} alt={person.name} />
              </Person>
            );
          })}
        </div>
      );

      style.button.background = 'burlywood';
      style.button[':hover'] = {
        background: 'magenta',
        color: 'white',
        borderColor: 'black'
      }
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler} style={style.button}>
          Toggle Names
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
