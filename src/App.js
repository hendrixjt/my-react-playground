import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really Working!</p>
       <Person name="Joshua" age="35" />
       <Person name= "Eden" age="25" >My Hobbies: Basketball</Person>
       <Person name="AT" age="29" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
