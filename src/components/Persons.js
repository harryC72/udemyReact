import React from 'react';
import Person from './Person'

const Persons = ({persons, clicked, changed}) =>
 {
     console.log('[Persons.js]rendering');
    return persons.map((person, index) =>{
      return (  <Person
          key={person.id}
          click={()=>clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event)=>changed(event, person.id)}
          />
          )
      });
    }
    


export default Persons
