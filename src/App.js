import React from 'react';
import './App.css';
import Person from './Person/Person'
import uuid from 'uuid/v1';


class App  extends React.Component{
 
  state = {persons : [
    {id: 1, name: 'Harald', age: 45},
    {id: 2, name: 'Sony', age: 35 },
    {id: 3, name: 'Sven', age: 44}
  ]
};

  switchEventHandler = (myName) =>{
    this.setState({ 
      persons : [
        {name: 'Gustav', age: 12},
        {name: 'Lenny', age: 35 },
        {name: myName, age: 53},
      ],
      otherState: 'some other value', 
      showPersons: false
      })
  }

  detelePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //Update state in an immutable fashion
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

        //Alternative const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  outPutHandler(){

  }

  render(){

    const style = {
      background: 'green',
      color: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      boxShadow: '0 2px 3px #ccc'
    }

    let persons = null;

    if(this.state.showPersons === true){
      persons = 
      <div>
        {this.state.persons.map((person, index) =>
          <Person
            key={person.id}
            click={() => this.detelePersonHandler(index)}
            name={person.name}
            age={person.age}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />)}
     </div> 
      style.background = 'red';
    }

    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
    <div className="App">
      <p className={classes.join(' ')}>This is really working!</p>
    <button style={style}
     onClick={this.togglePersonsHandler}>Toggle persons</button>
     {persons}
    </div>
  )}
  }


export default App;
