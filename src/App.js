import React from 'react';
import './App.css';
import Person from './Person/Person'

class App  extends React.Component{
 
  state = {persons : [
    {name: 'Harald', age: 45},
    {name: 'Sony', age: 35 },
    {name: 'Sven', age: 44}
  ]
};

  switchEventHandler = (myName) =>{
    this.setState({ 
      persons : [
        {name: 'Gustav', age: 12},
        {name: 'Lenny', age: 35 },
        {name: myName, age: 53},
      ]
      })
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons : [
        {name: 'Gustav', age: 12},
        {name: event.target.value, age: 35 },
        {name: 'Sven', age: 53},
      ]
      })

  }

  render(){

    const style = {
      background: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: '0 2px 3px #ccc'
    }

    return (
    <div className="App">
    <button style={style}
     onClick={this.switchEventHandler.bind(this,'Samuel')}>Switch name</button>
    <Person name={this.state.persons[0].name}
     age={this.state.persons[0].age} />
    <Person
     click={this.switchEventHandler.bind(this,'Jack')}
      name= {this.state.persons[1].name}
       age={this.state.persons[1].age}
       changed={this.nameChangedHandler}
       >He loves to sing</Person>
    <Person click={this.switchEventHandler.bind(this,"Max!!")}
     name={this.state.persons[2].name}
      age={this.state.persons[2].age}/>
    </div>
  )}
  }


export default App;
