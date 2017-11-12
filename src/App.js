import Person from './Person/Person';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Barbara', age: 9, pic: 'http://www.lorempixel.com.br/100/100/1' },
      { name: 'Davi', age: 3, pic: 'http://www.lorempixel.com.br/100/100/2' },
      { name: 'Caio', age: 17, pic: 'http://www.lorempixel.com.br/100/100/3' }
    ]
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

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Babiiiii')}>
          <img src={this.state.persons[0].pic} alt={this.state.persons[0].name} />
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={() => this.switchNameHandler('Daviiiiii')}>
          My hobbies: toys
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler}>
          My hobbies: video-games
        </Person>
      </div>
    );
  }
}

export default App;
