import Person from './Person/Person';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Barbara', age: 9, pic: 'http://www.lorempixel.com.br/100/100/?1' },
      { id: 2, name: 'Davi', age: 3, pic: 'http://www.lorempixel.com.br/100/100/?2' },
      { id: 3, name: 'Caio', age: 17, pic: 'http://www.lorempixel.com.br/100/100/?3' }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons : !doesShow })
  }

  render() {
    let style = {
      button : {
        border: '2px solid',
        background: 'yellow',
        cursor: 'pointer',
        marginTop: '20px'
      }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} key={person.id} change={() => {}}>
                <img src={person.pic} alt={person.name} />
              </Person>;
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler} style={style.button}>Toggle Names</button>
        {persons}
      </div>
    );
  }
}

export default App;
