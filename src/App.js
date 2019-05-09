import React from 'react';
import './App.css';
import Person from './Person/Person'

const App = (props) => {
 
  const [ personState, setPersonsState ] = React.useState(
  {persons : [
    {name: 'Harald', age: 45},
    {name: 'Sony', age: 35 },
    {name: 'Sven', age: 44}
  ]})

  const switchEventHandler = () =>{
    setPersonsState({ 
      persons : [
        {name: 'Gustav', age: 12},
        {name: 'Lenny', age: 35 },
        {name: 'Bruce', age: 53},
      ]
      })
  }

    return (
    <div className="App">
    <button onClick={switchEventHandler}>Switch name</button>
    <Person name={personState.persons[0].name} age={personState.persons[0].age} />
    <Person name= {personState.persons[1].name} age={personState.persons[1].age}>He loves to sing</Person>
    <Person name={personState.persons[2].name} age={personState.persons[2].age}/>

    </div>
  )}


export default App;
