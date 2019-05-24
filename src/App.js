import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons:[
      {name: "max", age:30}
    ]
  }
  switchNameHandler = (newName)=>{
    this.setState({
      persons:[
        {name: newName, age:27}
      ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1> hi . i'm react app </h1>
       <button onClick={()=>this.switchNameHandler('maximillian')}>Switch Name</button>
       <Person 
       name={this.state.persons[0].name}  
       age={this.state.persons[0].age}
       click={this.switchNameHandler.bind(this,'marwa')}>my Hobbies: racing</Person>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hi . i\'m react app '));
  }
}

export default App;