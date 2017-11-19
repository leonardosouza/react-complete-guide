import Person from './Person/Person';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Barbara', age: 9, pic: 'http://www.lorempixel.com.br/100/100/1' },
      { name: 'Davi', age: 3, pic: 'http://www.lorempixel.com.br/100/100/2' },
      { name: 'Caio', age: 17, pic: 'http://www.lorempixel.com.br/100/100/3' }
    ],
    showPersons: false
  }

  switchNameHandler = (...args) => {
    let name = typeof args[0] === 'string' ? args[0] : 'Person';
    this.setState({
      persons: [
        { name, age: 10, pic: 'http://www.lorempixel.com.br/100/100/1' },
        { name, age: 4, pic: 'http://www.lorempixel.com.br/100/100/2' },
        { name, age: 18, pic: 'http://www.lorempixel.com.br/100/100/3' }
      ]
    })
  }

  nameChangeHandler = (event, ...args) => {
    let name = typeof args[0] === 'string' ? args[0] : 'Person';
    this.setState({
      persons: [
        { name, age: 10, pic: 'http://www.lorempixel.com.br/100/100/1' },
        { name, age: 4, pic: 'http://www.lorempixel.com.br/100/100/2' },
        { name: event.target.value, age: 18, pic: 'http://www.lorempixel.com.br/100/100/3' }
      ]
    })
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
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Babiiiii')} change={this.nameChangeHandler}>
            <img src={this.state.persons[0].pic} alt={this.state.persons[0].name} />
          </Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={() => this.switchNameHandler('Daviiiiii')} change={this.nameChangeHandler}>
            My hobbies: toys
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler} change={this.nameChangeHandler}>
            My hobbies: video-games
          </Person>
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
