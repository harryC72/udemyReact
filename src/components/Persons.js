import React, { Component } from 'react';
import Person from './Person'

class Persons extends Component{

//     state ={

//     }

//  static getDerivedStateFromProps(props, state){
//      console.log('[Persons.js]getDerivedStateFromProps');
//      return state;
//  }

 shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js]shouldComponentUpdate'); 
    if(nextProps.persons !== this.props.persons){
        return true;
    }else{
        return false;
    }
 //Has to return true or false depending on the condition
 }

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
