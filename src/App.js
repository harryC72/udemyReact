import React from 'react';
import './App.css';
import Person from './Person/Person'

class App  extends React.Component{
 
  state = {persons : [
    {name: 'Harald', age: 45},
    {name: 'Sony', age: 35 },
    {name: 'Sven', age: 44}
  ]};

  switchEventHandler = () =>{
    this.setState({ 
      persons : [
        {name: 'Gustav', age: 12},
        {name: 'Lenny', age: 35 },
        {name: 'Bruce', age: 53},
      ]
      })
  }

  render(){
    return (
    <div className="App">
    <button onClick={this.switchEventHandler}>Switch name</button>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
    <Person name= {this.state.persons[1].name} age={this.state.persons[1].age}>He loves to sing</Person>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  )}
  }


export default App;
