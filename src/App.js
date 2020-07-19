import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './User/userInput';
import UserOutput from './User/userOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    stateUserName: 'state_admin'
  };

  switchNameHandler = (newNaam) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Sheersho', age: 28 },
        { name: newNaam, age: 29 },
        { name: 'Shivam', age:23}
      ]
    });
  };

  nameBindHandler = (event) => {

    this.setState({
    persons: [
      {name:event.target.value,age:23},
      {name:'Avi',age:43},
      {name:'Rujhan',age:13}
    
    ]
  });
  }

  userNameHandler = (event) => {

    this.setState({
       
      stateUserName: event.target.value

    });


  }

  render() {

    const sheershoStyle = {

        backgroundColor: 'blue',
        color:'white'
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={sheershoStyle} onClick={() => this.switchNameHandler('Ketan')}>Switch Name</button>
        <Person
          targetName={this.nameBindHandler}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
        
        </Person>
        <Person
          newFunClicker= {this.switchNameHandler}
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <UserInput userValue={this.state.stateUserName} userNameProp= {this.userNameHandler}></UserInput>
        <UserOutput username={this.state.stateUserName}></UserOutput>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
