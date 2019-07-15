import React, { PureComponent } from 'react';
import Person from './Person'

class Persons extends PureComponent{

//     state ={

//     }

//  static getDerivedStateFromProps(props, state){
//      console.log('[Persons.js]getDerivedStateFromProps');
//      return state;
//  }


 getSnapshotBeforeUpdate(prevProps, prevState){
     console.log('[Persons.js] getSnapshotBeforeUpdate');
     return {message: 'Snapshot'};
 }

 componentDidUpdate(prevProps, prevState, Snapshot){
     console.log('[Persons.js]componentDidUpdate');
     console.log('snapshot', Snapshot);
 }


    render(){
        console.log('[Persons.js]rendering');
        return this.props.persons.map((person, index) =>{
          return (  <Person
              key={person.id}
              click={()=>this.props.clicked(index)}
              name={person.name}
              age={person.age}
              changed={(event)=>this.props.changed(event, person.id)}
              />
              )
          });
    }
    }
    


export default Persons
